let advantage = false;
let disadvantage = false;

function addDie(dieType)
{
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

function checkModifier()
{
    let modifierForm = document.getElementById("modifier-id");
    let modifier = modifierForm.elements.modifier.value;
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

function runRoll()
{
    let diceForm = document.getElementById("dice-choice-id");
    let dieValue = addDie(diceForm.elements.choice.value);
    let count = document.getElementById("dice-count-id").value;
    checkModifier();

    let rollOne;
    let rollTwo;

    if(advantage || disadvantage)
    {
        rollOne = rollDice(dieValue, count);
        rollTwo = rollDice(dieValue, count);
    }
    else
    {
        rollOne = rollDice(dieValue, count);
        rollTwo = 0;
    }

    setOutput(rollOne, rollTwo);
}

function setOutput(rollOne, rollTwo)
{
    output = document.getElementById("result-id");

    if(advantage)
    {
        if(rollOne > rollTwo)
        {
            output.value = rollOne;
        }
        else
        {
            output.value = rollTwo;
        }
    }
    else if(disadvantage)
    {
        if(rollOne > rollTwo)
        {
            output.value = rollTwo;
        }
        else
        {
            output.value = rollOne;
        }
    }
    else
    {
        output.value = rollOne;
    }
}

function rollDice(dieValue, count)
{
    let sum = 0;

    for(let i = 0; i < count; i++)
    {
        sum += Math.floor(Math.random() * dieValue) + 1;
    }

    return sum;
}