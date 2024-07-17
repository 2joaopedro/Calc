'use client'
import { useState } from "react";

export default function Home() {
  const [valorPx, setValorPx] = useState('');
  const [valorRem, setValorRem] = useState('');
  const [selectedOption, setSelectedOption] = useState('px');

  const pxToRem = (px: string) => {
    if (px === '') {
      setValorRem('');
    } else {
      const rem = Number(px) / 16;
      setValorRem(rem.toString());
    }
  };

  const remToPx = (rem: string) => {
    if (rem === '') {
      setValorPx('');
    } else {
      const px = Number(rem) * 16;
      setValorPx(px.toString());
    }
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
    setValorPx('');
    setValorRem('');
  };

  return (
    <main className="flex h-screen flex-col items-center justify-center p-24 bg-slate-900">
      <div className="flex flex-col justify-center items-center gap-6">
        <h1 className="text-3xl text-slate-300">Conversor de pixels para rem</h1>
        <div className="flex justify-center items-center">
          {selectedOption === 'px' ? (
            <input
              type="number"
              value={valorPx}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setValorPx(e.target.value);
                pxToRem(e.target.value);
              }}
              placeholder="Insere o valor em px"
              className="m-2 p-2 border rounded-lg focus:outline-none bg-slate-700 text-slate-200"
              style={{ appearance: 'none', MozAppearance: 'textfield' }}
            />
          ) : (
            <input
              type="number"
              value={valorRem}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setValorRem(e.target.value);
                remToPx(e.target.value);
              }}
              placeholder="Insere o valor em rem"
              className="m-2 p-2 border rounded-lg focus:outline-none bg-slate-700 text-slate-200"
              style={{ appearance: 'none', MozAppearance: 'textfield' }}
            />
          )}
          <div>
            <select
              value={selectedOption}
              onChange={handleSelectChange}
              className="m-2 p-2 border rounded-lg bg-slate-700 text-slate-200 focus:outline-none"
            >
              <option value="px">Px To Rem</option>
              <option value="rem">Rem To Px</option>
            </select>
          </div>
        </div>
        <p className="text-slate-100 font-medium">
          {selectedOption === 'px' ? `${valorRem} rem` : `${valorPx} px`}
        </p>
      </div>
    </main>
  );
}
