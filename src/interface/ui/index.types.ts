type DialogT = {
  open: boolean;
  title?: string;
  subTitle?: string;
  message: string;
  target: string;
  type?: "warning" | "detailed" | "danger";
  onClose: () => void;
  onConfirm: () => void;
};

export type { DialogT };
