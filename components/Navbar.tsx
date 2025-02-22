import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="w-full bg-gray-900 text-yellow-50 py-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <Image src="/mylogo.png" alt="Weather App Logo" width={40} height={40} />
          <h1 className="text-2xl font-bold tracking-wide">Weather Forecast</h1>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
