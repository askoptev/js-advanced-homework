'use strict'

const isMoreThanFourtheen = (userBirthday) => {
  const birthday = new Date(userBirthday);
  const today = new Date();
  if (birthday == 'Invalid Date') { return `Не верно указан формат даты дня рождения`}
  
  const deltaYear = today.getFullYear() - birthday.getFullYear();  
  if (deltaYear < 14) {
    return false;
  } else if (deltaYear > 14) {
    return true;
  };

  if (birthday.getMonth() > today.getMonth()) {
    return false;
  } else if (birthday.getMonth() < today.getMonth()) {
    return true;
  }
    
  if (birthday.getDate() > today.getDate()) {
    return false;
  }
  
  return true;
}

console.log(isMoreThanFourtheen(''));
console.log(isMoreThanFourtheen('2011-12-30'));
console.log(isMoreThanFourtheen("1982-12-02"));
