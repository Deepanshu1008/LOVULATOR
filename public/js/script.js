let userName = prompt(`Please write your name:`);
let userPartnerName = prompt(`Please write your partner name:`);

let loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;

if (loveScore >= 70) {
  document.write(
    `<h3 style = "color: purple">Your love score is ${loveScore}% <br>You love each other and be happy</h3>`
  );
} else if (loveScore < 70 && loveScore > 49) {
  document.write(
    `<h3 style = "color: green">Your love score is ${loveScore}% <br>You have nice relations you are good friends</h3>`
  );
} else {
  document.write(
    `<h3 style = "color: red">Your love score is ${loveScore}% <br>RUN AWAY!!!!!</h3>`
  );
}

const h3s = document
  .querySelector("h3")
  .setAttribute(
    "style",
    "color: #CEE5D0  ; font-size: 80px; text-align: center; margin-top:250px;font-family: 'Ewert', cursive; text-shadow: 5px 5px 15px red;"
  );
const bodys = document
  .querySelector("body")
  .setAttribute("style", "background-color: #082032;");
