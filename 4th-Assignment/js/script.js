const showOutput = (html) => {
  document.getElementById("output").innerHTML = html;
};
function clearOutput() {
  document.getElementById("output").innerHTML = "";
}
const showInput = () => {
  document.getElementById("input-text").value = "";
};
const inputValue = () => {
  return document.getElementById("input-text").value;
};

// ------------------------------------------------------------------------------------

// Round a Number
function round() {
  let number = inputValue();

  if (!number) {
    Toastify({
      text: "Please enter a floaating point number.",
      duration: 3000,
      close: true,
      gravity: "top", //'top' or 'bottom'
      position: "right", //'left' , 'center' or 'right'
      stopOnFocus: true, //Prevents dimissing of toast on hover
      style: {
        background: "red",
      },
    }).showToast();
    return;
  }

  let roundTheNumber = Math.round(number);
  let html = "<h1 class='text-primarytheme mb-0'>" + roundTheNumber + "</h1>";

  document.getElementById("output").innerHTML = html;
}

// Ceil a Number
function ceil() {
  let number = inputValue();

  if (!number) {
    alert("Please Enter a Floating Point Number.");
    return;
  }

  let ceilTheNumber = Math.ceil(number);
  let html = "<h1 class='text-primarytheme mb-0'>" + ceilTheNumber + "</h1>";

  document.getElementById("output").innerHTML = html;
}

// Floor a Number
function floor() {
  let number = inputValue();

  if (!number) {
    alert("Please Enter a Floating Point Number.");
    return;
  }

  let floorTheNumber = Math.floor(number);
  let html = "<h1 class='text-primarytheme mb-0'>" + floorTheNumber + "</h1>";

  document.getElementById("output").innerHTML = html;
}

// Generate a Random Number
function randomNumber() {
  let randomNumber = Math.random();
  let html = "<h1 class='text-primarytheme mb-0'>" + randomNumber + "</h1>";

  document.getElementById("output").innerHTML = html;
}

// Throw a Dice
function dice() {
  let randomNumber = randomNumber * 6 + 1;

  let dice = Math.floor(randomNumber);

  let html =
    "<h1 class='text-primarytheme mb-0'>" +
    dice +
    "</h1><span>Generating a Random Number from 1 to 6</span>";

  document.getElementById("output").innerHTML = html;
}

// Generate a Random String
function randomString() {
  //   let length = inputValue();              // ^)
  //   if (!length) {                          //  )
  //     ToastifyError("Please enter length"); //  )==> agar user se value leni ho tb << ye use hoga....
  //     return;                               //  )
  //   }                                       // _)

  let randomString = "";
  let upperCaseAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowerCaseAlphabets = "abcdefghijklmnopqrstuvwxyz";
  let numbers = "0123456789";
  let symbols = "'~!@#$%^&*-_=+/?.,";
  let possibleString =
    upperCaseAlphabets + lowerCaseAlphabets + numbers + symbols;

  let limit = 16;
  for (let i = 0; i < limit; i++) {
    let randomNumber = Math.random();
    randomString += possibleString.charAt(
      Math.floor(randomNumber * possibleString.length)
    );
  }
  let html =
    "<h6 class='text-primarytheme mb-0'>" +
    randomString +
    "</h6>" +
    "<p>Generating a Random String &amp; the Lenght is: <span class='text-danger fw-bold fw-18'>16</span></p>";

  document.getElementById("output").innerHTML = html;
}

// Converting Strings to Integers and Decimals
function convertingStrings() {
  //   let num = inputValue();                 // ^)
  //   if (!num) {                             //  )
  //     ToastifyError("Please enter length"); //  )==> agar user se value leni ho tb << ye use hoga....
  //     return;                               //  )
  //   }                                       // _)
  let string = "25.12345";

  let number = Number(string)

  let html =
    "<h6 class='text-primarytheme mb-0'>" +
    number +
    "</h6>" +
    "<p>Generating String into Number</p>";

  document.getElementById("output").innerHTML = html;
}

// Calculate GST
function calculateGST() {
  let cost = inputValue();                        // ^)
  if (!cost) {                                    //  )
    alert("Please Type Something to calculate");  //  )==> agar user se value leni ho tb << ye use hoga....
    return;                                       //  )
  }                                               // _)

  // let cost = 912;

  cost = Number(cost);
  let taxInput = +prompt("Enter Your Tax")

  let tax = cost * (taxInput / 100);
  let totalCost = cost + tax;
  totalCost = Math.round(totalCost);

  document.getElementById("output").innerHTML = "Your Bill = <span class='text-PrimaryTheme fw-bold fw-18'>" + cost + "</span>";
  document.getElementById("output").innerHTML += "<br /> Tax" + taxInput + "% = <span class='text-danger fw-bold fw-18'>" + tax.tofold(2) + "</span>";
  document.getElementById("output").innerHTML += "<br /> Total amount inculuding tax = <span class='text-success fw-bold fw-18'>" + totalCost + "</span>";

}


// clearoutput
document.getElementById("clearoutput").onclick = function () {
  document.getElementById("output").innerText = "";
};
// clearInput
document.getElementById("clearinput").onclick = function () {
  document.getElementById("input-text").value = "";
};


// Toastify Custom Functions
const toastifySuccess = (msg) => {
  Toastify({
    text: msg,
    duration: 3000,
    close: true,
    gravity: "bottom", //'top' or 'bottom'
    position: "left", //'left' , 'center' or 'right'
    stopOnFocus: true, //Prevents dimissing of toast on hover
    style: {
      background: "Linear-gradient(to right, #1D976C, #93F9B9)",
    },
  }).showToast();
  //   return;
}

const toastifyError = (msg) => {
  Toastify({
    text: msg,
    duration: 3000,
    close: true,
    gravity: "bottom", //'top' or 'bottom'
    position: "left", //'left' , 'center' or 'right'
    stopOnFocus: true, //Prevents dimissing of toast on hover
    style: {
      background: "Linear-gradient(to right, #93291e, #ed213a)",
    },
  }).showToast();
  //   return;
}




// -------------------------------------------------------------------------------
// consol.log(typeof num) >>> "show the type vale(number, string etc.)"

//   (1)>>>>
// let num = 10.5
// 1- Math.round(num) >> Ans = 11 (It round-off the number)
// 2- Math.ceil(num) >> Ans = 11 (It add 1 to the number)
// 3- Math.floor(num) >> Ans = 10 (It cuts out decimal from the number)

// 4- Math.random(num) >> Ans = It selects any random number...


//   (2)>>>>
// let num = 251.12345

// 1- parseInt(num) >> Ans = 251 (convert string into number)
// 2- parseFloat(num) >> Ans = 251.12345 (convert string into decimal(number))
// 3- Number(num) >> Ans = 251.12345 (convert string into (As it is) >> decimal(number))
// 4- num.toFixed(2) >> Ans = 251.12 (convert string into 2 place decimal(number))
//                            And   (But it gives the output in "String")