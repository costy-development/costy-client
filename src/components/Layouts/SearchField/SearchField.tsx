import * as Styled from "./searchField.styled";
import { TextField } from "@/components/Layouts";

type SearchFieldT = {
  value: string;
  onChange: (value: string) => void;
};

const SearchField: React.FC<SearchFieldT> = ({ onChange, value }) => {
  return (
    <Styled.SearchField data-search>
      <TextField
        message=""
        hasError={false}
        label="ძებნა"
        fieldProps={{
          value,
          onChange: (e) =>
            onChange((e as React.ChangeEvent<HTMLInputElement>).target.value),
          name: "search",
        }}
        InputAdornment={
          <div className="search-adornment">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314"
              />
            </svg>
          </div>
        }
      />
    </Styled.SearchField>
  );
};

export default SearchField;
