import { Button } from "@mui/material";
import { Stack } from "@mui/system";
import { Outlet } from "react-router-dom";
import { NavBar } from "./Narbar/Navbar";

export const RouterLayout: React.FC<{}> = () => {
    return (
        <>
           
           <NavBar/>
            <Outlet/>


          
        </>
    );
  };
  