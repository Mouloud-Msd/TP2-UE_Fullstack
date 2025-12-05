import { Link } from "react-router-dom";
import TP2_LOGO from "../assets/TP2_LOGO.png";
export default function Navbar() {
  const navigationList = [
    { name: "Home", href: "/" },
    { name: "Events", href: "/events" },
    { name: "Artists", href: "/artists" },
    { name: "About", href: "/about" },
  ];

  return (
    <div className="navbar bg-[#ffffff] shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className="
              menu menu-sm dropdown-content
              fixed top-0 left-0
              w-[50vw] h-screen p-5
              flex flex-col gap-4

              bg-white/10
              backdrop-blur-md
              backdrop-saturate-150
              border border-white/20
              rounded-lg shadow-lg
            "
          >
            {navigationList.map((item) => (
              <Link to={item.href}>
                <li className="text-xl  btn btn-ghost w-full" key={item.name}>
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>

        <Link to="/">
          <img src={TP2_LOGO} alt="Logo" className="h-20 w-25" />
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal px-1">
          {navigationList.map((item) => (
            <Link
              className=" hover:bg-base-200 rounded-lg transition"
              to={item.href}
            >
              <li className="text-xl btn btn-ghost" key={item.name}>
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>

      <div className="navbar-end">
        <input
          type="checkbox"
          value="synthwave"
          className="toggle theme-controller"
        />
      </div>
    </div>
  );
}
