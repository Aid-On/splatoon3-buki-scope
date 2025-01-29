interface WeaponAttack {
  description: string;
  range: number;
  // damage: number;
  // minDamage?: number;
  // maxDamage?: number;
}

enum WeaponCategoryID {
  shooter, // 0
  roller, // 1
  charger, // 2
  slosher, //3
  splatling, //4
  dualie, //5
  brella, //6
  blaster, //7
  brush, //8
  stringer, //9
  splatana, //10
}

export interface Weapon {
  id: string;
  categoryID: WeaponCategoryID;
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
    categoryID: WeaponCategoryID.shooter,
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
    categoryID: WeaponCategoryID.shooter,
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
    categoryID: WeaponCategoryID.shooter,
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
    categoryID: WeaponCategoryID.shooter,
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
    categoryID: WeaponCategoryID.shooter,
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
    categoryID: WeaponCategoryID.shooter,
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
    categoryID: WeaponCategoryID.shooter,
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
    categoryID: WeaponCategoryID.shooter,
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
    categoryID: WeaponCategoryID.shooter,
    name: "Splattershot",
    nameJp: "スプラシューター",
    imageFile: "images/weapons/スシ.png",
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
    categoryID: WeaponCategoryID.shooter,
    name: "Splattershot",
    nameJp: "スプラシューターコラボ",
    imageFile: "images/weapons/スシコラ.png",
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
    categoryID: WeaponCategoryID.shooter,
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
    categoryID: WeaponCategoryID.shooter,
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
    categoryID: WeaponCategoryID.shooter,
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
    categoryID: WeaponCategoryID.shooter,
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
    categoryID: WeaponCategoryID.shooter,
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
    categoryID: WeaponCategoryID.shooter,
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
    categoryID: WeaponCategoryID.shooter,
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
    categoryID: WeaponCategoryID.shooter,
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
    categoryID: WeaponCategoryID.shooter,
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
    categoryID: WeaponCategoryID.shooter,
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
    categoryID: WeaponCategoryID.shooter,
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
    categoryID: WeaponCategoryID.shooter,
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
    categoryID: WeaponCategoryID.shooter,
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
    categoryID: WeaponCategoryID.shooter,
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
    categoryID: WeaponCategoryID.shooter,
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
    categoryID: WeaponCategoryID.shooter,
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
    categoryID: WeaponCategoryID.shooter,
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
    categoryID: WeaponCategoryID.shooter,
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
    categoryID: WeaponCategoryID.shooter,
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
    categoryID: WeaponCategoryID.shooter,
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
    categoryID: WeaponCategoryID.shooter,
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
    categoryID: WeaponCategoryID.roller,
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
    categoryID: WeaponCategoryID.roller,
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
    categoryID: WeaponCategoryID.roller,
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
    categoryID: WeaponCategoryID.roller,
    name: "splatroller_collabo",
    nameJp: "スプラローラーコラボ",
    imageFile: "images/weapons/スプラローラーコラボ.png",
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
    categoryID: WeaponCategoryID.roller,
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
    categoryID: WeaponCategoryID.roller,
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
    categoryID: WeaponCategoryID.roller,
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
    categoryID: WeaponCategoryID.roller,
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
    categoryID: WeaponCategoryID.roller,
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
    categoryID: WeaponCategoryID.charger,
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
    categoryID: WeaponCategoryID.charger,
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
    categoryID: WeaponCategoryID.charger,
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
    categoryID: WeaponCategoryID.charger,
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
    categoryID: WeaponCategoryID.charger,
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
    categoryID: WeaponCategoryID.charger,
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
    categoryID: WeaponCategoryID.charger,
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
    categoryID: WeaponCategoryID.charger,
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
    categoryID: WeaponCategoryID.charger,
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
    categoryID: WeaponCategoryID.charger,
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
    id: "liter4k_scope",
    categoryID: WeaponCategoryID.charger,
    name: "liter4k_scopekasutamu",
    nameJp: "4Kスコープカスタム",
    imageFile: "images/weapons/リッカススコープ.png",
    attacks: [
      {
        description: "フルチャージ",
        range: 6.5,
      },
    ],
  },
  {
    id: "bamboo14mk1",
    categoryID: WeaponCategoryID.charger,
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
    categoryID: WeaponCategoryID.charger,
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
    categoryID: WeaponCategoryID.charger,
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
    categoryID: WeaponCategoryID.charger,
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
    categoryID: WeaponCategoryID.charger,
    name: "rpen_5h",
    nameJp: "R-PEN/5H",
    imageFile: "images/weapons/R-PEN 5H.png",
    attacks: [
      {
        description: "フルチャージ",
        range: 5.7,
      },
    ],
  },
  {
    id: "rpen_5b",
    categoryID: WeaponCategoryID.charger,
    name: "rpen_5b",
    nameJp: "R-PEN/5B",
    imageFile: "images/weapons/R-PEN 5B.png",
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
    categoryID: WeaponCategoryID.slosher,
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
    categoryID: WeaponCategoryID.slosher,
    name: "bucketslosher_deco",
    nameJp: "バケットスロッシャーデコ",
    imageFile: "images/weapons/バケデコ.png",
    attacks: [
      {
        description: "通常撃ち",
        range: 3.0,
      },
    ],
  },
  {
    id: "order_slosher_replica",
    categoryID: WeaponCategoryID.slosher,
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
    categoryID: WeaponCategoryID.slosher,
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
    categoryID: WeaponCategoryID.slosher,
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
    categoryID: WeaponCategoryID.slosher,
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
    categoryID: WeaponCategoryID.slosher,
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
    categoryID: WeaponCategoryID.slosher,
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
    categoryID: WeaponCategoryID.slosher,
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
    categoryID: WeaponCategoryID.slosher,
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
    categoryID: WeaponCategoryID.slosher,
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
    categoryID: WeaponCategoryID.slosher,
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
    categoryID: WeaponCategoryID.slosher,
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
    categoryID: WeaponCategoryID.splatling,
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
    categoryID: WeaponCategoryID.splatling,
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
    categoryID: WeaponCategoryID.splatling,
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
    categoryID: WeaponCategoryID.splatling,
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
    categoryID: WeaponCategoryID.splatling,
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
    categoryID: WeaponCategoryID.splatling,
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
    categoryID: WeaponCategoryID.splatling,
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
    categoryID: WeaponCategoryID.splatling,
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
    categoryID: WeaponCategoryID.splatling,
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
    categoryID: WeaponCategoryID.splatling,
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
    categoryID: WeaponCategoryID.splatling,
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
    categoryID: WeaponCategoryID.splatling,
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
    categoryID: WeaponCategoryID.splatling,
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
    categoryID: WeaponCategoryID.dualie,
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
    categoryID: WeaponCategoryID.dualie,
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
    categoryID: WeaponCategoryID.dualie,
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
    categoryID: WeaponCategoryID.dualie,
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
    categoryID: WeaponCategoryID.dualie,
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
    categoryID: WeaponCategoryID.dualie,
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
    categoryID: WeaponCategoryID.dualie,
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
    categoryID: WeaponCategoryID.dualie,
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
    categoryID: WeaponCategoryID.dualie,
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
    categoryID: WeaponCategoryID.dualie,
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
    categoryID: WeaponCategoryID.dualie,
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
    categoryID: WeaponCategoryID.dualie,
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
    categoryID: WeaponCategoryID.dualie,
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
    categoryID: WeaponCategoryID.brella,
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
    categoryID: WeaponCategoryID.brella,
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
    categoryID: WeaponCategoryID.brella,
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
    categoryID: WeaponCategoryID.brella,
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
    categoryID: WeaponCategoryID.brella,
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
    categoryID: WeaponCategoryID.brella,
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
    categoryID: WeaponCategoryID.brella,
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
    categoryID: WeaponCategoryID.brella,
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
    categoryID: WeaponCategoryID.brella,
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
    categoryID: WeaponCategoryID.blaster,
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
    categoryID: WeaponCategoryID.blaster,
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
    categoryID: WeaponCategoryID.blaster,
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
    categoryID: WeaponCategoryID.blaster,
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
    categoryID: WeaponCategoryID.blaster,
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
    categoryID: WeaponCategoryID.blaster,
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
    categoryID: WeaponCategoryID.blaster,
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
    categoryID: WeaponCategoryID.blaster,
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
    categoryID: WeaponCategoryID.blaster,
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
    categoryID: WeaponCategoryID.blaster,
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
    categoryID: WeaponCategoryID.blaster,
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
    categoryID: WeaponCategoryID.blaster,
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
    categoryID: WeaponCategoryID.blaster,
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
    categoryID: WeaponCategoryID.blaster,
    name: "sblast92",
    nameJp: "S-BLAST92",
    imageFile: "images/weapons/S_BLAST92.png",
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
    categoryID: WeaponCategoryID.blaster,
    name: "sblast91",
    nameJp: "S-BLAST91",
    imageFile: "images/weapons/S_BLAST91.png",
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
    categoryID: WeaponCategoryID.brush,
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
    categoryID: WeaponCategoryID.brush,
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
    categoryID: WeaponCategoryID.brush,
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
    categoryID: WeaponCategoryID.brush,
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
    categoryID: WeaponCategoryID.brush,
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
    categoryID: WeaponCategoryID.brush,
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
    categoryID: WeaponCategoryID.brush,
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
    categoryID: WeaponCategoryID.stringer,
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
    categoryID: WeaponCategoryID.stringer,
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
    categoryID: WeaponCategoryID.stringer,
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
    categoryID: WeaponCategoryID.stringer,
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
    categoryID: WeaponCategoryID.stringer,
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
    categoryID: WeaponCategoryID.stringer,
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
    categoryID: WeaponCategoryID.stringer,
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
    categoryID: WeaponCategoryID.splatana,
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
    categoryID: WeaponCategoryID.splatana,
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
    categoryID: WeaponCategoryID.splatana,
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
    categoryID: WeaponCategoryID.splatana,
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
    categoryID: WeaponCategoryID.splatana,
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
    categoryID: WeaponCategoryID.splatana,
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
    categoryID: WeaponCategoryID.splatana,
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
