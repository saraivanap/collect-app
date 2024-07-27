import React from 'react';
import photocard1 from '../imagens/photocard/photocard1.jpg';
import photocard2 from '../imagens/photocard/photocard2.jpg';
import photocard3 from '../imagens/photocard/photocard3.jpg';
import photocard4 from '../imagens/photocard/photocard4.jpg';
import photocard5 from '../imagens/photocard/photocard5.jpg';
import photocard6 from '../imagens/photocard/photocard6.jpg';
import photocard7 from '../imagens/photocard/photocard7.jpg';
import photocard8 from '../imagens/photocard/photocard8.jpg';
import photocard9 from '../imagens/photocard/photocard9.jpg';
import photocard10 from '../imagens/photocard/photocard10.jpg';
import photocard11 from '../imagens/photocard/photocard11.jpg';
import photocard12 from '../imagens/photocard/photocard12.jpg';
import photocard13 from '../imagens/photocard/photocard13.jpg';

const photocards = [
  { id: 1, title: 'S.Coups', imageUrl: photocard1 },
  { id: 2, title: 'Jeonghan', imageUrl: photocard2 },
  { id: 3, title: 'Joshua', imageUrl: photocard3 },
  { id: 4, title: 'Jun', imageUrl: photocard4 },
  { id: 5, title: 'Hoshi', imageUrl: photocard5 },
  { id: 6, title: 'Wonwoo', imageUrl: photocard6 },
  { id: 7, title: 'Woozi', imageUrl: photocard7 },
  { id: 8, title: 'DK', imageUrl: photocard8 },
  { id: 9, title: 'Mingyu', imageUrl: photocard9 },
  { id: 10, title: 'The8', imageUrl: photocard10 },
  { id: 11, title: 'Seungkwan', imageUrl: photocard11 },
  { id: 12, title: 'Vernon', imageUrl: photocard12 },
  { id: 13, title: 'Dino', imageUrl: photocard13 },
];

const Photocards = () => {
  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-500 mb-8">Photocards Seventeen</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {photocards.map(photocard => (
          <div key={photocard.id} className="bg-white rounded-lg shadow-lg p-4">
            <div className="w-full h-64 flex items-center justify-center">
              <img src={photocard.imageUrl} alt={photocard.title} className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="mt-4 text-center">
              <h2 className="text-xl font-semibold">{photocard.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photocards;
