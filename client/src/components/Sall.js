import { Link } from "react-router-dom";
function Sall() {
  return (
    <div className="w-full h-[60vh] pbg2 flex justify-center items-center flex-col gap-1">
      <h1 className="text-center uppercase tracking-wide text-[5rem] font-bold text-white">
        spend & save
      </h1>
      <p className="text-xl text-white font-medium">
        Save on selected products and save
      </p>
      <Link to={"/shop/on sale"}>
        <button className="mt-2 px-5 bg-[#8858ef] py-2 rounded-3xl text-base text-white capitalize font-semibold hover:bg-white hover:text-[#8858ef] btn">
          shop now
        </button>
      </Link>
    </div>
  );
}
export default Sall;
