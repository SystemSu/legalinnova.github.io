import {
  Home,
  JoinFull,
  ListAltRounded,
  Login,
  Menu,
  MenuBook,
  MenuOpen,
  MenuOpenRounded,
  MenuSharp,
  SupervisorAccount,
} from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Grid,
  Icon,
  IconButton,
  Stack,
  styled,
  Theme,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import  './styles/styles.scss'



export const NavBar: React.FC<{}> = () => {
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));
  const navigate = useNavigate();
  const Offset = styled("div")(({ theme }: { theme: Theme }) => theme.mixins.toolbar);

const [menuMovil,setMenuMovil] = useState("");

const validar =()=>{
  setMenuMovil((menuMovil==="navbar_nav-menu")?"navbar_nav-menu-visible":"navbar_nav-menu")
  console.log(menuMovil);
}

  return (

<header className="navbar_header">
<nav className="navbar_nav">

    <a className="navbar_logo navbar_nav-link" onClick={()=>navigate("/")}> Legal Innova</a>

        <div className="navbar_nav-toogle" >
            
          <Menu onClick={validar}  />
           
        </div>
    

           <ul className={(menuMovil==="")?"navbar_nav-menu":`navbar_nav-menu ${menuMovil}`}>
            <li className="navbar_nav-menu-item"><a   className="navbar_nav-menu-link navbar_nav-link" onClick={()=>navigate("/login")}> Acerca de </a></li>
            <li className="navbar_nav-menu-item"><a   className="navbar_nav-menu-link navbar_nav-link"> Contactanos</a></li>
            <li className="navbar_nav-menu-item"><a   className="navbar_nav-menu-link navbar_nav-link "> Servicios</a></li>
            <li className="navbar_nav-menu-item"><a   className="navbar_nav-menu-link navbar_nav-link navbar_nav-menu-link-active" onClick={()=>navigate("/login")}>Login </a></li>
          </ul>
          
        </nav>
</header>
  );
};
