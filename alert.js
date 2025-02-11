function displayMessage() {
  const name = document.getElementById("userName").value;
  const resultDiv = document.getElementById("result");  

  if (name.trim() !== "") {
    const message1 = `Hello, ${name}!`;
    const message2 = "Happy Valentine's Day!";
    const message3 = "Hope you have an amazing day";
    const message4 = "and also...";
    const message5 = "I wish I could ask you to hang out sometimes.";
    const message6 = "but unfortunately, i couldn't, due to miles that hindered us.";
    const message7 = "and tbh, i wanna give you chocolates and flowers rn but i cant; wala me money and hindi ko din alam address mo po HAHAHAHAHAHHA.";
    const message8 = "so, this is the only thing i could offer you for now.";
    const message9 = "anyway, I hope you like this:)";
    const message10 = "and i hope that i made you smile with just this:)";

    alert(message1);
    alert(message2);
    alert(message3);
    alert(message4);
    alert(message5);
    alert(message6);
    alert(message7);
    alert(message8);
    alert(message9);
    alert(message10);
  } else {
    alert("Please enter your name!");
  }
}

document.getElementById("submitButton").addEventListener("click", displayMessage);
