import { createContext, useState } from "react";

import { Dialog } from "@/components/Layouts";

import { DialogT } from "@/interface/ui/index.types";

type DialogConfigT = Omit<DialogT, "onClose">;
type ActivateDialogArgsT = Omit<DialogT, "open" | "onClose">;

type AppUIProviderT = {
  children: React.ReactNode;
};

type AppUIContextT = {
  activateDialog: (args: ActivateDialogArgsT) => void;
};

export const AppUIContext = createContext<AppUIContextT>({
  activateDialog: () => {},
});

const AppUIProvider: React.FC<AppUIProviderT> = ({ children }) => {
  const dialogConfig: DialogConfigT = {
    open: false,
    title: "",
    subTitle: "",
    message: "",
    target: "",
    type: "detailed",
    onConfirm: () => {},
  };

  const [dialog, setDialog] = useState<DialogConfigT>(dialogConfig);

  const onCloseDialog = () => setDialog(() => ({ ...dialogConfig }));

  const activateDialog = (args: ActivateDialogArgsT) => {
    setDialog((prev) => ({
      ...prev,
      open: true,
      title: args.title || "",
      subTitle: args.subTitle || "",
      message: args.message || "",
      target: args.target || "",
      type: args.type || "detailed",
      onConfirm: () => {
        args.onConfirm();
        onCloseDialog();
      },
    }));
  };

  return (
    <AppUIContext.Provider value={{ activateDialog }}>
      <Dialog {...dialog} onClose={onCloseDialog} />
      {children}
    </AppUIContext.Provider>
  );
};

export default AppUIProvider;
