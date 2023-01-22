import { Divider, Grid, Typography } from "@mui/material";
import { Box, height } from "@mui/system";
import React from "react";

type HederProps = {
  title: string;
  description: string;
  element?: React.ReactNode | null;
};

export const HeaderComponents: React.FC<HederProps> = ({
  title,
  description,
  element,
}) => {
  return (
    <div>
      <Box sx={{ width: "100%", height: "350px" }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ height: "100%" }}
        >
          <Grid
            item
            xs={5}
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{ height: "100%" }}
          >
            <Grid item><Typography variant="h2"> {title}</Typography></Grid>

            <Grid item>
               <Typography>{description}</Typography> 
               </Grid>
               {element !== undefined && (<Grid sx={{ mt: 4,width:'100%' }} item>{element}</Grid>)}
               </Grid>
        </Grid>
      </Box>
      <Divider />
    </div>
  );
};
