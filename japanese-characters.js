//Hiragana characters

const HiraganaVowels = [
    { char: "あ", romaji: "a" },
    { char: "い", romaji: "i" },
    { char: "う", romaji: "u" },
    { char: "え", romaji: "e" },
    { char: "お", romaji: "o" },
]

const HiraganaK = [
    { char: "か", romaji: "ka" },
    { char: "き", romaji: "ki" },
    { char: "く", romaji: "ku" },
    { char: "け", romaji: "ke" },
    { char: "こ", romaji: "ko" }
]
const HiraganaS = [
    { char: "さ", romaji: "sa" },
    { char: "し", romaji: "shi" },
    { char: "す", romaji: "su" },
    { char: "せ", romaji: "se" },
    { char: "そ", romaji: "so" }
]
const HiraganaT = [
    { char: "た", romaji: "ta" },
    { char: "ち", romaji: "chi" },
    { char: "つ", romaji: "tsu" },
    { char: "て", romaji: "te" },
    { char: "と", romaji: "to" }
]
const HiraganaN = [
    { char: "な", romaji: "na" },
    { char: "に", romaji: "ni" },
    { char: "ぬ", romaji: "nu" },
    { char: "ね", romaji: "ne" },
    { char: "の", romaji: "no" }
]
const HiraganaH = [
    { char: "は", romaji: "ha" },
    { char: "ひ", romaji: "hi" },
    { char: "ふ", romaji: "fu" },
    { char: "へ", romaji: "he" },
    { char: "ほ", romaji: "ho" }]
const HiraganaM = [
    { char: "ま", romaji: "ma" },
    { char: "み", romaji: "mi" },
    { char: "む", romaji: "mu" },
    { char: "め", romaji: "me" },
    { char: "も", romaji: "mo" }
]
const HiraganaY = [
    { char: "や", romaji: "ya" },
    { char: "ゆ", romaji: "yu" },
    { char: "よ", romaji: "yo" }
]
const HiraganaR = [
    { char: "ら", romaji: "ra" },
    { char: "り", romaji: "ri" },
    { char: "る", romaji: "ru" },
    { char: "れ", romaji: "re" },
    { char: "ろ", romaji: "ro" }
]
const HiraganaW = [
    { char: "わ", romaji: "wa" },
    { char: "を", romaji: "wo" },
    { char: "ん", romaji: "n" }
]
const HiraganaDakuten = [
    { char: "が", romaji: "ga" },
    { char: "ぎ", romaji: "gi" },
    { char: "ぐ", romaji: "gu" },
    { char: "げ", romaji: "ge" },
    { char: "ご", romaji: "go" },

    // Z-series
    { char: "ざ", romaji: "za" },
    { char: "じ", romaji: "ji" },
    { char: "ず", romaji: "zu" },
    { char: "ぜ", romaji: "ze" },
    { char: "ぞ", romaji: "zo" },

    // D-series
    { char: "だ", romaji: "da" },
    { char: "ぢ", romaji: "ji" },
    { char: "づ", romaji: "zu" },
    { char: "で", romaji: "de" },
    { char: "ど", romaji: "do" },

    // B-series
    { char: "ば", romaji: "ba" },
    { char: "び", romaji: "bi" },
    { char: "ぶ", romaji: "bu" },
    { char: "べ", romaji: "be" },
    { char: "ぼ", romaji: "bo" },

    // P-series
    { char: "ぱ", romaji: "pa" },
    { char: "ぴ", romaji: "pi" },
    { char: "ぷ", romaji: "pu" },
    { char: "ぺ", romaji: "pe" },
    { char: "ぽ", romaji: "po" }
]


// Katakana characters
const katakanaVowels = [
    { char: "ア", romaji: "a" },
    { char: "イ", romaji: "i" },
    { char: "ウ", romaji: "u" },
    { char: "エ", romaji: "e" },
    { char: "オ", romaji: "o" }
];

const katakanaK = [
    { char: "カ", romaji: "ka" },
    { char: "キ", romaji: "ki" },
    { char: "ク", romaji: "ku" },
    { char: "ケ", romaji: "ke" },
    { char: "コ", romaji: "ko" }
];

