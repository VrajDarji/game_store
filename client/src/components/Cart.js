import { ChevronRight, X } from "lucide-react";
import { useEffect, useState } from "react";

function Cart({ re }) {
  const [p, setP] = useState([]);
  const [sub, setSub] = useState(0);
  const fetchData = async () => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const url = "https://game-store-server.onrender.com/api/v1/cart";
    const response = await fetch(url, options);
    try {
      if (response.ok) {
        const r = await response.json();
        setP(r);
        var t = 0.0;
        console.log("data Sended", r);
      }
    } catch (err) {
      console.error(err);
    }
  };
  const deleteData = async (id) => {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const url = `https://game-store-server.onrender.com/api/v1/cart/${id}`;
    const response = await fetch(url, options);
    try {
      if (response.ok) {
        const r = await response.json();
        fetchData();
        console.log("data deleted", r);
      }
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, [p]);
  return (
    <div
      className="fixed top-0 right-0 h-[100vh] w-0 bg-[hsl(300,4%,10%)] flex flex-col gap-2 z-50 cart text-white"
      ref={re}
    >
      <div className="px-3 pb-10 py-7 bg-white text-black items-center flex flex-row">
        <button
          onClick={() => {
            re.current.style.width = "0vw";
          }}
        >
          <ChevronRight />
        </button>
        <p className="text-3xl text-black capitalize text-center w-full pr-3">
          Cart
        </p>
      </div>
      <div className="w-full h-[74vh] overflow-y-scroll flex flex-col gap-1">
        {p.length === 0 ? (
          <>
            <p className="w-full py-2 text-xl font-medium px-4">
              Cart is Empty{" "}
            </p>
          </>
        ) : (
          <>
            {p.map((e) => {
              return (
                <div className="w-full h-[13vh] px-2 py-1 flex flex-row justify-between items-center">
                  <div className="h-full flex flex-row gap-2">
                    <img src={e.img} alt="" className="h-full" />
                    <div className="flex flex-col gap-1">
                      <p className="font-medium capitalize text-lg">{e.name}</p>
                      <p>${e.price}</p>
                      <p>Qty:1</p>
                    </div>
                  </div>
                  <button onClick={() => deleteData(e._id)}>
                    <X />
                  </button>
                </div>
              );
            })}
          </>
        )}
      </div>
      <div className="absolute bottom-0 min-w-full bg-[hsl(300,4%,10%)] flex flex-col px-4 py-2 gap-2">
        <p className="w-full border-b-2 text-xl tracking-wide">
          SubTotal : ${sub}
        </p>
        <button className="w-full py-2 rounded-3xl bg-[#8858ef] font-medium text-lg">
          View Cart
        </button>
      </div>
    </div>
  );
}
export default Cart;
