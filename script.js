const numberOfDiceInput = document.getElementById('number-of-dice');
const numberOfSidesInput = document.getElementById('number-of-sides');
const modifierInputCustomRoll = document.getElementById('custom-roll-modifier');
const customRollPreview = document.getElementById("custom-roll-preview");

const customRollButton = document.getElementById("custom-roll-button");
const rollWithAdvantageButton = document.getElementById("roll-advantage-button");
const rollWithDisadvantageButton = document.getElementById("roll-disadvantage-button");
const rollPercentileButton = document.getElementById("roll-percentile-button");
const outputScreen = document.getElementById("output-screen");





//CUSTOM ROLL FUNCTIONALITY
function getSum (diceRolls) {
	let sum = 0;
	for (let i = 0; i < diceRolls.length; i++) {
		sum += diceRolls[i];
	}
	return sum;
}





function getDiceRolls (numberOfDice, sides, modifier) {
  const diceRolls = [];
  if (modifier >= 0) {
      console.log('You rolled: ' + numberOfDice + 'd' + sides + ' +', modifier)
  } else {
      console.log('You rolled: ' + numberOfDice + 'd' + sides + modifier)
  }

  for (let i = 0; i < numberOfDice; i++) {
      let result = Math.floor(Math.random() * sides + 1);
      diceRolls.push(result);
      console.log('Result(D' + sides + '): ' + result);
  }

  const rollsTotal = getSum(diceRolls); 
  console.log('Rolls Total: ', rollsTotal)
  if (modifier <= 0) {
      console.log('Modifier: ' + modifier);
  } else {
      console.log('Modifier: +' + modifier);
  }
  console.log('Result:' , (rollsTotal + modifier))
}





function updateCustomRollDisplay () {
  const dice = parseInt(numberOfDiceInput.value, 10) || 1; 
  const sides = parseInt(numberOfSidesInput.value, 10) || 10; 
  const modifier = parseInt(modifierInputCustomRoll.value, 10) || 0;

  const display = modifier >=0 ? `${dice}d${sides} + ${modifier}` : `${dice}d${sides} ${modifier}`;
  customRollPreview.textContent = display;
}

updateCustomRollDisplay();










//ROLL WITH ADVANTAGE/DISADVANTAGE FUNCTIONALITY
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









//EVENT LISTENERS

numberOfDiceInput.addEventListener('input', updateCustomRollDisplay);
numberOfSidesInput.addEventListener('input', updateCustomRollDisplay);
modifierInputCustomRoll.addEventListener('input', updateCustomRollDisplay);

customRollButton.addEventListener('click', function() {
  const numberOfDice = parseInt(numberOfDiceInput.value, 10);
  const sides = parseInt(numberOfSidesInput.value, 10);
  const modifier = parseInt(modifierInputCustomRoll.value, 10);

  getDiceRolls(numberOfDice, sides, modifier);

});


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