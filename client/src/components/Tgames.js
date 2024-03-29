import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Tgames() {
  const [p, setP] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
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
        const a = result.filter((e) => e.tag === "game");
        setLoading(false);
        setP(a);

        console.log(a);
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
    fetchData();
  }, []);
  return (
    <div className="h-[100vh] w-full bg-[#060506] pt-[20vh] px-20 flex flex-col gap-10 ">
      <div className="flex justify-between items-center">
        <h1 className="uppercase text-4xl tracking-wide font-bold text-white">
          trending games
        </h1>
        <Link to={"/shop/game"}>
          <button className="uppercase px-3 py-2 bg-white text-[#8858ed] rounded-3xl font-semibold">
            view all
          </button>
        </Link>
      </div>
      <div className="flex justify-start items-center overflow-x-scroll w-[90vw] gap-10">
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
                <div className="relative text-white max-w-[20vw] flex flex-col justify-center items-center gap-1">
                  <Link to={`/product/${e._id}`} className="text-center">
                    {e.sale ? (
                      <div className="absolute top-0 left-0 px-2 py-1 bg-[#8858ef] text-white z-10">
                        <p className="capitalize text-xs">sale</p>
                      </div>
                    ) : null}
                    <div className="max-w-[20w] aspect-square overflow-hidden">
                      <img
                        src={e.img}
                        alt=""
                        className="max-w-[20vw] object-cover hover:scale-125 btn"
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
                  </Link>
                  <button
                    className="mt-2 w-[90%] bg-[#8858ef] py-1 rounded-3xl text-base capitalize font-semibold"
                    onClick={() => {
                      SendData(e);
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
  );
}
export default Tgames;
