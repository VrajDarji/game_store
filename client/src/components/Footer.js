import { Link } from "react-router-dom";

const products = [
  { link: "/shop/games", t: "games" },
  { link: "/shop/console", t: "console" },
  { link: "/shop/controllers", t: "controllers" },
  { link: "/shop/acc", t: "accessories" },
];
function Footer() {
  return (
    <div className="px-20 py-10 flex flex-col gap-2 bg-[#060506] text-white">
      <div className="grid grid-cols-4 h-full w-full text-white">
        <div className="w-full h-full flex justify-center items-center">
          <h1 className="font-bold text-3xl uppercase tracking-wide">arcade</h1>
        </div>
        <div className="w-full h-full flex flex-col gap-2 justify-end items-center ">
          <p className="font-medium mb-1 capitalize">products</p>
          {products.map((e) => {
            return (
              <Link to={e.link}>
                <p className="capitalize">{e.t}</p>
              </Link>
            );
          })}
        </div>
        <div className="w-full h-full flex flex-col gap-2 justify-end items-center ">
          <p className="font-medium mb-1 capitalize">products</p>
          {products.map((e) => {
            return (
              <Link to={e.link}>
                <p className="capitalize">{e.t}</p>
              </Link>
            );
          })}
        </div>
        <div className="w-full h-full flex flex-col gap-2 justify-end items-center ">
          <p className="font-medium mb-1 capitalize">products</p>
          {products.map((e) => {
            return (
              <Link to={e.link}>
                <p className="capitalize">{e.t}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Footer;
