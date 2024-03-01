import { ReactNode } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "../css/navbar.css";

interface Props {
  name?: String;
}

function NavBar({ name }: Props) {
  return (
    <nav className="nav">
      <Link className="site-title" to="/">
        <h1 className="poppins-black ms-2">{name}</h1>
      </Link>
      <ul className="me-3 gap-0">
        <CustomLink to="/work">WORK</CustomLink>
        <CustomLink to="/about">ABOUT</CustomLink>
      </ul>
    </nav>
  );
}

interface Props {
  to?: string;
  children?: ReactNode;
}

function CustomLink({ to, children, ...props }: Props) {
  const resolvedPath = useResolvedPath(to!);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to!} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default NavBar;
