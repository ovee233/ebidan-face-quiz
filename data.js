const members = [
    // 超特急
    { name: "カイ", group: "chotokkyu", image: "images/chotokkyuu/カイ.jpg" },
    { name: "リョウガ", group: "chotokkyu", image: "images/chotokkyuu/リョウガ.jpg" },
    { name: "タクヤ", group: "chotokkyu", image: "images/chotokkyuu/タクヤ.jpg" },
    { name: "ユーキ", group: "chotokkyu", image: "images/chotokkyuu/ユーキ.jpg" },
    { name: "タカシ", group: "chotokkyu", image: "images/chotokkyuu/タカシ.jpg" },
    { name: "シューヤ", group: "chotokkyu", image: "images/chotokkyuu/シューヤ.jpg" },
    { name: "マサヒロ", group: "chotokkyu", image: "images/chotokkyuu/マサヒロ.jpg" },
    { name: "アロハ", group: "chotokkyu", image: "images/chotokkyuu/アロハ.jpg" },
    { name: "ハル", group: "chotokkyu", image: "images/chotokkyuu/ハル.jpg" },

    // M!LK
    { name: "佐野勇斗", group: "milk", image: "images/milk/佐野勇斗.jpeg" },
    { name: "塩﨑太智", group: "milk", image: "images/milk/塩﨑太智.jpeg" },
    { name: "曽野舜太", group: "milk", image: "images/milk/曽野舜太.jpeg" },
    { name: "山中柔太朗", group: "milk", image: "images/milk/山中柔太朗.jpeg" },
    { name: "吉田仁人", group: "milk", image: "images/milk/吉田仁人.jpeg" },

    // SUPER★DRAGON
    { name: "志村玲於", group: "superdragon", image: "images/su-pa-doragonn/志村玲於.jpg" },
    { name: "古川毅", group: "superdragon", image: "images/su-pa-doragonn/古川毅.jpg" },
    { name: "ジャン海渡", group: "superdragon", image: "images/su-pa-doragonn/ジャン海渡.jpg" },
    { name: "飯島颯", group: "superdragon", image: "images/su-pa-doragonn/飯島颯.jpg" },
    { name: "伊藤壮吾", group: "superdragon", image: "images/su-pa-doragonn/伊藤壮吾.jpg" },
    { name: "田中洸希", group: "superdragon", image: "images/su-pa-doragonn/田中洸希.jpg" },
    { name: "池田彪馬", group: "superdragon", image: "images/su-pa-doragonn/池田彪馬.jpg" },
    { name: "松村和哉", group: "superdragon", image: "images/su-pa-doragonn/松村和哉.jpg" },
    { name: "柴崎楽", group: "superdragon", image: "images/su-pa-doragonn/柴崎楽.jpg" },

    // Sakurashimeji
    { name: "田中雅功", group: "sakurashimeji", image: "images/sakurasimeji/田中雅功.jpg" },
    { name: "髙田彪我", group: "sakurashimeji", image: "images/sakurasimeji/髙田彪我.jpg" },

    // ONE N' ONLY
    { name: "TETTA", group: "oneonly", image: "images/wannennonnri-/TETTA.jpg" },
    { name: "REI", group: "oneonly", image: "images/wannennonnri-/REI.jpg" },
    { name: "EIKU", group: "oneonly", image: "images/wannennonnri-/EIKU.jpg" },
    { name: "HAYATO", group: "oneonly", image: "images/wannennonnri-/HAYATO.jpg" },
    { name: "NAOYA", group: "oneonly", image: "images/wannennonnri-/NAOYA.jpg" },

    // 原因は自分にある。
    { name: "大倉空人", group: "genjibu", image: "images/genninnhazibunnniaru/大倉空人.jpg" },
    { name: "小泉光咲", group: "genjibu", image: "images/genninnhazibunnniaru/小泉光咲.jpg" },
    { name: "桜木雅哉", group: "genjibu", image: "images/genninnhazibunnniaru/桜木雅哉.jpg" },
    { name: "長野凌大", group: "genjibu", image: "images/genninnhazibunnniaru/長野凌大.jpg" },
    { name: "武藤潤", group: "genjibu", image: "images/genninnhazibunnniaru/武藤潤.jpg" },
    { name: "杢代和人", group: "genjibu", image: "images/genninnhazibunnniaru/杢代和人.jpg" },
    { name: "吉澤要人", group: "genjibu", image: "images/genninnhazibunnniaru/吉澤要人.jpg" },

    // BUDDiiS
    { name: "FUMINORI", group: "buddiis", image: "images/badhi-zu/FUMINORI.jpg" },
    { name: "KEVIN", group: "buddiis", image: "images/badhi-zu/KEVIN.jpg" },
    { name: "MORRIE", group: "buddiis", image: "images/badhi-zu/MORRIE.jpg" },
    { name: "SEIYA", group: "buddiis", image: "images/badhi-zu/SEIYA.jpg" },
    { name: "YUMA", group: "buddiis", image: "images/badhi-zu/YUMA.jpg" },
    { name: "SHOW", group: "buddiis", image: "images/badhi-zu/SHOW.jpg" },
    { name: "TAKUYA", group: "buddiis", image: "images/badhi-zu/TAKUYA.jpg" },
    { name: "FUMIYA", group: "buddiis", image: "images/badhi-zu/FUMIYA.jpg" },
    { name: "SHOOT", group: "buddiis", image: "images/badhi-zu/SHOOT.jpg" },

    // ICEx
    { name: "志賀李玖", group: "icex", image: "images/aisu/志賀李玖.jpg" },
    { name: "阿久根温世", group: "icex", image: "images/aisu/阿久根温世.jpg" },
    { name: "千田波空斗", group: "icex", image: "images/aisu/千田波空斗.jpg" },
    { name: "筒井俊旭", group: "icex", image: "images/aisu/筒井俊旭.jpg" },
    { name: "山本龍人", group: "icex", image: "images/aisu/山本龍人.jpg" },
    { name: "竹野世梛", group: "icex", image: "images/aisu/竹野世梛.jpg" },
    { name: "八神遼介", group: "icex", image: "images/aisu/八神遼介.jpg" },
    { name: "中村旺太郎", group: "icex", image: "images/aisu/中村旺太郎.jpg" },

    // Lienel
    { name: "芳賀柊斗", group: "lienel", image: "images/rieneru/芳賀柊斗.jpeg" },
    { name: "近藤駿太", group: "lienel", image: "images/rieneru/近藤駿太_main.jpeg" },
    { name: "高岡ミロ", group: "lienel", image: "images/rieneru/高岡ミロ_main.jpeg" },
    { name: "森田璃空", group: "lienel", image: "images/rieneru/森田璃空_main.jpeg" },
    { name: "武田創世", group: "lienel", image: "images/rieneru/武田創世_main.jpeg" },
    { name: "高桑真之", group: "lienel", image: "images/rieneru/高桑真之.jpg" }
];