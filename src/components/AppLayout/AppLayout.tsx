import { useLocation } from "react-router-dom";

import { PATHS } from "@/config/paths";

import * as UI from "./components";
import * as Styled from "./appLayout.styled";
import { Logo } from "@/components/Layouts";

type AppLayoutT = {
  children: React.ReactNode;
  showLogo?: boolean;
  showSocials?: boolean;
  showNav?: boolean;
  showBgLine?: boolean;
};

const AppLayout: React.FC<AppLayoutT> = ({
  children,
  showLogo = true,
  showSocials = true,
  showNav = true,
  showBgLine = true,
}) => {
  const { pathname } = useLocation();

  if (pathname.startsWith(PATHS.dashboard_page)) return <>{children}</>;

  return (
    <Styled.AppLayout className={showBgLine ? "lined" : ""}>
      <h1 className="app-head">Costy costy Costi costi</h1>

      {showLogo && <Logo />}

      {showSocials && <UI.SocialLinks />}

      {showNav && <UI.ExpandNav />}

      {children}
    </Styled.AppLayout>
  );
};

export default AppLayout;
