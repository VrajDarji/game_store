function NewsLetter() {
  return (
    <>
      <div className="w-full pt-[5rem] pb-[10rem] pbg3 flex justify-center items-center flex-col gap-1">
        <h1 className="text-center uppercase tracking-wide text-5xl font-bold text-white">
          newsletter
        </h1>
        <p className="text-lg text-white font-normal mt-4">
          Sign up to recieve updates on new
        </p>
        <p className="text-lg text-white font-normal mb-7">
          products and special offers
        </p>
        <div className="flex flex-col">
          <input
            type="text"
            className="w-[22rem] bg-transparent px-1 py-1 rounded-t-xl border-2 border-white text-white placeholder:capitalize placeholder:text-white placeholder:text-center"
            placeholder="email"
          />
          <button className="w-[22rem] bg-white text-black font-medium capitalize px-1 py-1 rounded-b-xl border-2 border-white">
            submit
          </button>
        </div>
      </div>
      <div className="w-full h-[30vh] relative bg-gradient-to-r from-[#8861da] to-[#8f2fc7] flex justify-center items-center">
        <img
          src="https://static.wixstatic.com/media/c837a6_120b654bf8214699a68e61aedba60fdd~mv2.png/v1/fill/w_1081,h_348,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/Games%20stack%20copy.png"
          alt=""
          loading="lazy"
          className="mt-[-24vh] w-[56%]"
        />
      </div>
    </>
  );
}
export default NewsLetter;
