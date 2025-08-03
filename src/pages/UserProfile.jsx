import React from "react";

export default function UserProfile() {
  return (
    <div id="travel-diary">
      <div className="bg-gray-800 min-h-screen p-4">
        <h1 className="text-white text-xl mb-4">Profile</h1>
        <div className="bg-white rounded-md p-6">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1615826932727-ed9f182ac67e"
                  alt="Travel Diary Logo"
                  className="h-16"
                />
              </div>
            </div>
            <div className="flex items-center space-x-8">
              <nav className="flex space-x-8">
                {['Home', 'Destination', 'Blogs', 'Maps', 'Review'].map((item) => (
                  <a key={item} href="#" className="hover:text-gray-600 transition-colors">{item}</a>
                ))}
              </nav>
              <div className="flex items-center">
                <span className="text-sm">
                  Nischal Tamang<br/>
                  <span className="text-xs text-gray-500">Intermediate reviewer</span>
                </span>
                <div className="ml-2 bg-gray-200 p-1 rounded-full">
                  <span className="material-symbols-outlined">person</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex">
            <div className="mr-8">
              <div className="relative">
                <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-orange-400">
                  <img
                    src="https://images.unsplash.com/photo-1522556189639-b150ed9c4330"
                    alt="Profile photo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <button className="absolute bottom-0 right-0 bg-orange-500 text-white p-2 rounded-full hover:bg-orange-600 transition-colors">
                  <span className="material-symbols-outlined">edit</span>
                </button>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-bold">Nischal Tamang</h2>
                  <p className="text-gray-500">Intermediate reviewer</p>
                </div>
                <div className="flex space-x-2">
                  <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors">Edit Profile</button>
                  <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors">View Archive</button>
                  <button className="bg-gray-100 p-2 rounded-md hover:bg-gray-200 transition-colors">
                    <span className="material-symbols-outlined">settings</span>
                  </button>
                </div>
              </div>
              <div className="flex space-x-8 mb-6">
                <div><span className="font-bold text-xl">12</span> reviews</div>
                <div><span className="font-bold text-xl">4</span> Travel Hosted</div>
                <div><span className="font-bold text-xl">3</span> Blogs</div>
              </div>
              <p className="text-sm text-gray-700">
                "Hi, I'm [Your Name], and I'm a [Your Profession/Area of Expertise] with a passion for [Your Blog's Topic]. I created this blog to share my knowledge and experience on [Specific aspects of your blog's topic]. Join me as I explore [Mention specific aspects of your blog] and help you [Benefit to readers]."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}