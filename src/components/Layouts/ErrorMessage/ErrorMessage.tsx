import styled, { css } from "styled-components";

type StyledMessageT = { $type: "normal" | "stand"; $align: "start" | "center" };

const StyledMessage = styled.p<StyledMessageT>`
  color: ${({ theme }) => theme.colors.red};
  width: 100%;
  text-align: ${({ $align }) => $align};

  ${({ theme, $type }) =>
    $type === "normal"
      ? css`
          font-size: ${theme.fontSize.sm};
        `
      : css`
          font-size: ${theme.fontSize.lg};
          position: absolute;
          inset: 0;
          display: flex;
          justify-content: center;
          align-items: center;
        `}
`;

type ErrorMessageT = {
  message: string;
  type?: StyledMessageT["$type"];
  align?: StyledMessageT["$align"];
};

const ErrorMessage: React.FC<ErrorMessageT> = ({
  message,
  type = "normal",
  align = "start",
}) => {
  return (
    <StyledMessage $type={type} $align={align} data-error-message>
      {message}
    </StyledMessage>
  );
};

export default ErrorMessage;
