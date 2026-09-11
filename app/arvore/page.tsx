'use client';

import { useState } from "react";

type NoTree = {
  value: number;
  left: NoTree | null;
  right: NoTree | null;
};

function insert(no: NoTree | null, value: number): NoTree {
  if (no === null) {
    return { value, left: null, right: null };
  }
  if (value < no.value) {
    return { ...no, left: insert(no.left, value) };
  }
  if (value > no.value) {
    return { ...no, right: insert(no.right, value) };
  }
  return no;
}

function NoVisual({ no }: { no: NoTree | null }) {
  if (no === null) return null;

  return (
    <div className="flex flex-col items-center">
      <div className="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">
        {no.value}
      </div>
      {(no.left || no.right) && (
        <div className="flex gap-8 mt-4">
          <div className="flex flex-col items-center">
            {no.left ? <NoVisual no={no.left} /> : <div className="w-12" />}
          </div>
          <div className="flex flex-col items-center">
            {no.right ? <NoVisual no={no.right} /> : <div className="w-12" />}
          </div>
        </div>
      )}
    </div>
  );
}

export default function TreePage() {
  const [root, setRoot] = useState<NoTree | null>(null);
  const [value, setValue] = useState("");

  function add() {
    if (value.trim() === "") return;
    setRoot(insert(root, Number(value)));
    setValue("");
  }

  function toClean() {
    setRoot(null);
  }

  return (
    <main className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">Visualizador de Árvore</h1>

      <div className="flex flex-col gap-5 mb-6">
        <input
          type="number"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          className="border rounded px-3 py-2 flex-1"
          placeholder="Digite um valor"
        />
        <button
          onClick={add}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer"
        >
          Adicionar
        </button>
        <button
          onClick={toClean}
          disabled={root === null}
          className="bg-red-600 hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer"
        >
          Limpar árvore
        </button>
      </div>

      <div className="flex justify-center border-2 border-dashed p-8 min-h-50 rounded-lg overflow-x-auto">
        {root === null ? (
          <p className="text-center text-gray-400 self-center">A árvore está vazia</p>
        ) : (
          <NoVisual no={root} />
        )}
      </div>
    </main>
  );
}