enum STATUS_STAGE {
  IDLE = "IDLE",
  PENDING = "PENDING",
  SUCCESS = "SUCCESS",
  FAIL = "FAIL",
}

type StatusT = keyof typeof STATUS_STAGE;

type LoadingStatusT = {
  status: StatusT;
  error: boolean;
  loading: boolean;
  message: string;
};

export type { StatusT, LoadingStatusT };

export { STATUS_STAGE };
