const reset = document.getElementById("reset");
const pembungkus = document.getElementById("Pembungkus");
const merah = document.querySelector("input[name=merah]");
const hijau = document.querySelector("input[name=hijau]");
const biru = document.querySelector("input[name=biru]");
const jawaban = document.getElementById("jawaban");
const soal = document.getElementById("soal");
console.log(pembungkus);

const btn1 = document.getElementById("bebek");
const btn2 = document.createElement("button");

reset.addEventListener("click", () => {
  location.reload();
});

btn1.addEventListener("click", () => {
  btn2.id = "btn2";
  btn2.innerHTML = "testt";

  pembungkus.appendChild(btn2);

  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  console.log("nambah terus");
  soal.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  if (btn1 ?? soal) {
    merah.addEventListener("input", () => {
      let r = merah.value;
      let g = hijau.value;
      let b = biru.value;

      jawaban.style.backgroundColor = `rgb(${r} ${g} ${b})`;
      console.log(r);
    });

    hijau.addEventListener("input", () => {
      let r = merah.value;
      let g = hijau.value;
      let b = biru.value;
      jawaban.style.backgroundColor = `rgb(${r} ${g} ${b})`;
    });

    biru.addEventListener("input", () => {
      let r = merah.value;
      let g = hijau.value;
      let b = biru.value;
      jawaban.style.backgroundColor = `rgb(${r} ${g} ${b})`;
    });
  } else {
    alert("gagal");
  }
  btn2.addEventListener("click", () => {
    if (r == merah.value) {
      alert("selamat anda benar");
    } else {
      alert("sayang sekali anda gagal");
      btn2.style.backgroundColor = "red";
      btn2.style.padding = "8px 13px";
      btn2.innerHTML = "✕";
    }
  });
});
