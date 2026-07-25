// 画面
const homeScreen = document.getElementById("homeScreen");
const modeScreen = document.getElementById("modeScreen");
const countScreen = document.getElementById("countScreen");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");

// ボタン
const startBtn = document.getElementById("startBtn");
const backModeBtn = document.getElementById("backModeBtn");
const retryBtn = document.getElementById("retryBtn");
const reviewBtn = document.getElementById("reviewBtn");
const modeButtons = document.querySelectorAll(".modeBtn");
const countButtons = document.querySelectorAll(".countBtn");

// クイズ表示
const quizImage = document.getElementById("quizImage");
const choices = document.getElementById("choices");
const currentQuestionText = document.getElementById("currentQuestion");
const totalQuestionText = document.getElementById("totalQuestion");
const resultText = document.getElementById("resultText");

// 効果音
const correctSound = new Audio("sounds/correct.mp3");
const wrongSound = new Audio("sounds/wrong.mp3");

// BGM
const bgm = new Audio("sounds/bgm.mp3");
bgm.loop = true;
bgm.volume = 0.3;

// 状態
let selectedMode = "all";
let requestedCount = 10;
let quizMembers = [];
let currentIndex = 0;
let score = 0;
let answering = false;
let wrongMembers = [];

// 配列をランダムに並べ替える
function shuffle(array) {
    const copied = [...array];

    for (let i = copied.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));

        [copied[i], copied[randomIndex]] =
            [copied[randomIndex], copied[i]];
    }

    return copied;
}

// 画面を1つだけ表示
function showScreen(targetScreen) {
    const screens = [
        homeScreen,
        modeScreen,
        countScreen,
        quizScreen,
        resultScreen
    ];

    screens.forEach(screen => {
        screen.classList.add("hidden");
    });

    targetScreen.classList.remove("hidden");
}

// START
startBtn.addEventListener("click", () => {

    bgm.play().catch(error => {
        console.log(error);
    });

    showScreen(modeScreen);
});

// モード選択
modeButtons.forEach(button => {
    button.addEventListener("click", () => {
        selectedMode = button.dataset.mode;
        showScreen(countScreen);
    });
});

// モード選択へ戻る
backModeBtn.addEventListener("click", () => {
    showScreen(modeScreen);
});

// 問題数選択
countButtons.forEach(button => {
    button.addEventListener("click", () => {
        requestedCount =
            button.dataset.count === "all"
                ? "all"
                : Number(button.dataset.count);

        startQuiz();
    });
});

// 通常クイズ開始
function startQuiz() {
    const availableMembers =
        selectedMode === "all"
            ? [...members]
            : members.filter(member => member.group === selectedMode);

    if (availableMembers.length < 4) {
        alert("このグループは4択を作るための人数が足りません。");
        return;
    }

    const shuffledMembers = shuffle(availableMembers);

    const finalCount =
        requestedCount === "all"
            ? shuffledMembers.length
            : Math.min(requestedCount, shuffledMembers.length);

    quizMembers = shuffledMembers.slice(0, finalCount);

    currentIndex = 0;
    score = 0;
    wrongMembers = [];

    totalQuestionText.textContent = quizMembers.length;

    showScreen(quizScreen);
    showQuestion();
}

// 復習クイズ開始
function startReviewQuiz() {
    if (wrongMembers.length === 0) {
        return;
    }

    quizMembers = shuffle(wrongMembers);
    currentIndex = 0;
    score = 0;

    totalQuestionText.textContent = quizMembers.length;

    showScreen(quizScreen);
    showQuestion();
}

// 問題を表示
function showQuestion() {
    answering = false;
    choices.innerHTML = "";

    const correctMember = quizMembers[currentIndex];

    currentQuestionText.textContent = currentIndex + 1;
    quizImage.src = correctMember.image;
    quizImage.alt = correctMember.name;

    quizImage.onerror = () => {
        quizImage.alt = "画像を読み込めませんでした";
        console.error("画像が見つかりません:", correctMember.image);
    };

    const sameGroupMembers = members.filter(
        member =>
            member.group === correctMember.group &&
            member.name !== correctMember.name
    );

    const wrongChoices = shuffle(sameGroupMembers).slice(0, 3);
    const answerChoices = shuffle([correctMember, ...wrongChoices]);

    answerChoices.forEach(member => {
        const button = document.createElement("button");

        button.textContent = member.name;
        button.className = "choiceBtn";

        button.addEventListener("click", () => {
            checkAnswer(button, member, correctMember);
        });

        choices.appendChild(button);
    });
}
// 正解判定
function checkAnswer(clickedButton, selectedMember, correctMember) {
    if (answering) {
        return;
    }

    answering = true;

    const choiceButtons = document.querySelectorAll(".choiceBtn");

    choiceButtons.forEach(button => {
        button.disabled = true;

        if (button.textContent === correctMember.name) {
            button.classList.add("correct");
        }
    });

    if (selectedMember.name === correctMember.name) {
        score++;

        correctSound.currentTime = 0;
        correctSound.play().catch(error => {
            console.log("正解音を再生できませんでした:", error);
        });

    } else {
        clickedButton.classList.add("wrong");

        wrongSound.currentTime = 0;
        wrongSound.play().catch(error => {
            console.log("不正解音を再生できませんでした:", error);
        });

        const alreadyAdded = wrongMembers.some(
            member =>
                member.name === correctMember.name &&
                member.group === correctMember.group
        );

        if (!alreadyAdded) {
            wrongMembers.push(correctMember);
        }
    }

    setTimeout(() => {
        currentIndex++;

        if (currentIndex < quizMembers.length) {
            showQuestion();
        } else {
            showResult();
        }
    }, 1000);
}

// 結果表示
function showResult() {
    const percentage = Math.round(
        (score / quizMembers.length) * 100
    );

    let rank = "";

    if (percentage === 100) {
        rank = "👑 EBiDAN MASTER";
    } else if (percentage >= 90) {
        rank = "🌟 推し活のプロ";
    } else if (percentage >= 70) {
        rank = "✨ EBiDANファン";
    } else if (percentage >= 50) {
        rank = "📚 修行中";
    } else {
        rank = "💪 もっと覚えよう！";
    }

    resultText.innerHTML =
        `${quizMembers.length}問中<br>` +
        `<strong>${score}問正解！</strong><br>` +
        `正答率 ${percentage}%<br><br>` +
        `<strong>${rank}</strong>`;

    if (wrongMembers.length > 0) {
        reviewBtn.classList.remove("hidden");
        reviewBtn.textContent =
            `間違えた${wrongMembers.length}人だけ復習`;
    } else {
        reviewBtn.classList.add("hidden");
    }

    showScreen(resultScreen);
}

// 復習
reviewBtn.addEventListener("click", () => {
    startReviewQuiz();
});

// モード選択へ戻る
retryBtn.addEventListener("click", () => {
    showScreen(modeScreen);
});