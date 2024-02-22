import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex justify-between items-center py-2 mb-8">
      <div className="text-3xl px-4">mySITE</div>
      <nav className="flex gap-2 mr-4">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/students">Students</Link>
        <Link to="/colorPicker">Color Picker</Link>
      </nav>
    </header>
  );
}

export default Header;
