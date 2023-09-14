import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../Auth/Firebase";
import { useState } from "react";
import { Link } from "react-router-dom";


function PassReset() {
  const [email, setEmail] = useState(String);
  const [mSent, setMSent] = useState(false);
  const resetPass = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log("mail sent");
        setMSent(true);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div>
      {mSent ? (
        <>
          <p>Mail sent</p>
          <Link to={"/login"}>Login</Link>
        </>
      ) : (
        <>
          <input
            type="email"
            placeholder="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <button
            onClick={() => {
              resetPass();
            }}
          >
            Send Reset Mail
          </button>
        </>
      )}
    </div>
  );
}
export default PassReset;
