import React from 'react';

const images = [
  "public/assets/gallery/1.jpg",
  "public/assets/gallery/2.jpg",
  "public/assets/gallery/3.jpg",
  "public/assets/gallery/4.jpg",
  "public/assets/gallery/5.jpg",
  "public/assets/gallery/6.jpg",
  "public/assets/gallery/7.jpg",
  "public/assets/gallery/8.jpg",
  "public/assets/gallery/9.jpg",
  "public/assets/gallery/10.jpg",
  "public/assets/gallery/11.jpg",
  "public/assets/gallery/12.jpg"
];

export const Gallery: React.FC = () => {
  return (
    <section id="galleria" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-frigo-main font-semibold tracking-wider uppercase text-base md:text-lg mb-2">Galleria</h2>
          <h3 className="text-3xl font-bold text-gray-900">Interventi e Macchinari</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg aspect-square">
              <img 
                src={src} 
                alt={`Lavoro ${index + 1}`} 
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
