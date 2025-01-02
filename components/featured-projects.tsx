import Image from 'next/image';

export default function FeaturedProjects() {
  const projects = [
    {
      img: '/logo.png',
      title: 'Text Detection & Recognition',
      description:
        'Advanced YOLOv10-based system for precise text detection and recognition in various document types, including handwritten and printed text.',
      link: 'https://github.com/ZakariaRek/DocuSegment-.AI'
    },
    {
      img: '/3.png',
      title: 'Document Segmentation',
      description:
        'Intelligent document layout analysis and segmentation capabilities, automatically identifying different document components and structures.',
      link: 'https://github.com/ZakariaRek/DocuSegment-.AI'
    },
  ];

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="font-aspekta text-xl font-[650] mb-5">
          Key Features of DocuSegment.AI
        </h2>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <a
              key={index}
              className="rounded-lg border border-slate-300 odd:-rotate-1 even:rotate-1 hover:rotate-0 transition-transform duration-700 hover:duration-100 ease-in-out p-5 bg-white hover:shadow-lg"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex flex-col h-full">
                <div className="grow">
                  <div className="h-40 w-full relative mb-4 overflow-hidden rounded-lg">
                    <Image
                      src={project.img}
                      layout="fill"
                      objectFit="contain"
                      alt={project.title}
                      className="transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="text-lg font-aspekta font-[650] mb-1">
                    {project.title}
                  </div>
                  <p className="text-sm text-slate-500 mb-2">
                    {project.description}
                  </p>
                </div>
                <div className="text-sky-500 flex justify-end items-center group">
                  <span className="mr-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    View Project
                  </span>
                  <svg
                    className="fill-current transform group-hover:translate-x-1 transition-transform"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="12"
                  >
                    <path d="M9.586 5 6.293 1.707 7.707.293 13.414 6l-5.707 5.707-1.414-1.414L9.586 7H0V5h9.586Z" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}