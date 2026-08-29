'use client';

import { useState } from "react";

type NoTree = {
  valor: number;
  esquerda: NoTree | null;
  direita: NoTree | null;
};

function inserir(no: NoTree | null, valor: number): NoTree {
  if (no === null) {
    return { valor, esquerda: null, direita: null };
  }
  if (valor < no.valor) {
    return { ...no, esquerda: inserir(no.esquerda, valor) };
  }
  if (valor > no.valor) {
    return { ...no, direita: inserir(no.direita, valor) };
  }
  return no;
}

function NoVisual({ no }: { no: NoTree | null }) {
  if (no === null) return null;

  return (
    <div className="flex flex-col items-center">
      <div className="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">
        {no.valor}
      </div>
      {(no.esquerda || no.direita) && (
        <div className="flex gap-8 mt-4">
          <div className="flex flex-col items-center">
            {no.esquerda ? <NoVisual no={no.esquerda} /> : <div className="w-12" />}
          </div>
          <div className="flex flex-col items-center">
            {no.direita ? <NoVisual no={no.direita} /> : <div className="w-12" />}
          </div>
        </div>
      )}
    </div>
  );
}

export default function ArvorePage() {
  const [raiz, setRaiz] = useState<NoTree | null>(null);
  const [valor, setValor] = useState("");

  function adicionar() {
    if (valor.trim() === "") return;
    setRaiz(inserir(raiz, Number(valor)));
    setValor("");
  }

  function limpar() {
    setRaiz(null);
  }

  return (
    <main className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">Visualizador de Árvore</h1>

      <div className="flex flex-col gap-5 mb-6">
        <input
          type="number"
          value={valor}
          onChange={(event) => setValor(event.target.value)}
          className="border rounded px-3 py-2 flex-1"
          placeholder="Digite um valor"
        />
        <button
          onClick={adicionar}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer"
        >
          Adicionar
        </button>
        <button
          onClick={limpar}
          disabled={raiz === null}
          className="bg-red-600 hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer"
        >
          Limpar árvore
        </button>
      </div>

      <div className="flex justify-center border-2 border-dashed p-8 min-h-50 rounded-lg overflow-x-auto">
        {raiz === null ? (
          <p className="text-center text-gray-400 self-center">A árvore está vazia</p>
        ) : (
          <NoVisual no={raiz} />
        )}
      </div>
    </main>
  );
}