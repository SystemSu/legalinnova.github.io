import { AlertColor } from "@mui/material";
import React from "react";
import { Notification } from "../components/Notification";

type ContextProps = {
  getError: (msg: string) => void;
  getSuccess: (msg: string) => void;
};

const NotificationContext = React.createContext<ContextProps | null>(null);

export const NotificationProvider: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const [msg, setMsg] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [severity, setseverity] = React.useState<AlertColor | undefined>(
    undefined
  );

  const handleClose = () => {
    setOpen(false);
  };

  const getError = (msg: string) => {
    setseverity("error");
    setOpen(true);
    setMsg(msg);
  };


  const getSuccess = (msg: string) => {
    setseverity("success");
    setOpen(true);
    setMsg(msg);
  };



  const value = {
    getError,
    getSuccess
  };
  return (
    <NotificationContext.Provider value={value}>
      <Notification
        handleClose={handleClose}
        open={open}
        severity={severity}
        msg={msg}
      />
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const context = React.useContext(NotificationContext);
  if (!context) throw new Error("No existe contexto");
  return context;
};
