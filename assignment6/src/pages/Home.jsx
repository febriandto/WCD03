import { useState, useEffect } from "react";
import Header from "../components/Header";
import Filter from "../components/Filter";
import Card from "../components/Card";
import FloatingButton from "../components/FloatingButton";

export default function Home() {
  const [colSize, setColSize] = useState("col-span-1");
  const [sortOrder, setSortOrder] = useState("asc");
  const [pokemonList, setPokemonList] = useState([]);

  // Data bawaan (static) — bisa kamu ganti dengan fetch dari API jika nanti diperlukan
  const staticData = [
    { type: "Grass", tag: "001", id: "001", imageSrc: "../src/assets/monster1.png", name: "Bulbasaur" },
    { type: "Earth", tag: "002", id: "002", imageSrc: "../src/assets/monster2.png", name: "Dugtrio" },
  ];

  useEffect(() => {
    // Ambil data yang sudah tersimpan di localStorage
    const saved = JSON.parse(localStorage.getItem("myPokemonList")) || [];
    // Gabungkan staticData + savedData
    // Pastikan objek di saved punya properti 'image' (base64) dan bukan 'imageSrc'
    const savedFormatted = saved.map(p => ({
      ...p,
      imageSrc: p.image
    }));
    setPokemonList([...staticData, ...savedFormatted]);
  }, []);

  // Urutkan sesuai sortOrder
  const sortedData = [...pokemonList].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });

  return (
    <>
      <Header />
      <section className="content mt-[4rem]">
        <Filter onColSizeChange={setColSize} onSortChange={setSortOrder} />
        <div className="grid grid-cols-2 gap-4 mt-4">
          {sortedData.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              title={item.type}
              tag={item.id}
              imageSrc={item.imageSrc}
              name={item.name}
              colSize={`grid ${colSize}`}
            />
          ))}
        </div>
        <FloatingButton />
      </section>
    </>
  );
}
