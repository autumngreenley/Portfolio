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
    name: "April Whitedove, Gardener",
    img: "2Jlt0AU.png",
    opts: {
      series: ["camp"],
      gender: ["f"],
      status: ["v"]
    }
  },
    {
    name: "Rei Retasu, Prosthetist",
    img: "5tNSLzA.png",
    opts: {
      series: ["camp"],
      gender: ["m"],
      status: ["m"]
    }
  },
    {
    name: "Rusty, Forger",
    img: "4TSkAkc.png",
    opts: {
      series: ["camp"],
      gender: ["m"],
      status: ["v"]
    }
  },
    {
    name: "Talor Sofbell, Snake Milker",
    img: "CRJoX9K.png",
    opts: {
      series: ["camp"],
      gender: ["m"],
      status: ["m"]
    }
  },
    {
    name: "Yukine Kuran, Geisha",
    img: "eJl8MLC.png",
    opts: {
      series: ["camp"],
      gender: ["f"],
      status: ["v"]
    }
  },
    {
    name: "Nogla the Mighty, Mage",
    img: "3Aj3uQU.png",
    opts: {
      series: ["camp"],
      gender: ["nb"],
      status: ["v"]
    }
  },
    {
    name: "Ferdinand Clark, Adventurer",
    img: "5PQMcdz.png",
    opts: {
      series: ["camp"],
      gender: ["m"],
      status: ["m"]
    }
  },
    {
    name: "Tomoe Shige, Shrine Maiden",
    img: "rAp6pOo.png",
    opts: {
      series: ["camp"],
      gender: ["f"],
      status: ["v"]
    }
  },
    {
    name: "Tomomi Aizawa, Microbiologist",
    img: "wTdRHq9.png",
    opts: {
      series: ["camp"],
      gender: ["m"],
      status: ["v","m"]
    }
  },
    {
    name: "Sven Skarsgard, Fisher",
    img: "kHuBdkc.png", //Needs 
    opts: {
      series: ["camp"],
      gender: ["m"],
      status: ["v"]
    }
  },
    {
    name: "Aya Ito, Cosplayer",
    img: "eIwkHDh.png",
    opts: {
      series: ["camp"],
      gender: ["nb"],
      status: ["m"]
    }
  },
    {
    name: "Hotaru Yang, Shock Jock",
    img: "2qsQpaE.png",
    opts: {
      series: ["camp"],
      gender: ["f"],
      status: ["v"]
    }
  },
    {
    name: "Hiroki Nanahara, Paranormal Investigator",
    img: "f8kdJWj.png",
    opts: {
      series: ["camp"],
      gender: ["nb"],
      status: ["s"]
    }
  },
    {
    name: "Landon Edgemont, Preschool Teacher",
    img: "4mlfYjY.png",
    opts: {
      series: ["camp"],
      gender: ["m"],
      status: ["s"]
    }
  },
    {
    name: "Rosillia Eristrov, Chessman",
    img: "41qcySQ.png",
    opts: {
      series: ["camp"],
      gender: ["f"],
      status: ["s"]
    }
  },
    {
    name: "Grell Scarda, Bird Watcher",
    img: "qsdccgD.png", //Needs 
    opts: {
      series: ["camp"],
      gender: ["m"],
      status: ["s"]
    }
  },
    {
    name: "Aurelia Deanna, Sandwich Artist",
    img: "bVF4hdW.png", //Needs 
    opts: {
      series: ["camp"],
      gender: ["f"],
      status: ["s"]
    }
  },
    {
    name: "Gerard Skarsgard, Hunter",
    img: "nElLSmf.png", //Needs 
    opts: {
      series: ["camp"],
      gender: ["m"],
      status: ["s"]
    }
  },
    {
    name: "Christopher Beauregarde, Prince",
    img: "svngYLp.png", //Needs 
    opts: {
      series: ["camp"],
      gender: ["m"],
      status: ["s"]
    }
  },
    {
    name: "Keiichi Kiito, Jeweler",
    img: "ptCFCJE.png",
    opts: {
      series: ["camp"],
      gender: ["m"],
      status: ["s"]
    }
  },
    {
    name: "Ruri Kobayashi, Private Investigator",
    img: "U2acPR8.png",
    opts: {
      series: ["camp"],
      gender: ["f"],
      status: ["s"]
    }
  },
    {
    name: "Seishou Kensei, Boxer",
    img: "5sukxXM.png", //Needs 
    opts: {
      series: ["camp"],
      gender: ["m"],
      status: ["s"]
    }
  },
    {
    name: "Linette Boucher, Butcher",
    img: "9SVcj8B.png",
    opts: {
      series: ["camp"],
      gender: ["f"],
      status: ["s"]
    }
  },
    {
    name: "Taro Mijumaru, Gourmet",
    img: "f8kdJWj.png",
    opts: {
      series: ["camp"],
      gender: ["m"],
      status: ["s"]
    }
  },
    //GATE
    {
    name: "Jessie Chaisavanh, Dungeon Master",
    img: "1jXbydx.png",
    opts: {
      series: ["gate"],
      gender: ["f"],
      status: ["v"]
    }
  },
    {
    name: "Kekoa Palakiko, Dodgeball Player",
    img: "6j3EdTu.png",
    opts: {
      series: ["gate"],
      gender: ["f"],
      status: ["tbd"]
    }
  },
    {
    name: "Borya, SHSL...?",
    img: "Y2f0ViC.png",
    opts: {
      series: ["gate"],
      gender: ["f"],
      status: ["tbd"]
    }
  },
    {
    name: "Mohan Laghari, Yes Man",
    img: "yZU7UHF.png",
    opts: {
      series: ["gate"],
      gender: ["m"],
      status: ["tbd"]
    }
  },
    {
    name: "Austin Nisei, Alpha",
    img: "BmjLaGY.png",
    opts: {
      series: ["gate"],
      gender: ["m"],
      status: ["tbd"]
    }
  },
    {
    name: "Tigerlily Celestino, Healer",
    img: "aXJ5R6g.png",
    opts: {
      series: ["gate"],
      gender: ["f"],
      status: ["tbd"]
    }
  },
    {
    name: "Tucker the Trucker, Trucker",
    img: "oTyIgBE.png",
    opts: {
      series: ["gate"],
      gender: ["m"],
      status: ["tbd"]
    }
  },
    {
    name: "Sven?, Fisher...?",
    img: "9UNFXn7.png",
    opts: {
      series: ["gate"],
      gender: ["m"],
      status: ["m"]
    }
  },
    {
    name: "Randy Velvito, Ornithologist",
    img: "SkBXugt.png",
    opts: {
      series: ["gate"],
      gender: ["m"],
      status: ["tbd"]
    }
  },
    {
    name: "Eloise Bixel, Storyteller",
    img: "JyWtOiz.png",
    opts: {
      series: ["gate"],
      gender: ["f"],
      status: ["tbd"]
    }
  },
    {
    name: "Sophie Glass, Psychologist",
    img: "KZTTSlZ.png",
    opts: {
      series: ["gate"],
      gender: ["f"],
      status: ["tbd"]
    }
  },
    {
    name: "Naguib Mustafa, Archaeologist",
    img: "EwqMPJP.png",
    opts: {
      series: ["gate"],
      gender: ["m"],
      status: ["tbd"]
    }
  },
    {
    name: "Nadeshiko Sasaki, Demonologist",
    img: "sd8kaKx.png",
    opts: {
      series: ["gate"],
      gender: ["f"],
      status: ["tbd"]
    }
  },
    {
    name: "Lykke Sigurjónsdóttir, Tactician",
    img: "eBxqlHf.png",
    opts: {
      series: ["gate"],
      gender: ["f"],
      status: ["tbd"]
    }
  },
    {
    name: "Tenma Terada, Traceur",
    img: "MTtGt4K.png",
    opts: {
      series: ["gate"],
      gender: ["m"],
      status: ["v"]
    }
  },
    {
    name: "Truedy Talltale, Journalist",
    img: "2hk9z2l.png",
    opts: {
      series: ["gate"],
      gender: ["f"],
      status: ["tbd"]
    }
  },
    {
    name: "Lisander of the Amazon, Pet Detective",
    img: "cgXSly4.png",
    opts: {
      series: ["gate"],
      gender: ["m"],
      status: ["tbd"]
    }
  },
    {
    name: "Ishaan Varma, Stunt Person",
    img: "NpFWHdr.png",
    opts: {
      series: ["gate"],
      gender: ["nb"],
      status: ["tbd"]
    }
  },
    {
    name: "Judge James Martin, Judge",
    img: "Vsx3y5G.png",
    opts: {
      series: ["gate"],
      gender: ["m"],
      status: ["tbd"]
    }
  },
    {
    name: "Dr. Robert Ashfield, Bioengineer",
    img: "5xU2Ehx.png",
    opts: {
      series: ["gate"],
      gender: ["m"],
      status: ["tbd"]
    }
  },
    {
    name: "Antonio Ferrrio Montez, Telenovela Store",
    img: "9vPTNJh.png",
    opts: {
      series: ["gate"],
      gender: ["m"],
      status: ["tbd"]
    }
  },
    {
    name: "Zeke Hellstrand, Wood Carver",
    img: "48YYks2.png",
    opts: {
      series: ["gate"],
      gender: ["m"],
      status: ["tbd"]
    }
  },
    {
    name: "Jane Doe, Cryptozoologist",
    img: "1550aEl.png",
    opts: {
      series: ["gate"],
      gender: ["f"],
      status: ["tbd"]
    }
  },
    {
    name: "Sushruta Ayurveda, Opthamologist",
    img: "FgZjG3k.png",
    opts: {
      series: ["gate"],
      gender: ["m"],
      status: ["tbd"]
    }
  },
    {
    name: "Bob Stanley, Basketball Player",
    img: "8cqgdaq.png",
    opts: {
      series: ["gate"],
      gender: ["m"],
      status: ["tbd"]
        
    }
  },
    {
    name: "George O' Suilleabhain, Dairy Farmer",
    img: "rnTHnzU.png",
    opts: {
      series: ["gate"],
      gender: ["m"],
      status: ["m"]
    }
  },
    {
    name: "Kasai Garasu, Glass Blower",
    img: "K7wE5OV.png",
    opts: {
      series: ["gate"],
      gender: ["f"],
      status: ["tbd"]
    }
  },
    {
    name: "The Empty, Dental Assistant",
    img: "rmACk7B.png",
    opts: {
      series: ["gate"],
      gender: ["f"],
      status: ["tbd"]
    }
  },
    {
    name: "Esther, Carpenter",
    img: "3GFBxOv.png",
    opts: {
      series: ["gate"],
      gender: ["f"],
      status: ["tbd"]
    }
  },
    {
    name: "Kim Phuong Nguyen, Watchmaker",
    img: "lO1NLvW.png",
    opts: {
      series: ["gate"],
      gender: ["f"],
      status: ["v"]
    }
  },
    {
    name: "Lorcan Cleary, Cobbler",
    img: "T7Nyfg3.png",
    opts: {
      series: ["gate"],
      gender: ["m"],
      status: ["m"]
    }
  },
    {
    name: "Robert the Basketball, Basketball",
    img: "pbjTViM.png",
    opts: {
      series: ["gate"],
      gender: ["m"],
      status: ["tbd"]
    }
  }
];
