import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "@/App.tsx";
import ThemeProvider from "@/providers/ThemeProvider.tsx";
import AppProvider from "@/providers/AppProvider.tsx";
import AppUIProvider from "@/providers/AppUIProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <BrowserRouter>
      <AppProvider>
        <AppUIProvider>
          <App />
        </AppUIProvider>
      </AppProvider>
    </BrowserRouter>
  </ThemeProvider>
);
