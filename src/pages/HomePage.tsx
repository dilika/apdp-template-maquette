import React from 'react';
import { Shield, FileText, Users, Phone } from 'lucide-react';

const HomePage = () => {
  return (
    <div>
      <section className="bg-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Protégez vos droits numériques</h1>
            <p className="text-xl mb-8">APDP s'engage à protéger vos informations personnelles et à garantir la confidentialité des données à l'ère numérique.</p>
            <button className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
                Apprendre encore plus
            </button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nos prestations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Shield className="w-12 h-12 text-blue-600" />}
              title="Protection des données"
              description="Nous veillons à ce que vos données personnelles soient traitées avec le plus grand soin et dans le respect de la réglementation."
            />
            <ServiceCard
              icon={<FileText className="w-12 h-12 text-blue-600" />}
              title="Politiques de confidentialité"
              description="Nous aidons les organisations à créer et à maintenir des politiques de confidentialité complètes."
            />
            <ServiceCard
              icon={<Users className="w-12 h-12 text-blue-600" />}
              title="Sensibilisation du public"
              description="Nous sensibilisons le public aux droits en matière de confidentialité des données et aux meilleures pratiques en matière de sécurité en ligne."
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Dernières nouvelles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <NewsCard
              title="Annonce d'un nouveau règlement sur la protection des données"
              date="May 15, 2024"
              description="Le gouvernement a introduit de nouvelles réglementations pour renforcer les lois sur la protection des données..."
            />
            <NewsCard
              title="PADP Lance un programme d'éducation sur la confidentialité"
              date="April 28, 2024"
              description="Notre nouvelle initiative vise à sensibiliser les étudiants à la confidentialité et à la protection des données en ligne..."
            />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Besoin d'aide?</h2>
          <p className="text-xl mb-8">Notre équipe d'experts est là pour vous aider pour tout problème de protection des données.</p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300 inline-flex items-center">
            <Phone className="mr-2" /> Contactez-nous
          </button>
        </div>
      </section>
    </div>
  );
};

const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const NewsCard = ({ title, date, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-500 mb-4">{date}</p>
    <p className="text-gray-600 mb-4">{description}</p>
    <a href="#" className="text-blue-600 hover:underline">Read more</a>
  </div>
);

export default HomePage;