const bday = document.querySelector(".bday");
const luckyNumber = document.querySelector(".luckyNum");

const checkBtn = document.querySelector(".check");

const resultImage = document.querySelector(".result img");
const message = document.querySelector(".message");

checkBtn.addEventListener("click", () => {
  // console.log(
  //   bday.value.split("-").reduce((a, c) => {
  //     return Number(a) + Number(c);
  //   })
  // );

  let bdaySum = bday.value.split("-").reduce((a, c) => {
    return Number(a) + Number(c);
  });
  let resultCheck = bdaySum % luckyNumber.value;
  if (resultCheck === 0) {
    resultImage.src = "assets/happy.gif";
    resultImage.style.display = "block";
    message.innerHTML = "WOW!! <br/> You are lucky <3 U 3000";
  } else {
    resultImage.src = "assets/sad.gif";
    resultImage.style.display = "block";
    message.innerHTML = `OHHH! You're missed by ${resultCheck} days from being lucky. <br/> <3 U 6000`;
  }
});
