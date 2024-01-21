import { useState } from "react";
import styled from "styled-components";

import { useLogoutQuery } from "@/hooks/api/auth";
import { useAppUIContext } from "@/providers/providers";

import { Dropdown, DeleteAccountModal } from "@/components/Layouts";

const StyledMenu = styled.div`
  [data-dropdown] .dropdown__window-wrapper.main-menu__dropdown {
    left: -20rem;
    top: -1rem;
    box-shadow: ${({ theme }) => theme.boxShadow.circle_shadow};
  }
`;

const MenuBurger: React.FC = () => {
  const [openDeleteAccountModal, setOpenDeleteAccountModal] = useState(false);

  const { onLogout } = useLogoutQuery();

  const { activateDialog } = useAppUIContext();

  const onStartAccountDeletion = () =>
    activateDialog({
      target: "ანგარიშის",
      message: "დარწმუნებული ხართ გსურთ თქვენი <TARGET> წაშლა ?",
      title: "ანგარიშის წაშლა",
      type: "danger",
      onConfirm: () => setOpenDeleteAccountModal(true),
    });

  const onCloseDeleteAccountModal = () => setOpenDeleteAccountModal(false);

  const dropdownItems = [
    { label: "გასვლა", onSelect: onLogout, authorized: true },
    {
      label: "ანგარიშის წაშლა",
      onSelect: onStartAccountDeletion,
      authorized: true,
      danger: true,
    },
  ];

  return (
    <>
      <StyledMenu className="list-item__route">
        <Dropdown
          data={dropdownItems}
          dropdownClass="main-menu__dropdown"
          Button={
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M0 3.75A.75.75 0 0 1 .75 3h14.5a.75.75 0 0 1 0 1.5H.75A.75.75 0 0 1 0 3.75M0 8a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H.75A.75.75 0 0 1 0 8m.75 3.5a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          }
        />
      </StyledMenu>

      <DeleteAccountModal
        open={openDeleteAccountModal}
        onClose={onCloseDeleteAccountModal}
      />
    </>
  );
};

export default MenuBurger;
