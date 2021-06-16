import React from "react";
import { useState } from "react";
import "./App.css";

export default function Form01Component() {
  const [ad, setAd] = useState("");

  function adGuncelle(event) {
    setAd(event.target.value);
  }

  return (
    <div className="alan">
      <h1>merhaba {ad}</h1>
      <form>
        <input
          className="input"
          type="text"
          placeholder="adiniz"
          name="ad"
          required
          onChange={adGuncelle}
          value={ad}
        />
      </form>
    </div>
  );
}
