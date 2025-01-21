"use client";
import React, { useState } from "react";
import { weapons } from "./weapons";

export default function Top() {
  const [selectedWeapon, setSelectedWeapon] = useState<string | null>(null);
  const [isWeaponListOpen, setIsWeaponListOpen] = useState(false);

  const handleSelectWeapon = (weaponId: string) => {
    setSelectedWeapon(weaponId);
    setIsWeaponListOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2F338A] to-[#1A1E4D] text-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">SP3 ブキスコープ</h1>
        
        {/* 武器選択エリア */}
        <div className="relative mb-8">
          <button
            onClick={() => setIsWeaponListOpen(!isWeaponListOpen)}
            className="bg-[#FF66A1] hover:bg-[#FF85B1] text-white px-6 py-3 rounded-full 
                     font-semibold transition-all duration-300 mx-auto block
                     shadow-[0_0_10px_4px_rgba(255,102,161,0.3)]
                     hover:shadow-[0_0_15px_6px_rgba(255,133,177,0.5)]"
          >
            {selectedWeapon 
              ? `選択中: ${weapons.find(w => w.id === selectedWeapon)?.nameJp}`
              : "+ ブキを選択"}
          </button>

          {/* 武器リストドロップダウン */}
          {isWeaponListOpen && (
            <div className="absolute mt-2 w-full max-h-96 overflow-y-auto bg-[#2F338A]/95 
                          rounded-lg shadow-lg border border-[#FF66A1]/30 backdrop-blur-sm">
              <div className="p-2">
                {weapons.map((weapon) => (
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
    </div>
  );
}

interface ComparisonTableProps {
  selectedWeaponId: string;
}

function ComparisonTable({ selectedWeaponId }: ComparisonTableProps) {
  const selectedWeapon = weapons.find(w => w.id === selectedWeaponId);
  if (!selectedWeapon) return null;

  const winningWeapons = weapons.filter(w => w.id !== selectedWeaponId && w.range < selectedWeapon.range)
    .sort((a, b) => b.range - a.range);
  const losingWeapons = weapons.filter(w => w.id !== selectedWeaponId && w.range > selectedWeapon.range)
    .sort((a, b) => a.range - b.range);

  const WeaponList = ({ weapons, type }: { weapons: typeof winningWeapons, type: "勝ち" | "負け" }) => (
    <div className={`flex-1 ${type === "勝ち" ? "bg-[#FF66A1]/20" : "bg-[#2F338A]/40"} 
                    p-6 rounded-2xl backdrop-blur-sm
                    border border-white/10 shadow-lg`}>
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <span className={`inline-block w-2 h-2 rounded-full ${type === "勝ち" ? "bg-[#FF66A1]" : "bg-[#2F338A]"}`}></span>
        射程{type}マッチ
        <span className="text-sm font-normal ml-2">({weapons.length})</span>
      </h2>
      {weapons.length === 0 ? (
        <p className="text-white/70">該当なし</p>
      ) : (
        <div className="space-y-3">
          {weapons.map((weapon) => (
            <div key={weapon.id} 
                 className={`flex items-center justify-between p-3 
                          ${type === "勝ち" ? "bg-[#FF66A1]/10" : "bg-[#2F338A]/20"} 
                          rounded-lg transition-all duration-300
                          hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]
                          border border-white/5`}>
              <div>
                <div className="font-medium">{weapon.nameJp}</div>
                <div className="text-sm text-white/70">{weapon.name}</div>
              </div>
              <div className="text-right">
                <div className="font-medium">{weapon.range}</div>
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
        <div className="mt-2 text-xl">射程: {selectedWeapon.range}</div>
      </div>
      
      <div className="flex gap-6 flex-col md:flex-row">
        <WeaponList weapons={winningWeapons} type="勝ち" />
        <WeaponList weapons={losingWeapons} type="負け" />
      </div>
    </div>
  );
}
