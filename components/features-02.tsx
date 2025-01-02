'use client';

import { useState } from 'react';
import Image from 'next/image';
import Illustration from '@/public/images/features-illustration-02.svg';
import FeaturesImage from '@/public/images/features-image.png';

export default function Features02() {
  const [category, setCategory] = useState<string>('1');

  return (
    <section className="relative border-t border-slate-300">
      {/* Bg gradient: top */}
      <div
        className="absolute top-0 left-0 right-0 bg-gradient-to-b from-slate-700 to-transparent opacity-25 h-[25rem] pointer-events-none -z-10"
        aria-hidden="true"
      />
      {/* Illustration */}
      <div
        className="hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 mt-40 pointer-events-none -z-10"
        aria-hidden="true"
      >
        <Image
          src={Illustration}
          className="max-w-none"
          width="1440"
          height="453"
          alt="Features Illustration"
        />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-sans">
              Advanced Document Analysis Features
            </h2>
          </div>
          {/* Box */}
          <div className="bg-slate-200 drop-shadow-md bg-opacity-60 rounded overflow-hidden">
            <div className="flex flex-col md:flex-row items-end md:items-start md:justify-between lg:space-x-20">
              <div className="md:min-w-[28rem] p-6 lg:p-10">
                {/* Filters */}
                <div className="mb-6 lg:mb-8">
                  <div className="flex flex-wrap -m-1.5">
                    <button
                      className={`btn-sm px-3 py-1 shadow-sm rounded-full m-1.5 ${
                        category === '1'
                          ? 'text-white bg-slate-800'
                          : 'text-slate-700 bg-slate-300 hover:bg-slate-400 border-slate-400'
                      }`}
                      onClick={() => setCategory('1')}
                    >
                      Text Detection
                    </button>
                    <button
                      className={`btn-sm px-3 py-1 shadow-sm rounded-full m-1.5 ${
                        category === '2'
                          ? 'text-white bg-slate-800'
                          : 'text-slate-700 bg-slate-300 hover:bg-slate-400 border-slate-400'
                      }`}
                      onClick={() => setCategory('2')}
                    >
                      Layout Analysis
                    </button>
                    <button
                      className={`btn-sm px-3 py-1 shadow-sm rounded-full m-1.5 ${
                        category === '3'
                          ? 'text-white bg-slate-800'
                          : 'text-slate-700 bg-slate-300 hover:bg-slate-400 border-slate-400'
                      }`}
                      onClick={() => setCategory('3')}
                    >
                      Document Classification
                    </button>
                  </div>
                </div>
                {/* Content */}
                <div>
                  <div className={`${category !== '1' && 'hidden'}`}>
                    <h3 className="h3 font-sans mb-2">
                      Advanced Text Detection & Recognition
                    </h3>
                    <div className="text-lg text-slate-600">
                      Our YOLOv10-based system precisely identifies and extracts text from various document types. 
                      Whether it's handwritten notes, printed text, or complex layouts, our model ensures accurate detection 
                      with state-of-the-art performance.
                    </div>
                  </div>
                  <div className={`${category !== '2' && 'hidden'}`}>
                    <h3 className="h3 font-sans mb-2">
                      Intelligent Layout Analysis
                    </h3>
                    <div className="text-lg text-slate-600">
                      Understand document structure with our advanced layout analysis. The system automatically 
                      identifies headers, paragraphs, tables, and other structural elements, making document 
                      processing more efficient and accurate.
                    </div>
                  </div>
                  <div className={`${category !== '3' && 'hidden'}`}>
                    <h3 className="h3 font-sans mb-2">
                      Smart Document Classification
                    </h3>
                    <div className="text-lg text-slate-600">
                      Automatically categorize documents based on their content and structure. Our system can 
                      distinguish between invoices, receipts, forms, and other document types, streamlining 
                      your document management workflow.
                    </div>
                  </div>
                </div>
              </div>
              <Image
                src={FeaturesImage}
                className="md:max-w-none"
                width="480"
                height="414"
                alt="Document Analysis Feature"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}