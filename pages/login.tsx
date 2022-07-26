import Cookies from "js-cookie";
import { useRouter } from "next/router";

function Login() {
  const router = useRouter();
  const onClick = () => {
    Cookies.set("authorized", "true");
    router.push("/");
  };
  return (
    <div>
      Do login.
      <button onClick={onClick}>Press Me to proceed</button>
    </div>
  );
}

export default Login;
