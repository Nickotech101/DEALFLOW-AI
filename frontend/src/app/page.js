import ChatWidget from '@/components/ChatWidget';
import SphereAnimation from '@/components/SphereAnimation';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-white font-sans relative overflow-hidden flex items-center">
      
      {/* Top Right Navigation (Dashboard Button) */}
      <div className="absolute top-6 right-6 z-20">
        <Link href="/dashboard" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-lg hover:shadow-blue-500/20">
          Go to Admin Dashboard →
        </Link>
      </div>

      {/* Main Responsive Grid */}
      <div className="max-w-7xl mx-auto w-full px-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center z-10">
        
        {/* LEFT COLUMN: Sirf Matrix Sphere ko hold karega aur isko left me shift rakhega */}
        <div className="lg:col-span-4 flex justify-center lg:justify-start transform lg:-translate-x-12">
          <SphereAnimation />
        </div>

        {/* MIDDLE COLUMN: (PLACE HERE waali jagah) Jahan aapka DealFlow AI ka Text block ab dikhega */}
        <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
          <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
            DealFlow AI
          </h1>
          <p className="text-gray-400 text-base leading-relaxed max-w-sm">
            Next-gen autonomous sales agent helping businesses capture, enrich, and qualify enterprise leads 24/7.
          </p>
        </div>

        {/* RIGHT COLUMN: ChatWidget space */}
        <div className="lg:col-span-4 relative min-h-[500px] w-full flex justify-center lg:justify-end">
          <div className="w-full max-w-sm lg:absolute lg:bottom-0 lg:right-0">
             <ChatWidget />
          </div>
        </div>

      </div>
    </main>
  );
}