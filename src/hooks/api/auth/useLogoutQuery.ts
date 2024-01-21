import { authStore } from "@/store";
import { NODE_MODE } from "@/config/env";

export default function useLogoutQuery() {
  const logout = authStore.use.logout();

  const onLogout = async () => {
    try {
      await logout();
    } catch (error) {
      NODE_MODE === "DEV" && console.log(error);
    }
  };

  return { onLogout };
}
