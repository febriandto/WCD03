import { useState } from "react";

export default function Filter({ onColSizeChange, onSortChange }) {

    const [isClicked, setIsClicked] = useState(false);

    const toggleColSize = (size) => {
        const newSize = size === 'single' ? "col-span-2" : "col-span-1";
        if (size === 'single') {
            setIsClicked(true);
        } else {
            setIsClicked(false);
        }
        onColSizeChange(newSize);
    };

    const handleSortChange = (event) => {
        const selectedSort = event.target.value;
        onSortChange(selectedSort); // Kirim perubahan sortir ke parent
    };

    return (
        <div className="flex items-center gap-4">
            <select
                id="selectOption"
                className="bg-[#3D4466] text-[#97A0CC] text-[16px] rounded-[8px] text-white py-3 px-3 w-[70%]"
                onChange={handleSortChange}
            >
                <option value="">Sort By</option>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
            </select>

            <div id="selectButton" className="flex justify-end text-center w-[30%]">
                {/* Button Single */}
                <button
                    onClick={() => toggleColSize('single')}
                    className={`w-[50%] p-2 rounded-tl-[8px] rounded-bl-[8px] border-r-2 ${isClicked ? "bg-[#0c1231]" : "bg-[#3D4466]"}`}
                >
                    <img src="../src/assets/Rectangle1.png" className="inline-block" alt="Single" />
                </button>

                {/* Button Grid */}
                <button
                    onClick={() => toggleColSize('grid')}
                    className={`w-[50%] p-2 rounded-tr-[8px] rounded-br-[8px] ${!isClicked ? "bg-[#0c1231]" : "bg-[#3D4466]"}`}
                >
                    <img src="../src/assets/Rectangle2.png" className="inline-block" alt="Grid" />
                </button>
            </div>
        </div>
    );
}
