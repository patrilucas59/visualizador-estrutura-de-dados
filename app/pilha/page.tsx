'use client';

import { useState } from "react";

export default function StackPage() {
  const [stack, setStack] = useState<number[]>([]);
  const [value, setValue] = useState('');

  function toStack() {
    if (value.trim() === '') return;
    setStack([...stack, Number(value)]);
    setValue('');
  }

  function unStack() {
    setStack(stack.slice(0, -1));
  }

  return (
    <main className="p-8 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">Visualizar de Pilha</h1>

      <div className='flex flex-col gap-5 mb-6'>
        <input 
          type='number'
          value={value}
          onChange={(event) => setValue(event.target.value)}
          className='border rounded px-3 py-2 flex-1'
          placeholder='Digite um valor'
        />
        <button 
          onClick={toStack}
          className='gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer'  
        >
          Empilhar
        </button>
        <button 
          onClick={unStack}
          className='gap-2 bg-red-600 hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer'  
        >
          Desempilhar
        </button>
      </div>

      <div className="flex flex-col-reverse gap-2 border-2 border-dashed p-4 min-h-50 rounded-lg">
        {stack.length === 0 && (
          <p className='text-center text-gray-400'>A pilha está vazia</p>
        )}
        {stack.map((item, index) => (
          <div key={index} className='bg-blue-500 text-white text-center py-3 rounded transition-all duration-300'>
            {item}
          </div>
        ))}
      </div>
    </main>
  )
}