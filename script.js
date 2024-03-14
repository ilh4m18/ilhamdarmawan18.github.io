const bmiText = document.getElementById("bmi");
const descText = document.getElementById("desc");
const form = document.querySelector("form");

form.addEventListener("submit", onFormSubmit);
form.addEventListener("reset", onFormReset);

function onFormReset() {
  bmiText.textContent = 0;
  bmiText.className = "";
  descText.textContent = "N/A";
}

function onFormSubmit(e) {
  e.preventDefault();

  const weight = parseFloat(form.weight.value);
  const height = parseFloat(form.height.value);

  //Kondisi apabila form tidak terisi dan diklik hasil bmi maka akan muncul notif peringatan
  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    alert("TOLONG ISI SEMUA!!");
    return;
  }

  const heightInMeters = height / 100; // koversi data cm ke m
  const bmi = weight / Math.pow(heightInMeters, 2); //Data berat badan dibagi dengan data tinggi badan
  const desc = interpretBMI(bmi); //Ditampilkan dalam variabel BMI

  bmiText.textContent = bmi.toFixed(2);
  bmiText.className = desc;
  descText.innerHTML = `Kamu Sedang <strong>${desc}</strong>`;
}

function interpretBMI(bmi) {
  if (bmi < 18.5) {
    return "Kekurangan Berat Badan"; //pengkondisian hasil BMI 
  } else if (bmi < 25) {
    return "Normal (Ideal)";
  } else if (bmi < 30) {
    return "Kelebihan Berat Badan";
  } else {
    return "Kegemukan (Obesitas)";
  }
}
