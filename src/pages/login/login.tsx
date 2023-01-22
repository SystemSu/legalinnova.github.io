import { useNotification } from "@/context/notification.context";
import React from "react";
import { schemaLoginValidate } from "./validation";
import "./styles/styles.scss";

export const LoginPage: React.FC<{}> = () => {
  const { getError, getSuccess } = useNotification();
  /*
      <Layout>
      <HomeTitle>SOY BISMARCK</HomeTitle>
      <CreateHomeButton />
      <ModifyHomeButton />
      <ResetHomeButton />
    </Layout>
    sx={{ mt: 9 }}
  */
  type LoginType = {
    Usuario: string;
    Password: string;
  };
  const [dataLogin, setDataLogin] = React.useState<LoginType>({
    Usuario: "",
    Password: "",
  });

  const infoLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDataLogin({ ...dataLogin, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    schemaLoginValidate
      .validate(dataLogin)
      .then(() => {
        // validar si el usuario existe
        if (
          dataLogin.Usuario === "1234567891234567" &&
          dataLogin.Password === "12345678"
        ) {
          getSuccess(JSON.stringify(dataLogin));
        } else {
          getError("Credenciales incorrectas");
        }
      })
      .catch((error) => {
        getError(error.message);
      });
  };

  /*
      <Container maxWidth="sm">
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "100vh" }}
      >
        <Grid item>
          <Paper sx={{ padding: "1.2em", borderRadius: "0.5em" }}>
            <Typography variant="h4" sx={{ mt: 3, mb: 1.5 }}>
              Iniciar sesion
            </Typography>
            <Box component="form" onSubmit={handleSubmit}>
              <TextField
                name="Usuario"
                type="text"
                margin="normal"
                fullWidth
                label="Usuario"
                sx={{ mt: 3, mb: 1.5 }}
                onChange={infoLogin}
              />
              <TextField
                name="Password"
                type="password"
                margin="normal"
                fullWidth
                label="Contraseña"
                sx={{ mt: 3, mb: 1.5 }}
                onChange={infoLogin}
              />
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ mt: 3, mb: 1.5 }}
              >
                Iniciar sesion
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  */
  return (
    <div className="login_padre">
      <div className="login_contenedor-hijo">
        <div className="login_cabecera">
          <div className="login_titulo">Inicio de sesion</div>
        </div>

        <div className="login_logo">
          <img src="logo.svg" className="img" />
        </div>

        <div className="login_form">
          <form action="">
            <div className="login_cuerpo-txt">
              <div className="login_txt">
                <label htmlFor="user" className="labelForm">Usuario </label>
                <input type="text" id="user" className="txt"  />
              </div>

              <div className="login_txt">
                <label htmlFor="pass" className="labelForm">Contraseña</label>
                
                <input type="text" id="pass" className="txt" />
              </div>

              <div className="login_btn">
                <input
                  type="button"
                  value={"Entrar"}
                  className="login_btn-entrar"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
