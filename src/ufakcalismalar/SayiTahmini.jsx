import React from 'react'

export default function SayiTahmini() {
    return (
        <div>
                <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.css"
    />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
      crossorigin="anonymous"
    />
   
    <link type="text/css" rel="stylesheet" href="./sayi.css" />
    <div class="container main-body">
      <div class="container">
        <div class="row d-flex justify-content-between">
          <div class="col col-3 d-flex justify-content-center">
            <button type="button" class="btn btn-warning" onclick="tekrar()">TEKRAR OYNA</button>
          </div>
          <div class="col col-3 bg-primary text" id="sayiTahmin">
            SAYIYI TAHMIN ET
          </div>
          <div class="col col-3 bg-info text">1-20 ARASINDA</div>
        </div>
      </div>
      <div class="container">
        <div class="row d-flex justify-content-center">
          <div class="col col-7 m-5">
            <div id="center-box" class="text">?</div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row d-flex justify-content-around">
          <div class="col col-4 align-items-center">
            <form onsubmit="return false">
              <div class="mb-3">
                <label
                  for="exampleInputEmail1"
                  class="form-label text"                  
                  >ENTER NUMBER</label
                >
                <input
                  type="number"
                  class="form-control"
                  id="input-to-play"
                  aria-describedby="emailHelp"                  
                />
              </div>
              <div class="col d-flex justify-content-center m-md-3">
                <button type="submit" class="btn btn-primary" onclick="getScore()">TRY</button>
              </div>
            </form>
          </div>
          <div class="col col-4 bg-info">
            <div class="text"> <span id="rights-to-have">Tahmine Baslaniyor</span></div>
            <div class="text">Puan: <span id="current-score"></span></div>
            <div class="text">EN YUKSEK PUAN: <span id="best-score">?</span></div>
          </div>
        </div>
      </div>
    </div>
    <script src="./sayi.js"></script>
        </div>
    )
}
