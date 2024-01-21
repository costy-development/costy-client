import * as Styled from "./spinner.styled";

const StandSpinner: React.FC = () => {
  return (
    <Styled.StandSpinner className="scroll-block">
      <span className="loader"></span>
    </Styled.StandSpinner>
  );
};

export default StandSpinner;
