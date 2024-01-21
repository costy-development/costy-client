import { StoreApi, UseBoundStore } from "zustand";
import {
  STATUS_STAGE,
  StatusT,
  LoadingStatusT,
} from "@/interface/store/common.types";

type WithSelectors<S> = S extends { getState: () => infer T }
  ? S & { use: { [K in keyof T]: () => T[K] } }
  : never;

const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(
  _store: S
) => {
  const store = _store as WithSelectors<typeof _store>;
  store.use = {};
  for (const k of Object.keys(store.getState())) {
    (store.use as any)[k] = () => store((s) => s[k as keyof typeof s]);
  }

  return store;
};

const getStatus = (stage: StatusT, message?: string): LoadingStatusT => {
  const stages: { [key in STATUS_STAGE]: LoadingStatusT } = {
    IDLE: {
      status: "IDLE",
      loading: false,
      error: false,
      message: "",
    },
    PENDING: {
      status: "PENDING",
      loading: true,
      error: false,
      message: "",
    },
    SUCCESS: {
      status: "SUCCESS",
      loading: false,
      error: false,
      message: "",
    },
    FAIL: {
      status: "FAIL",
      loading: false,
      error: true,
      message: message || "",
    },
  };

  return stages[stage];
};

export { createSelectors, getStatus };
