
import Image from 'next/image';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

// Define the collaborators data
const projectInfo = [
  {
    type: 'project',
    title: 'Project Repository',
    img: '/api/placeholder/56/56',
    githubUrl: 'https://github.com/ZakariaRek/DocuSegment-.AI',
    description: 'Check out our project source code and documentation on GitHub.',
  },
  {
    type: 'collaborator',
    name: 'Rekhla Zakaria',
    role: 'Full-Stack Developer',
    img: '/1.jpg',  // Changed from '/public/1.jpg'
    githubUrl: 'https://github.com/ZakariaRek',
    linkedinUrl: 'https://www.linkedin.com/in/zakaria-rekhla-2116a72a1/',
  },
  {
    type: 'collaborator',
    name: 'Hadadia Saad',
    role: 'Full-Stack Developer',
    img: '/2.jpg',  // Changed from '/public/2.jpg'
    githubUrl: 'https://github.com/SaadHadadia',
    linkedinUrl: 'https://www.linkedin.com/in/saad-hadadia-2b1686275?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
];

export default function Features() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="text-3xl font-bold mb-4">Document Segmentation with YoloV10</h2>
            <div className="max-w-2xl mx-auto">
              <p className="text-xl text-slate-500">
                Meet our team and explore our project repository
              </p>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {projectInfo.map((item, index) => (
              <div
                key={index}
                className="flex flex-col bg-slate-100 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                {/* Project Card */}
                {item.type === 'project' && (
                  <>
                    <div className="flex items-center justify-center mb-4">
                      {/* <Github className='bg-black' size={48} /> */}
                      <FaGithub size={48} />

                    </div>
                    <h3 className="text-xl font-bold text-center mb-3">{item.title}</h3>
                    <p className="text-slate-600 mb-4 text-center">{item.description}</p>
                    <div className="mt-auto text-center">
                      <a
                        href={item.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-4 py-2 bg-slate-800 text-white rounded-md hover:bg-slate-700 transition-colors duration-300"
                      >
                        <FaGithub className="mr-2" size={20} />

                        {/* <Github className="mr-2" size={20} /> */}
                        View Repository
                      </a>
                    </div>
                  </>
                )}

                {/* Collaborator Card */}
                {item.type === 'collaborator' && (
                  <>
                    <div className="flex flex-col items-center mb-4">
                      <Image
                        src={item.img}
                        width={120}
                        height={120}
                        alt={item.name || ''}
                        className="rounded-full mb-3"
                      />
                      <h3 className="text-xl font-bold">{item.name}</h3>
                      <p className="text-slate-600 font-medium">{item.role}</p>
                    </div>
                    <p className="text-slate-600 text-center mb-4">{item.description}</p>
                    <div className="mt-auto flex justify-center space-x-4">
                      <a
                        href={item.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-slate-600 hover:text-slate-900"
                      >
                        {/* <Github size={24} /> */}
                        <FaGithub size={24} />

                      </a>
                      <a
                        href={item.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-slate-600 hover:text-slate-900"
                      >
                        {/* <Linkedin  size={24} /> */}
                        <FaLinkedin size={24}  color='sky-blue'/>

                      </a>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}