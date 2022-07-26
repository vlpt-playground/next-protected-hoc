import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export function protectRoute<T>(TargetComponent: (props: T) => JSX.Element) {
  const WrappedComponent = (props: T) => {
    const router = useRouter();
    const [ready, setReady] = useState(false);

    useEffect(() => {
      const cookie = Cookies.get("authorized");
      if (cookie !== "true") {
        router.replace("/login");
        return;
      }
      setReady(true);
    }, [router]);
    if (!ready) return null;
    return <TargetComponent {...props} />;
  };
  return WrappedComponent;
}
