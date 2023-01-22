import { Button, Container } from "@mui/material";
import { useSelector } from "react-redux";
import { BrowserRouter, Router } from "react-router-dom";
import { NavBar } from "./shared/Narbar/Navbar";

import { Home } from "./pages";

import { AppStore } from "./redux/store";
import { AppRouter } from "./Routes/Router";
import { NotificationProvider } from "./context/notification.context";
import { AppThemeProvider } from "./context/ThemeContext";

function App() {
  const user = useSelector((state: AppStore) => state.user);
  /*
 <NavBar />
      <Container sx ={{mt :9}}>
      <span className="array">{JSON.stringify(user)}</span>
      <Home />
      </Container>


      <BrowserRouter>
      <AppRouter />
    </BrowserRouter>

    <Button variant="contained">Registar</Button>
*/
  return (
    <AppThemeProvider>
      <NotificationProvider>
        <Container maxWidth="xl">
          <BrowserRouter>
            <AppRouter />
          </BrowserRouter>
        </Container>
      </NotificationProvider>
    </AppThemeProvider>
  );
}

export default App;
