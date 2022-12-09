

function myFunction() {
  let loveScore = Math.random() * 100;
  loveScore = Math.floor(loveScore) + 1;
  console.log("kal");
  if (loveScore >= 70) {
    $("#page").html(`<h3 style = "color: purple">Your love score is ${loveScore}% <br>You love each other and be happy</h3>`);
    console.log("kal");
  }

  else if (loveScore < 70 && loveScore > 49) {
    $("#page").html(`<h3 style = "color: purple">Your love score is ${loveScore}% <br>You have nice relations you are good friends</h3>`
    );
    console.log("kal");
  }


  else {
    $("#page").html('<h3 style = "color: purple">Your love score is ${loveScore}% <br>RUN AWAY!!!!!</h3>');
    console.log("kal");
  }


  const h3s = document
    .querySelector("h3")
    .setAttribute(
      "style",
      "color: purple; font-size: 80px; text-align: center; margin-top:250px;font-family: 'Ewert', cursive; text-shadow: 5px 5px 15px red;"
    );
  const bodys = document
    .querySelector("body")
    .setAttribute("style", "background-color:#edc9dc;");

}
