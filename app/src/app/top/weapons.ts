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
  imageFile: string; // "images/weapons/96.png"
  // killTime: number;
}

// 射程値を内部表現に変換（参考サイトの値 × 40 で既存の表示と近い値に）
export const weapons: Weapon[] = [
  {
    id: "bold",
    name: "Splattershot Nova",
    nameJp: "ボールドマーカー",
    imageFile: "images/weapons/ボールド.png",
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
    imageFile: "images/weapons/ボールドネオ.png",
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
    imageFile: "images/weapons/わかば.png",
    attacks: [
      {
        description: "通常撃ち",
        range: 2.1,
      },
    ],
    //damage: 28,
    //killTime: 0.267,
  },
  {
    id: "wakaba1",
    name: "Splattershot Jr.",
    nameJp: "もみじシューター",
    imageFile: "images/weapons/もみじ.png",
    attacks: [
      {
        description: "通常撃ち",
        range: 2.1,
      },
    ],
    //damage: 28,
    //killTime: 0.267,
  },
  {
    id: "sharp",
    name: "Splash-o-matic",
    nameJp: "シャープマーカー",
    imageFile: "images/weapons/シャプマ.png",
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
    id: "sharp1",
    name: "Splash-o-matic",
    nameJp: "シャープマーカーネオ",
    imageFile: "images/weapons/シマネ.png",
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
    imageFile: "images/weapons/銀モデ.png",
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
    id: "promodeler1",
    name: "Aerospray RG",
    nameJp: "プロモデラーRG",
    imageFile: "images/weapons/金モデ.png",
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
    imageFile: "images/weapons/スプラシューター.png",
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
    id: "splattershot1",
    name: "Splattershot",
    nameJp: "スプラシューターコラボ",
    imageFile: "images/weapons/スプラシューターコラボ.png",
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
    imageFile: "images/weapons/ヒーローシューター.png",
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
    imageFile: "images/weapons/オクタシューター.png",
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
    imageFile: "images/weapons/オーダーシューター.png",
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
    imageFile: "images/weapons/52.png",
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
    id: "52galdeko",
    name: ".52 Galdeko",
    nameJp: ".52ガロンデコ",
    imageFile: "images/weapons/52デコ.png",
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
    imageFile: "images/weapons/黒ザップ.png",
    attacks: [
      {
        description: "通常撃ち",
        range: 2.3,
      },
    ],
    //damage: 30,
    //killTime: 0.267,
  },
  {
    id: "nzap1",
    name: "N-ZAP '89",
    nameJp: "N-ZAP89",
    imageFile: "images/weapons/赤ザップ.png",
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
    imageFile: "images/weapons/プライム.png",
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
    id: "prime1",
    name: "Splattershot Pro",
    nameJp: "プライムシューターコラボ",
    imageFile: "images/weapons/プラコラ.png",
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
    imageFile: "images/weapons/96.png",
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
    imageFile: "images/weapons/96デコ.png",
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
    imageFile: "images/weapons/ジェット.png",
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
    id: "jet1",
    name: "Jet Squelcher",
    nameJp: "ジェットスイーパーカスタム",
    imageFile: "images/weapons/ジェッカス.png",
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
    imageFile: "images/weapons/スペース.png",
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
    imageFile: "images/weapons/スペコラ.png",
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
    imageFile: "images/weapons/L3リールガン.png",
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
    imageFile: "images/weapons/L3リールガンデコ.png",
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
    imageFile: "images/weapons/H3リールガン.png",
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
    imageFile: "images/weapons/H3リールガンデコ.png",
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
    imageFile: "images/weapons/ボトルガイザー.png",
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
    imageFile: "images/weapons/ボトルガイザーフォイル.png",
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
    imageFile: "images/weapons/カーボン.png",
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
    imageFile: "images/weapons/カーデコ.png",
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
    imageFile: "images/weapons/スプラローラー.png",
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
    imageFile: "images/weaponsスプラローラーコラボ.png",
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
    imageFile: "images/weapons/オーダーローラー.png",
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
    imageFile: "images/weapons/ダイナモ.png",
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
    nameJp: "ダイナモローラーテスラ",
    imageFile: "images/weapons/ダイナモテスラ.png",
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
    imageFile: "images/weapons/ワイドローラー.png",
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
    imageFile: "images/weapons/ワイドローラーコラボ.png",
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
    imageFile: "images/weapons/スクイク.png",
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
    imageFile: "images/weapons/スクイクβ.png",
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
    imageFile: "images/weapons/スプラチャージャー.png",
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
    imageFile: "images/weapons/スプラチャージャーコラボ.png",
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
    imageFile: "images/weapons/オーダーチャージャー.png",
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
    imageFile: "images/weapons/スプチャスコープ.png",
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
    imageFile: "images/weapons/スプラスコープコラボ.png",
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
    imageFile: "images/weapons/リッター.png",
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
    imageFile: "images/weapons/リッカス.png",
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
    imageFile: "images/weapons/4Kスコープ.png",
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
    imageFile: "images/weapons/竹・甲.png",
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
    imageFile: "images/weapons/竹・乙.png",
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
    imageFile: "images/weapons/ソイチュ.png",
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
    imageFile: "images/weapons/ソイチュカスタム.png",
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
    imageFile: "images/weapons/R-PEN/5H.png",
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
    imageFile: "images/weapons/R-PEN/5B.png",
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
    imageFile: "images/weapons/バケスロ.png",
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
    imageFile: "images/weapons/バケスロデコ.png",
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
    imageFile: "images/weapons/オーダースロッシャー.png",
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
    imageFile: "images/weapons/ヒッセン.png",
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
    imageFile: "images/weapons/ヒッセンヒュー.png",
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
    imageFile: "images/weapons/スクスロ.png",
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
    imageFile: "images/weapons/スクネオ.png",
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
    imageFile: "images/weapons/オバフロ.png",
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
    imageFile: "images/weapons/オバフロデコ.png",
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
    imageFile: "images/weapons/エクス.png",
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
    imageFile: "images/weapons/エクスカスタム.png",
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
    imageFile: "images/weapons/モップリン.png",
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
    imageFile: "images/weapons/モップリンD.png",
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
    imageFile: "images/weapons/スプスピ.png",
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
    imageFile: "images/weapons/スプスピコラボ.png",
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
    imageFile: "images/weapons/バレル.png",
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
    imageFile: "images/weapons/バレルデコ.png",
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
    imageFile: "images/weapons/オーダースピナー.png",
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
    imageFile: "images/weapons/ハイドラ.png",
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
    imageFile: "images/weapons/ハイドラカスタム.png",
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
    imageFile: "images/weapons/クーゲル.png",
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
    imageFile: "images/weapons/クーゲルヒュー.png",
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
    imageFile: "images/weapons/ノーチラス47.png",
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
    imageFile: "images/weapons/ノーチラス79.png",
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
    imageFile: "images/weapons/イグザミナー.png",
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
    imageFile: "images/weapons/イグザミナーヒュー.png",
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
    imageFile: "images/weapons/スパッタリー.png",
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
    imageFile: "images/weapons/スパッタリーヒュー.png",
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
    imageFile: "images/weapons/スプラマニューバー.png",
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
    imageFile: "images/weapons/スプラマニューバーコラボ.png",
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
    imageFile: "images/weapons/オーダーマニューバー.png",
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
    imageFile: "images/weapons/ケルビン.png",
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
    imageFile: "images/weapons/ケルビンデコ.png",
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
    imageFile: "images/weapons/デュアル.png",
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
    imageFile: "images/weapons/デュアルカスタム.png",
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
    imageFile: "images/weapons/クアッドブラック.png",
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
    imageFile: "images/weapons/クアッドホワイト.png",
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
    imageFile: "images/weapons/ガエン.png",
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
    imageFile: "images/weapons/ガエンカスタム.png",
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
    imageFile: "images/weapons/パラシェルター.png",
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
    imageFile: "images/weapons/パラシェルターソレーラ.png",
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
    imageFile: "images/weapons/オーダーシェルター.png",
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
    imageFile: "images/weapons/キャンプ.png",
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
    imageFile: "images/weapons/キャンプソレーラ.png",
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
    imageFile: "images/weapons/スパイガジェット.png",
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
    imageFile: "images/weapons/スパイガジェットソレーラ.png",
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
    imageFile: "images/weapons/和傘・甲.png",
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
    imageFile: "images/weapons/和傘・乙.png",
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
    imageFile: "images/weapons/ノヴァ.png",
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
    imageFile: "images/weapons/ノヴァネオ.png",
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
    imageFile: "images/weapons/オーダーブラスター.png",
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
    imageFile: "images/weapons/ホット.png",
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
    imageFile: "images/weapons/ホッカス.png",
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
    imageFile: "images/weapons/ロング.png",
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
    imageFile: "images/weapons/ロングカスタム.png",
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
    imageFile: "images/weapons/クラブラ.png",
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
    imageFile: "images/weapons/クラブラネオ.png",
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
    imageFile: "images/weapons/ラピット.png",
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
    imageFile: "images/weapons/ラピデコ.png",
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
    imageFile: "images/weapons/Rブラスターエリート.png",
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
    imageFile: "images/weapons/Rブラスターエリートデコ.png",
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
    imageFile: "images/weapons/S-BLAST92.png",
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
    imageFile: "images/weapons/S-BLAST91.png",
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
    imageFile: "images/weapons/パブロ.png",
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
    imageFile: "images/weapons/パブロヒュー.png",
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
    imageFile: "images/weapons/ホクサイ.png",
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
    imageFile: "images/weapons/ホクサイヒュー.png",
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
    imageFile: "images/weapons/オーダーブラシ.png",
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
    imageFile: "images/weapons/フィンセント.png",
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
    imageFile: "images/weapons/フィンセントヒュー.png",
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
    imageFile: "images/weapons/トラスト.png",
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
    imageFile: "images/weapons/トラストコラボ.png",
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
    imageFile: "images/weapons/オーダーストリンガー.png",
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
    imageFile: "images/weapons/LACT.png",
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
    imageFile: "images/weapons/LACTデコ.png",
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
    imageFile: "images/weapons/フルイド.png",
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
    imageFile: "images/weapons/フルイドカスタム.png",
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
    imageFile: "images/weapons/ジム.png",
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
    imageFile: "images/weapons/ジムヒュー.png",
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
    imageFile: "images/weapons/オーダーワイパー.png",
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
    imageFile: "images/weapons/ドライブワイパー.png",
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
    imageFile: "images/weapons/ドライブワイパーデコ.png",
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
    imageFile: "images/weapons/デンタルミント.png",
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
    imageFile: "images/weapons/デンタルスミ.png",
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
