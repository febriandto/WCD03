import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Add() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState("");

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result); // hasil base64 disimpan di state
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    if (!name || !type || !image) {
      alert("Semua field harus diisi!");
      return;
    }

    const newPokemon = {
      name,
      type,
      image, // sudah base64
      id: Date.now(),
    };

    const existingData = JSON.parse(localStorage.getItem("myPokemonList")) || [];
    const updatedData = [...existingData, newPokemon];
    localStorage.setItem("myPokemonList", JSON.stringify(updatedData));

    navigate("/"); // kembali ke halaman utama
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Add Pokémon</h1>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="block mb-2 border p-2 w-full text-black"
      />

      <input
        type="text"
        placeholder="Type"
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="block mb-2 border p-2 w-full text-black"
      />

      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="block mb-2 border p-2 w-full"
      />

      {image && (
        <img
          src={image}
          alt="Preview"
          className="w-24 h-24 object-cover mb-2 border rounded"
        />
      )}

      <button
        onClick={handleSave}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Save
      </button>
    </div>
  );
}
