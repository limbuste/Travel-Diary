import React from "react";

export default function TripBooking() {
  return (
    <div id="travel-diary">
      <div className="bg-white min-h-screen">
        <header className="flex justify-between items-center px-4 py-2 border-b">
          <div className="flex items-center">
            <span className="text-2xl font-bold">TR<span className="text-orange-500">A</span>VEL</span>
            <span className="text-xs ml-1">SMART</span>
          </div>
          <nav className="flex items-center gap-6">
            {['Home', 'Destinations', 'Maps', 'Review'].map((item) => (
              <a key={item} href="#" className="text-sm">{item}</a>
            ))}
            <button className="bg-orange-500 text-white px-4 py-1 rounded-full hover:bg-orange-600 transition">Login</button>
          </nav>
        </header>
        <div className="max-w-6xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold mb-2">Trip Booking</h1>
          <div className="border-b-4 border-orange-500 w-16 mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-100 p-6 rounded-lg shadow-sm">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Bhaktapur Durbar Square</h2>
              <p className="text-sm text-gray-600">City of love with iconic landmarks.</p>
              <img
                src="https://images.unsplash.com/photo-1518002054494-3a6f94352e9d"
                alt="Bhaktapur Durbar Square"
                className="w-full h-48 object-cover rounded-md mt-2"
              />
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm mb-1">Full Name:</label>
                <input type="text" placeholder="eg: Subina Karki" className="w-full p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500" />
              </div>
              <div>
                <label className="block text-sm mb-1">Email Address:</label>
                <input type="email" placeholder="eg: hello@myemail.com" className="w-full p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500" />
              </div>
              <div>
                <label className="block text-sm mb-1">Trip Date:</label>
                <input type="date" className="w-full p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500" />
              </div>
              <div>
                <label className="block text-sm mb-1">No. of Person:</label>
                <input type="number" placeholder="eg: 2" className="w-full p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500" />
              </div>
              <button className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition mt-4">Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}