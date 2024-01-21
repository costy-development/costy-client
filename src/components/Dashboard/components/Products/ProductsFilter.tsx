import { productsSort } from "@/lib";
import { useSearchParams, useSearchField } from "@/hooks/utils";

import * as Styled from "./styles/productsFilter.styled";
import { Dropdown, SearchField } from "@/components/Layouts";

const ProductsFilter: React.FC = () => {
  const { setParam, getParam } = useSearchParams();
  const { search, setSearch } = useSearchField();

  const defaultSortParam = getParam("sort");

  const onSelect = (data: { label: string; value: string }) => {
    setParam("sort", data.value);
  };

  return (
    <Styled.Filter>
      <Dropdown
        onSelect={onSelect}
        data={productsSort.map((item) => ({
          ...item,
          active: item.value === defaultSortParam,
        }))}
        Button={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="m18 21l-4-4h3V7h-3l4-4l4 4h-3v10h3M2 19v-2h10v2M2 13v-2h7v2M2 7V5h4v2z" />
          </svg>
        }
      />

      <SearchField value={search} onChange={(value) => setSearch(value)} />
    </Styled.Filter>
  );
};

export default ProductsFilter;
