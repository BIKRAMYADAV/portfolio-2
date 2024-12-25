function Hero() {
  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row items-center justify-center bg-gray-100 p-4 sm:p-8 rounded-lg shadow-lg max-w-5xl mx-auto">
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
        <img
          src="/profile.png"
          alt="Profile"
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 rounded-full border-4 border-red-500 object-cover"
        />
      </div>
      {/* Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left px-2 sm:px-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
          Hello, I am Bikram Yadav.
        </h2>
        <p className="text-sm sm:text-lg text-gray-600 mb-4 sm:mb-6">
          I am an undergraduate student pursuing my IT degree from IIIT Bhubaneswar.
        </p>
        {/* Resume Button */}
        <a
          href="https://drive.google.com/file/d/1TfQGtWtQKf7ElK_WtPvwPaRh-LVwomkh/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-500 text-white text-sm sm:text-lg font-medium py-2 px-4 sm:px-6 rounded shadow-md hover:bg-gray-800 transition duration-300"
        >
          Resume
        </a>
      </div>
    </div>
  );
}

export default Hero;
