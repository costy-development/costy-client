import { Link } from "react-router-dom";

import {
  COSTY_LINKEDIN_URL,
  COSTY_FACEBOOK_URL,
  COSTY_INSTAGRAM_URL,
} from "@/config/config";

import * as Styled from "./styles/socialLinks.styled";

const SocialLinks: React.FC = () => {
  return (
    <Styled.SocialLinks>
      <Link to={COSTY_LINKEDIN_URL} target="_blank">
        <figure>
          <img
            src="/icons/linkedin.png"
            alt="linkedin"
            loading="eager"
            title="linkedin"
            width={29}
            height={29}
          />
        </figure>
      </Link>

      <Link to={COSTY_INSTAGRAM_URL} target="_blank">
        <figure>
          <img
            src="/icons/instagram.png"
            alt="instagram"
            loading="eager"
            title="linkedin"
            width={29}
            height={29}
          />
        </figure>
      </Link>

      <Link to={COSTY_FACEBOOK_URL} target="_blank">
        <figure>
          <img
            src="/icons/facebook.png"
            alt="facebook"
            loading="eager"
            title="linkedin"
            width={29}
            height={29}
          />
        </figure>
      </Link>
    </Styled.SocialLinks>
  );
};

export default SocialLinks;
