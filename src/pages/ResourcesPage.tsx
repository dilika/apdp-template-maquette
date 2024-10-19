import React from 'react';
import { Book, FileText, Video } from 'lucide-react';

const ResourcesPage = () => {
  const resources = [
    {
      icon: <Book className="w-8 h-8 text-blue-600" />,
      title: "Data Protection Guide",
      description: "A comprehensive guide to understanding and implementing data protection measures.",
      link: "#"
    },
    {
      icon: <FileText className="w-8 h-8 text-blue-600" />,
      title: "Privacy Policy Template",
      description: "A customizable template for creating a compliant privacy policy for your website or application.",
      link: "#"
    },
    {
      icon: <Video className="w-8 h-8 text-blue-600" />,
      title: "Webinar: Data Privacy in the Digital Age",
      description: "An informative webinar discussing current trends and challenges in data privacy.",
      link: "#"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Resources</h1>
      <p className="text-lg mb-12 text-center max-w-3xl mx-auto">
        Explorez notre collection de ressources conçues pour vous aider à comprendre et à mettre en œuvre les meilleures pratiques en matière de protection des données et de confidentialité.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {resources.map((resource, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              {resource.icon}
              <h2 className="text-xl font-semibold ml-4">{resource.title}</h2>
            </div>
            <p className="text-gray-600 mb-4">{resource.description}</p>
            <a href={resource.link} className="text-blue-600 hover:underline">Apprendre encore plus</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourcesPage;