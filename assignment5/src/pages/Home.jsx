import { useState } from "react";
import Header from "../components/Header";
import Filter from "../components/Filter";
import Card from "../components/Card";

export default function Home() {
  const [colSize, setColSize] = useState("col-span-1");
  const [sortOrder, setSortOrder] = useState("asc"); // Menyimpan urutan sortir: ascending atau descending

  const data = [
    { title: "Grass", tag: "001", id: "001", imageSrc: "../src/assets/monster1.png", name: "Bulbasaur" },
    { title: "Earth", tag: "002", id: "002", imageSrc: "../src/assets/monster2.png", name: "Dugtrio" },
    { title: "Grass", tag: "003", id: "003", imageSrc: "../src/assets/monster1.png", name: "Bulbasaur" },
    { title: "Earth", tag: "004", id: "004", imageSrc: "../src/assets/monster2.png", name: "Dugtrio" },
    { title: "Grass", tag: "005", id: "005", imageSrc: "../src/assets/monster1.png", name: "Bulbasaur" },
    { title: "Earth", tag: "006", id: "006", imageSrc: "../src/assets/monster2.png", name: "Dugtrio" },
    { title: "Grass", tag: "007", id: "007", imageSrc: "../src/assets/monster1.png", name: "Bulbasaur" },
    { title: "Earth", tag: "008", id: "008", imageSrc: "../src/assets/monster2.png", name: "Dugtrio" },
    { title: "Grass", tag: "009", id: "009", imageSrc: "../src/assets/monster1.png", name: "Bulbasaur" },
    { title: "Earth", tag: "010", id: "010", imageSrc: "../src/assets/monster2.png", name: "Dugtrio" },
    { title: "Grass", tag: "011", id: "011", imageSrc: "../src/assets/monster1.png", name: "Bulbasaur" },
    { title: "Earth", tag: "012", id: "012", imageSrc: "../src/assets/monster2.png", name: "Dugtrio" },
    { title: "Grass", tag: "013", id: "013", imageSrc: "../src/assets/monster1.png", name: "Bulbasaur" },
    { title: "Earth", tag: "014", id: "014", imageSrc: "../src/assets/monster2.png", name: "Dugtrio" },
    { title: "Grass", tag: "015", id: "015", imageSrc: "../src/assets/monster1.png", name: "Bulbasaur" },
    { title: "Earth", tag: "016", id: "016", imageSrc: "../src/assets/monster2.png", name: "Dugtrio" },
  ];

  // Mengurutkan data berdasarkan pilihan sortOrder
  const sortedData = [...data].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.name.localeCompare(b.name); // Ascending sort by name
    } else {
      return b.name.localeCompare(a.name); // Descending sort by name
    }
  });

  return (
    <>
      <Header />
      <section className="content mt-[60px]">
        <Filter onColSizeChange={setColSize} onSortChange={setSortOrder} />
        <br />

        <div className="grid grid-cols-2 gap-4">
          {sortedData.map((item, index) => (
            <Card
              key={index}
              id={item.id}
              title={item.title}
              tag={item.tag}
              imageSrc={item.imageSrc}
              name={item.name}
              colSize={`grid ${colSize}`}
            />
          ))}
        </div>
      </section>
    </>
  );
}
