import { useNavigate } from "react-router-dom";

export default function FloatingButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/add")}
      className="fixed bottom-4 right-4 bg-[green] text-white rounded-full p-5 shadow-lg hover:bg-[#1f7223] transition duration-300 ease-in-out"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
      </svg>
    </button>
  );
}
