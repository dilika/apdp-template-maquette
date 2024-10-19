import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Contactez-nous</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Entrer en contact</h2>
          <p className="mb-6">Vous avez une question ou un problème ? Nous sommes là pour vous aider. Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.</p>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1 font-medium">Nom</label>
              <input type="text" id="name" className="w-full p-2 border rounded" />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 font-medium">Email</label>
              <input type="email" id="email" className="w-full p-2 border rounded" />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1 font-medium">Message</label>
              <textarea id="message" rows={4} className="w-full p-2 border rounded"></textarea>
            </div>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">Envoyer un message</button>
          </form>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-blue-600 mr-2" />
              <span>contact@dapdp.ml</span>
            </div>
            <div className="flex items-center">
              <Phone className="w-6 h-6 text-blue-600 mr-2" />
              <span>(+223) 20 23 86 15</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-6 h-6 text-blue-600 mr-2" />
              <span>Bamako-Mali</span>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-2">Heures d'ouverture</h3>
            <p>Lundi - Vendredi : 8h00 - 16h00</p>
            <p>Samedi - Dimanche : Fermé</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;