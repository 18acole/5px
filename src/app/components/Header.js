import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-20 z-50">
      <div className="h-full px-5 flex justify-between items-center">
        <div className="text-2xl font-bold rounded-lg bg-white text-blue-500 px-3 py-1">5px</div>
        <button className="bg-white text-blue-500 px-4 py-2 rounded-full flex items-center">
          See Plans
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </header>
  );
}
