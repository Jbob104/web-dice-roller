let advantage = false; // Advantage Flag
let disadvantage = false; // Disadvantage Flag

// Function to determine the die value
function getDieValue()
{
    // Get the form of the dice choice
    let diceForm = document.getElementById("dice-choice-id");

    // Get the value of the die type
    let dieType = diceForm.elements.choice.value;

    let dieValue;

    switch(dieType)
    {
        case "d4":
            dieValue = 4;
            break;
        case "d6":
            dieValue = 6;
            break;
        case "d8":
            dieValue = 8;
            break;
        case "d10":
            dieValue = 10;
            break;
        case "d12":
            dieValue = 12;
            break;
        case "d20":
            dieValue = 20;
            break;
    }

    return dieValue;
}

// Function to check if a modifier is selected
function checkModifier()
{
    // Get the form of the modifiers
    let modifierForm = document.getElementById("modifier-id");

    // Get the value for the modifier
    let modifier = modifierForm.elements.modifier.value;

    // Set modifier flags
    switch(modifier)
    {
        case "advantage":
            advantage = true;
            disadvantage = false;
            break;
        case "disadvantage":
            advantage = false;
            disadvantage = true;
            break;
        case "none":
            advantage = false;
            disadvantage = false;
            break;
    }
}

// Function to run a roll of the dice
function runRoll()
{
    // Get die value
    let dieValue = getDieValue();

    // Get number of dice to roll
    let count = document.getElementById("dice-count-id").value;

    // Set modifier state
    checkModifier();

    let rollOne;
    let rollTwo;

    // Check if second roll needed
    if(advantage || disadvantage)
    {
        rollOne = rollDice(dieValue, count); // first roll
        rollTwo = rollDice(dieValue, count); // second roll
    }
    else
    {
        rollOne = rollDice(dieValue, count); // only roll
        rollTwo = 0;
    }

    // Set output to rolled value
    setOutput(rollOne, rollTwo);
}

// Function to set the output to the rolled value
function setOutput(rollOne, rollTwo)
{
    // Gets the result element
    output = document.getElementById("result-id");

    // Rolled with advantage
    if(advantage)
    {
        // Check which roll is higher
        if(rollOne > rollTwo)
        {
            output.value = rollOne;
        }
        else
        {
            output.value = rollTwo;
        }
    }

    // Rolled with disadvantage
    else if(disadvantage)
    {
        // Check which roll is lower
        if(rollOne > rollTwo)
        {
            output.value = rollTwo;
        }
        else
        {
            output.value = rollOne;
        }
    }
    
    // Rolled without modification
    else
    {
        output.value = rollOne;
    }
}

// Function to calculate a die roll
function rollDice(dieValue, count)
{
    let sum = 0;

    for(let i = 0; i < count; i++)
    {
        sum += Math.floor(Math.random() * dieValue) + 1;
    }

    return sum;
}