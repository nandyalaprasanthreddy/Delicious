const vegAdult = document.getElementById("vegAdult");
const vegKids = document.getElementById("vegKids");
const nonvegAdult = document.getElementById("nonVegAdult");
const nonvegKids = document.getElementById("nonVegKids");
const customer = document.getElementById("customerName");
const output = document.getElementById("result");

function billCalculation() {
  event.preventDefault();
  let vam = vegAdult.value;
  let vkm = vegKids.value;
  let nvam = nonvegAdult.value;
  let nvkm = nonvegKids.value;

  if (vam == "") {
    vam = 0;
  }
  if (vkm == "") {
    vkm = 0;
  }
  if (nvam == "") {
    nvam = 0;
  }
  if (nvkm == "") {
    nvkm = 0;
  }
  console.log(vam);
  const people =
    parseInt(vam) + parseInt(vkm) + parseInt(nvam) + parseInt(nvkm);
  total = vam * 500 + vkm * 200 + nvam * 600 + nvkm * 300;

  let org = total * (112 / 100);
  let original = org.toFixed(2);
  let dis = ((112 / 100) * total * 90) / 100;
  let discount = dis.toFixed(2);
  let ram = `Hai ${customer}.You have to pay Rs. ${
    people < 10
      ? total * (112 / 100).toFixed(2)
      : (((112 / 100) * total * 90) / 100).toFixed(2)
  }. Thanks for coming!!!`;
  output.innerHTML = ram;
}

//--------------------------------------------------
// function undef() {
//   total = 0;
//   vkm = 2;
//   nvam = 2;
//   vam = 2;
//   nvkm = "";

//   if (vam == "") {
//     total = vkm * 249 + nvam * 699 + nvkm * 349;
//     return total;
//   } else if (vkm == "") {
//     total = vam * 599 + nvam * 699 + nvkm * 349;
//     return total;
//   } else if (nvam == "") {
//     total = vam * 599 + vkm * 249 + nvkm * 349;
//     return total;
//   } else if (nvkm == "") {
//     total = vam * 599 + vkm * 249 + nvam * 349;
//     return total;
//   }
//   return total;
// }
// undef();

// vam = 1;
// vkm = 1;
// nvam = 1;
// nvkm = "";

// if (vam == "") {
//   vam = 0;
// }
// if (vkm == "") {
//   vkm = 0;
// }
// if (nvam == "") {
//   nvam = 0;
// }
// if (nvkm == "") {
//   nvkm = 0;
// }
// total = vam * 399 + vkm * 565 + nvam * 678 + nvkm * 567;
// console.log(total);
