/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { jwtDecode as decode } from "jwt-decode";

import { authStore } from "@/store";
import { LocaleStorage } from "@/utils";

import { DecodedUserT } from "@/interface/config.types";

export default function useCheckIsAuthenticatedUser(
  runOnMount: boolean = false
) {
  const user = authStore.use.user();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [decodedUser, setDecodedUser] = useState<{
    _id: string;
    email: string;
    role: string;
  } | null>(null);

  async function check() {
    let isAuthenticatedUser = false;

    const token = LocaleStorage.getJWT();
    const decodedUser: DecodedUserT | null = token ? decode(token) : null;

    if (token && decodedUser && user && decodedUser._id === user._id)
      isAuthenticatedUser = true;

    setDecodedUser(() => ({
      _id: decodedUser?._id || "",
      email: decodedUser?.email || "",
      role: decodedUser?.role || "",
    }));

    return { isAuthenticatedUser, decodedUser };
  }

  useEffect(() => {
    if (!runOnMount) return;

    (async () => {
      const { isAuthenticatedUser } = await check();
      setIsAuthenticated(isAuthenticatedUser);
    })();
  }, [runOnMount, user]);

  return { check, user, isAuthenticated, decodedUser };
}
