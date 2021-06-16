import React, { useState } from "react";
import "./App.css";

function Form02Component() {
  const [form, setForm] = useState({ad:"",soyad:"",mesaj:""});


  function guncelle(event) {
      const {name,value} = event.target;
    setForm((x)=>{
        return {
            ...form,
            [name]:value
        }
    });
  }

  const {ad, soyad, mesaj} = form;

  return (
    <div className="alan">
      {ad && (
        <h1>
          Merhaba {ad} {soyad} {mesaj}
        </h1>
      )}
      <form>
        <input
          className="input"
          type="text"
          placeholder="adiniz"
          name="ad"
          required
          onChange={guncelle}
          value={ad}
        />
        <input
          className="input"
          type="text"
          placeholder="soyadiniz"
          name="soyad"
          required
          onChange={guncelle}
          value={soyad}
        />
        <textarea
          className="input"
          name="mesaj"
          id=""
          cols="30"
          rows="10"
          value={mesaj}
          onChange={guncelle}
        ></textarea>

        <button type="submit">Gonder</button>
      </form>
    </div>
  );
}

export default Form02Component;