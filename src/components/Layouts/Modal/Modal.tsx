import { createPortal } from "react-dom";
import styled from "styled-components";

import { scaleUp } from "@/styles/utils/animations";

type ModalT = {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
  showCloseBtn?: boolean;
};

const AppModal = styled.div`
  .modal-box {
    position: fixed;
    inset: 0;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.5);
  }

  .modal-window {
    background: ${({ theme }) => theme.colors.white};
    box-shadow: ${({ theme }) => theme.boxShadow.radial_lg};
    border-radius: 1rem;
    overflow: hidden;
    min-width: 30rem;
    min-height: 15rem;
    transform: scale(0.7);
    opacity: 0;
    animation: ${scaleUp(0.7)} 0.3s ease-out forwards;
  }

  .modal-box__close {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 1rem 2rem;
    font-size: 28px;
  }

  .modal-box__content {
    padding: 0rem 2rem 2rem 2rem;
    position: relative;
  }
`;

const Modal: React.FC<ModalT> = ({ children, onClose, open, showCloseBtn }) => {
  const stopPropagation = (e: React.MouseEvent) => e.stopPropagation();

  return createPortal(
    <AppModal>
      {open && (
        <div className="modal-box" onClick={onClose}>
          <div className="modal-window" onClick={stopPropagation}>
            {showCloseBtn && (
              <div className="modal-box__close">
                <button className="modal-box__close-btn" onClick={onClose}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"
                    />
                  </svg>
                </button>
              </div>
            )}

            <div className="modal-box__content">{children}</div>
          </div>
        </div>
      )}
    </AppModal>,
    document.getElementById("portal") as HTMLDivElement
  );
};

export default Modal;
