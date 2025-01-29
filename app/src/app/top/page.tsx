"use client";
import React, { useState } from "react";
import { weapons, Weapon } from "./weapons";
import { Header } from "../../components/Header";
import { FirebaseAuthHandler, FirebaseAuthProvider } from "../../firebase/Auth";
import { getAuth } from "firebase/auth";
import { getFirebaseApp } from "../../firebase/App";
import { resolvePublicPath } from "@/resolvePublicPath";

function toggleKana(str: string): string {
  // ひらがな・カタカナに該当する文字を正規表現で検索
  return str.replace(/[\u3041-\u3096\u30A1-\u30FA]/g, (char) => {
    const code = char.charCodeAt(0);

    // ひらがな(U+3041〜U+3096) → カタカナ(U+30A1〜U+30FA)
    if (code >= 0x3041 && code <= 0x3096) {
      return String.fromCharCode(code + 0x60);
    }
    // カタカナ(U+30A1〜U+30FA) → ひらがな(U+3041〜U+3096)
    else if (code >= 0x30a1 && code <= 0x30fa) {
      return String.fromCharCode(code - 0x60);
    }

    // それ以外は変換せずそのまま返す
    return char;
  });
}

export default function Top() {
  const [selectedWeapon, setSelectedWeapon] = useState<string | null>(null);
  const [isWeaponListOpen, setIsWeaponListOpen] = useState(false);
  const [userWeaponInput, setUserWeaponInput] = useState("");

  const app = getFirebaseApp();
  const auth = getAuth(app);
  const authProvider = new FirebaseAuthProvider(auth);
  const authHandler = new FirebaseAuthHandler(authProvider);

  const handleSelectWeapon = (weaponId: string) => {
    setSelectedWeapon(weaponId);
    setIsWeaponListOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header authHandler={authHandler} />
      <main className="flex-1 p-4 md:p-8 bg-gradient-to-br from-[#2F338A] to-[#1A1E4D] text-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Splatoon3 ブキスコープ</h1>

          {/* 武器選択エリア */}
          <div className="relative mb-8">
            <button
              onClick={() => setIsWeaponListOpen(!isWeaponListOpen)}
              className="bg-[#FF66A1] hover:bg-[#FF85B1] text-white px-6 py-3 rounded-full 
                       font-semibold transition-all duration-300 mx-auto block
                       shadow-[0_0_10px_4px_rgba(255,102,161,0.3)]
                       hover:shadow-[0_0_15px_6px_rgba(255,133,177,0.5)]"
            >
              {selectedWeapon ? `選択中: ${weapons.find((w) => w.id === selectedWeapon)?.nameJp}` : "+ ブキを選択"}
            </button>

            {/* 武器リストドロップダウン */}
            {isWeaponListOpen && (
              <div
                className="absolute mt-2 w-full max-h-96 overflow-y-auto bg-[#2F338A]/95 
                            rounded-lg shadow-lg border border-[#FF66A1]/30 backdrop-blur-sm z-50"
              >
                <div className="p-2">
                  <textarea
                    className="iruka chan iikanji ni iretoite ne"
                    placeholder="検索したい武器を入れてね"
                    onChange={(event) => {
                      const userInput = event.target.value;
                      setUserWeaponInput(userInput);
                    }}
                  ></textarea>
                  {weapons
                    .filter((weapon) => {
                      // "weaponには武器名が入ってる"
                      // weapon.nameJp
                      // weapon.nameJpは文字列なので、includesという関数が使える
                      // weapon.nameJp.includes("シューター") => true もしくは false
                      return [userWeaponInput, toggleKana(userWeaponInput)].some((el) => weapon.nameJp.includes(el));
                    })
                    .map((weapon) => (
                      <button
                        key={weapon.id}
                        onClick={() => handleSelectWeapon(weapon.id)}
                        className="w-full text-left px-4 py-3 hover:bg-[#FF66A1]/20 
                               rounded-md transition-colors duration-200 flex justify-between items-center"
                      >
                        <span>{weapon.nameJp}</span>
                        <span className="text-sm opacity-70">({weapon.name})</span>
                      </button>
                    ))}
                </div>
              </div>
            )}
          </div>

          {/* 比較テーブル */}
          {selectedWeapon && <ComparisonTable selectedWeaponId={selectedWeapon} />}
        </div>
      </main>
    </div>
  );
}

interface ComparisonTableProps {
  selectedWeaponId: string;
}

function ComparisonTable({ selectedWeaponId }: ComparisonTableProps) {
  const sortingWeapon: (a: Weapon, b: Weapon) => number = (a, b) => {
    // カテゴリIDで昇順に並べる
    const categoryComparison = (a?.categoryID ?? -1) - (b?.categoryID ?? -1);
    if (categoryComparison !== 0) {
      return categoryComparison; // カテゴリIDが異なればそのまま返す
    }
    // 同じカテゴリ内ではrangeで降順に並べる
    return b.attacks[0].range - a.attacks[0].range;
  };
  const selectedWeapon = weapons.find((w) => w.id === selectedWeaponId);
  if (!selectedWeapon) return null;
  const sameRangeWeapons = weapons
    .filter((w) => {
      return selectedWeapon.attacks[0].range === w.attacks[0].range;
    })
    .sort(sortingWeapon);
  const winningWeapons = weapons
    .filter((w) => w.id !== selectedWeaponId && w.attacks[0].range < selectedWeapon.attacks[0].range)
    .sort(sortingWeapon);
  const losingWeapons = weapons
    .filter((w) => w.id !== selectedWeaponId && w.attacks[0].range > selectedWeapon.attacks[0].range)
    .sort(sortingWeapon);

  const colorByResultType = (type: "勝ち" | "同じ" | "負け") => {
    // type === "勝ち" ? "bg-[#FF66A1]/20" : "bg-[#2F338A]/40"
    // https://www.colordic.org/w
    switch (type) {
      case "勝ち":
        return "#ff6666";
      case "同じ":
        return "#2db300";
      case "負け":
        return "#0066cc";
    }
  };

  const WeaponList = ({ weapons, type }: { weapons: typeof winningWeapons; type: "勝ち" | "同じ" | "負け" }) => (
    <div
      style={{ backgroundColor: colorByResultType(type) }} // 動的に背景色を指定
      className={`flex-1 p-6 rounded-2xl backdrop-blur-sm border border-white/10 shadow-lg`}
    >
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <span
          style={{ backgroundColor: colorByResultType(type) }} // 色付きの丸
          className="inline-block w-2 h-2 rounded-full"
        ></span>
        射程{type}マッチ
        <span className="text-sm font-normal ml-2">({weapons.length})</span>
      </h2>
      {weapons.length === 0 ? (
        <p className="text-white/70">該当なし</p>
      ) : (
        <div className="space-y-3">
          {weapons.map((weapon) => (
            <div
              key={weapon.id}
              style={{ backgroundColor: colorByResultType(type) }} // 動的に背景色を適用
              className={`flex items-center justify-between p-3 rounded-lg transition-all duration-300
                          hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]
                          border border-white/5`}
            >
              <img alt="xxx" width="60px" height="60px" src={weapon.imageFile} />
              <div>
                <div className="font-medium">{weapon.nameJp}</div>
                <div className="text-sm text-white/70">{weapon.name}</div>
              </div>
              <div className="text-right">
                <div className="font-medium">{weapon.attacks[0].range}</div>
                <div className="text-sm text-white/70">射程</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="mt-8 space-y-4">
      <div className="text-center mb-8">
        <div className="text-2xl font-bold">{selectedWeapon.nameJp}</div>
        <div className="text-white/70">({selectedWeapon.name})</div>
        <div className="mt-2 text-xl">射程: {selectedWeapon.attacks[0].range}</div>
      </div>

      <div className="flex gap-6 flex-col md:flex-row">
        <WeaponList weapons={winningWeapons} type="勝ち" />
        <WeaponList weapons={sameRangeWeapons} type="同じ" />
        <WeaponList weapons={losingWeapons} type="負け" />
      </div>
    </div>
  );
}
