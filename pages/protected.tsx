import { protectRoute } from "../utils/protectRoute";

function Protected() {
  return <div>I am supposed to be protected!</div>;
}

export default protectRoute(Protected);
