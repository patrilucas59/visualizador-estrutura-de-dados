'use client';

import { useState } from "react";

export default function FilaPage() {
  const [fila, setFila] = useState<number[]>([]);
  const [valor, setValor] = useState('');

  function enfileirar() {
    if (valor.trim() === '') return;
    setFila([...fila, Number(valor)]);
    setValor('');
  }

  function desenfileirar() {
    setFila(fila.slice(1));
  }

  return (
    <main className="p-8 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">Visualizar de Fila</h1>

      <div className='flex flex-col gap-5 mb-6'>
        <input 
          type='number'
          value={valor}
          onChange={(event) => setValor(event.target.value)}
          className='border rounded px-3 py-2 flex-1'
          placeholder='Digite um valor'
        />
        <button 
          onClick={enfileirar}
          className='gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer'
        >
          Enfileirar
        </button>
        <button 
          onClick={desenfileirar}
          className='gap-2 bg-red-600 hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer'
          disabled={fila.length === 0}
        >
          Desenfileirar
        </button>
      </div>

      <div className="flex flex-wrap gap-2 border-2 border-dashed p-4 min-h-50 rounded-lg items-center">
        {fila.length === 0 && (
          <p className='text-center text-gray-400'>A fila está vazia</p>
        )}
        {fila.map((item, index) => (
          <div key={index} className='bg-green-500 text-white text-center py-3 px-4 rounded transition-all duration-300'>
            {item}
          </div>
        ))}
      </div>
    </main>
  )
}