import { createContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { RouterHistory } from "@/config/config";

type AppProviderT = {
  children: React.ReactNode;
};

type AppProviderContextT = {};

export const AppContext = createContext<AppProviderContextT>({});

const AppProvider: React.FC<AppProviderT> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  RouterHistory.navigate = navigate;
  RouterHistory.location = location;

  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

export default AppProvider;
