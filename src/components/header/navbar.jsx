import { NavLink } from "react-router-dom";

export const NavBar = ({ isScrolled }) => {
  const activeStyles = "underline font-bold";
  const inactiveStyles = "font-bold";

  return (
    <nav className="space-x-2">
      <ul className="flex">
        <li className="ml-10">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${isActive ? activeStyles : inactiveStyles} ${
                isScrolled ? "text-white" : "text-indigo-600"
              } transition-all duration-300 ease-in-out hover:text-[#9089fc] hover:rounded-xl hover:px-4 hover:py-2`
            }
          >
            Home
          </NavLink>
        </li>
        <li className="ml-10">
          <NavLink
            to="/students"
            className={({ isActive }) =>
              `${isActive ? activeStyles : inactiveStyles} ${
                isScrolled ? "text-white" : "text-indigo-600"
              } transition-all duration-300 ease-in-out hover:text-[#9089fc] hover:rounded-xl hover:px-4 hover:py-2`
            }
          >
            Estudantes
          </NavLink>
        </li>
        <li className="ml-10">
          <NavLink
            to="/contacts"
            className={({ isActive }) =>
              `${isActive ? activeStyles : inactiveStyles} ${
                isScrolled ? "text-white" : "text-indigo-600"
              } transition-all duration-300 ease-in-out hover:text-[#9089fc] hover:rounded-xl hover:px-4 hover:py-2`
            }
          >
            Contactos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
