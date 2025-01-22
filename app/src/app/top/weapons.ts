interface WeaponAttack {
  description: string;
  range: number;
  // damage: number;
  // minDamage?: number;
  // maxDamage?: number;
}

interface Weapon {
  id: string;
  name: string;
  nameJp: string;
  //range: number;
  //damage: number;
  attacks: Array<WeaponAttack>;
  // killTime: number;
}

// 射程値を内部表現に変換（参考サイトの値 × 40 で既存の表示と近い値に）
export const weapons: Weapon[] = [
  {
    id: "bold",
    name: "Splattershot Nova",
    nameJp: "ボールドマーカー",
    attacks: [
      {
        description: "通常撃ち",
        range: 1.5,
      },
    ],
    //damage: 38,
    //killTime: 0.183,
  },
  {
    id: "boldneo",
    name: "boldneo",
    nameJp: "ボールドマーカーネオ",
    attacks: [
      {
        description: "通常撃ち",
        range: 1.5,
      },
    ],
    //damage: 38,
    // killTime: 0.183,
  },
  {
    id: "wakaba",
    name: "Splattershot Jr.",
    nameJp: "わかばシューター",
    attacks: [
      {
        description: "通常撃ち",
        range: 2.1 * 40, // 84
      },
    ],
    //damage: 28,
    //killTime: 0.267,
  },
  {
    id: "wakaba1",
    name: "Splattershot Jr.",
    nameJp: "もみじシューター",
    attacks: [
      {
        description: "通常撃ち",
        range: 2.1 * 40, // 84
      },
    ],
    //damage: 28,
    //killTime: 0.267,
  },
  {
    id: "sharp",
    name: "Splash-o-matic",
    nameJp: "シャープマーカー",
    attacks: [
      {
        description: "通常撃ち",
        range: 2.2 * 40, // 88
      },
    ],
    //damage: 28,
    // killTime: 0.267,
  },
  {
    id: "sharp1",
    name: "Splash-o-matic",
    nameJp: "シャープマーカーネオ",
    attacks: [
      {
        description: "通常撃ち",
        range: 2.2,
      },
    ],
    //damage: 28,
    // killTime: 0.267,
  },
  {
    id: "promodeler",
    name: "Aerospray MG",
    nameJp: "プロモデラーMG",
    attacks: [
      {
        description: "通常撃ち",
        range: 2.0 * 40, // 80
      },
    ],
    //damage: 24,
    //killTime: 0.283,
  },
  {
    id: "promodeler1",
    name: "Aerospray RG",
    nameJp: "プロモデラーRG",
    attacks: [
      {
        description: "通常撃ち",
        range: 2.0,
      },
    ],
    //damage: 24,
    //killTime: 0.283,
  },
  {
    id: "splattershot",
    name: "Splattershot",
    nameJp: "スプラシューター",
    range: 2.5 * 40, // 100
    //damage: 36,
    //killTime: 0.217,
  },
  {
    id: "splattershot1",
    name: "Splattershot",
    nameJp: "スプラシューターコラボ",
    range: 2.5,
    //damage: 36,
    //killTime: 0.217,
  },
  {
    id: "splattershot2",
    name: "Splattershot",
    nameJp: "ヒーローシューターレプリカ",
    range: 2.5,
    //damage: 36,
    //killTime: 0.217,
  },
  {
    id: "splattershot3",
    name: "Splattershot",
    nameJp: "オクタシューターレプリカ",
    range: 2.5,
    //damage: 36,
    //killTime: 0.217,
  },
  {
    id: "splattershot4",
    name: "Splattershot",
    nameJp: "オーダーシューターレプリカ",
    range: 2.5,
    //damage: 36,
    //killTime: 0.217,
  },
  {
    id: "52gal",
    name: ".52 Gal",
    nameJp: ".52ガロン",
    range: 2.5 * 40, // 100
    //damage: 52,
    //killTime: 0.167,
  },
  {
    id: "52galdeko",
    name: ".52 Galdeko",
    nameJp: ".52ガロンデコ",
    range: 2.5,
    //damage: 52,
    //killTime: 0.167,
  },
  {
    id: "nzap",
    name: "N-ZAP '85",
    nameJp: "N-ZAP85",
    range: 2.3 * 40, // 92
    //damage: 30,
    //killTime: 0.267,
  },
  {
    id: "nzap1",
    name: "N-ZAP '89",
    nameJp: "N-ZAP89",
    range: 2.3,
    //damage: 30,
    // killTime: 0.267,
  },
  {
    id: "prime",
    name: "Splattershot Pro",
    nameJp: "プライムシューター",
    range: 3.2 * 40, // 128
    //damage: 45,
    //killTime: 0.283,
  },
  {
    id: "prime1",
    name: "Splattershot Pro",
    nameJp: "プライムシューターコラボ",
    range: 3.2,
    //damage: 45,
    //killTime: 0.283,
  },
  {
    id: "96gal",
    name: ".96 Gal",
    nameJp: ".96ガロン",
    range: 3.6 * 40, // 144
    // damage: 62,
    //killTime: 0.217,
  },
  {
    id: "96galdeko",
    name: ".96 Galdeko",
    nameJp: ".96ガロンデコ",
    range: 3.6,
    //damage: 62,
    //killTime: 0.217,
  },
  {
    id: "jet",
    name: "Jet Squelcher",
    nameJp: "ジェットスイーパー",
    range: 4.2 * 40, // 168
    //damage: 32,
    // killTime: 0.416,
  },
  {
    id: "jet1",
    name: "Jet Squelcher",
    nameJp: "ジェットスイーパーカスタム",
    range: 4.2,
    //damage: 32,
    // killTime: 0.416,
  },
  {
    id: "space",
    name: "space",
    nameJp: "スペースシューター",
    range: 3.2,
    // damage: 24,
    // killTime: 0.417,
  },
  {
    id: "space1",
    name: "space",
    nameJp: "スペースシューターコラボ",
    range: 3.2,
    // damage: 24,
    // killTime: 0.417,
  },
  {
    id: "L3",
    name: "L3",
    nameJp: "L3リールガン",
    range: 2.9,
    //damage: 31,
    // killTime: 0.317,
  },
  {
    id: "L3.1",
    name: "L3",
    nameJp: "L3リールガンD",
    range: 2.9,
    //damage: 31,
    // killTime: 0.317,
  },
  {
    id: "H3",
    name: "H3",
    nameJp: "H3リールガン",
    range: 3.2,
    //damage: 44,
    // killTime: 0.183,
  },
  {
    id: "H3.1",
    name: "H3",
    nameJp: "H3リールガンD",
    range: 3.2,
    //damage: 44,
    // killTime: 0.183,
  },
  {
    id: "botoru",
    name: "botoru",
    nameJp: "ボトルガイザー",
    attacks: [
      {
        range: 3.7, //初弾
        //damage: 38, //初弾
        description: "初弾",
      },
      {
        description: "連打",
        range: 2.2, //連打
        //damage: 30, //連打
      },
    ],
    range: 2.2, //連打
    //damage: 30, //連打
    // killTime: 0.283,
  },
  {
    id: "botoru1",
    name: "botoru",
    nameJp: "ボトルガイザーフォイル",
    attacks: [
      {
        range: 3.7, //初弾
        //damage: 38, //初弾
        description: "初弾",
      },
      {
        description: "連打",
        range: 2.2, //連打
        //damage: 30, //連打
      },
    ],
    range: 2.2, //連打
    // damage: 30, //連打
    // killTime: 0.283,
  },
  {
    id: "carbon",
    name: "carbon",
    nameJp: "カーボンローラー",
    attacks: [
      {
        description: "縦振り",
        range: 2.7, //縦振り
      },
      {
        description: "横振り",
        range: 1.3, //横振り
      },
    ],
  },
  {
    id: "carbon_deco",
    name: "carbon_deco",
    nameJp: "カーボンローラーデコ",
    attacks: [
      {
        description: "縦振り",
        range: 2.7, //縦振り
      },
      {
        description: "横振り",
        range: 1.3, //横振り
      },
    ],
  },
  {
    id: "splatroller",
    name: "splatroller",
    nameJp: "スプラローラー",
    attacks: [
      {
        description: "縦振り",
        range: 3.2, //縦振り
      },
      {
        description: "横振り",
        range: 2.2, //横振り
      },
    ],
  },
  {
    id: "splatroller_collabo",
    name: "splatroller_collabo",
    nameJp: "スプラローラーコラボ",
    attacks: [
      {
        description: "縦振り",
        range: 3.2, //縦振り
      },
      {
        description: "横振り",
        range: 2.2, //横振り
      },
    ],
  },
  {
    id: "nova",
    name: "Luna Blaster",
    nameJp: "ノヴァブラスター",
    range: 2.2 * 40, // 88（爆風の最大範囲）
    // damage: 125, // 直撃ダメージ
    // killTime: 0.233,
  },
  {
    id: "hot",
    name: "Blaster",
    nameJp: "ホットブラスター",
    range: 2.5 * 40, // 100（爆風の最大範囲）
    // damage: 125, // 直撃ダメージ
    // killTime: 0.233,
  },
  {
    id: "rapid",
    name: "Rapid Blaster",
    nameJp: "ラピッドブラスター",
    range: 3.6 * 40, // 144（爆風の最大範囲）
    // damage: 85, // 直撃ダメージ
    // killTime: 0.783,
  },
  {
    id: "dualie",
    name: "Splat Dualies",
    nameJp: "スプラマニューバー",
    range: 2.2 * 40, // 88
    // damage: 30,
    // killTime: 0.217,
  },
  {
    id: "roller",
    name: "Splat Roller",
    nameJp: "スプラローラー",
    range: 3.2 * 40, // 128（縦振り最大）
    // damage: 150, // 縦振り最大
    // killTime: 0.35,
  },
  {
    id: "charger",
    name: "Splat Charger",
    nameJp: "スプラチャージャー",
    range: 5.2 * 40, // 208
    // damage: 160, // フルチャージ
    // killTime: 1.067,
  },
  {
    id: "slosher",
    name: "Slosher",
    nameJp: "バケットスロッシャー",
    range: 3.0 * 40, // 120
    // damage: 70,
    // killTime: 0.717,
  },
  {
    id: "tri-slosher",
    name: "Tri-Slosher",
    nameJp: "ヒッセン",
    range: 2.3 * 40, // 92
    // damage: 62,
    // killTime: 0.617,
  },
  {
    id: "splatling",
    name: "Heavy Splatling",
    nameJp: "バレルスピナー",
    range: 3.9 * 40, // 156
    // damage: 30,
    // killTime: 0.217,
  },
];
