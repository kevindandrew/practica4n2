"use client";
import axios from 'axios';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

export default function Page() {
  const [staysData, setStaysData] = useState([]);
  const [popupData, setPopupData] = useState(null);
  const [isLoading, setIsLoading] = useState(true); 
  const [hasError, setHasError] = useState(false);  

  useEffect(() => {
    axios.get('/sample.json')
      .then((response) => {
  
        const filteredData = response.data.entries
          .filter(item => item.releaseYear >= 2010 && item.programType === 'series') 
          .sort((a, b) => a.title.localeCompare(b.title)) 
          .slice(0, 20); 

        setStaysData(filteredData);
        setIsLoading(false); 
      })
      .catch((error) => {
        console.error('Error al obtener los datos:', error);
        setHasError(true); 
        setIsLoading(false); 
      });
  }, []);

  const handlePopup = (stay) => {
    setPopupData(stay);
  };

  const closePopup = () => {
    setPopupData(null); 
  };


  if (isLoading) {
    return <div className="flex justify-center items-center h-screen text-2xl">Loading...</div>;
  }


  if (hasError) {
    return <div className="flex justify-center items-center h-screen text-2xl">Oops, something went wrong</div>;
  }

  return (
    <>
      <nav className="bg-slate-700 h-12 flex items-center">
        <h2 className="ml-10 text-white text-2xl">Popular Series</h2>
      </nav>
      <div className="bg-white min-h-screen flex flex-wrap p-10">
        {
          staysData.map((stay, index) => (
            <div key={index} className='flex flex-col items-center'>
              <div
                className="relative h-96 w-72 flex items-center justify-center overflow-hidden m-4 transition-opacity hover:opacity-75 hover:border hover:border-white cursor-pointer"
                onClick={() => handlePopup(stay)} 
              >
                <Image
                  src={stay.images["Poster Art"].url}
                  alt={stay.title}
                  layout="fill"
                  objectFit="cover"
                  className="absolute inset-0 z-0"
                />
              </div>
              <span className="relative z-10 text-lg font-bold">{stay.title}</span>
            </div>
          ))
        }


        {popupData && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-md w-96 shadow-lg relative">
              <button onClick={closePopup} className="absolute top-2 right-2 text-lg">✕</button>
              <Image
                src={popupData.images["Poster Art"].url}
                alt={popupData.title}
                width={400}
                height={600}
                className="mb-4"
              />
              <h2 className="text-2xl font-bold mb-2">{popupData.title}</h2>
              <p className="mb-2 text-gray-700">{popupData.description}</p>
              <p className="text-gray-600">Release Year: {popupData.releaseYear}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
