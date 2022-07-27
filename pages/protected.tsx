import { protectRoute } from "../utils/protectRoute";
import { useProtectRoute } from "../lib/protectRoute/useProtectRoute";

function Protected() {
  console.log("이 쪽 코드는 실행 됨");
  useProtectRoute();
  console.log("여기 아래부터는 실행 안 됨");
  return <div>I am supposed to be protected!</div>;
}

export default Protected;
