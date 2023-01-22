import { Routes, Route, Navigate } from "react-router-dom";
import { RouterLayout } from "../shared/RouterLayout";
import { HomePage } from "../pages/home";
import { LoginPage } from "../pages/login/login";
import { MenuPage } from "@/pages/menu/components/sideBarMenu";
import { MenuMovil } from "@/pages/menuMovil/MenuMovil";
export const AppRouter: React.FC<{}> = () => {
  //      <Route path="/login" element={<LoginPage />} />
  return (
    <Routes>
      <Route path="/" element={<RouterLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/menuMovil" element={<MenuMovil valor={false} />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Navigate to ='/'/>} />
      </Route>
      <Route path="/menu" element={<MenuPage />} />
    </Routes>
  );
};
