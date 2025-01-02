"use client"
import React, { useState } from 'react';

export default function DragDrop() {
  const [base64String, setBase64String] = useState('');
  const [previewUrl, setPreviewUrl] = useState('');
  const [annotatedImage, setAnnotatedImage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = (e) => {
      const result = e.target?.result as string;
      setBase64String(result);
      setPreviewUrl(result);
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('http://127.0.0.1:8000/predict/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ file: base64String.split(',')[1] }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch annotated image');
      }

      const data = await response.json();
      setAnnotatedImage(data.annotated_image);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `data:image/jpeg;base64,${annotatedImage}`;
    link.download = 'annotated-image.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 md:pt-40 container mx-auto py-8 px-4">
          <h1 className="text-3xl font-bold text-center mb-8">
            Document Segmentation with{' '}
            <span className="relative inline-flex bg-clip-text text-transparent bg-gradient-to-tr from-indigo-500 via-sky-300 to-slate-200 pb-6">
              YoloV 10
            </span>
          </h1>

          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg">
            <div className="p-6 space-y-6">
              <div className="flex flex-col items-center gap-4">
                <div className="w-40 h-40 bg-sky-100 rounded-2xl flex items-center justify-center overflow-hidden">
                  {previewUrl ? (
                    <img
                      src={previewUrl}
                      alt="Preview"
                      className="max-w-full max-h-full object-contain"
                    />
                  ) : (
                    <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-8 h-8 text-sky-500"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <polyline points="21 15 16 10 5 21" />
                      </svg>
                    </div>
                  )}
                </div>

                <button
                  className="px-6 py-2 bg-sky-400 hover:bg-sky-500 text-white rounded-xl transition-all duration-200 shadow-md hover:shadow-lg"
                  onClick={() => document.getElementById('file-upload')?.click()}
                >
                  Upload Image
                </button>
                <input
                  type="file"
                  id="file-upload"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileUpload}
                />
              </div>

              {base64String && (
                <div className="space-y-2">
                  <button
                    className="w-full px-6 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded-xl transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={handleSubmit}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center gap-2">
                        <svg
                          className="animate-spin h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Processing...
                      </div>
                    ) : (
                      'Submit Image for Annotation'
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>
          {annotatedImage && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-center">
                Annotated Image
              </h2>
              <div className="w-full bg-sky-100 rounded-2xl flex flex-col items-center justify-center mt-4 p-6 space-y-4">
                <img
                  src={`data:image/jpeg;base64,${annotatedImage}`}
                  alt="Annotated Preview"
                  className="max-w-full max-h-full object-contain rounded-xl"
                />
                <button
                  onClick={handleDownload}
                  className="px-6 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download Image
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}