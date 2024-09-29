import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-[#0065CC] via-[#0A83FF] to-[#FFFFFF] text-white min-h-screen pt-24 pb-8 flex flex-col justify-between">
      <div className="px-5 flex-grow flex flex-col justify-center">
        <h1 className="text-[48px] font-semibold leading-tight tracking-[-0.02em] mb-[30px] max-w-[353px]">
          Sculpting Ideas into Reality.
        </h1>
        <p className="text-[18px] font-medium leading-normal text-white mb-[50px] max-w-[353px]">
          We are a subscription-based product development consultancy designing & building software that drives impact.
        </p>
        <div className="flex">
          <Link href="/plans" className="bg-white text-black text-lg font-semibold px-6 py-2 rounded-l-full">
            See Plans
          </Link>
          <button className="bg-white text-black p-2 rounded-r-full">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
