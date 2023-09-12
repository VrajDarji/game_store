import { useState, useEffect, useRef } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
function Shop() {
  const path = window.location.pathname
    .replace("/shop/", "")
    .replace("%20", " ");
  const [p, setP] = useState([]);
  const r = useRef(null);
  const fetchData = async () => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const url = "http://localhost:8080/api/v1/data";
    const response = await fetch(url, options);
    try {
      if (response.ok) {
        const result = await response.json();
        if (path === "shop all") {
          setP(result);
        } else if (path === "bestsellers") {
          const a = result.filter((e, index) => index % 2 === 0);
          setP(a);
        } else if (path === "on sale") {
          const a = result.filter((e) => e.sale);
          setP(a);
        } else {
          const a = result.filter((e) => e.tag === path);
          setP(a);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    r.current.style.background = "#060506";
    fetchData();
  }, []);
  return (
    <>
      <Nav r={r} />
      <div className="px-20 flex flex-col gap-5 w-full bg-[#060506] text-white">
        <div className="py-10">
          <h1 className="text-[4rem] font-semibold uppercase">{path}</h1>
        </div>
        <div className="grid g2">
          <div className="flex flex-col gap-2">
            <div className="border-b-[1px] py-3">
              <h1 className="capitalize text-xl font-light">filter by</h1>
            </div>
            <div className="py-2 w-full">
                <div></div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-5">
            {p.map((e) => {
              return (
                <div className="relative text-white max-w-full flex flex-col justify-center items-center gap-1">
                  {e.sale ? (
                    <div className="absolute top-0 left-0 px-2 py-1 bg-[#8858ef] text-white z-10">
                      <p className="capitalize text-xs">sale</p>
                    </div>
                  ) : null}
                  <div className="w-full aspect-square overflow-hidden">
                    <img
                      src={e.img}
                      alt=""
                      className="w-full object-cover hover:scale-125 btn"
                      loading="lazy"
                    />
                  </div>
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
                  <button className="mt-2 w-[90%] bg-[#8858ef] py-1 rounded-3xl text-base capitalize font-semibold">
                    add to cart
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Shop;
