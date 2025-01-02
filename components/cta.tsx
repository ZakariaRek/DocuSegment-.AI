import Image from 'next/image'
import Link from 'next/link'
import Illustration from '@/public/images/cta-illustration.svg'

export default function Cta() {
  return (
    <section className="relative border-t border-slate-300">
      {/* Bg gradient: top */}
      <div
        className="absolute top-0 left-0 right-0 bg-gradient-to-b from-indigo-700 to-transparent opacity-25 h-[25rem] pointer-events-none -z-10"
        aria-hidden="true"
      />
      {/* Illustration */}
      <div className="hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 -mt-8 pointer-events-none -z-10" aria-hidden="true">
        <Image src={Illustration} className="max-w-none" alt="Document Analysis Illustration" />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20" data-aos="fade-up">
            <h2 className="h2 font-sans">Join Our Open Source Document Analysis Platform</h2>
          </div>
          {/* Buttons */}
          <div className="text-center">
            <div className="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <div data-aos="fade-up" data-aos-delay="100">
                <Link 
                  className="btn text-white bg-indigo-500 hover:bg-indigo-600 w-full shadow-sm group px-8 py-3 rounded-full"
                  href="https://github.com/ZakariaRek/DocuSegment-.AI"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </Link>
              </div>
              <div data-aos="fade-up" data-aos-delay="200">
                <a 
                  className="btn text-slate-300 bg-slate-700 hover:bg-slate-600 border-slate-600 w-full shadow-sm px-8 py-3 rounded-full"
                  href="https://github.com/ZakariaRek/DocuSegment-.AI/blob/main/README.md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read Documentation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}