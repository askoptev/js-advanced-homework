'use strict'

const data = {
  prompt: "Пожалуйста введите dice, возможные варианты: d4, d6, d8, d10, d12, d16, d20",
  error: "Не верно указан тип 'dice', допустимые варианты: d4, d6, d8, d10, d12, d16, d20",
  typeDice: {
    d4: 4,
    d6: 6,
    d8: 8,
    d10: 10,
    d12: 12,
    d16: 16,
    d20: 20,
  }
}

const randomDice = (dice = 'd6') => {  
  const typeDice = data.typeDice;
  const randomValue = Math.random() * typeDice[dice] + 1; 
  return Number.isFinite(randomValue) ? `Результат броска ${dice} = ${Math.floor(randomValue)}` : data.error;
}

const dice = prompt(data.prompt);
alert(randomDice(dice))
