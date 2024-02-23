import { Link } from "react-router-dom";
import vitelogo from "../../public/vite.svg";

function Header() {
  return (
    <header className="flex justify-between items-center p-4 mb-8">
      <div>
        <img src={vitelogo} alt="" />
      </div>

      <nav className="flex gap-2">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/students">Students</Link>
        <Link to="/colorPicker">Color Picker</Link>
      </nav> 
    </header>
  );
}

export default Header;
