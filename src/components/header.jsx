function Header() {
  return (
    <header className="relative h-24 overflow-hidden mb-6">
      
      {/* Blurred Background */}
      <div className="absolute inset-0 bg-blue-400 blur-md scale-110"></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Clear Text */}
      <div className="relative z-10 h-full flex items-center px-8">
        <h1 className="text-3xl font-bold text-white">
          🎬 Movie Explorer
        </h1>
      </div>

    </header>
  );
}

export default Header;