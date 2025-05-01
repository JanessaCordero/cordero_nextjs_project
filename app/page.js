'use client';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    fetch('/api/building')
      .then((res) => res.json())
      .then((data) => setShoes(data));
  }, []);

  return (
    <main className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Available Vans Shoes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {shoes.map((shoe) => (
          <div
            key={shoe.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
            <img
              src={shoe.image}
              alt={shoe.name}
              className="w-full h-[370px] object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900">{shoe.name}</h2>
              <p className="text-gray-600">Color: {shoe.color}</p>
              <p className="text-gray-700 font-medium">Price: PHP{shoe.price}</p>
              <div className="mt-4">
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
