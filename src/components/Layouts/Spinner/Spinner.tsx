import * as Styled from "./spinner.styled";

const Spinner: React.FC = () => {
  return (
    <Styled.Spinner data-spinner>
      <span className="loader"></span>
    </Styled.Spinner>
  );
};

export default Spinner;
