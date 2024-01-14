import Logo from "./../assets/Logo.png";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// Navbar component

Navbar.propTypes = {
  setPage: PropTypes.func.isRequired,
  page: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

function Navbar({ setPage, page }) {
  return (
    <section className="flex flex-row justify-between w-screen px-16 items-center pt-12 pb-6 shadow">
      <div>
        <img src={Logo} className="w-56"></img>
      </div>
      <div className="flex flex-row gap-12 text-[20px] font-medium">
        <span
          className={`cursor-pointer ${page === 1 ? "text-[#005A84]" : ""}`}
          onClick={() => setPage(1)}
        >
          Home
        </span>
        <span
          className={`cursor-pointer ${page === 2 ? "text-[#005A84]" : ""}`}
          onClick={() => setPage(2)}
        >
          Editor
        </span>
        <span className="cursor-pointer">About</span>
        <span className="cursor-pointer">Contact</span>
      </div>
      <Link
        to="/"
        className="font-semibold text-white rounded px-6 py-2 bg-[#005A84]"
      >
        Sign out
      </Link>
    </section>
  );
}

export default Navbar;
