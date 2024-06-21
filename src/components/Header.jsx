import { House, Info } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center px-4">
      <div className="flex items-center">
        <img src="./vite.svg" alt="Vite Logo" />
        <h1>Nebula Market</h1>
      </div>
      <nav>
        <ul className="flex justify-evenlyitems-center">
          <li>
            <House />
            Home
          </li>
          <li>
            <Info />
            About
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
