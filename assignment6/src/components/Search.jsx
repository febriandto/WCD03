import { useState, useRef } from "react";

export default function Search() {
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const inputRef = useRef(null); // Referensi untuk input

    const handleSearch = () => {
        setIsSearchVisible(true);
        setTimeout(() => {
            if (inputRef.current) {
                inputRef.current.focus(); // Fokus ke input setelah muncul
            }
        }, 0); // Menunggu hingga elemen muncul sebelum memberi fokus
    };

    const handleBlur = () => {
        setIsSearchVisible(false); // Sembunyikan input ketika kehilangan fokus
    };

    return (
        <>
            {!isSearchVisible && (
                <button onClick={handleSearch}>
                    <img
                        src="../src/assets/search.png"
                        alt="Search"
                        className="h-6 w-6"
                    />
                </button>
            )}
            {isSearchVisible && (
                <div>
                    <input
                        ref={inputRef}
                        type="text"
                        className="bg-white rounded p-1 text-black"
                        placeholder="Search . . ."
                        onBlur={handleBlur} // Menyembunyikan input ketika kehilangan fokus
                    />
                </div>
            )}
        </>
    );
}
