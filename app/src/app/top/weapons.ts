interface Weapon {
  id: string;
  name: string;
  nameJp: string;
  range: number;
  damage: number;
  killTime: number;
}

// 射程値を内部表現に変換（参考サイトの値 × 40 で既存の表示と近い値に）
export const weapons: Weapon[] = [
  {
    id: "splattershot",
    name: "Splattershot",
    nameJp: "スプラシューター",
    range: 2.5 * 40, // 100
    damage: 36,
    killTime: 0.217,
  },
  {
    id: "wakaba",
    name: "Splattershot Jr.",
    nameJp: "わかばシューター",
    range: 2.1 * 40, // 84
    damage: 28,
    killTime: 0.267,
  },
  {
    id: "bold",
    name: "Splattershot Nova",
    nameJp: "ボールドマーカー",
    range: 1.5 * 40, // 60
    damage: 38,
    killTime: 0.183,
  },
  {
    id: "sharp",
    name: "Splash-o-matic",
    nameJp: "シャープマーカー",
    range: 2.2 * 40, // 88
    damage: 28,
    killTime: 0.267,
  },
  {
    id: "promodeler",
    name: "Aerospray MG",
    nameJp: "プロモデラーMG",
    range: 2.0 * 40, // 80
    damage: 24,
    killTime: 0.283,
  },
  {
    id: "52gal",
    name: ".52 Gal",
    nameJp: ".52ガロン",
    range: 2.5 * 40, // 100
    damage: 52,
    killTime: 0.167,
  },
  {
    id: "nzap",
    name: "N-ZAP '85",
    nameJp: "N-ZAP85",
    range: 2.3 * 40, // 92
    damage: 30,
    killTime: 0.267,
  },
  {
    id: "prime",
    name: "Splattershot Pro",
    nameJp: "プライムシューター",
    range: 3.2 * 40, // 128
    damage: 45,
    killTime: 0.283,
  },
  {
    id: "96gal",
    name: ".96 Gal",
    nameJp: ".96ガロン",
    range: 3.6 * 40, // 144
    damage: 62,
    killTime: 0.217,
  },
  {
    id: "jet",
    name: "Jet Squelcher",
    nameJp: "ジェットスイーパー",
    range: 4.2 * 40, // 168
    damage: 32,
    killTime: 0.416,
  },
  {
    id: "nova",
    name: "Luna Blaster",
    nameJp: "ノヴァブラスター",
    range: 2.2 * 40, // 88（爆風の最大範囲）
    damage: 125, // 直撃ダメージ
    killTime: 0.233,
  },
  {
    id: "hot",
    name: "Blaster",
    nameJp: "ホットブラスター",
    range: 2.5 * 40, // 100（爆風の最大範囲）
    damage: 125, // 直撃ダメージ
    killTime: 0.233,
  },
  {
    id: "rapid",
    name: "Rapid Blaster",
    nameJp: "ラピッドブラスター",
    range: 3.6 * 40, // 144（爆風の最大範囲）
    damage: 85, // 直撃ダメージ
    killTime: 0.783,
  },
  {
    id: "dualie",
    name: "Splat Dualies",
    nameJp: "スプラマニューバー",
    range: 2.2 * 40, // 88
    damage: 30,
    killTime: 0.217,
  },
  {
    id: "roller",
    name: "Splat Roller",
    nameJp: "スプラローラー",
    range: 3.2 * 40, // 128（縦振り最大）
    damage: 150, // 縦振り最大
    killTime: 0.35,
  },
  {
    id: "charger",
    name: "Splat Charger",
    nameJp: "スプラチャージャー",
    range: 5.2 * 40, // 208
    damage: 160, // フルチャージ
    killTime: 1.067,
  },
  {
    id: "slosher",
    name: "Slosher",
    nameJp: "バケットスロッシャー",
    range: 3.0 * 40, // 120
    damage: 70,
    killTime: 0.717,
  },
  {
    id: "tri-slosher",
    name: "Tri-Slosher",
    nameJp: "ヒッセン",
    range: 2.3 * 40, // 92
    damage: 62,
    killTime: 0.617,
  },
  {
    id: "splatling",
    name: "Heavy Splatling",
    nameJp: "バレルスピナー",
    range: 3.9 * 40, // 156
    damage: 30,
    killTime: 0.217,
  }
];
