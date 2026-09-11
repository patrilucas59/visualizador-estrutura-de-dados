import Link from "next/link";

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center min-h-screen p-8 max-w-2xl mx-auto text-center'>
      <h1 className='text-3xl font-bold mb-4'>Visualizador de Estrutura de Dados</h1>
      <p className='text-gray-400 mb-10'>Escolha uma estrutura para ver como ela se organiza em tempo real.</p>

      <div className='flex flex-col gap-4 w-full max-w-xs'>
        <Link href='pilha' className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-lg font-medium transition-colors'>
          Pilha (Stack)
        </Link>
        <Link href='fila' className='bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-lg font-medium transition-colors'>
          Fila (Queue)
        </Link>
        <Link href='arvore' className='bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-4 rounded-lg font-medium transition-colors'>
          Árvore Binária de Busca
        </Link>
        <Link href='array' className='bg-orange-600 hover:bg-orange-700 text-white px-6 py-4 rounded-lg font-medium transition-colors'>
          Array
        </Link>

      </div>
    </main>
  );
}