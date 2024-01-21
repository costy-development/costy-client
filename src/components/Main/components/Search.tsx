import { lazy } from "react";
import { useNavigate } from "react-router-dom";

import { PATHS } from "@/config/paths";
import { useSearchParams } from "@/hooks/utils";

import { Modal, SuspenseContainer } from "@/components/Layouts";
const SearchWindow = lazy(() => import("./SearchWindow"));

type SearchT = {};

const Search: React.FC<SearchT> = () => {
  const navigate = useNavigate();

  const { getParam } = useSearchParams();
  const tab = getParam("tab");

  const onClose = () => navigate(PATHS.root_page);

  return (
    <Modal onClose={onClose} open={tab === "search"}>
      <SuspenseContainer>
        {tab === "search" && <SearchWindow />}
      </SuspenseContainer>
    </Modal>
  );
};

export default Search;
