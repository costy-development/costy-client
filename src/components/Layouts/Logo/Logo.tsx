import styled from "styled-components";
import { Link } from "react-router-dom";

import { PATHS } from "@/config/paths";

const StyledLogo = styled(Link)`
  position: fixed;
  top: 2rem;
  left: 3rem;
  z-index: 9;
`;

const Logo: React.FC = () => {
  return (
    <StyledLogo to={PATHS.root_page} data-logo>
      <img
        src="/icons/logo.png"
        alt="costy"
        title="costy"
        loading="eager"
        width={173}
        height={98}
      />
    </StyledLogo>
  );
};

export default Logo;
