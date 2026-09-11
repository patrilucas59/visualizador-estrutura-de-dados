'use client';

import { useState } from "react";

export default function ArrayPage() {
  const [array, setArray] = useState<number[]>([]);
  const [value, setValue] = useState('');
  const [index, setIndex] = useState('');

  function toAdd() {
    if (value.trim() === '') return;
    setArray([...array, Number(value)]);
    setValue('');
  }

  function insertOnIndex() {
    if (value.trim() === '' || index.trim() === '') return;
    const newIndex = Number(index);
    if (newIndex < 0 || newIndex > array.length) return;

    const newArray = [...array];
    newArray.splice(newIndex, 0, Number(value));
    setArray(newArray);
    setValue('');
    setIndex("");
  }

  function removeIndex() {
    if (index.trim() === '') return;
    const newIndex = Number(index);
    if (newIndex < 0 || newIndex >= array.length) return;

    const newArray = [...array];
    newArray.splice(newIndex, 1);
    setArray(newArray);
    setIndex('');
  }

    function clean() {
      setArray([]);
    }

    return (
      <main className="p-8 max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-center">Visualizador de Array</h1>

        <div className="flex flex-col gap-5 mb-6">
          <input
            type='number'
            value={value}
            onChange={(event) => setValue(event.target.value)}
            className="border rounded px-3 py-2 flex-1"
            placeholder='Valor'
          />

          <input
            type='number'
            value={index}
            onChange={(event) => setIndex(event.target.value)}
            className='border rounded px-3 py-2 flex-1'
            placeholder='Índice (inserir ou remover)'
          />

          <button
          onClick={toAdd}
          className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer'
        >
          Adicionar ao final
        </button>
        <button
          onClick={insertOnIndex}
          className='bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer'
        >
          Inserir no índice
        </button>
        <button
          onClick={removeIndex}
          disabled={array.length === 0}
          className='bg-red-600 hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer'
        >
          Remover do índice
        </button>
        <button
          onClick={clean}
          disabled={array.length === 0}
          className='bg-gray-600 hover:bg-gray-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer'
        >
          Limpar array
        </button>
        </div>

        <div className='flex flex-wrap gap-2 border-2 border-dashed p-4 min-h-50 rounded-lg items-start'>
          {array.length === 0 && (
            <p className='text-center text-gray-400 w-full'>O array está vazio</p>
          )}
          {array.map((item, index) => (
            <div key={index} className='flex flex-col items-center gap-1'>
              <div className='bg-orange-500 text-white text-center py-3 px-4 rounded transition-all duration-300 min-w-12'>
                {item}
              </div>
              <span className='text-xs text-gray-400'>{index}</span>
          </div>
          ))}
        </div>
      </main>
    )
}