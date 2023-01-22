import { Container } from "@mui/material";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ThemeConfig } from "./config/theme.config";
import { NotificationProvider } from "./context/notification.context";

import store from "./redux/store";
import { AppRouter } from "./Routes/Router";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeConfig>
    <Provider store={store}>
      <NotificationProvider>
        <Container maxWidth="xl">
          <BrowserRouter>
            <AppRouter />
          </BrowserRouter>
        </Container>
      </NotificationProvider>
    </Provider>
  </ThemeConfig>
);
