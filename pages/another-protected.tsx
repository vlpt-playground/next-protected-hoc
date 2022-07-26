import { protectRoute } from "../utils/protectRoute";

function AnotherProtected() {
  return <div>Here is another protected route</div>;
}

export default protectRoute(AnotherProtected);
