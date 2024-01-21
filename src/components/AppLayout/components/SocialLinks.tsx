import * as Styled from "./styles/socialLinks.styled";

const SocialLinks: React.FC = () => {
  return (
    <Styled.SocialLinks>
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
    </Styled.SocialLinks>
  );
};

export default SocialLinks;
