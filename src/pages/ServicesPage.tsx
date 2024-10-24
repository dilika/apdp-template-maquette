import React from 'react';
import { Shield, FileText, Users, BarChart } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: <Shield className="w-12 h-12 text-green-600" />,
      title: "Data Protection Audits",
      description: "Comprehensive assessments of your organization's data handling practices to ensure compliance with privacy regulations."
    },
    {
      icon: <FileText className="w-12 h-12 text-green-600" />,
      title: "Privacy Policy Development",
      description: "Creation and maintenance of clear, compliant privacy policies tailored to your organization's needs."
    },
    {
      icon: <Users className="w-12 h-12 text-green-600" />,
      title: "Employee Training",
      description: "Customized training programs to educate your staff on data protection best practices and compliance requirements."
    },
    {
      icon: <BarChart className="w-12 h-12 text-green-600" />,
      title: "Data Breach Response",
      description: "Rapid response and management services in the event of a data breach, including notification and mitigation strategies."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Nos prestations</h1>
      <p className="text-lg mb-12 text-center max-w-3xl mx-auto">
        APDP propose une suite complète de services conçus pour protéger vos données, garantir la conformité et promouvoir les meilleures pratiques en matière de confidentialité des données.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              {service.icon}
              <h2 className="text-2xl font-semibold ml-4">{service.title}</h2>
            </div>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;