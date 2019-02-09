dataSetVersion = "2017-05-01"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Campaign",
    key: "series",
    tooltip: "Check this to restrict to certain campaigns.",
    checked: false,
    sub: [
      { name: "Camp Life", key: "camp" },
      { name: "G.A.T.E. Academy", key: "gate"}
      /*{ name: "The Highly Responsive to Prayers", tooltip: "01 - Reiiden", key: "HRtP" },
      { name: "The Story of Eastern Wonderland", tooltip: "02 - Fuumaroku", key: "SoEW" },
      { name: "Phantasmagoria of Dim.Dream", tooltip: "03 - Yumejikuu", key: "PoDD" },
      { name: "Lotus Land Story", tooltip: "04 - Gensoukyou", key: "LLS" },
      { name: "Mystic Square", tooltip: "05 - Kaikidan", key: "MS" },
      { name: "Embodiment of Scarlet Devil", tooltip: "06 - Koumakan", key: "EoSD" },
      { name: "Perfect Cherry Blossom", tooltip: "07 - Youyoumu", key: "PCB" },
      { name: "Immaterial and Missing Power", tooltip: "07.5 - Suimusou", key: "IaMP" },
      { name: "Imperishable Night", tooltip: "08 - Eiyashou", key: "IN" },
      { name: "Phantasmagoria of Flower View", tooltip: "09 - Kaeidzuka", key: "PoFV" },
      { name: "Shoot the Bullet", tooltip: "09.5 - Bunkachou", key: "StB" },
      { name: "Mountain of Faith", tooltip: "10 - Fuujinroku", key: "MoF" },
      { name: "Scarlet Weather Rhapsody", tooltip: "10.5 - Hisouten", key: "SWR" },
      { name: "Subterranean Animism", tooltip: "11 - Chireiden", key: "SA" },
      { name: "Undefined Fantastic Object", tooltip: "12 - Seirensen", key: "UFO" },
      { name: "Touhou Hisoutensoku", tooltip: "12.3 - Hisoutensoku", key: "Soku" },
      { name: "Double Spoiler", tooltip: "12.5 - Bunkachou", key: "DS" },
      { name: "Great Fairy Wars", tooltip: "12.8 - Daisensou", key: "GFW" },
      { name: "Ten Desires", tooltip: "13 - Shinreibyou", key: "TD" },
      { name: "Hopeless Masquerade", tooltip: "13.5 - Shinkirou", key: "HM" },
      { name: "Double Dealing Character", tooltip: "14 - Kishinjou", key: "DDC" },
      { name: "Impossible Spell Card", tooltip: "14.3 - Amanojaku", key: "ISC" },
      { name: "Urban Legend in Limbo", tooltip: "14.5 - Shinpiroku", key: "ULiL" },
      { name: "Legacy of Lunatic Kingdom", tooltip: "15 - Kanjuden", key: "LoLK" }*/
    ]
  },
    {
    name: "Filter by Gender",
    key: "gender",
    tooltip: "Check this to restrict to certain genders.",
    checked: false,
    sub: [
      { name: "Girls", key: "f" },
      { name: "Boys", key: "m"},
      { name: "Nonbinary", key: "nb"}
    ]
  },
  {
    name: "Filter by Current Status",
    key: "status",
    tooltip: "Check this to restrict to a characters current mortality status.",
    checked: false,
    sub: [
      { name: "Survivor", key: "s" },
      { name: "Murderer", key: "m"},
      { name: "Victim", key: "v"},
      { name: "To Be Determined", key: "tbd"}
    ]
  }/*,
  {
    name: "Filter by Stage Enemy Appearances",
    key: "stage",
    tooltip: "Check this to restrict to characters that appear in certain stages as enemies.",
    checked: false,
    sub: [
      { name: "Stage 1", key: "st1" },
      { name: "Stage 2", key: "st2" },
      { name: "Stage 3", key: "st3" },
      { name: "Stage 4", key: "st4" },
      { name: "Stage 5/Penultimate", tooltip: "Stage 4 in 5-stage games, and Stage 8 in 9-stage games.", key: "st5" },
      { name: "Stage 6/Final", key: "st6" },
      { name: "Stage EX/Phantasm", key: "ex" }
    ]
  },*/
  /*{
    name: "Remove Non-Girls",
    key: "notgirl",
    tooltip: "Check this to remove all non-female characters."
  }*/
];

dataSet[dataSetVersion].characterData = [
  {
    name: "April Whitedove",
    img: "5xUo64p.png",
    opts: {
      series: ["camp"],
      gender: ["f"],
      status: ["v"]
    }
  },
    {
    name: "Rei Retasu",
    img: "Wj6VfLt.png",
    opts: {
      series: ["camp"],
      gender: ["m"],
      status: ["m"]
    }
  },
    {
    name: "Rusty",
    img: "FhgtQv2.png",
    opts: {
      series: ["camp"],
      gender: ["m"],
      status: ["v"]
    }
  },
    {
    name: "Talor Sofbell",
    img: "Iu6oJOR.png",
    opts: {
      series: ["camp"],
      gender: ["m"],
      status: ["m"]
    }
  },
    {
    name: "Yukine Kuran",
    img: "6oQASkG.png",
    opts: {
      series: ["camp"],
      gender: ["f"],
      status: ["v"]
    }
  },
    {
    name: "Nogla the Mighty",
    img: "QskGCT5.png",
    opts: {
      series: ["camp"],
      gender: ["nb"],
      status: ["v"]
    }
  },
    {
    name: "Ferdinand Clark",
    img: "iVGuMGP.png",
    opts: {
      series: ["camp"],
      gender: ["m"],
      status: ["m"]
    }
  },
    {
    name: "Tomoe Shige",
    img: "eZxUrW8.png",
    opts: {
      series: ["camp"],
      gender: ["f"],
      status: ["v"]
    }
  },
    {
    name: "Tomomi Aizawa",
    img: "ZPoTTED.png",
    opts: {
      series: ["camp"],
      gender: ["m"],
      status: ["v","m"]
    }
  },
    {
    name: "Sven Skarsgard",
    img: "ACUncVm.png",
    opts: {
      series: ["camp"],
      gender: ["m"],
      status: ["v"]
    }
  },
    {
    name: "Aya Ito",
    img: "o53bxDw.png",
    opts: {
      series: ["camp"],
      gender: ["nb"],
      status: ["m"]
    }
  },
    {
    name: "Hotaru Yang",
    img: "lofUbBz.png",
    opts: {
      series: ["camp"],
      gender: ["f"],
      status: ["v"]
    }
  },
    {
    name: "Hiroki Nanahara",
    img: "yX5D0IC.png",
    opts: {
      series: ["camp"],
      gender: ["nb"],
      status: ["s"]
    }
  },
    {
    name: "Landon Edgemont",
    img: "ouX1yrM.png",
    opts: {
      series: ["camp"],
      gender: ["m"],
      status: ["s"]
    }
  },
    {
    name: "Rosillia Eristrov",
    img: "C6ZkdRn.png",
    opts: {
      series: ["camp"],
      gender: ["f"],
      status: ["s"]
    }
  },
    {
    name: "Grell Scarda",
    img: "OK9yTLL.png",
    opts: {
      series: ["camp"],
      gender: ["m"],
      status: ["s"]
    }
  },
    {
    name: "Aurelia Deanna",
    img: "nZZzq0d.png",
    opts: {
      series: ["camp"],
      gender: ["f"],
      status: ["s"]
    }
  },
    {
    name: "Gerard Skarsgard",
    img: "oi9Y12y.png",
    opts: {
      series: ["camp"],
      gender: ["m"],
      status: ["s"]
    }
  },
    {
    name: "Christopher Beauregard",
    img: "X8wAM1M.png",
    opts: {
      series: ["camp"],
      gender: ["m"],
      status: ["s"]
    }
  },
    {
    name: "Keiichi Kiito",
    img: "YS7b77d.png",
    opts: {
      series: ["camp"],
      gender: ["m"],
      status: ["s"]
    }
  },
    {
    name: "Ruri Kobayashi",
    img: "ibqk9Qz.png",
    opts: {
      series: ["camp"],
      gender: ["f"],
      status: ["s"]
    }
  },
    {
    name: "Seishou Kensei",
    img: "1z12Yul.png",
    opts: {
      series: ["camp"],
      gender: ["m"],
      status: ["s"]
    }
  },
    {
    name: "Linette Boucher",
    img: "REfscqt.png",
    opts: {
      series: ["camp"],
      gender: ["f"],
      status: ["s"]
    }
  },
    {
    name: "Taro Mijumaru",
    img: "MwCnoYk.png",
    opts: {
      series: ["camp"],
      gender: ["m"],
      status: ["s"]
    }
  },
    //GATE
    {
    name: "Jessie Chaisavanh",
    img: "1jXbydx.png",
    opts: {
      series: ["gate"],
      gender: ["f"],
      status: ["v"]
    }
  },
    {
    name: "Kekoa Palakiko",
    img: "6j3EdTu.png",
    opts: {
      series: ["gate"],
      gender: ["f"],
      status: ["tbd"]
    }
  },
    {
    name: "Borya",
    img: "Y2f0ViC.png",
    opts: {
      series: ["gate"],
      gender: ["f"],
      status: ["tbd"]
    }
  },
    {
    name: "Mohan Laghari",
    img: "yZU7UHF.png",
    opts: {
      series: ["gate"],
      gender: ["m"],
      status: ["tbd"]
    }
  },
    {
    name: "Austin Nisei",
    img: "BmjLaGY.png",
    opts: {
      series: ["gate"],
      gender: ["m"],
      status: ["tbd"]
    }
  },
    {
    name: "Tigerlily Celestino",
    img: "aXJ5R6g.png",
    opts: {
      series: ["gate"],
      gender: ["f"],
      status: ["tbd"]
    }
  },
    {
    name: "Tucker the Trucker",
    img: "oTyIgBE.png",
    opts: {
      series: ["gate"],
      gender: ["m"],
      status: ["tbd"]
    }
  },
    {
    name: "Sven?",
    img: "9UNFXn7.png",
    opts: {
      series: ["gate"],
      gender: ["m"],
      status: ["m"]
    }
  },
    {
    name: "Randy Velvito",
    img: "SkBXugt.png",
    opts: {
      series: ["gate"],
      gender: ["m"],
      status: ["tbd"]
    }
  },
    {
    name: "Eloise Bixel",
    img: "JyWtOiz.png",
    opts: {
      series: ["gate"],
      gender: ["f"],
      status: ["tbd"]
    }
  },
    {
    name: "Sophie Glass",
    img: "KZTTSlZ.png",
    opts: {
      series: ["gate"],
      gender: ["f"],
      status: ["tbd"]
    }
  },
    {
    name: "Naguib Mustafa",
    img: "EwqMPJP.png",
    opts: {
      series: ["gate"],
      gender: ["m"],
      status: ["tbd"]
    }
  },
    {
    name: "Nadeshiko Sasaki",
    img: "sd8kaKx.png",
    opts: {
      series: ["gate"],
      gender: ["f"],
      status: ["tbd"]
    }
  },
    {
    name: "Lykke Sigurjónsdóttir",
    img: "eBxqlHf.png",
    opts: {
      series: ["gate"],
      gender: ["f"],
      status: ["tbd"]
    }
  },
    {
    name: "Tenma Terada",
    img: "MTtGt4K.png",
    opts: {
      series: ["gate"],
      gender: ["m"],
      status: ["v"]
    }
  },
    {
    name: "Truedy Talltale",
    img: "2hk9z2l.png",
    opts: {
      series: ["gate"],
      gender: ["f"],
      status: ["tbd"]
    }
  },
    {
    name: "Lisander of the Amazon",
    img: "cgXSly4.png",
    opts: {
      series: ["gate"],
      gender: ["m"],
      status: ["tbd"]
    }
  },
    {
    name: "Ishaan Varma",
    img: "NpFWHdr.png",
    opts: {
      series: ["gate"],
      gender: ["nb"],
      status: ["tbd"]
    }
  },
    {
    name: "Judge James Martin",
    img: "Vsx3y5G.png",
    opts: {
      series: ["gate"],
      gender: ["m"],
      status: ["tbd"]
    }
  },
    {
    name: "Dr. Robert Ashfield",
    img: "5xU2Ehx.png",
    opts: {
      series: ["gate"],
      gender: ["m"],
      status: ["tbd"]
    }
  },
    {
    name: "Antonio Ferrrio Montez",
    img: "9vPTNJh.png",
    opts: {
      series: ["gate"],
      gender: ["m"],
      status: ["tbd"]
    }
  },
    {
    name: "Zeke Hellstrand",
    img: "48YYks2.png",
    opts: {
      series: ["gate"],
      gender: ["m"],
      status: ["tbd"]
    }
  },
    {
    name: "Jane Doe",
    img: "1550aEl.png",
    opts: {
      series: ["gate"],
      gender: ["f"],
      status: ["tbd"]
    }
  },
    {
    name: "Sushruta Ayurveda",
    img: "FgZjG3k.png",
    opts: {
      series: ["gate"],
      gender: ["m"],
      status: ["tbd"]
    }
  },
    {
    name: "Bob Stanley",
    img: "8cqgdaq.png",
    opts: {
      series: ["gate"],
      gender: ["m"],
      status: ["tbd"]
        
    }
  },
    {
    name: "George O' Suilleabhain",
    img: "rnTHnzU.png",
    opts: {
      series: ["gate"],
      gender: ["m"],
      status: ["m"]
    }
  },
    {
    name: "Kasai Garasu",
    img: "K7wE5OV.png",
    opts: {
      series: ["gate"],
      gender: ["f"],
      status: ["tbd"]
    }
  },
    {
    name: "The Empty",
    img: "rmACk7B.png",
    opts: {
      series: ["gate"],
      gender: ["f"],
      status: ["tbd"]
    }
  },
    {
    name: "Esther",
    img: "3GFBxOv.png",
    opts: {
      series: ["gate"],
      gender: ["f"],
      status: ["tbd"]
    }
  },
    {
    name: "Kim Phuong Nguyen",
    img: "lO1NLvW.png",
    opts: {
      series: ["gate"],
      gender: ["f"],
      status: ["v"]
    }
  },
    {
    name: "Lorcan Cleary",
    img: "T7Nyfg3.png",
    opts: {
      series: ["gate"],
      gender: ["m"],
      status: ["m"]
    }
  },
    {
    name: "Robert the Basketball",
    img: "pbjTViM.png",
    opts: {
      series: ["gate"],
      gender: ["m"],
      status: ["tbd"]
    }
  }
];
