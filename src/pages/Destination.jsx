import React from "react";

export default function Destination() {
  return (
    <div id="travel-diary">
      <div className="bg-white min-h-screen">
        <div className="container mx-auto px-4">
          <header className="flex justify-between items-center py-4 border-b border-purple-100">
            <div className="flex items-center">
              <h1 className="font-bold text-2xl">TR<span className="relative">
                <span className="absolute top-0 right-0 w-8 h-8 border-2 border-orange-500 rounded-full transform -translate-y-1 translate-x-1"></span>
                A
              </span>VEL</h1>
              <p className="font-bold ml-1 tracking-widest">DIARY</p>
            </div>
            <nav className="hidden md:flex space-x-8">
              {['Home', 'Destination', 'Maps', 'Review'].map((item) => (
                <a key={item} href="#" className="hover:text-primary-500 transition-colors">{item}</a>
              ))}
            </nav>
            <button className="bg-orange-500 text-white px-5 py-2 rounded-full hover:bg-orange-600 transition-colors">Login</button>
          </header>
          <main className="py-12">
            <h2 className="text-3xl font-bold mb-4">Destination</h2>
            <p className="mb-8">Plan your next adventure and add it to your journey!</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Form Fields */}
              <div>
                <label className="block mb-2 font-medium">Destination Name</label>
                <input type="text" placeholder="eg: Pokhara" className="w-full p-2 border border-orange-200 rounded focus:outline-none focus:border-orange-500" />
              </div>
              <div>
                <label className="block mb-2 font-medium">Trip date</label>
                <input type="text" className="w-full p-2 border border-orange-200 rounded focus:outline-none focus:border-orange-500" />
              </div>
              <div>
                <label className="block mb-2 font-medium">Booking Date</label>
                <input type="text" className="w-full p-2 border border-orange-200 rounded focus:outline-none focus:border-orange-500" />
              </div>
              <div className="md:col-span-2">
                <label className="block mb-2 font-medium">Image URL</label>
                <input type="text" placeholder="eg: https://source......" className="w-full p-2 border border-orange-200 rounded focus:outline-none focus:border-orange-500" />
              </div>
              <div>
                <label className="block mb-2 font-medium">No of Person</label>
                <input type="text" placeholder="eg: 4" className="w-full p-2 border border-orange-200 rounded focus:outline-none focus:border-orange-500" />
              </div>
              <div className="md:col-span-3">
                <label className="block mb-2 font-medium">Description</label>
                <textarea placeholder="tell us about blog" rows="4" className="w-full p-2 border border-orange-200 rounded focus:outline-none focus:border-orange-500"></textarea>
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <button className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition-colors">Add Destination</button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}