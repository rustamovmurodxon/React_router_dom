import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-b border-gray-200 sticky top-0 left-0 bg-white ">
      <nav
        className={`container mx-auto  flex justify-between items-center duration-200 h-20`}
      >
        <h2>Header</h2>
        <ul className={`flex gap-4 e top-full left-0 `}>
          <li className="max-sm:px-3 ">
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li className="max-sm:px-3 ">
            <NavLink to={"/recipes"}>Food</NavLink>
          </li>
          <li className="max-sm:px-3">
            <NavLink to={"/users"}>Users</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
