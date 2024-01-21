import * as UI from "./components";
import * as Styled from "./styles/dashboard.styled";

type DashboardT = { children: React.ReactNode };

const Dashboard: React.FC<DashboardT> = ({ children }) => {
  return (
    <Styled.Dashboard>
      <UI.Aside />
      {children}
    </Styled.Dashboard>
  );
};

export default Dashboard;
