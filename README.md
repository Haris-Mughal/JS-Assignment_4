<!DOCTYPE html>
<html lang="en">
  <head> 
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body>
  <main> 
      <div class="container">
        <div class="row">
          <div class="offset-1 col-10 offset-1 text-center my-5">
            <h4>Chapter # 26 - 30 | Numbers, Integers &amp; Decimals</h4>
            <div class="border-bottom mt-4 border-secondary"></div>
          </div>
        </div>
   <div class="row mb-5">
          <div class="col-12 col-md-6 mb-3 mb-md-0">
            <div class="h-100">
              <h4 class="text-center">Input</h4>
              <div class="border border-1 d-flex p-4 align-items-center border-secondary box1">
                <div class="input-group">
                  <input type="text" id="input-text" class="form-control form-control-lg
                  bg-transparent" placeholder="Type Your Text Here" />
                  <button class="btn btn-outline-dark" id="clearinput">Clear</button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 mb-3 mb-md-0">
            <div class="h-100">
              <h4 class="text-center">Orignal String</h4>
              <div class="border border-1 p-4 align-items-center border-secondary box1"
              id="orignal-bg">
              <div class="text-light d-flex text-center" id="n-25">25.12345</div>
              </div>
            </div>
          </div>
        </div>
<div class="row mb-5">
          <div class="col-12 col-md-6 mb-3 mb-md-0">
            <div class="h-100">
              <h4 class="text-center mt-4">Buttons</h4>
              <div class="box1 px-2 py-4 text-center">
                <div class="btn btn-danger m-1" onclick="round()">
                Round a Number
                </div>
                <div class="btn btn-danger m-1" onclick="ceil()">
                Ceil a Number
                </div>
                <div class="btn btn-danger m-1" onclick="floor()">
                Floor a Number
                </div>
                <div class="btn btn-danger m-1" onclick="randomNumber()">
                Generate a Random Number
                </div>
                <div class="btn btn-danger m-1" onclick="dice()">
                Throw a Dice
                </div>
                <div class="btn btn-danger m-1" onclick="randomString()">
                    Generate a Strong Password
                </div>
                <div class="btn btn-danger m-1" onclick="convertingStrings()">
                Converting Strings
                </div>
                <div class="btn btn-danger m-1" id="generateTable">
                Controlling Length
                </div>
                <div class="btn btn-danger m-1" onclick="calculateGST()">
                Calculate GST
                </div>
            </div>
            </div>
          </div>
          <div class="col-12 col-md-6 mb-3 mb-md-0">
              <h4 class="text-center mt-4">Output / Result</h4>
              <div class="box2 px-2 py-4">
              <div class="text-center" id="output"></div>
              </div>
              <div class="text-center">
              <div class="btn btn-outline-dark my-4" id="clearoutput">
              Clear Output
            </div>
          </div>
          </div>
      </div>
    </main>
    <footer id="footer" class="py-2">
      <p class="text-center text-white">
        &copy; 2023. Assignment By
        <a
          href="https://www.facebook.com/profile.php?id=100061029926998"
          target="_blank"
          class="text-decoration-none fw-bold text-white"
          >ᖺᗩᖇᓮᔕ ᙢᕰᘐᖺᗩᒪ.</a
        >
      </p>
    </footer>
</body>
</html>
