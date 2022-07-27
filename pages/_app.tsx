import "../styles/globals.css";
import type { AppProps } from "next/app";
import ProtectRouteErrorBoundary from "../lib/protectRoute/ProtectRouteErrorBoundary";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ProtectRouteErrorBoundary>
      <Component {...pageProps} />
    </ProtectRouteErrorBoundary>
  );
}

export default MyApp;
