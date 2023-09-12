import { Link } from "react-router-dom";
function Games() {
  return (
    <div className="w-full h-[100vh] relative bg-[#060506] py-10 px-20">
      <div className="absolute w-[28vw] left-40 rounded-xl bg-[#8858ed] px-10 py-10 flex flex-col gap-2 text-white justify-center items-center z-20 top-20">
        <p className="uppercase text-xl pl-2 font-medium">this week's deals</p>
        <h1 className="uppercase text-[5rem] leading-[5rem] font-semibold">
          10%
        </h1>
        <p className="font-semibold text-2xl">off all gmaes</p>
        <p className="capitalize text-lg font-medium">
          now available on PC & console
        </p>
        <Link to={"/shop/games"}>
          <button className="px-3 py-1 flex justify-center items-center text-lg font-semibold mt-2 rounded-3xl border-2 border-white bg-white capitalize text-[#8858ed] hover:bg-[#8858ed] hover:text-white btn">
            shop now
          </button>
        </Link>
      </div>
      <img
        src="https://static.wixstatic.com/media/c837a6_e07b7f0bd83545608cf2cfce23b9b22f~mv2.jpg/v1/crop/x_151,y_74,w_1180,h_1597/fill/w_431,h_584,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Kira.jpg"
        alt=""
        loading="lazy"
        className="absolute top-10 right-[50%] z-5 w-[24rem] rounded-2xl shadowi"
      />
      <img
        src="https://static.wixstatic.com/media/c837a6_e93c705ac75d4b1695316ad1e73dafd8~mv2.jpg/v1/fill/w_432,h_588,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Dead%20at%20Last.jpg"
        alt=""
        loading="lazy"
        className="absolute right-[30%] z-10 w-[24rem] rounded-2xl shadowi top-40"
      />
      <img
        src="https://static.wixstatic.com/media/c837a6_f1507c37d4234fe3b6847f4ab805d86d~mv2.jpg/v1/fill/w_437,h_588,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Chronosplit.jpg"
        alt=""
        loading="lazy"
        className="absolute top-20 right-[10%] z-20 w-[24rem] rounded-2xl shadowi"
      />
    </div>
  );
}
export default Games;
