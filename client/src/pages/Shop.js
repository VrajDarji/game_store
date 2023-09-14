import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { ChevronDown, MinusIcon, PlusIcon } from "lucide-react";

const category = [
  { tag: "shop all", t: "all" },
  { tag: "console", t: "consoles" },
  { tag: "game", t: "games" },
  { tag: "controllers", t: "controllers" },
  { tag: "acc", t: "Accessories" },
  { tag: "on sale", t: "on sale" },
  { tag: "bestsellers", t: "best sellers" },
];

function Shop() {
  const path = window.location.pathname
    .replace("/shop/", "")
    .replace("%20", " ");
  const [p, setP] = useState([]);
  const [pa, setPa] = useState(path);
  const r = useRef(null);
  const [c, setC] = useState(false);
  const [pr, setPr] = useState(false);
  const [sr, setSr] = useState(false);
  const [loading, setLoading] = useState(true);
  const [s, setS] = useState("Sort By");
  const fetchData = async (pa) => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const url = "https://game-store-server.onrender.com/api/v1/data";
    const response = await fetch(url, options);
    try {
      if (response.ok) {
        const result = await response.json();
        if (pa === "shop all") {
          setP(result);
        } else if (pa === "bestsellers") {
          const a = result.filter((e, index) => index % 2 === 0);
          setP(a);
        } else if (pa === "on sale") {
          const a = result.filter((e) => e.sale);
          setP(a);
        } else {
          const a = result.filter((e) => e.tag === pa);
          setP(a);
        }
        setLoading(false);
        console.log(p);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const SendData = async (data) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const url = "https://game-store-server.onrender.com/api/v1/cart";
    const response = await fetch(url, options);
    try {
      if (response.ok) {
        const r = await response.json();
        console.log("data Sended", r);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    r.current.style.background = "#060506";
    fetchData(pa);
    console.log(pa);
  }, [pa]);
  return (
    <>
      <Nav r={r} />
      <div className="px-20 flex flex-col gap-5 w-full bg-[#060506] text-white">
        <div className="py-10">
          <h1 className="text-[4rem] font-semibold uppercase">{pa}</h1>
        </div>
        <div className="grid g2">
          <div className="flex flex-col gap-2">
            <div className=" py-3">
              <h1 className="capitalize text-xl font-light border-b-[1px] pb-3">
                filter by
              </h1>
              <div className="border-b-[1px] py-3 mr-2">
                <div className="flex justify-between items-center px-2">
                  <p className="text-sm font-light">Category</p>
                  <button
                    onClick={() => {
                      setC(!c);
                    }}
                  >
                    {c ? <MinusIcon size={16} /> : <PlusIcon size={16} />}
                  </button>
                </div>
                <div
                  className={`px-3 text-sm font-light capitalize py-2 ${
                    c ? `` : `hidden`
                  }`}
                >
                  {category.map((e) => (
                    <p
                      onClick={() => {
                        setPa(e.tag);
                        setLoading(true);
                        setS("sort by");
                      }}
                      className="cursor-pointer hover:text-[#ccc]"
                    >
                      {e.t}
                    </p>
                  ))}
                </div>
              </div>
              <div className="border-b-[1px] py-3 mr-2">
                <div className="flex justify-between items-center px-2">
                  <p className="text-sm font-light">Price</p>
                  <button
                    onClick={() => {
                      setPr(!pr);
                    }}
                  >
                    {pr ? <MinusIcon size={16} /> : <PlusIcon size={16} />}
                  </button>
                </div>
                <div className={`${pr ? `` : `hidden`} w-full `}>
                  <input type="range" max={100} min={0} className="w-full" />
                  <div className="flex flex-row justify-between items-center font-light text-sm">
                    <p>$24.99</p>
                    <p>$1000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="w-full items-end py-2 flex flex-col relative">
              <div
                className="w-[12vw] px-3 py-1 border-2  flex justify-between items-center cursor-pointer"
                onClick={() => {
                  setSr(!sr);
                }}
              >
                <h1 className="capitalize text-base">{s}</h1>
                <button>
                  <ChevronDown size={20} />
                </button>
              </div>
              {sr ? (
                <div className="absolute right-0 top-[3rem] z-50 py-1 w-[12vw] bg-[#060506] text-white flex flex-col gap-2 border-2 cursor-pointer">
                  <p
                    className="px-3 py-1 hover:bg-[#242324]"
                    onClick={(e) => {
                      setS(e.target.innerText);
                      setSr(false);
                      p.sort((a, b) => a.price - b.price);
                    }}
                  >
                    Price(low to high)
                  </p>
                  <p
                    className="px-3 py-1 hover:bg-[#242324]"
                    onClick={(e) => {
                      setS(e.target.innerText);
                      setSr(false);
                      p.sort((a, b) => b.price - a.price);
                    }}
                  >
                    Price(high to low)
                  </p>
                  <p
                    className="px-3 py-1 hover:bg-[#242324]"
                    onClick={(e) => {
                      setS(e.target.innerText);
                      setSr(false);
                      p.sort((a, b) => a.name.localeCompare(b.name));
                    }}
                  >
                    Name A-Z
                  </p>
                  <p
                    className="px-3 py-1 hover:bg-[#242324]"
                    onClick={(e) => {
                      setS(e.target.innerText);
                      setSr(false);
                      p.sort((a, b) => b.name.localeCompare(a.name));
                    }}
                  >
                    Name Z-A
                  </p>
                </div>
              ) : null}
            </div>
            <div className="grid grid-cols-3 gap-5">
              {loading ? (
                <>
                  {Array(6)
                    .fill(0)
                    .map((e, index) => (
                      <div
                        key={index}
                        className="min-w-[20vw] h-[23vw] bg-[hsl(300,7%,7%)] rounded-xl flex flex-col gap-2 px-3 py-3"
                      >
                        <div className="min-h-[16vw] rounded-lg bg-[hsl(300,0%,10%)] sk"></div>
                        <div className="min-h-[5vw] rounded-lg bg-[hsl(300,0%,10%)] sk"></div>
                      </div>
                    ))}
                </>
              ) : (
                <>
                  {p.map((e) => {
                    return (
                      <div className="relative text-white max-w-full flex flex-col justify-center items-center gap-1">
                        {e.sale ? (
                          <div className="absolute top-0 left-0 px-2 py-1 bg-[#8858ef] text-white z-10">
                            <p className="capitalize text-xs">sale</p>
                          </div>
                        ) : null}
                        <Link to={`/product/${e._id}`} className="w-full">
                          <div className="w-full aspect-square overflow-hidden">
                            <img
                              src={e.img}
                              alt=""
                              className="w-full object-cover hover:scale-125 btn"
                              loading="lazy"
                            />
                          </div>
                        </Link>
                        <h1 className="text-semibold tracking-wide text-xl mt-2">
                          {e.name}
                        </h1>
                        {e.sale ? (
                          <div className="flex gap-3 text-sm text-[#ccc] justify-center items-center">
                            <p className="line-through">${e.price}</p>
                            <p>${e.sale_price}</p>
                          </div>
                        ) : (
                          <>
                            <p className="text-[#ccc] text-sm">${e.price}</p>
                          </>
                        )}
                        <button
                          className="mt-2 w-[90%] bg-[#8858ef] py-1 rounded-3xl text-base capitalize font-semibold"
                          onClick={() => {
                            SendData(e);
                            console.log(e);
                          }}
                        >
                          add to cart
                        </button>
                      </div>
                    );
                  })}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Shop;
