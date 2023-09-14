import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../Auth/Firebase";
import { Link, useNavigate } from "react-router-dom";
function SignUp() {
  const [userInfo, SetUserInfo] = useState({
    name: String,
    email: String,
    pass: String,
  });
  const nav = useNavigate();
  const [cnfPass, setCnfPass] = useState(String);
  const actionCodeSettings = {
    url: "https://game-store-pearl.vercel.app",
    handleCodeInApp: true,
  };
  const provider = new GoogleAuthProvider();
  const signIn = async () => {
    await createUserWithEmailAndPassword(auth, userInfo.email, userInfo.pass)
      .then(async (res) => {
        const user = res.user;
        console.log(user);
        await updateProfile(user, {
          displayName: userInfo.name,
        });
        sendEmailVerification(auth.currentUser)
          .then(() => {
            console.log("mail sent");
          })
          .catch((err) => {
            console.error(err);
          });
        nav("/verify");
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
        sendEmailVerification(auth.currentUser)
          .then(() => {
            console.log("mail sent");
          })
          .catch((err) => {
            console.error(err);
          });
        console.log(user);
        nav("/verify");
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
            Welcome To Arcade
          </h1>
          <input
            type="text"
            placeholder="name"
            onChange={(e) => {
              SetUserInfo((prev) => ({ ...prev, name: e.target.value }));
            }}
            className="px-3 py-2 rounded-md placeholder:capitalize outline-none"
          />
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
          <input
            type="password"
            placeholder="confirm password"
            onChange={(e) => setCnfPass(e.target.value)}
            className="px-3 py-2 rounded-md placeholder:capitalize outline-none"
          />
          <button
            onClick={() => {
              if (cnfPass === userInfo.pass) {
                console.log(userInfo);
                signIn();
              } else {
                console.log("pass not match");
              }
            }}
            className="w-full py-2 bg-[#8858ef] rounded-sm my-2"
          >
            Sign Up
          </button>
          <Link to={"/login"}>
            <p className="text-white font-lg underline capitalize">
              Already have account?
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
export default SignUp;
