import { useEffect, lazy } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

import { PATHS } from "@/config/paths";
import { useRedirectAuthorized } from "@/hooks/auth";

import { SuspenseContainer } from "@/components/Layouts";
import AppLayout from "@/components/AppLayout/AppLayout";

const Auth = lazy(() => import("@/components/Auth/Auth"));

const AuthPage: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { loading } = useRedirectAuthorized();

  useEffect(() => {
    if (loading) return;

    if (pathname === PATHS.auth_page)
      navigate(PATHS.auth_login_page, { replace: true });
  }, [pathname, navigate, loading]);

  return (
    <AppLayout>
      <SuspenseContainer>
        <Auth>{!loading && <Outlet />}</Auth>
      </SuspenseContainer>
    </AppLayout>
  );
};

export default AuthPage;
