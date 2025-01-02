export default function Faqs() {
  // Array of FAQ items
  const faqs = [
    {
      question: 'What is DocuSegment.AI and how does it work?',
      answer:
        'DocuSegment.AI is an advanced document analysis system that uses YOLOv10 for text detection and segmentation. It automatically identifies and extracts text from documents, analyzes document layouts, and classifies different types of documents with high accuracy.',
    },
    {
      question: 'What types of documents can be processed?',
      answer:
        'Our system can process a wide range of documents including printed text, handwritten notes, forms, invoices, receipts, and complex layouts. The AI model is trained to handle various document formats and styles.',
    },
    {
      question: 'How accurate is the text detection system?',
      answer:
        'Our YOLOv10-based text detection system achieves high accuracy rates thanks to advanced deep learning techniques. The system is continuously improved through training on diverse document datasets and real-world applications.',
    },
    {
      question: 'What are the technical requirements for using DocuSegment.AI?',
      answer:
        'The system can be run on most modern computers with Python support. For optimal performance, we recommend using a system with GPU capabilities. Detailed technical requirements and setup instructions are available in our GitHub repository.',
    },
    {
      question: 'Is the project open source and can I contribute?',
      answer:
        'Yes, DocuSegment.AI is open source and available on GitHub. We welcome contributions from the community, whether it\'s improving the code, adding new features, or helping with documentation. Check our contribution guidelines on GitHub.',
    },
    {
      question: 'How can I get started with DocuSegment.AI?',
      answer:
        'You can get started by cloning our GitHub repository and following the setup instructions in our documentation. We provide example code and test datasets to help you understand and implement the system. For any questions, feel free to open an issue on GitHub.',
    },
  ];

  return (
    <section className="bg-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 ">
          {/* Section header */}
          <div className="pb-12 md:pb-20">
            <h2 className="text-3xl font-bold text-slate-800">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-slate-600">
              Common questions about DocuSegment.AI and document analysis
            </p>
          </div>
          {/* Grid layout for FAQs */}
          <div className="grid md:grid-cols-2 gap-12 from-slate-150 to-slate-50">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="space-y-2 p-6 bg-slate-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h4 className="text-xl font-medium text-slate-800">
                  {faq.question}
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}