import React, { useState } from "react";

const Form = () => {
  const [medicines, setMedicines] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [cart, setCart] = useState([]);

  const addMedicine = () => {
    const newMedicine = { name, description, price };
    setMedicines((prevMedicines) => [...prevMedicines, newMedicine]);
    setName("");
    setDescription("");
    setPrice("");
  };

  const deleteMedicine = (index) => {
    setMedicines((prevMedicines) =>
      prevMedicines.filter((_, i) => i !== index)
    );
  };

  const addToCart = (index) => {
    const medicineToAdd = medicines[index];
    setCart((prevCart) => [...prevCart, medicineToAdd]);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    addMedicine();
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <label>MEDICINE NAME</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label>MEDICINE DESCRIPTION</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <label>PRICE</label>
        <input
          type="number"
          step="0.01"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
          pattern="\d+\.\d{2}"
        />
        <button>CLICK TO ADD</button>
      </form>
      <div>
        {medicines.map((medicine, index) => (
          <div key={index}>
            <p>
              {medicine.name} - {medicine.description} - {medicine.price}
            </p>
            <button onClick={() => addToCart(index)}>Add to Cart</button>
            <button onClick={() => deleteMedicine(index)}>Delete</button>
          </div>
        ))}
      </div>
      <div>
        <h2>Cart</h2>
        {cart.map((medicine, index) => (
          <div key={index}>
            <p>
              {medicine.name} - {medicine.description} - {medicine.price}
            </p>
            <button onClick={() => deleteMedicine(index)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Form;
