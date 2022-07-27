import Cookies from "js-cookie";
import { useMemo } from "react";

export function useProtectRoute() {
  const authorized = useMemo(() => Cookies.get("authorized"), []);
  if (!authorized && typeof window !== "undefined") {
    throw new UnauthorizedError();
  }
}

export class UnauthorizedError extends Error {
  constructor() {
    super("Unauthorized");
  }
}
