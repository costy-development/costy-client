import Infinite from "react-infinite-scroll-component";
import { Spinner } from "@/components/Layouts";

type InfiniteScrollT = {
  total: number;
  onNext: () => void;
  hasMore: boolean;
  children: React.ReactNode;
  height?: string;
  showLastMessage?: boolean;
};

const InfiniteScroll: React.FC<InfiniteScrollT> = ({
  total,
  onNext,
  hasMore,
  children,
  height,
  showLastMessage = true,
}) => {
  return (
    <Infinite
      dataLength={total}
      next={onNext}
      hasMore={hasMore}
      loader={<Spinner />}
      {...(height ? { height } : {})}
      {...(showLastMessage
        ? {
            endMessage: (
              <p
                style={{
                  textAlign: "center",
                  width: "100%",
                }}
              >
                მეტი ინფორმაცია არ მოიპოვება
              </p>
            ),
          }
        : {})}
    >
      {children}
    </Infinite>
  );
};

export default InfiniteScroll;
