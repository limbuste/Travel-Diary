import React from "react";

export default function TripDetail() {
  return (
    <div id="travel-diary">
      <div className="bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <header className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold">TR<span className="text-orange-500">A</span>VEL</h1>
            </div>
            <nav className="flex items-center space-x-6">
              {['Home', 'Destination', 'Maps', 'Review'].map((item) => (
                <a key={item} href="#" className="text-sm hover:text-orange-500 transition">{item}</a>
              ))}
              <button className="bg-orange-500 text-white px-4 py-1 rounded-full hover:bg-orange-600 transition">Login</button>
            </nav>
          </header>
          <main className="py-4">
            <section>
              <h2 className="text-2xl font-bold">Trip Detail</h2>
              <div className="w-16 h-1 bg-orange-500 mt-1 mb-4"></div>
              <div className="text-center mb-6">
                <h1 className="text-2xl font-bold mb-1">Bhaktapur Durbar Square</h1>
                <p className="text-sm">A Historic Gem in the Kathmandu Valley, Nepal</p>
              </div>
              <div className="rounded-lg overflow-hidden mb-6">
                <img
                  src="https://images.unsplash.com/photo-1618851142562-ff30d09313a9"
                  alt="Bhaktapur Durbar Square"
                  className="w-full h-[300px] object-cover"
                />
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
                <h3 className="text-lg font-semibold mb-3">About Bhaktapur Durbar Square</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Bhaktapur Durbar Square is a must-visit for travelers seeking history and culture. This UNESCO World Heritage Site in Nepal's Kathmandu Valley features stunning Newari architecture, ancient temples and palaces like the 55-Window Palace and Nyatapola Temple. It's ancient, authentic, and rich in local crafts and festivals. Early mornings or late afternoons are ideal to avoid crowds and capture the charm. Pair it with nearby Changu Narayan for a full day of exploration.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
                <h3 className="text-lg font-semibold mb-3">Trip Details</h3>
                <div className="space-y-2">
                  <p className="text-sm"><span className="font-semibold">Location:</span> Bhaktapur, Kathmandu Valley, Nepal</p>
                  <p className="text-sm"><span className="font-semibold">Duration:</span> 1 Day</p>
                  <p className="text-sm"><span className="font-semibold">Difficulty:</span> Easy</p>
                  <p className="text-sm"><span className="font-semibold">Best Time to Visit:</span> Bisket Jatra (usually held at new year)</p>
                  <p className="text-sm"><span className="font-semibold">Inclusions:</span> Guided tour, entrance fees, local lunch</p>
                  <p className="text-sm"><span className="font-semibold">What to Bring:</span> Comfortable shoes, camera, water bottle</p>
                  <p className="text-sm"><span className="font-semibold">Trip Date:</span> 25th June 2023</p>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
                <h3 className="text-lg font-semibold mb-3 text-green-600">Pricing</h3>
                <p className="text-xl font-bold text-green-600 mb-3">Nrs. 4,000 per person</p>
                <p className="text-sm mb-4">
                  Includes guided tour, entrance fees to Bhaktapur Durbar Square, and a traditional Nepali lunch. Excludes transportation to Bhaktapur and personal expenses.
                </p>
                <button className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition">Book Now</button>
              </div>
            </section>
            <section className="text-center py-4">
              <h3 className="text-lg font-semibold mb-2">Need More Information?</h3>
              <p className="text-sm mb-1">Contact our travel experts for personalized assistance.</p>
              <p className="text-sm text-blue-600">info@travelday.com</p>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}