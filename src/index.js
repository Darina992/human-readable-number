module.exports = function toReadable (number) {
  unitsArr = ['one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen',
'fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
dozenArr = ['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
let answer = null;
switch (number.toString().length){
  case 1:
    if(number === 0){
      answer = 'zero';
    } else{
      answer = unitsArr[`${number - 1}`];
    }
    break;
  case 2:
    if(number <= 19){
      answer = unitsArr[`${number - 1}`];
    } else{
      let secondNumber = Math.floor((number / 10) % 10);
      let firstNumber = Math.floor((number / 1) % 10);
      if(firstNumber === 0){
        answer = dozenArr[`${secondNumber - 2}`];
      } else {
        answer = dozenArr[`${secondNumber - 2}`] + ' ' + unitsArr[`${firstNumber - 1}`];
      }
    }
  break;
  case 3:
    let thirdNumber = Math.floor((number / 100) % 10);
    let secondNumber = Math.floor((number / 10) % 10);
    let firstNumber = Math.floor((number / 1) % 10);
    if(firstNumber === 0 && secondNumber !== 1){
      if( secondNumber === 0){
        answer = unitsArr[`${thirdNumber - 1}`] + ' hundred';
      } else{
        answer = unitsArr[`${thirdNumber - 1}`] + ' hundred'  + " " + dozenArr[`${secondNumber - 2}`];
      }
    }  else if(secondNumber === 0){
      answer = unitsArr[`${thirdNumber - 1}`] + ' hundred'+ " " + unitsArr[`${firstNumber - 1}`];
    } else if(secondNumber === 1){
      let n = +('' + secondNumber + firstNumber);
      answer = unitsArr[`${thirdNumber - 1}`] + ' hundred'+ " " + unitsArr[`${n - 1}`];
    } else {
      answer = unitsArr[`${thirdNumber - 1}`] + ' hundred'  + " " + dozenArr[`${secondNumber - 2}`] + " " + unitsArr[`${firstNumber - 1}`];
    }

  break;
}

return answer
}
