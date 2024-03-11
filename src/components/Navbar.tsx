import { ReactNode, useEffect, useState} from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { shutterDark } from "../main";
import { shutterLight } from "../main";
import "../css/navbar.css";



function NavBar() {
  const [backgroundColor,setBackgroundColor] = useState("#ffffff00");
  const [color, setColor] = useState("#333");
  const [logo, setLogo] = useState("dark");

  const changeBackground = () => {
    if(window.scrollY >= 64){
      setBackgroundColor("#333");
      setColor("#F6F3EA");
      setLogo("light");
    } else {
      setBackgroundColor("#ffffff00");
      setColor("#333");
      setLogo("dark");
    }
  }

  useEffect(() => {
    changeBackground();

    window.addEventListener("scroll", changeBackground);
  });

  return (
    <nav className="nav" style={{backgroundColor:backgroundColor}}  >
      <Link className="site-title" to="/">
        <img src={logo == "light" ? shutterLight : shutterDark} />
      </Link>
      <ul className="me-3 gap-0" style={{color:color}}>
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
