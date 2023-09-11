import { Link } from "react-router-dom";
const sbc = [
  {
    link: "/shop/console",
    img: "https://static.wixstatic.com/media/c837a6_dbd7e89c57bf4488bd0b2ae612679ac4~mv2.jpg/v1/fill/w_439,h_586,q_90/c837a6_dbd7e89c57bf4488bd0b2ae612679ac4~mv2.webp 1x, https://static.wixstatic.com/media/c837a6_dbd7e89c57bf4488bd0b2ae612679ac4~mv2.jpg/v1/fill/w_878,h_1172,q_90/c837a6_dbd7e89c57bf4488bd0b2ae612679ac4~mv2.webp 2x, https://static.wixstatic.com/media/c837a6_dbd7e89c57bf4488bd0b2ae612679ac4~mv2.jpg/v1/fill/w_1317,h_1758,q_90/c837a6_dbd7e89c57bf4488bd0b2ae612679ac4~mv2.webp 3x, https://static.wixstatic.com/media/c837a6_dbd7e89c57bf4488bd0b2ae612679ac4~mv2.jpg/v1/fill/w_1756,h_2344,q_90/c837a6_dbd7e89c57bf4488bd0b2ae612679ac4~mv2.webp 4x, https://static.wixstatic.com/media/c837a6_dbd7e89c57bf4488bd0b2ae612679ac4~mv2.jpg/v1/fill/w_2195,h_2930,q_90/c837a6_dbd7e89c57bf4488bd0b2ae612679ac4~mv2.webp 5x",
    t: "consoles",
  },
  {
    link: "/shop/acc",
    img: "https://static.wixstatic.com/media/c837a6_86d07bbcc9b04e268cb6af68cb5c9e10~mv2.jpg/v1/fill/w_440,h_586,q_90/c837a6_86d07bbcc9b04e268cb6af68cb5c9e10~mv2.webp 1x, https://static.wixstatic.com/media/c837a6_86d07bbcc9b04e268cb6af68cb5c9e10~mv2.jpg/v1/fill/w_880,h_1172,q_90/c837a6_86d07bbcc9b04e268cb6af68cb5c9e10~mv2.webp 2x, https://static.wixstatic.com/media/c837a6_86d07bbcc9b04e268cb6af68cb5c9e10~mv2.jpg/v1/fill/w_1320,h_1758,q_90/c837a6_86d07bbcc9b04e268cb6af68cb5c9e10~mv2.webp 3x, https://static.wixstatic.com/media/c837a6_86d07bbcc9b04e268cb6af68cb5c9e10~mv2.jpg/v1/fill/w_1760,h_2344,q_90/c837a6_86d07bbcc9b04e268cb6af68cb5c9e10~mv2.webp 4x, https://static.wixstatic.com/media/c837a6_86d07bbcc9b04e268cb6af68cb5c9e10~mv2.jpg/v1/fill/w_2200,h_2930,q_90/c837a6_86d07bbcc9b04e268cb6af68cb5c9e10~mv2.webp 5x",
    t: "accessories",
  },
  {
    link: "/shop/controllers",
    img: "https://static.wixstatic.com/media/c837a6_870af96f67744ed8b5eb7c239430c5c7~mv2.jpg/v1/fill/w_439,h_586,fp_0.75_0.36,q_90/c837a6_870af96f67744ed8b5eb7c239430c5c7~mv2.webp 1x, https://static.wixstatic.com/media/c837a6_870af96f67744ed8b5eb7c239430c5c7~mv2.jpg/v1/fill/w_878,h_1172,fp_0.75_0.36,q_90/c837a6_870af96f67744ed8b5eb7c239430c5c7~mv2.webp 2x, https://static.wixstatic.com/media/c837a6_870af96f67744ed8b5eb7c239430c5c7~mv2.jpg/v1/fill/w_1317,h_1758,fp_0.75_0.36,q_90/c837a6_870af96f67744ed8b5eb7c239430c5c7~mv2.webp 3x, https://static.wixstatic.com/media/c837a6_870af96f67744ed8b5eb7c239430c5c7~mv2.jpg/v1/fill/w_1756,h_2344,fp_0.75_0.36,q_90/c837a6_870af96f67744ed8b5eb7c239430c5c7~mv2.webp 4x, https://static.wixstatic.com/media/c837a6_870af96f67744ed8b5eb7c239430c5c7~mv2.jpg/v1/fill/w_2195,h_2930,fp_0.75_0.36,q_90/c837a6_870af96f67744ed8b5eb7c239430c5c7~mv2.webp 5x",
    t: "controllers",
  },
];

function SbyCat() {
  return (
    <div className="w-[100vw] h-[100vh] py-10 px-20 bg-[#232223] flex flex-col gap-6 text-white">
      <h1 className="text-5xl uppercase font-bold tracking-wide">
        shop by category
      </h1>
      <div className="grid grid-cols-3 gap-5">
        {sbc.map((e) => {
          return (
            <Link to={e.link}>
              <div className="px-3 py-2">
                <div className="max-w-full overflow-hidden rounded-2xl">
                  <img
                    src={e.img}
                    alt=""
                    className="object-cover hover:scale-110 btn rounded-2xl"
                  />
                </div>
              </div>
              <p className="text-center capitalize font-xl font-semibold">{e.t}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
export default SbyCat;
