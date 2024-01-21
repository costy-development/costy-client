import * as Styled from "./auth.styled";

type AuthT = {
  children: React.ReactNode;
};

const Auth: React.FC<AuthT> = ({ children }) => {
  return (
    <Styled.Auth
      onClick={(e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      <div className="auth__circle-container">{children}</div>
    </Styled.Auth>
  );
};

export default Auth;
