import { useRef } from "react";
import { Button } from "../components/ui/Button";
import Input from "../components/ui/Input";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  const usernameRef = useRef<any>();
  const passwordRef = useRef<any>();

  async function handleSignin() {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    const response = await axios.post(`${BACKEND_URL}/api/v1/signin`, {
      username,
      password,
    });

    const jwt = response.data.token;
    localStorage.setItem("token", jwt);
    navigate("/");
  }
  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <div className="border p-5 rounded-lg shadow-sm">
        <h1 className="text-zinc-600 font-bold text-lg text-center">
          Sign In to your 2<sup className="font-bold">nd</sup> brain
        </h1>

        <div className="flex flex-col gap-4 mt-5">
          <Input type="text" placeholder="Username" reference={usernameRef} />
          <Input
            type="password"
            placeholder="Password"
            reference={passwordRef}
          />
        </div>
        <Button className="mt-5 w-full" onClick={handleSignin}>
          Sign In
        </Button>
      </div>
    </div>
  );
};

export default Signin;
