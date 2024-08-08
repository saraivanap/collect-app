// src/Profile.js

import React, { useState } from 'react';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('wishlist');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'wishlist':
        return (
          <div className="flex justify-between items-center">
            <p className="text-gray-700">
              Aqui você pode adicionar os itens que deseja adquirir.
            </p>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-300">
              Editar Wishlist
            </button>
          </div>
        );
      case 'album':
        return (
          <div className="flex justify-between items-center">
            <p className="text-gray-700">
              Aqui você pode adicionar álbuns que você possui em sua coleção.
            </p>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-300">
              Editar Coleção de Álbuns
            </button>
          </div>
        );
      case 'photocard':
        return (
          <div className="flex justify-between items-center">
            <p className="text-gray-700">
              Aqui você pode adicionar photocards que você possui.
            </p>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-300">
              Editar Coleção de Photocards
            </button>
          </div>
        );
      case 'sales':
        return (
          <div className="flex justify-between items-center">
            <p className="text-gray-700">
              Aqui você pode listar os itens que está vendendo.
            </p>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-300">
              Editar Vendas
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Imagem de Capa */}
      <div
        className="bg-cover bg-center h-64 w-full"
        style={{ backgroundImage: "url('https://via.placeholder.com/1920x600')" }}
      ></div>

      {/* Detalhes do Perfil */}
      <div className="max-w-3xl mx-auto p-4 bg-white rounded-lg -mt-16 relative shadow-md">
        <div className="flex justify-between items-center">
          {/* Avatar e Informações */}
          <div className="flex items-center">
            <img
              className="w-32 h-32 object-cover rounded-full border-4 border-white -mt-16"
              src="https://via.placeholder.com/150"
              alt="Avatar"
            />
            <div className="ml-4">
              <h2 className="text-2xl font-bold text-gray-900">Nome do Usuário</h2>
              <p className="text-gray-600">@username</p>
            </div>
          </div>

          {/* Botão de Seguir e Editar Perfil */}
          <div className="flex space-x-2">
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-300">
              Editar Perfil
            </button>
            <button className="bg-indigo-500 text-white px-4 py-2 rounded-full hover:bg-indigo-400">
              Seguir
            </button>
          </div>
        </div>

        {/* Biografia */}
        <p className="mt-4 text-gray-700">
          Esta é uma breve biografia do usuário. Aqui você pode adicionar detalhes como profissão, hobbies ou uma breve descrição.
        </p>

        {/* Tag interativa */}
        <div className="my-4">
          <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full cursor-pointer hover:bg-blue-200">
            #InteractiveTag
          </span>
        </div>

        {/* Seguidores e Seguindo */}
        <div className="flex mt-4 space-x-8">
          <div>
            <span className="font-bold text-gray-900">123</span> <span className="text-gray-600">Seguindo</span>
          </div>
          <div>
            <span className="font-bold text-gray-900">456</span> <span className="text-gray-600">Seguidores</span>
          </div>
        </div>
      </div>

      {/* Seções adicionais com Abas */}
      <div className="max-w-3xl mx-auto mt-8 p-4 bg-white rounded-lg shadow-md">
        {/* Abas */}
        <div className="flex space-x-4 border-b border-gray-300 mb-4">
          <button
            className={`pb-2 ${activeTab === 'wishlist' ? 'border-b-2 border-indigo-500 text-indigo-500' : 'text-gray-600'}`}
            onClick={() => setActiveTab('wishlist')}
          >
            Wishlist
          </button>
          <button
            className={`pb-2 ${activeTab === 'album' ? 'border-b-2 border-indigo-500 text-indigo-500' : 'text-gray-600'}`}
            onClick={() => setActiveTab('album')}
          >
            Album Collection
          </button>
          <button
            className={`pb-2 ${activeTab === 'photocard' ? 'border-b-2 border-indigo-500 text-indigo-500' : 'text-gray-600'}`}
            onClick={() => setActiveTab('photocard')}
          >
            Photocard Collection
          </button>
          <button
            className={`pb-2 ${activeTab === 'sales' ? 'border-b-2 border-indigo-500 text-indigo-500' : 'text-gray-600'}`}
            onClick={() => setActiveTab('sales')}
          >
            Sales
          </button>
        </div>

        {/* Conteúdo das Abas */}
        {renderTabContent()}
      </div>
    </div>
  );
};

export default Profile;
