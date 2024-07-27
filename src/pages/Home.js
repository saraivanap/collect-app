import React from 'react';
import Slider from 'react-slick';
import album1 from '../imagens/album/album1.jpg';
import album2 from '../imagens/album/album2.jpg';
import album3 from '../imagens/album/album3.jpg';
import album4 from '../imagens/album/album4.jpg';
import album5 from '../imagens/album/album5.jpg';
import album6 from '../imagens/album/album6.jpg';
import album7 from '../imagens/album/album7.jpg';
import album8 from '../imagens/album/album8.jpg';
import album9 from '../imagens/album/album9.jpg';
import album10 from '../imagens/album/album10.jpg';

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const albums = [
    album1, album2, album3, album4, album5,
    album6, album7, album8, album9, album10
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-4xl font-bold text-gray-500 mt-4">Seventeen Collect</h1>
      <div className="w-4/5 mt-8">
        <Slider {...settings}>
          {albums.map((album, index) => (
            <div key={index} className="p-2">
              <img src={album} alt={`Album ${index + 1}`} className="w-full h-64 object-cover rounded-lg shadow-lg" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Home;
