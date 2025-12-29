"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const btnTopo = document.getElementById("btnTopo");
  if(btnTopo){
    btnTopo.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
