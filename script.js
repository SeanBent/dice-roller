//DEFINING VARIABLES

const numberOfDiceInput = document.getElementById('number-of-dice'); //Gets the input elements from the HTML
const numberOfSidesInput = document.getElementById('number-of-sides');
const modifierInputCustomRoll = document.getElementById('custom-roll-modifier');
const modifierInputAdvantageDisadvantage = document.getElementById('advantage-disadvantage-modifier');

const customRollPreview = document.getElementById("custom-roll-preview"); //Gets the custom roll preview element from the HTML

const customRollButton = document.getElementById("custom-roll-button"); //Gets the dice roll button elements from the HTML
const rollWithAdvantageButton = document.getElementById("roll-advantage-button");
const rollWithDisadvantageButton = document.getElementById("roll-disadvantage-button");
const rollPercentileButton = document.getElementById("roll-percentile-button");
const outputScreen = document.getElementById("output-screen");

const helpButton = document.getElementById('help-button'); //Gets the help button and popup elements from the HTML
const helpPopup = document.getElementById('help-popup');
const closeButton = document.getElementById('close-button');


//CUSTOM ROLL FUNCTIONALITY

function getSum (diceRolls) { //Function to determine the sum of all dice rolls in an array
	let sum = 0;
	for (let i = 0; i < diceRolls.length; i++) {
		sum += diceRolls[i];
	}
	return sum;
}


function rollCustomDice(numberOfDice, sides, modifier) { //Function to perform a custom dice roll and return the result in a string
  const diceRolls = [];

  for (let i = 0; i < numberOfDice; i++) {  //Rolls the dice and pushes the result to the diceRolls array
      let roll = Math.floor(Math.random() * sides + 1);
      diceRolls.push(roll);
  }

  const rollsTotal = getSum(diceRolls); //Gets the sum of all dice rolls

  const result = rollsTotal + modifier;

  if (modifier >= 0) { //Returns the result of the custom roll in a string
      return `You roll: ${numberOfDice}d${sides} + ${modifier}\nRoll outcomes: ${diceRolls.join(', ')}\nResult: ${rollsTotal} \nModifier: ${modifier}\nFinal Result: ${result}`
  } else {
    return `You roll: ${numberOfDice}d${sides} - ${Math.abs(modifier)}\nRoll outcomes: ${diceRolls.join(', ')}\nResult: ${rollsTotal} \nModifier: ${modifier}\nFinal Result: ${result}`
  }
}


function updateCustomRollPreview() { //Function to update the custom roll preview display
  const dice = parseInt(numberOfDiceInput.value, 10) || 1; 
  const sides = parseInt(numberOfSidesInput.value, 10) || 10; 
  const modifier = parseInt(modifierInputCustomRoll.value, 10) || 0;

  const display = modifier >=0 ? `${dice}d${sides} + ${modifier}` : `${dice}d${sides} ${modifier}`;
  customRollPreview.textContent = display;
}

updateCustomRollPreview(); //Updates the custom roll preview display on page load




//ROLL WITH ADVANTAGE/DISADVANTAGE/PERCENTILE FUNCTIONALITY

function rollWithAdvantage() { //Function to roll with advantage and return the result in a string
  const modifier = parseInt(modifierInputAdvantageDisadvantage.value, 10);
  const roll1 = Math.floor(Math.random() * 20) + 1;
  const roll2 = Math.floor(Math.random() * 20) + 1;
  const result = roll1 >= roll2 ? roll1 : roll2;
  const output = `You roll with advantage \nRoll outcomes:${roll1}, ${roll2}\nYour result is: ${result}\nModifier: ${modifier}\nFinal Result: ${result + modifier}`;
  return output; //add winning roll to output
}

function rollWithDisadvantage() { //Function to roll with disadvantage and return the result in a string
  const modifier = parseInt(modifierInputAdvantageDisadvantage.value, 10);
  const roll1 = Math.floor(Math.random() * 20) + 1;
  const roll2 = Math.floor(Math.random() * 20) + 1;
  const result = roll1 <= roll2 ? roll1 : roll2;
  const output = `You roll with disadvantage \nRoll outcomes: ${roll1}, ${roll2} \nYour result is: ${result}\nModifier: ${modifier}\nFinal Result: ${result + modifier}`;
  return output; //add losing roll to output
}

function rollPercentile() { //Function to roll percentile dice and return the result in a string
  const rollD10 = Math.floor(Math.random() * 10);
  const rollD100 = Math.floor(Math.random() * 10) * 10;
  let result;
  if (rollD10 === 0 && rollD100 === 0) {
    result = 100;
  } else {
    result = rollD10 + rollD100;
  }
  output = `You roll percentile dice \nRoll outcomes: ${rollD100}, ${rollD10} \nResult: ${result} `;
  return output;

}



//iNPUT EVENT LISTENERS

numberOfDiceInput.addEventListener('input', updateCustomRollPreview); //Updates the custom roll preview when the number of dice, sides, or modifier is changed
numberOfSidesInput.addEventListener('input', updateCustomRollPreview);
modifierInputCustomRoll.addEventListener('input', updateCustomRollPreview);


//BUTTON EVENT LISTENERS

customRollButton.addEventListener("click", function() { //Calls the rollCustomDice function and displays the result in the output screen
  const numberOfDice = parseInt(numberOfDiceInput.value, 10);
  const sides = parseInt(numberOfSidesInput.value, 10);
  const modifier = parseInt(modifierInputCustomRoll.value, 10);
  
  const result = rollCustomDice(numberOfDice, sides, modifier);
  outputScreen.innerText = result;
});


rollWithAdvantageButton.addEventListener("click", function() { //Calls the rollWithAdvantage function and displays the result in the output screen
  const result = rollWithAdvantage();
  outputScreen.innerText = result;
});


rollWithDisadvantageButton.addEventListener("click", function() { //Calls the rollWithDisadvantage function and displays the result in the output screen
  const result = rollWithDisadvantage();
  outputScreen.innerText = result;
});


rollPercentileButton.addEventListener("click", function() { //Calls the rollPercentile function and displays the result in the output screen
  const result = rollPercentile();
  outputScreen.innerText = result;
});

helpButton.addEventListener('click', function () { //Opens the help popup when the help button is clicked
  helpPopup.style.display = 'block';
});

closeButton.addEventListener('click', function () { //Closes the help popup when the close button is clicked
  helpPopup.style.display = 'none';
});

helpPopup.addEventListener('click', function (e) { //Closes the help popup when the area outside the popup content is clicked
  if (e.target === helpPopup) {
    helpPopup.style.display = 'none';
  }
});