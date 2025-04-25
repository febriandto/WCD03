import Search from "./Search.jsx";

export default function Header() {
    return (
      <header className="flex justify-between items-center fixed left-0 top-0 w-full h-[50px] border-b-2 border-gray-700 px-4 bg-[#252a3e]">
        <img src="../src/assets/pokemon.png" alt="Pokemon" className="w-[97px] mb-5" />
        <Search />
      </header>
    );
}