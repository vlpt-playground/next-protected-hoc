import React from "react";
import { withRouter, NextRouter } from "next/router";
import { UnauthorizedError } from "./useProtectRoute";

interface WithRouterProps {
  router: NextRouter;
}

interface ProtectRouteErrorBoundaryProps extends WithRouterProps {
  children: React.ReactNode;
}

class ProtectRouteErrorBoundary extends React.Component<
  ProtectRouteErrorBoundaryProps,
  { hasError: boolean }
> {
  constructor(props: ProtectRouteErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error: unknown) {
    console.log(error);
    if (error instanceof UnauthorizedError) {
      this.props.router.replace("/login");
    }
  }
  render() {
    return this.props.children;
  }
}

export default withRouter(ProtectRouteErrorBoundary);