const katakanaS = [
    { char: "サ", romaji: "sa" },
    { char: "シ", romaji: "shi" },
    { char: "ス", romaji: "su" },
    { char: "セ", romaji: "se" },
    { char: "ソ", romaji: "so" }
];

const katakanaT = [
    { char: "タ", romaji: "ta" },
    { char: "チ", romaji: "chi" },
    { char: "ツ", romaji: "tsu" },
    { char: "テ", romaji: "te" },
    { char: "ト", romaji: "to" }
];

const katakanaN = [
    { char: "ナ", romaji: "na" },
    { char: "ニ", romaji: "ni" },
    { char: "ヌ", romaji: "nu" },
    { char: "ネ", romaji: "ne" },
    { char: "ノ", romaji: "no" }
];

const katakanaH = [
    { char: "ハ", romaji: "ha" },
    { char: "ヒ", romaji: "hi" },
    { char: "フ", romaji: "fu" },
    { char: "ヘ", romaji: "he" },
    { char: "ホ", romaji: "ho" }
];

const katakanaM = [
    { char: "マ", romaji: "ma" },
    { char: "ミ", romaji: "mi" },
    { char: "ム", romaji: "mu" },
    { char: "メ", romaji: "me" },
    { char: "モ", romaji: "mo" }
];

const katakanaY = [
    { char: "ヤ", romaji: "ya" },
    { char: "ユ", romaji: "yu" },
    { char: "ヨ", romaji: "yo" }
];

const katakanaR = [
    { char: "ラ", romaji: "ra" },
    { char: "リ", romaji: "ri" },
    { char: "ル", romaji: "ru" },
    { char: "レ", romaji: "re" },
    { char: "ロ", romaji: "ro" }
];

const katakanaW = [
    { char: "ワ", romaji: "wa" },
    { char: "ヲ", romaji: "wo" },
    { char: "ン", romaji: "n" }
];

const katakanaDakuten = [
    // G-series
    { char: "ガ", romaji: "ga" },
    { char: "ギ", romaji: "gi" },
    { char: "グ", romaji: "gu" },
    { char: "ゲ", romaji: "ge" },
    { char: "ゴ", romaji: "go" },

    // Z-series
    { char: "ザ", romaji: "za" },
    { char: "ジ", romaji: "ji" },
    { char: "ズ", romaji: "zu" },
    { char: "ゼ", romaji: "ze" },
    { char: "ゾ", romaji: "zo" },

    // D-series
    { char: "ダ", romaji: "da" },
    { char: "ヂ", romaji: "ji" },
    { char: "ヅ", romaji: "zu" },
    { char: "デ", romaji: "de" },
    { char: "ド", romaji: "do" },

    // B-series
    { char: "バ", romaji: "ba" },
    { char: "ビ", romaji: "bi" },
    { char: "ブ", romaji: "bu" },
    { char: "ベ", romaji: "be" },
    { char: "ボ", romaji: "bo" },

    // P-series
    { char: "パ", romaji: "pa" },
    { char: "ピ", romaji: "pi" },
    { char: "プ", romaji: "pu" },
    { char: "ペ", romaji: "pe" },
    { char: "ポ", romaji: "po" }
];

const Hiragana = {
    Vowels: HiraganaVowels,
    KaRow: HiraganaK,
    HaRow: HiraganaH,
    MaRow: HiraganaM,
    NaRow: HiraganaN,
    RaRow: HiraganaR,
    SaRow: HiraganaS,
    TaRow: HiraganaT,
    YaRow: HiraganaY,
    WaRow: HiraganaW,
    Dakuten: HiraganaDakuten,
}
 Hiragana.All = Object.values(Hiragana).flat() //flattens the arrays inside the hiragana object to one big array, source: MDN

const Katakana = {
    Vowels: katakanaVowels,
    KaRow: katakanaK,
    HaRow: katakanaH,
    MaRow: katakanaM,
    NaRow: katakanaN,
    RaRow: katakanaR,
    SaRow: katakanaS,
    TaRow: katakanaT,
    YaRow: katakanaY,
    WaRow: katakanaW,
    Dakuten: katakanaDakuten,
}
 Katakana.All = Object.values(Katakana).flat()