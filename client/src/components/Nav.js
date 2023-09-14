import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import { useRef, useEffect, useState } from "react";
import { auth } from "../Auth/Firebase";

const links = [
  { link: "/shop/shop all", t: "products" },
  { link: "/shop/on sale", t: "on sale" },
  { link: "/contact us", t: "contact us" },
];

function Nav({ r }) {
  const c = useRef(null);
  const [user, setUser] = useState(null);
  const sendCuser = async (data) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const url = "http://localhost:8080/api/v1/currentuser";
    const response = await fetch(url, options);
    try {
      if (response.ok) {
        console.log("user sended", data);
      } else {
        console.log("failed");
      }
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    const us = auth.currentUser;
    sendCuser(us);
    console.log(us);
    if (us) {
      setUser(us.displayName);
    }
  }, [user]);
  useEffect(() => {
    const us = auth.currentUser;
    if (us) {
      setUser(us.displayName);
    }
  });
  return (
    <>
      <div
        className="w-full h-[10vh] flex px-20 justify-between items-center bg-gradient-to-r from-[#281842] to-[#2c0532] text-white capitalize"
        ref={r}
      >
        <Link to={"/"}>
          <h1 className="uppercase text-[5vh] tracking-wider font-semibold">
            arcade
          </h1>
        </Link>
        <div className="flex flex-row gap-5">
          {links.map((e) => {
            const { link, t } = e;
            return (
              <Link to={link}>
                <p className="font-light tracking-tight">{t}</p>
              </Link>
            );
          })}
          <Link to={"/signin"}>
            <button className="capitalize font-light tracking-tight">
              {user === null ? `log in` : user}
            </button>
          </Link>
          <button
            onClick={() => {
              c.current.style.width = "22vw";
            }}
          >
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>
      <Cart re={c} />
    </>
  );
}
export default Nav;
