const rollWithAdvantageButton = document.getElementById("roll-advantage-button");
const rollWithDisadvantageButton = document.getElementById("roll-disadvantage-button");
const rollPercentileButton = document.getElementById("roll-percentile-button");
const outputScreen = document.getElementById("output-screen");

function rollWithAdvantage() {
  const roll1 = Math.floor(Math.random() * 20) + 1;
  const roll2 = Math.floor(Math.random() * 20) + 1;
  const result = roll1 >= roll2 ? roll1 : roll2;
  const output = `Rolling with advantage: ${roll1}, ${roll2}\nresult: ${result}`;
  return output;
}

function rollWithDisadvantage() {
  const roll1 = Math.floor(Math.random() * 20) + 1;
  const roll2 = Math.floor(Math.random() * 20) + 1;
  const result = roll1 <= roll2 ? roll1 : roll2;
  const output = `Rolling with disadvantage: ${roll1}, ${roll2}\nresult: ${result}`;
  return output;
}

function rollPercentile() {
  const rollD10 = Math.floor(Math.random() * 10);
  const rollD100 = Math.floor(Math.random() * 10) * 10;
  let result;
  if (rollD10 === 0 && rollD100 === 0) {
    result = 100;
  } else {
    result = rollD10 + rollD100;
  }
  output = `Rolling percentile Dice: ${rollD100}, ${rollD10} \nResult: ${result} `;
  return output;

}

rollWithAdvantageButton.addEventListener("click", function() {
  console.log("Advantage Button clicked");
  const result = rollWithAdvantage();
  outputScreen.innerText = result;
});

rollWithDisadvantageButton.addEventListener("click", function() {
  console.log("Disadvantage Button Clicked");
  const result = rollWithDisadvantage();
  outputScreen.innerText = result;
});

rollPercentileButton.addEventListener("click", function() {
  console.log("Percentile Button Clicked")
  const result = rollPercentile();
  outputScreen.innerText = result;
});