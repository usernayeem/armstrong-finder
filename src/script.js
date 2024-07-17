// Function to calculate Armstrong numbers within a given range
document.getElementById("btn").onclick = function () {
  // Clear previous results
  document.getElementById("armstrong").innerHTML = "";
  document.getElementById("total").innerHTML = "0";
  document.getElementById("time").innerHTML = "0.00";
  document.getElementById("armstrong").placeholder = "Please wait...";

  // Delay execution to allow UI updates
  setTimeout(() => {
    const start = performance.now();
    let total = 0;
    let armstrongNumbers = [];

    // Get input values and convert them to numbers
    const lowerInput = parseInt(document.getElementById("lowerInput").value);
    const higherInput = parseInt(document.getElementById("higherInput").value);

    // Loop through the range of numbers
    for (let number = lowerInput; number <= higherInput; number++) {
      const digits = number.toString().split("");
      let sum = 0;

      // Calculate the sum of cubes of digits
      for (let i = 0; i < digits.length; i++) {
        const cube = Math.pow(parseInt(digits[i]), digits.length);
        sum += cube;
      }

      // Check if the number is an Armstrong number
      if (number === sum) {
        armstrongNumbers.push(` ${number}`);
        total++;
      }
    }

    // Update UI elements with results
    document.getElementById("armstrong").innerHTML = armstrongNumbers.join("");
    document.getElementById("total").innerHTML = total;
    const end = performance.now();
    const time = ((end - start) / 1000).toFixed(2);
    document.getElementById("time").innerHTML = time;
  }, 100);
};
