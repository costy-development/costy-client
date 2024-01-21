import { useState } from "react";
import { v4 as uuid } from "uuid";

import { useCheckIsAuthenticatedUser } from "@/hooks/auth";

import * as Styled from "./dropdown.styled";

type DropdownItemT = {
  label: string;
  onSelect?: (item?: Omit<DropdownItemT, "onSelect">) => void;
  active?: boolean;
  danger?: boolean;
  authorized?: boolean;
  role?: string;
};

type DropdownT<T extends DropdownItemT> = {
  data: T[];
  onSelect?: (item: any) => void;
  dropdownMaxHeight?: number;
  dropdownMinWidth?: number;
  dropdownClass?: string;
  buttonClass?: string;
  Button: React.ReactNode;
};

const Dropdown: React.FC<DropdownT<DropdownItemT>> = ({
  data,
  onSelect,
  buttonClass,
  dropdownClass,
  dropdownMaxHeight = 190,
  dropdownMinWidth = 170,
  Button,
}) => {
  const { isAuthenticated, decodedUser } = useCheckIsAuthenticatedUser(true);

  const filteredItems = isAuthenticated
    ? data.filter((item) =>
        item.role ? item.role === decodedUser?.role : item
      )
    : data.filter((item) => !item.authorized);

  const [openDropdown, setOpenDropdown] = useState(false);

  const onToggleDropDown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (filteredItems.length <= 0) return;
    setOpenDropdown((prev) => !prev);
  };

  const onSelectItem = (item: DropdownItemT) => {
    item.onSelect ? item.onSelect(item) : onSelect ? onSelect(item) : "";
    setOpenDropdown(false);
  };

  return (
    <Styled.Dropdown
      data-dropdown
      $dropdown_max_height={dropdownMaxHeight}
      $dropdown_min_width={dropdownMinWidth}
    >
      <button
        type="button"
        name="options dropdown"
        aria-label="options dropdown"
        onClick={onToggleDropDown}
        className={`dropdown__trigger-btn ${buttonClass || ""} ${
          data.some((item) => item.active) ? "active" : ""
        }`}
      >
        {Button}
      </button>

      {openDropdown && filteredItems.length > 0 && (
        <>
          <div
            onClick={onToggleDropDown}
            className="dropdown__backdrop scroll-block"
          />

          <div className={`dropdown__window-wrapper ${dropdownClass || ""}`}>
            <div className="dropdown__window">
              {filteredItems.map((item) => (
                <div
                  key={uuid()}
                  onClick={(e: React.MouseEvent) => {
                    e.stopPropagation();
                    e.preventDefault();
                    onSelectItem(item);
                  }}
                  className={`${item.active ? "active" : ""} ${
                    item.danger ? "danger" : ""
                  } dropdown__window-item`}
                >
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </Styled.Dropdown>
  );
};

export default Dropdown;
