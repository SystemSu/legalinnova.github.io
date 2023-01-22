import { HeaderComponents } from "@/components";
import { Button, Container } from "@mui/material";

export const HomePage: React.FC<{}> = () => {
  /*sx={{ mt: 9 }}*/
  return (
    <Container maxWidth='xl'>
      <HeaderComponents title="Hola mundo" description="descripcion"  element={<div><h1>hola</h1></div>}/>
    </Container>
  );
};
