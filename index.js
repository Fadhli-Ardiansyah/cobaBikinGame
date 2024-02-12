const pembungkus = document.getElementById("Pembungkus");
const merah = document.querySelector("input[name=merah]");
const hijau = document.querySelector("input[name=hijau]");
const biru = document.querySelector("input[name=biru]");
const jawaban = document.getElementById("jawaban");
const soal = document.getElementById("soal");
soal.classList.toggle("Te");
console.log(pembungkus);

const btn1 = document.getElementById("bebek");
const btn2 = document.createElement("button");

btn1.addEventListener("click", () => {
  btn2.id = "btn2";
  btn2.innerHTML = "testt";
  pembungkus.appendChild(btn2);

  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);

  soal.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  console.log(r);
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
      console.log(r);
    });

    btn2.addEventListener("click", () => {
      if (r == merah.value) {
        alert("selamat anda benar");
      } else {
        alert("sayang sekali anda gagal");
      }
    });
  } else {
    alert("gagal");
  }
});
