import { useRef } from "react";
import { Button } from "../components/ui/Button";
import Input from "../components/ui/Input";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const usernameRef = useRef<any>();
  const passwordRef = useRef<any>();

  async function handleSignup() {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    await axios.post(`${BACKEND_URL}/api/v1/signup`, {
      username,
      password,
    });
    alert("User created successfully");
    navigate("/signin");
  }

  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <div className="border p-5 rounded-lg shadow-sm">
        <h1 className="text-zinc-600 font-bold text-lg text-center">
          Sign up to 2<sup className="font-bold">nd</sup> brain
        </h1>

        <div className="flex flex-col gap-4 mt-5">
          <Input type="text" placeholder="Username" reference={usernameRef} />
          <Input
            type="password"
            placeholder="Password"
            reference={passwordRef}
          />
        </div>
        <Button className="mt-5 w-full" onClick={handleSignup}>
          Sign up
        </Button>
      </div>
    </div>
  );
};

export default Signup;
