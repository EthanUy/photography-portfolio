import { ReactNode, useEffect, useState} from "react";
import { Link, useMatch, useResolvedPath, useLocation } from "react-router-dom";
import { shutterDark } from "../main";
import { shutterLight } from "../main";
import "../css/navbar.css";



function NavBar() {
  const [backgroundColor,setBackgroundColor] = useState("#ffffff00");
  const [color, setColor] = useState("#333");
  const [logo, setLogo] = useState("dark");
  const location = useLocation();

  const changeBackground = () => {
    if(location.pathname=="/"){
      if(window.scrollY >= 64){
        setBackgroundColor("#333");
        setColor("#C1BDB4");
        setLogo("light");
      } else {
        setBackgroundColor("#ffffff00");
        setColor("#333");
        setLogo("dark");
      }
    } else {
      setBackgroundColor("#333");
      setColor("#C1BDB4");
      setLogo("light");
    }
  }

  useEffect(() => {
    changeBackground();

    if(location.pathname=="/"){
      window.addEventListener("scroll", changeBackground);
    }
  });

  useEffect(()=>{
    changeBackground();
  },[location]);

  return (
    <nav className="nav" style={{backgroundColor:backgroundColor}}  >
      <Link className="site-title" to="/">
        <img src={logo == "light" ? shutterLight : shutterDark} />
      </Link>
      <ul className="me-3 gap-0" style={{color:color}}>
        <CustomLink to="/">HOME</CustomLink>
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
