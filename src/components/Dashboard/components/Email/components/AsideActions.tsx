import { useSearchField } from "@/hooks/utils";

import { SearchField } from "@/components/Layouts";
import * as Styled from "./styles/asideActions.styled";

type AsideActionsT = {
  isSelectedAll: boolean;
  areSelectedUsers: boolean;
  onSelectAll: () => void;
  onDeselectAll: () => void;
};

const AsideActions: React.FC<AsideActionsT> = ({
  onSelectAll,
  isSelectedAll,
  onDeselectAll,
  areSelectedUsers,
}) => {
  const { search, setSearch } = useSearchField();

  return (
    <Styled.AsideActions>
      <SearchField value={search} onChange={setSearch} />

      <div className="email-form__aside-actions">
        {!isSelectedAll && (
          <button className="select-btn" onClick={onSelectAll}>
            მონიშნე ყველა
          </button>
        )}

        {areSelectedUsers && (
          <button className="select-btn" onClick={onDeselectAll}>
            ყველას გაუქმება
          </button>
        )}
      </div>
    </Styled.AsideActions>
  );
};

export default AsideActions;
