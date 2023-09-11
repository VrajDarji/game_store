import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const links = [
  { link: "/shop/shop all", t: "products" },
  { link: "/shop/on sale", t: "on sale" },
  { link: "/contact us", t: "contact us" },
];

function Nav() {
  return (
    <div className="w-full h-[10vh] flex px-20 justify-between items-center bg-gradient-to-r from-[#281842] to-[#2c0532] text-white capitalize">
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
        <button className="capitalize font-light tracking-tight">log in</button>
        <button>
          <ShoppingCart size={20} />
        </button>
      </div>
    </div>
  );
}
export default Nav;
