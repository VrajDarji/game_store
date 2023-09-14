import { useState } from "react";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../Auth/Firebase";
import { Link, useNavigate } from "react-router-dom";
function Login() {
  const [userInfo, SetUserInfo] = useState({
    email: String,
    pass: String,
  });
  const nav = useNavigate();
  const provider = new GoogleAuthProvider();
  const signIn = async () => {
    await signInWithEmailAndPassword(auth, userInfo.email, userInfo.pass)
      .then(async (res) => {
        const user = res.user;
        console.log(user);
        nav("/");
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const sGoo = async () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        GoogleAuthProvider.credentialFromResult(res);
        const user = res.user;
        console.log(user);
        nav("/");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="pbg4 w-[100vw] h-[100vh] bg-[#060506] justify-center items-center flex">
      <div className="w-[60vw] h-[75vh] bg-[rgba(19,17,19,.4)] px-3 py-3 grid grid-cols-2 rounded-xl">
        <div className="w-full h-full ">
          <img
            src="https://img.freepik.com/premium-photo/cyberpunk-gaming-controller-gamepad-joystick-illustration_691560-5812.jpg"
            alt=""
            className="w-full h-full object-cover rounded-l-lg"
          />
        </div>
        <div className="px-10 py-10 flex flex-col gap-2 bg-[rgba(26,26,26,1)] rounded-r-lg">
          <h1 className="text-3xl pb-3  text-white font-semibold tracking-wide ">
            Login To Arcade
          </h1>
          <input
            type="email"
            placeholder="email"
            onChange={(e) => {
              SetUserInfo((prev) => ({ ...prev, email: e.target.value }));
            }}
            className="px-3 py-2 rounded-md placeholder:capitalize outline-none"
          />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => {
              SetUserInfo((prev) => ({ ...prev, pass: e.target.value }));
            }}
            className="px-3 py-2 rounded-md placeholder:capitalize outline-none"
          />
          <button
            onClick={() => {
              signIn();
            }}
            className="w-full py-2 bg-[#8858ef] rounded-sm my-2"
          >
            Log In
          </button>
          <Link to={"/passwordreset"}>
            <p className="text-white font-lg underline capitalize">
              forgot password
            </p>
          </Link>
          <button
            className="mt-7 w-full py-2 text-[#8858ef] border-2 border-[#8858ef] capitalize rounded-sm"
            onClick={() => {
              sGoo();
            }}
          >
            continue with google
          </button>
        </div>
      </div>
    </div>
  );
}
export default Login;
