import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/public/images/logo.svg'


export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 border-t border-slate-300">
        {/* Blocks */}
        {/* <div className="grid sm:grid-cols-12 lg:grid-cols-10 gap-8 py-8 md:py-12 border-t border-slate-300"> */}
          {/* 1st block */}
          
          {/* 4th block */}
         
          {/* 5th block */}
          
        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between pb-4 md:pb-8">
          {/* Social links */}
          <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
            <li className="ml-2">
              <a
                className="flex justify-center items-center text-indigo-500 hover:text-slate-500 transition duration-150 ease-in-out"
                href="https://github.com/ZakariaRek/DocuSegment-.AI"
                aria-label="Github"
              >
                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                </svg>
              </a>
            </li>
          </ul>
          {/* Links */}
          <div className="text-sm text-slate-600">
            <a className="text-slate-800 hover:text-slate-500 transition duration-150 ease-in-out" href="#0">Zakaria Rekhla -- Saad Hadadia</a> · <a className="text-slate-800 hover:text-slate-500 transition duration-150 ease-in-out" href="#0">Copy-Right 2025</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
