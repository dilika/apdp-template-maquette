import React from 'react';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Apropos de APDP</h1>
      <p className="text-lg mb-6">
          APDP est une autorité de premier plan en matière de protection des données et de respect de la vie privée. Notre mission est de protéger les droits numériques des individus et de promouvoir des pratiques responsables de traitement des données dans un monde de plus en plus connecté.
      </p>
      <p className="text-lg mb-6">
          Fondée en 2020, nous sommes rapidement devenus une voix de confiance dans le domaine de la protection des données, travaillant sans relâche pour éduquer le public, conseiller les organisations et plaider en faveur de lois plus strictes en matière de confidentialité.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Nos valeurs fondamentales</h2>
      <ul className="list-disc list-inside mb-6">
        <li className="mb-2">L'intégrité dans toutes nos actions</li>
        <li className="mb-2">Engagement en faveur du droit à la vie privée des individus</li>
        <li className="mb-2">Innovation dans les stratégies de protection des données</li>
        <li className="mb-2">Transparence dans nos opérations</li>
      </ul>
      <p className="text-lg">
          Chez APDP, nous pensons que chacun a le droit de contrôler ses informations personnelles. Nous nous engageons à faire de cette conviction une réalité à l'ère du numérique.
      </p>
    </div>
  );
};

export default AboutPage;