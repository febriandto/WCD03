import { useLocation } from "react-router-dom";
import Header from "../components/Header";

export default function Detail() {
  const location = useLocation();
  const item = location.state;

  return (
    <>
      <Header />
      <section className="content mt-[60px]">
        <div className="container">
            {item ? (
            <div className="mt-4 text-[#212E4C]">

                <div className="w-[90%] mt-4 mx-auto">
                    <span className="text-[18px] text-[#97A0CC]">#{item.tag}</span>
                </div>

                <div className="flex justify-center mt-4">
                    <img src={item.imageSrc} alt={item.name} className="inline-block w-40 h-40" />
                </div>

                <div className="w-[90%] mt-4 mx-auto flex justify-between items-center">
                    <h2 className="text-white font-bold text-[36px]">{item.name}</h2>
                    <img src={item.imageSrc} alt={item.name} className="inline-block w-12 h-12" />
                </div>

                <div className="bg-[#05091B] w-[90%] h-[200px] rounded-[8px] mt-4 mx-auto p-5">
                    <span className="text-[#97A0CC]">Health</span>
                    <div className="w-full bg-[#3D4466] rounded mb-2">
                        <div className="bg-[#6CF0A1] text-white text-sm font-bold text-right pr-2 py-1 rounded" style={{ width: "65%" }}></div>
                    </div>
                    <span className="text-white text-[24px] font-bold">144</span>
                    <span className="text-white ml-2">from 1000</span>
                    <hr className="border-[#3D4466] my-2" />

                    <div className="grid grid-cols-2 gap-4">
                        <div className="col-span-1">
                            <span className="text-[#97A0CC]">Attack</span>
                            <span className="text-[24px] block text-white">32</span>
                        </div>
                        <div className="col-span-1">
                            <span className="text-[#97A0CC]">Defense</span>
                            <span className="text-[24px] block text-white">50</span>
                        </div>
                    </div>

                </div>
                
            </div>
            ) : (
            <p className="mt-4 text-red-400">Data tidak ditemukan.</p>
            )}
        </div>
      </section>
    </>
  );
}
