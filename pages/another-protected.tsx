import { useProtectRoute } from "../lib/protectRoute/useProtectRoute";

function AnotherProtected() {
  useProtectRoute();
  console.log("이거는 실행 안됨");
  return <div>Here is another protected route</div>;
}

export default AnotherProtected;
