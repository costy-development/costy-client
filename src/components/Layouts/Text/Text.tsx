import { v4 as uuid } from "uuid";

type TextT = {
  text: string;
  showEmptyLines?: boolean;
};

const Text: React.FC<TextT> = ({ text, showEmptyLines = true }) => {
  const fragments =
    text?.split("\n").filter((fr) => (showEmptyLines ? fr : fr !== "")) || [];

  return (
    <>
      {fragments.length > 0 ? (
        fragments.map((fragment) =>
          fragment === "" ? (
            <br />
          ) : (
            <p key={uuid()} style={{ width: "100%" }}>
              {fragment}
            </p>
          )
        )
      ) : (
        <></>
      )}
    </>
  );
};

export default Text;
