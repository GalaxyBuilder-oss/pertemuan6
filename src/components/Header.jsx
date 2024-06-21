import { House, Info } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full flex justify-between bg-slate-100 shadow-lg items-center px-4 py-4">
      <div className="w-1/2 flex items-center">
        <img src="./vite.svg" alt="Vite Logo" />
        <h1>Nebula Market</h1>
      </div>
      <nav className="flex w-1/2">
        <ul className="flex w-full justify-evenly">
          <li>
            <a href="/" className="flex items-center gap-2"><House />
            Home</a>
          </li>
          <li>
            <a href="/about" className="flex items-center gap-2"><Info />
            About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
