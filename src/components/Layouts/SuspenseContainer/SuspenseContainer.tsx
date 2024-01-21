import { Suspense } from "react";
import { RelativeSpinner } from "@/components/Layouts";

type SuspenseContainerT = {
  children: React.ReactNode;
};

const SuspenseContainer: React.FC<SuspenseContainerT> = ({ children }) => {
  return <Suspense fallback={<RelativeSpinner />}>{children}</Suspense>;
};

export default SuspenseContainer;
