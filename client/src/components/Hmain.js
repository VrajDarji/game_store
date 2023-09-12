import { Link } from "react-router-dom";

function Hmain() {
  return (
    <div className="w-full h-[90vh] pbg1 px-20 py-20">
      <div className="absolute w-[35vw] rounded-xl bg-[#8858ed] px-10 py-10 flex flex-col gap-2 text-white justify-center items-start shadow">
        <p className="capitalize text-xl pl-2 font-medium">
          Power up your game
        </p>
        <h1 className="uppercase text-[5rem] leading-[5rem] font-semibold">
          cyber kid infinite
        </h1>
        <p className="capitalize text-lg font-medium">
          now available on PC & console
        </p>
        <Link to={"/shop/games"}>
          <button className="px-3 py-1 flex justify-center items-center text-lg font-semibold mt-2 rounded-3xl border-2 border-white bg-white capitalize text-[#8858ed] hover:bg-[#8858ed] hover:text-white btn">
            buy now
          </button>
        </Link>
      </div>
      <div className="absolute bottom-[-4rem] right-[11rem]">
        <img
          src="https://static.wixstatic.com/media/c837a6_7c7101b9ee5e4c8da4855ceb9b513a14~mv2.jpg/v1/crop/x_90,y_0,w_1361,h_1759/fill/w_603,h_775,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Cyber%20copy.jpg"
          alt=""
          className="h-[77vh] rounded-2xl shadow"
          loading="lazy"
        />
      </div>
    </div>
  );
}
export default Hmain;
