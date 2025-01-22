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
    attacks: [
      {
        description: "通常撃ち",
        range: 2.5 * 40, // 100
      },
    ],
    //damage: 36,
    //killTime: 0.217,
  },
  {
    id: "splattershot1",
    name: "Splattershot",
    nameJp: "スプラシューターコラボ",
    attacks: [
      {
        description: "通常撃ち",
        range: 2.5,
      },
    ],
    //damage: 36,
    //killTime: 0.217,
  },
  {
    id: "splattershot2",
    name: "Splattershot",
    nameJp: "ヒーローシューターレプリカ",
    attacks: [
      {
        description: "通常撃ち",
        range: 2.5,
      },
    ],
    //damage: 36,
    //killTime: 0.217,
  },
  {
    id: "splattershot3",
    name: "Splattershot",
    nameJp: "オクタシューターレプリカ",
    attacks: [
      {
        description: "通常撃ち",
        range: 2.5,
      },
    ],
    //damage: 36,
    //killTime: 0.217,
  },
  {
    id: "splattershot4",
    name: "Splattershot",
    nameJp: "オーダーシューターレプリカ",
    attacks: [
      {
        description: "通常撃ち",
        range: 2.5,
      },
    ],
    //damage: 36,
    //killTime: 0.217,
  },
  {
    id: "52gal",
    name: ".52 Gal",
    nameJp: ".52ガロン",
    attacks: [
      {
        description: "通常撃ち",
        range: 2.5 * 40, // 100
      },
    ],
    //damage: 52,
    //killTime: 0.167,
  },
  {
    id: "52galdeko",
    name: ".52 Galdeko",
    nameJp: ".52ガロンデコ",
    attacks: [
      {
        description: "通常撃ち",
        range: 2.5,
      },
    ],
    //damage: 52,
    //killTime: 0.167,
  },
  {
    id: "nzap",
    name: "N-ZAP '85",
    nameJp: "N-ZAP85",
    attacks: [
      {
        description: "通常撃ち",
        range: 2.3 * 40, // 92
      },
    ],
    //damage: 30,
    //killTime: 0.267,
  },
  {
    id: "nzap1",
    name: "N-ZAP '89",
    nameJp: "N-ZAP89",
    attacks: [
      {
        description: "通常撃ち",
        range: 2.3,
      },
    ],
    //damage: 30,
    // killTime: 0.267,
  },
  {
    id: "prime",
    name: "Splattershot Pro",
    nameJp: "プライムシューター",
    attacks: [
      {
        description: "通常撃ち",
        range: 3.2 * 40, // 128
      },
    ],
    //damage: 45,
    //killTime: 0.283,
  },
  {
    id: "prime1",
    name: "Splattershot Pro",
    nameJp: "プライムシューターコラボ",
    attacks: [
      {
        description: "通常撃ち",
        range: 3.2,
      },
    ],
    //damage: 45,
    //killTime: 0.283,
  },
  {
    id: "96gal",
    name: ".96 Gal",
    nameJp: ".96ガロン",
    attacks: [
      {
        description: "通常撃ち",
        range: 3.6,
      },
    ],
    // damage: 62,
    //killTime: 0.217,
  },
  {
    id: "96galdeko",
    name: ".96 Galdeko",
    nameJp: ".96ガロンデコ",
    attacks: [
      {
        description: "通常撃ち",
        range: 3.6,
      },
    ],
    //damage: 62,
    //killTime: 0.217,
  },
  {
    id: "jet",
    name: "Jet Squelcher",
    nameJp: "ジェットスイーパー",
    attacks: [
      {
        description: "通常撃ち",
        range: 4.2 * 40, // 168
      },
    ],
    //damage: 32,
    // killTime: 0.416,
  },
  {
    id: "jet1",
    name: "Jet Squelcher",
    nameJp: "ジェットスイーパーカスタム",
    attacks: [
      {
        description: "通常撃ち",
        range: 4.2,
      },
    ],
    //damage: 32,
    // killTime: 0.416,
  },
  {
    id: "space",
    name: "space",
    nameJp: "スペースシューター",
    attacks: [
      {
        description: "通常撃ち",
        range: 3.2,
      },
    ],
    // damage: 24,
    // killTime: 0.417,
  },
  {
    id: "space1",
    name: "space",
    nameJp: "スペースシューターコラボ",
    attacks: [
      {
        description: "通常撃ち",
        range: 3.2,
      },
    ],
    // damage: 24,
    // killTime: 0.417,
  },
  {
    id: "L3",
    name: "L3",
    nameJp: "L3リールガン",
    attacks: [
      {
        description: "通常撃ち",
        range: 2.9,
      },
    ],
    //damage: 31,
    // killTime: 0.317,
  },
  {
    id: "L3.1",
    name: "L3",
    nameJp: "L3リールガンD",
    attacks: [
      {
        description: "通常撃ち",
        range: 2.9,
      },
    ],
    //damage: 31,
    // killTime: 0.317,
  },
  {
    id: "H3",
    name: "H3",
    nameJp: "H3リールガン",
    attacks: [
      {
        description: "通常撃ち",
        range: 3.2,
      },
    ],
    //damage: 44,
    // killTime: 0.183,
  },
  {
    id: "H3.1",
    name: "H3",
    nameJp: "H3リールガンD",
    attacks: [
      {
        description: "通常撃ち",
        range: 3.2,
      },
    ],
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
    //range: 2.2, //連打
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
    //range: 2.2, //連打
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
    id: "order_roller_replica",
    name: "order_roller_replica",
    nameJp: "オーダーローラーレプリカ",
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
    id: "dynamo",
    name: "dynamo",
    nameJp: "ダイナモローラー",
    attacks: [
      {
        description: "縦振り",
        range: 4.4, //縦振り
      },
      {
        description: "横振り",
        range: 3.0, //横振り
      },
    ],
  },
  {
    id: "dynamo_tesla",
    name: "dynamo_tesla",
    nameJp: "ダイナモローラーテラス",
    attacks: [
      {
        description: "縦振り",
        range: 4.4, //縦振り
      },
      {
        description: "横振り",
        range: 3.0, //横振り
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
    id: "dynamo_tesla",
    name: "dynamo_tesla",
    nameJp: "ダイナモローラーテスラ",
    attacks: [
      {
        description: "縦振り",
        range: 4.4, //縦振り
      },
      {
        description: "横振り",
        range: 3.0, //横振り
      },
    ],
  },
  {
    id: "wideroller",
    name: "wideroller",
    nameJp: "ワイドローラー",
    attacks: [
      {
        description: "縦振り",
        range: 3.8, //縦振り
      },
      {
        description: "横振り",
        range: 2.6, //横振り
      },
    ],
  },
  {
    id: "wideroller_collabo",
    name: "wideroller_collabo",
    nameJp: "ワイドローラーコラボ",
    attacks: [
      {
        description: "縦振り",
        range: 3.8, //縦振り
      },
      {
        description: "横振り",
        range: 2.6, //横振り
      },
    ],
  },
  // チャージャー
  {
    id: "squiclean_a",
    name: "squiclean_a",
    nameJp: "スクイックリンα",
    attacks: [
      {
        description: "フルチャージ",
        range: 3.6,
      },
    ],
  },
  {
    id: "squiclean_b",
    name: "squiclean_b",
    nameJp: "スクイックリンβ",
    attacks: [
      {
        description: "フルチャージ",
        range: 3.6,
      },
    ],
  },
  {
    id: "splatcharger",
    name: "splatcharger",
    nameJp: "スプラチャージャー",
    attacks: [
      {
        description: "フルチャージ",
        range: 5.2,
      },
    ],
  },
  {
    id: "splatcharger_collabo",
    name: "splatcharger_collabo",
    nameJp: "スプラチャージャーコラボ",
    attacks: [
      {
        description: "フルチャージ",
        range: 5.2,
      },
    ],
  },
  {
    id: "order_charger_replica",
    name: "order_charger_replica",
    nameJp: "オーダーチャージャー レプリカ",
    attacks: [
      {
        description: "フルチャージ",
        range: 5.2,
      },
    ],
  },
  {
    id: "splatscope",
    name: "splatscope",
    nameJp: "スプラスコープ",
    attacks: [
      {
        description: "フルチャージ",
        range: 5.5,
      },
    ],
  },
  {
    id: "splatscope_collabo",
    name: "splatscope_collabo",
    nameJp: "スプラスコープコラボ",
    attacks: [
      {
        description: "フルチャージ",
        range: 5.5,
      },
    ],
  },
  {
    id: "liter4k",
    name: "liter4k",
    nameJp: "リッター4K",
    attacks: [
      {
        description: "フルチャージ",
        range: 6.2,
      },
    ],
  },
  {
    id: "liter4k_custom",
    name: "liter4k_custom",
    nameJp: "リッター4Kカスタム",
    attacks: [
      {
        description: "フルチャージ",
        range: 6.2,
      },
    ],
  },
  {
    id: "liter4k_scope",
    name: "liter4k_scope",
    nameJp: "4Kスコープ",
    attacks: [
      {
        description: "フルチャージ",
        range: 6.5,
      },
    ],
  },
  {
    id: "bamboo14mk1",
    name: "bamboo14mk1",
    nameJp: "14式竹筒銃・甲",
    attacks: [
      {
        description: "フルチャージ",
        range: 4.2,
      },
    ],
  },
  {
    id: "bamboo14mk2",
    name: "bamboo14mk2",
    nameJp: "14式竹筒銃・乙",
    attacks: [
      {
        description: "フルチャージ",
        range: 4.2,
      },
    ],
  },
  {
    id: "soytuber",
    name: "soytuber",
    nameJp: "ソイチューバー",
    attacks: [
      {
        description: "フルチャージ",
        range: 4.2,
      },
    ],
  },
  {
    id: "soytuber_custom",
    name: "soytuber_custom",
    nameJp: "ソイチューバーカスタム",
    attacks: [
      {
        description: "フルチャージ",
        range: 4.2,
      },
    ],
  },
  {
    id: "rpen_5h",
    name: "rpen_5h",
    nameJp: "R-PEN/5H",
    attacks: [
      {
        description: "フルチャージ",
        range: 5.7,
      },
    ],
  },
  {
    id: "rpen_5b",
    name: "rpen_5b",
    nameJp: "R-PEN/5B",
    attacks: [
      {
        description: "フルチャージ",
        range: 5.7,
      },
    ],
  },
  // バケツ
  {
    id: "bucketslosher",
    name: "bucketslosher",
    nameJp: "バケットスロッシャー",
    attacks: [
      {
        description: "通常撃ち",
        range: 3.0,
      },
    ],
  },
  {
    id: "bucketslosher_deco",
    name: "bucketslosher_deco",
    nameJp: "バケットスロッシャーデコ",
    attacks: [
      {
        description: "通常撃ち",
        range: 3.0,
      },
    ],
  },
  {
    id: "order_slosher_replica",
    name: "order_slosher_replica",
    nameJp: "オーダースロッシャー レプリカ",
    attacks: [
      {
        description: "通常撃ち",
        range: 3.0,
      },
    ],
  },
  {
    id: "hissen",
    name: "hissen",
    nameJp: "ヒッセン",
    attacks: [
      {
        description: "通常撃ち",
        range: 2.3,
      },
    ],
  },
  {
    id: "hissen_hue",
    name: "hissen_hue",
    nameJp: "ヒッセン・ヒュー",
    attacks: [
      {
        description: "通常撃ち",
        range: 2.3,
      },
    ],
  },
  {
    id: "screwslosher",
    name: "screwslosher",
    nameJp: "スクリュースロッシャー",
    attacks: [
      {
        description: "渦",
        range: 3.0,
      },
      {
        description: "直撃",
        range: 2.6,
      },
    ],
  },
  {
    id: "screwslosher_neo",
    name: "screwslosher_neo",
    nameJp: "スクリュースロッシャーネオ",
    attacks: [
      {
        description: "渦",
        range: 3.0,
      },
      {
        description: "直撃",
        range: 2.6,
      },
    ],
  },
  {
    id: "furo",
    name: "furo",
    nameJp: "オーバーフロッシャー",
    attacks: [
      {
        description: "最大",
        range: 5.0,
      },
      {
        description: "全弾",
        range: 4.6,
      },
    ],
  },
  {
    id: "furo_deco",
    name: "furo_deco",
    nameJp: "オーバーフロッシャーデコ",
    attacks: [
      {
        description: "最大",
        range: 5.0,
      },
      {
        description: "全弾",
        range: 4.6,
      },
    ],
  },
  {
    id: "explosher",
    name: "explosher",
    nameJp: "エクスプロッシャー",
    attacks: [
      {
        description: "爆風",
        range: 4.5,
      },
      {
        description: "直撃",
        range: 3.9,
      },
    ],
  },
  {
    id: "explosher_custom",
    name: "explosher_custom",
    nameJp: "エクスプロッシャーカスタム",
    attacks: [
      {
        description: "爆風",
        range: 4.5,
      },
      {
        description: "直撃",
        range: 3.9,
      },
    ],
  },
  {
    id: "moprin",
    name: "moprin",
    nameJp: "モップリン",
    attacks: [
      {
        description: "通常撃ち",
        range: 3.2,
      },
    ],
  },
  {
    id: "moprin_d",
    name: "moprin_d",
    nameJp: "モップリンD",
    attacks: [
      {
        description: "通常撃ち",
        range: 3.2,
      },
    ],
  },
  // スピナー
  {
    id: "splatspinner",
    name: "splatspinner",
    nameJp: "スプラスピナー",
    attacks: [
      {
        description: "フルチャージ",
        range: 2.8,
      },
    ],
  },
  {
    id: "splatspinner_collabo",
    name: "splatspinner_collabo",
    nameJp: "スプラスピナーコラボ",
    attacks: [
      {
        description: "フルチャージ",
        range: 2.8,
      },
    ],
  },
  {
    id: "barrelspinner",
    name: "barrelspinner",
    nameJp: "バレルスピナー",
    attacks: [
      {
        description: "フルチャージ",
        range: 3.9,
      },
    ],
  },
  {
    id: "barrelspinner_deco",
    name: "barrelspinner_deco",
    nameJp: "バレルスピナーデコ",
    attacks: [
      {
        description: "フルチャージ",
        range: 3.9,
      },
    ],
  },
  {
    id: "order_spinner_replica",
    name: "order_spinner_replica",
    nameJp: "オーダースピナー レプリカ",
    attacks: [
      {
        description: "フルチャージ",
        range: 3.9,
      },
    ],
  },
  {
    id: "hydra",
    name: "hydra",
    nameJp: "ハイドラント",
    attacks: [
      {
        description: "フルチャージ",
        range: 4.5,
      },
    ],
  },
  {
    id: "hydra_custom",
    name: "hydra_custom",
    nameJp: "ハイドラントカスタム",
    attacks: [
      {
        description: "フルチャージ",
        range: 4.5,
      },
    ],
  },
  {
    id: "kugelschreiber",
    name: "kugelschreiber",
    nameJp: "クーゲルシュライバー",
    attacks: [
      {
        description: "フルチャージ(長)",
        range: 4.3,
      },
      {
        description: "フルチャージ(短)",
        range: 2.0,
      },
    ],
  },
  {
    id: "kugelschreiber_hue",
    name: "kugelschreiber_hue",
    nameJp: "クーゲルシュライバー・ヒュー",
    attacks: [
      {
        description: "長",
        range: 4.3,
      },
      {
        description: "短",
        range: 2.0,
      },
    ],
  },
  {
    id: "nautilus47",
    name: "nautilus47",
    nameJp: "ノーチラス47",
    attacks: [
      {
        description: "フルチャージ",
        range: 3.3,
      },
    ],
  },
  {
    id: "nautilus79",
    name: "nautilus79",
    nameJp: "ノーチラス79",
    attacks: [
      {
        description: "フルチャージ",
        range: 3.3,
      },
    ],
  },
  {
    id: "	examiner",
    name: "	examiner",
    nameJp: "イグザミナー",
    attacks: [
      {
        description: "フルチャージ",
        range: 3.5,
      },
    ],
  },
  {
    id: "examiner_hue",
    name: "examiner_hue",
    nameJp: "イグザミナー・ヒュー",
    attacks: [
      {
        description: "フルチャージ",
        range: 3.5,
      },
    ],
  },
  // マニューバー
  {
    id: "sputtery",
    name: "sputtery",
    nameJp: "スパッタリー",
    attacks: [
      {
        description: "通常撃ち",
        range: 1.7,
      },
    ],
  },
  {
    id: "sputtery_hue",
    name: "sputtery_hue",
    nameJp: "スパッタリー・ヒュー",
    attacks: [
      {
        description: "通常撃ち",
        range: 1.7,
      },
    ],
  },
  {
    id: "maneuver",
    name: "maneuver",
    nameJp: "スプラマニューバー",
    attacks: [
      {
        description: "通常撃ち",
        range: 2.2,
      },
    ],
  },
  {
    id: "maneuver_collabo",
    name: "maneuver_collabo",
    nameJp: "スプラマニューバーコラボ",
    attacks: [
      {
        description: "通常撃ち",
        range: 2.2,
      },
    ],
  },
  {
    id: "order_maneuver_replica",
    name: "order_maneuver_replica",
    nameJp: "オーダーマニューバー レプリカ",
    attacks: [
      {
        description: "通常撃ち",
        range: 2.2,
      },
    ],
  },
  {
    id: "kelvin525",
    name: "kelvin525",
    nameJp: "ケルビン525",
    attacks: [
      {
        description: "通常撃ち",
        range: 3.2,
      },
    ],
  },
  {
    id: "kelvin525_deco",
    name: "kelvin525_deco",
    nameJp: "ケルビン525デコ",
    attacks: [
      {
        description: "通常撃ち",
        range: 3.2,
      },
    ],
  },
  {
    id: "dualsweeper",
    name: "dualsweeper",
    nameJp: "デュアルスイーパー",
    attacks: [
      {
        description: "通常撃ち",
        range: 3.1,
      },
    ],
  },
  {
    id: "dualsweeper_custom",
    name: "dualsweeper_custom",
    nameJp: "デュアルスイーパーカスタム",
    attacks: [
      {
        description: "通常撃ち",
        range: 3.1,
      },
    ],
  },
  {
    id: "quadhopper_black",
    name: "quadhopper_black",
    nameJp: "クアッドホッパーブラック",
    attacks: [
      {
        description: "通常撃ち",
        range: 2.6,
      },
    ],
  },
  {
    id: "quadhopper_white",
    name: "quadhopper_white",
    nameJp: "クアッドホッパーホワイト",
    attacks: [
      {
        description: "通常撃ち",
        range: 2.6,
      },
    ],
  },
  {
    id: "gaen_ff",
    name: "gaen_ff",
    nameJp: "ガエンFF",
    attacks: [
      {
        description: "スライド",
        range: 3.0,
      },
      {
        description: "通常撃ち",
        range: 3.9,
      },
    ],
  },
  {
    id: "gaen_ff_custom",
    name: "gaen_ff_custom",
    nameJp: "ガエンFFカスタム",
    attacks: [
      {
        description: "スライド",
        range: 3.0,
      },
      {
        description: "通常撃ち",
        range: 3.9,
      },
    ],
  },
  // 傘
  {
    id: "parashelter",
    name: "parashelter",
    nameJp: "パラシェルター",
    attacks: [
      {
        description: "通常撃ち",
        range: 2.2,
      },
    ],
  },
  {
    id: "parashelter_sorella",
    name: "parashelter_sorella",
    nameJp: "パラシェルターソレーラ",
    attacks: [
      {
        description: "通常撃ち",
        range: 2.2,
      },
    ],
  },
  {
    id: "order_shelter_replica",
    name: "order_shelter_replica",
    nameJp: "オーダーシェルター レプリカ",
    attacks: [
      {
        description: "通常撃ち",
        range: 2.2,
      },
    ],
  },
  {
    id: "campingshelter",
    name: "campingshelter",
    nameJp: "キャンピングシェルター",
    attacks: [
      {
        description: "散弾",
        range: 2.7,
      },
      {
        description: "確１",
        range: 1.9,
      },
    ],
  },
  {
    id: "campingshelter_sorella",
    name: "campingshelter_sorella",
    nameJp: "キャンピングシェルターソレーラ",
    attacks: [
      {
        description: "散弾",
        range: 2.7,
      },
      {
        description: "確１",
        range: 1.9,
      },
    ],
  },
  {
    id: "spygadget",
    name: "spygadget",
    nameJp: "スパイガジェット",
    attacks: [
      {
        description: "通常撃ち",
        range: 2.4,
      },
    ],
  },
  {
    id: "spygadget_sorella",
    name: "spygadget_sorella",
    nameJp: "スパイガジェットソレーラ",
    attacks: [
      {
        description: "通常撃ち",
        range: 2.4,
      },
    ],
  },
  {
    id: "brella24mk1",
    name: "brella24mk1",
    nameJp: "24式張替傘・甲",
    attacks: [
      {
        description: "通常撃ち",
        range: 2.7,
      },
    ],
  },
  {
    id: "brella24mk2",
    name: "brella24mk2",
    nameJp: "24式張替傘・乙",
    attacks: [
      {
        description: "通常撃ち",
        range: 2.7,
      },
    ],
  },
  // ブラスター
  {
    id: "nova",
    name: "nova",
    nameJp: "ノヴァブラスター",
    attacks: [
      {
        description: "爆風",
        range: 2.2,
      },
      {
        description: "直撃",
        range: 1.4,
      },
    ],
  },
  {
    id: "nova_neo",
    name: "nova_neo",
    nameJp: "ノヴァブラスターネオ",
    attacks: [
      {
        description: "爆風",
        range: 2.2,
      },
      {
        description: "直撃",
        range: 1.4,
      },
    ],
  },
  {
    id: "order_blaster_replica",
    name: "order_blaster_replica",
    nameJp: "オーダーブラスター レプリカ",
    attacks: [
      {
        description: "爆風",
        range: 2.2,
      },
      {
        description: "直撃",
        range: 1.4,
      },
    ],
  },
  {
    id: "hotblaster",
    name: "hotblaster",
    nameJp: "ホットブラスター",
    attacks: [
      {
        description: "爆風",
        range: 2.5,
      },
      {
        description: "直撃",
        range: 1.9,
      },
    ],
  },
  {
    id: "hotblaster_custom",
    name: "hotblaster_custom",
    nameJp: "ホットブラスターカスタム",
    attacks: [
      {
        description: "爆風",
        range: 2.5,
      },
      {
        description: "直撃",
        range: 1.9,
      },
    ],
  },
  {
    id: "longblaster",
    name: "longblaster",
    nameJp: "ロングブラスター",
    attacks: [
      {
        description: "爆風",
        range: 3.2,
      },
      {
        description: "直撃",
        range: 2.6,
      },
    ],
  },
  {
    id: "longblaster_custom",
    name: "longblaster_custom",
    nameJp: "ロングブラスターカスタム",
    attacks: [
      {
        description: "爆風",
        range: 3.2,
      },
      {
        description: "直撃",
        range: 2.6,
      },
    ],
  },
  {
    id: "clashblaster",
    name: "clashblaster",
    nameJp: "クラッシュブラスター",
    attacks: [
      {
        description: "爆風",
        range: 2.5,
      },
      {
        description: "直撃",
        range: 0.7,
      },
    ],
  },
  {
    id: "clashblaster_neo",
    name: "clashblaster_neo",
    nameJp: "クラッシュブラスターネオ",
    attacks: [
      {
        description: "爆風",
        range: 2.5,
      },
      {
        description: "直撃",
        range: 0.7,
      },
    ],
  },
  {
    id: "rapid",
    name: "rapid",
    nameJp: "ラピッドブラスター",
    attacks: [
      {
        description: "爆風",
        range: 3.6,
      },
      {
        description: "直撃",
        range: 3.0,
      },
    ],
  },
  {
    id: "rapid_deco",
    name: "rapid_deco",
    nameJp: "ラピッドブラスターデコ",
    attacks: [
      {
        description: "爆風",
        range: 3.6,
      },
      {
        description: "直撃",
        range: 3.0,
      },
    ],
  },
  {
    id: "rapid_elite",
    name: "rapid_elite",
    nameJp: "Rブラスターエリート",
    attacks: [
      {
        description: "爆風",
        range: 4.1,
      },
      {
        description: "直撃",
        range: 3.5,
      },
    ],
  },
  {
    id: "rapid_elite_deco",
    name: "rapid_elite_deco",
    nameJp: "Rブラスターエリートデコ",
    attacks: [
      {
        description: "爆風",
        range: 4.1,
      },
      {
        description: "直撃",
        range: 3.5,
      },
    ],
  },
  {
    id: "sblast92",
    name: "sblast92",
    nameJp: "S-BLAST92",
    attacks: [
      {
        description: "長/爆風",
        range: 3.2,
      },
      {
        description: "長/直撃",
        range: 2.9,
      },
      {
        description: "短/爆風",
        range: 2.3,
      },
      {
        description: "短/直撃",
        range: 1.5,
      },
    ],
  },
  {
    id: "sblast91",
    name: "sblast91",
    nameJp: "S-BLAST91",
    attacks: [
      {
        description: "長/爆風",
        range: 3.2,
      },
      {
        description: "長/直撃",
        range: 2.9,
      },
      {
        description: "短/爆風",
        range: 2.3,
      },
      {
        description: "短/直撃",
        range: 1.5,
      },
    ],
  },
  // 筆
  {
    id: "pablo",
    name: "pablo",
    nameJp: "パブロ",
    attacks: [
      {
        description: "通常撃ち",
        range: 1.3,
      },
    ],
  },
  {
    id: "pablo_hue",
    name: "pablo_hue",
    nameJp: "パブロ・ヒュー",
    attacks: [
      {
        description: "通常撃ち",
        range: 1.3,
      },
    ],
  },
  {
    id: "hokusai",
    name: "hokusai",
    nameJp: "ホクサイ",
    attacks: [
      {
        description: "通常撃ち",
        range: 1.8,
      },
    ],
  },
  {
    id: "hokusai_hue",
    name: "hokusai_hue",
    nameJp: "ホクサイ・ヒュー",
    attacks: [
      {
        description: "通常撃ち",
        range: 1.8,
      },
    ],
  },
  {
    id: "order_brush_replica",
    name: "order_brush_replica",
    nameJp: "オーダーブラシ レプリカ",
    attacks: [
      {
        description: "通常撃ち",
        range: 1.8,
      },
    ],
  },
  {
    id: "fincent",
    name: "fincent",
    nameJp: "フィンセント",
    attacks: [
      {
        description: "通常撃ち",
        range: 2.5,
      },
    ],
  },
  {
    id: "fincent_hue",
    name: "fincent_hue",
    nameJp: "フィンセント・ヒュー",
    attacks: [
      {
        description: "通常撃ち",
        range: 2.5,
      },
    ],
  },
  // 弓
  {
    id: "tristringer",
    name: "tristringer",
    nameJp: "トライストリンガー",
    attacks: [
      {
        description: "フルチャージ",
        range: 5.3,
      },
    ],
  },
  {
    id: "tristringer_collabo",
    name: "tristringer_collabo",
    nameJp: "トライストリンガーコラボ",
    attacks: [
      {
        description: "フルチャージ",
        range: 5.3,
      },
    ],
  },
  {
    id: "order_stringer_replica",
    name: "order_stringer_replica",
    nameJp: "オーダーストリンガー レプリカ",
    attacks: [
      {
        description: "フルチャージ",
        range: 5.3,
      },
    ],
  },
  {
    id: "lact450",
    name: "lact450",
    nameJp: "LACT-450",
    attacks: [
      {
        description: "フルチャージ",
        range: 3.0,
      },
    ],
  },
  {
    id: "lact450_deco",
    name: "lact450_deco",
    nameJp: "LACT-450デコ",
    attacks: [
      {
        description: "フルチャージ",
        range: 3.0,
      },
    ],
  },
  {
    id: "furuido",
    name: "furuido",
    nameJp: "フルイドV",
    attacks: [
      {
        description: "フルチャージ",
        range: 4.6,
      },
    ],
  },
  {
    id: "furuido_custom",
    name: "furuido_custom",
    nameJp: "フルイドVカスタム",
    attacks: [
      {
        description: "フルチャージ",
        range: 4.6,
      },
    ],
  },
  // ワイパー
  {
    id: "jimuwiper",
    name: "jimuwiper",
    nameJp: "ジムワイパー",
    attacks: [
      {
        description: "溜め/インク",
        range: 4.2,
      },
      {
        description: "溜め/本体",
        range: 0.7,
      },
      {
        description: "溜めなし/インク",
        range: 3.6,
      },
      {
        description: "溜めなし/本体",
        range: 0.6,
      },
    ],
  },
  {
    id: "jimuwiper_hue",
    name: "jimuwiper_hue",
    nameJp: "ジムワイパー・ヒュー",
    attacks: [
      {
        description: "溜め/インク",
        range: 4.2,
      },
      {
        description: "溜め/本体",
        range: 0.7,
      },
      {
        description: "溜めなし/インク",
        range: 3.6,
      },
      {
        description: "溜めなし/本体",
        range: 0.6,
      },
    ],
  },
  {
    id: "order_wiper_replica",
    name: "order_wiper_replica",
    nameJp: "オーダーワイパー レプリカ",
    attacks: [
      {
        description: "溜め/インク",
        range: 4.2,
      },
      {
        description: "溜め/本体",
        range: 0.7,
      },
      {
        description: "溜めなし/インク",
        range: 3.6,
      },
      {
        description: "溜めなし/本体",
        range: 0.6,
      },
    ],
  },
  {
    id: "drivewiper",
    name: "drivewiper",
    nameJp: "ドライブワイパー",
    attacks: [
      {
        description: "溜め/インク",
        range: 3.6,
      },
      {
        description: "溜め/本体",
        range: 0.6,
      },
      {
        description: "溜めなし/インク",
        range: 3.0,
      },
      {
        description: "溜めなし/本体",
        range: 0.5,
      },
    ],
  },
  {
    id: "drivewiper_deco",
    name: "drivewiper_deco",
    nameJp: "ドライブワイパーデコ",
    attacks: [
      {
        description: "溜め/インク",
        range: 3.6,
      },
      {
        description: "溜め/本体",
        range: 0.6,
      },
      {
        description: "溜めなし/インク",
        range: 3.0,
      },
      {
        description: "溜めなし/本体",
        range: 0.5,
      },
    ],
  },
  {
    id: "dentalwiper_mint",
    name: "dentalwiper_mint",
    nameJp: "デンタルワイパーミント",
    attacks: [
      {
        description: "溜め/インク",
        range: 3.1,
      },
      {
        description: "溜め/本体",
        range: 1.0,
      },
      {
        description: "溜めなし/インク",
        range: 3.0,
      },
      {
        description: "溜めなし/本体",
        range: 0.9,
      },
    ],
  },
  {
    id: "dentalwiper_sumi",
    name: "dentalwiper_sumi",
    nameJp: "デンタルワイパースミ",
    attacks: [
      {
        description: "溜め/インク",
        range: 3.1,
      },
      {
        description: "溜め/本体",
        range: 1.0,
      },
      {
        description: "溜めなし/インク",
        range: 3.0,
      },
      {
        description: "溜めなし/本体",
        range: 0.9,
      },
    ],
  },
];
