import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="text-white flex justify-between mx-11 py-7">
      <NavLink to="/">Siddique</NavLink>
      <ul className="flex gap-6">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/trad">FetchOld</NavLink>
        </li>
        <li>
          <NavLink to="rq">FetchRq</NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
