import { v4 as uuid } from "uuid";

import * as Styled from "./dialog.styled.ts";
import { Modal } from "@/components/Layouts";

import { DialogT } from "@/interface/ui/index.types.ts";

const Dialog: React.FC<DialogT> = ({ type = "detailed", ...props }) => {
  return (
    <Modal onClose={props.onClose} open={props.open}>
      <Styled.Dialog className="dialog-window" $type={type}>
        {props.title && <span className="dialog-title">{props.title}</span>}

        {props.subTitle && (
          <span className="dialog-subtitle">{props.subTitle}</span>
        )}

        <p className="dialog-message">
          {props.message
            .split(/(<TARGET>)/)
            .map((fragment) =>
              fragment === "<TARGET>" ? (
                <strong key={uuid()}>{props.target}</strong>
              ) : (
                <span key={uuid()}>{fragment}</span>
              )
            )}
        </p>

        <div className="dialog-actions">
          <button className="dialog__action-btn" onClick={props.onClose}>
            გაუქმება
          </button>
          <button className="dialog__action-btn" onClick={props.onConfirm}>
            გაგრძელება
          </button>
        </div>
      </Styled.Dialog>
    </Modal>
  );
};

export default Dialog;
