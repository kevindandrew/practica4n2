import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <nav className="bg-slate-700 h-12 flex items-center">
        <h2 className="ml-10 text-white text-2xl">Popular Titles</h2>
      </nav>
      <div className="bg-white h-screen items-center flex p-10">
        <div className="flex gap-8">
          <div className="flex flex-col">
            <Link href="/series" className="bg-slate-900 text-white text-center flex items-center justify-center relative">
              <div className="relative h-96 w-72 flex items-center justify-center overflow-hidden">
                <Image
                  src="/assets/placeholder.png"
                  alt="imagenchida"
                  layout="fill"
                  objectFit="cover" 
                  className="absolute inset-0 z-0" 
                />
                <span className="relative z-10 text-5xl font-bold">SERIES</span> 
              </div>
            </Link>
            <span>Popular Series</span>
          </div>


          <div className="flex flex-col">
            <Link href="/movies" className="bg-slate-900 text-white text-center flex items-center justify-center relative">
              <div className="relative h-96 w-72 flex items-center justify-center overflow-hidden">
                <Image
                  src="/assets/placeholder.png"
                  alt="imagenchida"
                  layout="fill" 
                  objectFit="cover" 
                  className="absolute inset-0 z-0" 
                />
                <span className="relative z-10 text-5xl font-bold">MOVIES</span> 
              </div>
            </Link>
            <span>Popular Movies</span>
          </div>
        </div>

      </div>
    </>
  );
}
