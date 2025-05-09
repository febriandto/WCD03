import { Link } from 'react-router-dom';

export default function Card({ id, title, tag, imageSrc, name, colSize }) {
  return (
    <Link
      to={`/card/${id}`}
      state={{ id, title, tag, imageSrc, name }} // Kirim semua data di sini
      className={`block bg-[#F0F3FF] rounded-[8px] p-3 ${colSize}`}
    >
      {/* card title */}
      <div className="flex justify-between text-center w-full">
        <p className="text-[#11B047] text-[16px]">{title}</p>
        <p className="text-[#263156] text-[16px]">#{tag}</p>
      </div>
      <div className="text-center">
        <img src={imageSrc} alt={name} className="w-[178px] inline-block" />
      </div>
      <div className="text-center">
        <p className="text-[18px] text-[#212E4C]">{name}</p>
      </div>
    </Link>
  );
}
