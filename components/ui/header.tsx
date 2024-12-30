import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/public/images/logo.svg';

export default function Header({ nav = true }: { nav?: boolean }) {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link className="block" href="/" aria-label="pancaronadev">
            <div className="mt-8 text-2xl  mb-6 font-bold" data-aos="fade-up">
              DocuSegment{' '}
              <span className="relative inline-flex bg-clip-text text-transparent bg-gradient-to-tr from-indigo-500 via-sky-300 to-slate-200 pb-6">
                .AI
              </span>
              </div>
              {/* <Image
                className=""
                src={Logo}
                width={40}
                height={40}
                alt="Logo"
              /> */}
            </Link>
          </div>
          {/* Desktop navigation */}
          {nav && (
            <nav className="flex grow">
              {/* Desktop sign in links */}
              <ul className="flex grow justify-end flex-wrap items-center">
                {/* <li>
                  <Link
                    className="font-medium text-slate-800 hover:text-slate-500 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                    href="/signin"
                  >
                    Sign in
                  </Link>
                </li> */}
                <li className="ml-3">
                  <Link
                    className="btn-sm text-white bg-indigo-500 hover:bg-indigo-600 w-full shadow-sm group"
                    href="/signup"
                  >
                    Get Started
                  </Link>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
