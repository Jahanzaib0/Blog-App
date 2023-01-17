import { Link } from "react-router-dom"
const NavBar = (props) => {
  return (
    <nav className="NavBar bg-success">
      <h1 className="navheader">{props.title}</h1>
      <div className="links">
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/create">Post Your BLOGS</Link>
        </li>
      </div>
    </nav>
  );
};

export default NavBar;
