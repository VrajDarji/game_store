import { useState, useEffect, useRef } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
function Card() {
  const a = window.location.pathname.replace("/product/", "");
  const [p, setP] = useState([]);
  const [loading, setLoading] = useState(true);
  const r = useRef(null);
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
        const item = result.filter((e) => e._id === a);
        setP(item[0]);
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
    const url = "http://localhost:8080/api/v1/cart";
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
    fetchData();
  }, []);
  return (
    <>
      <Nav r={r} />
      {loading ? (
        <div className="w-full h-[90vh] bg-[#060506] flex justify-center items-center pb-20 pt-3">
          <div className="w-[60vw] h-full grid grid-cols-2 gap-3">
            <div className="w-full flex flex-col bg-[hsl(300,7%,7%)] text-white items-start justify-center gap-5 px-3 py-3 rounded-xl">
              <div className="w-full h-[60vh] bg-blue-300 rounded-lg sk"></div>
              <div className="w-full h-[21vh] bg-blue-300 rounded-lg sk"></div>
            </div>
            <div className=" w-full h-full flex bg-[hsl(300,7%,7%)] flex-col items-start gap-5 text-white py-5 px-3 rounded-xl">
              <div className="w-full h-[47vh] bg-blue-300 rounded-lg sk"></div>
              <div className="w-full h-[11vh] bg-blue-300 rounded-lg sk"></div>
              <div className="w-full h-[21vh] bg-blue-300 rounded-lg sk"></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-[90vh] bg-[#060506] flex justify-center items-center pb-20 pt-3">
          <div className="w-[60vw] h-full grid grid-cols-2 gap-3">
            <div className="w-full flex flex-col  text-white items-start justify-center gap-[4rem]">
              <p>Home/{p.name}</p>
              <img
                src={p.img}
                alt=""
                className="w-[500px] aspect-[4/3] object-cover"
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                neque modi doloribus ducimus aut reiciendis sint soluta sed qui
                repudiandae.
              </p>
            </div>
            <div className="pr-20 w-full h-full flex flex-col items-start gap-5 text-white py-5 pl-3">
              <h1 className="uppercase text-5xl font-semibold pt-[5rem]">
                {p.name}
              </h1>
              {p.sale ? (
                <div className="flex flex-row gap-5">
                  <p className="line-through text-2xl font-base">${p.price}</p>
                  <p className="text-2xl font-base">${p.sale_price}</p>
                </div>
              ) : (
                <p className="text-2xl font-base">${p.price}</p>
              )}
              <p>Quantity</p>
              <button
                className="w-[60%] py-2 rounded-3xl bg-[#8858ef] capitalize font-medium text-white "
                onClick={() => {
                  SendData(p);
                }}
              >
                add to cart
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
export default Card;
