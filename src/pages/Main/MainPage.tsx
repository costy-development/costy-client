import Helmet from "@/pages/Helmet";
import MainMenu from "@/components/Main/MainMenu";
import AppLayout from "@/components/AppLayout/AppLayout";

const MainPage: React.FC = () => {
  return (
    <>
      <Helmet description={"Costy"} />

      <AppLayout>
        <MainMenu />
      </AppLayout>
    </>
  );
};

export default MainPage;
