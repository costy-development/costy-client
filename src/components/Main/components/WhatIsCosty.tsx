import { lazy } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { Modal, SuspenseContainer } from "@/components/Layouts";

const WhatIsCostyWindow = lazy(() => import("./WhatIsCostyWindow"));

const WhatIsCosty: React.FC = () => {
  const navigate = useNavigate();
  const { hash } = useLocation();

  const onClose = () => navigate(-1);

  return (
    <Modal onClose={onClose} open={hash === "#costy"}>
      <SuspenseContainer>
        {hash === "#costy" && <WhatIsCostyWindow />}
      </SuspenseContainer>
    </Modal>
  );
};

export default WhatIsCosty;
