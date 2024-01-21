import { Text } from "@/components/Layouts";
import styled from "styled-components";

type LineClampT = {
  clamp?: number;
  text: string;
  showEmptyLines?: boolean;
  sx?: React.CSSProperties;
  component?: keyof JSX.IntrinsicElements;
};

const LineClampedBox = styled.div<{ $clamp: number }>`
  display: -webkit-box;
  box-orient: vertical;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: ${({ $clamp }) => $clamp};
  width: 100%;
`;

const LineClamp: React.FC<LineClampT> = ({
  text,
  sx = {},
  clamp = 1,
  component = "div",
  showEmptyLines = false,
}) => {
  return (
    <LineClampedBox as={component} $clamp={clamp} style={sx} data-line-clamp>
      <Text text={text} showEmptyLines={showEmptyLines} />
    </LineClampedBox>
  );
};

export default LineClamp;
