import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 md:pt-40">
          {/* Hero content */}
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="h1 font-sans mb-6" data-aos="fade-up">
              DocuSegment{' '}
              <span className="relative inline-flexh2 bg-clip-text text-transparent bg-gradient-to-tr from-indigo-500 via-sky-300 to-slate-200 pb-6">
                .AI
              </span>
            </h1>
            <p
              className="text-xl text-slate-500 mb-10"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Transformez instantanément vos documents en données structurées
              grâce à l'IA. Une solution puissante qui segmente automatiquement
              vos documents pour une analyse intelligente et précise.
            </p>
            <div
              className="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div>
                <Link
                  className="btn text-white bg-indigo-500 hover:bg-indigo-600 w-full shadow-sm group"
                  href="/segmentPage"
                >
                  Get Started 
                </Link>
              </div>
              <div>
                <a
                  className="btn text-slate-300 bg-slate-700 hover:bg-slate-600 border-slate-600 w-full shadow-sm"
                  href="#"
                >
                  Read Docs
                </a>
              </div>
            </div>
          </div>
          {/* Hero image */}
          <div
            className="pt-16 md:pt-20"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Image
              className="mx-auto"
              src="/4.png"
              width={420}
              height={10}
              alt="Hero"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
