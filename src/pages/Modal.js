import React, { useState, useEffect } from "react";

const Modal = () => {
  const [isi, setIsi] = useState("");
  const [form, setForm] = useState({
    title: "",
  });
  const { title } = form;

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    setIsi(localStorage.getItem("cek"));
  };

  const simpanData = () => {
    localStorage.setItem("cek", title);

    console.log("disimpan di local");
    getData();
  };

  const hapusData = () => {
    localStorage.removeItem("cek");
    getData();
  };

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <h1>Modals</h1>
      <h1>Data yang dimasukkan: {title}</h1>
      <h1>Data Dari localStorage: {isi}</h1>
      <h1>{isi ? "ada" : "belum"}</h1>
      <input
        type="text"
        name="title"
        value={title}
        onChange={(e) => onChange(e)}
      />
      <button onClick={() => simpanData()}>Oke</button>
      <button onClick={() => hapusData()}>Hapus</button>
    </div>
  );
};

export default Modal;
