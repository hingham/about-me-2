'use strict';
var printGuess =' guess: ';

var numCorrect = 0;
var totalCorrect = 'total correct: ';

// Code prompts user to answer questions about me and alerts user if responses are correct
// var getName = prompt('What is my name?');
// var nameGuess = getName.toLowerCase();
// console.log(printGuess + nameGuess);

// if (nameGuess === 'hannah'){
//   console.log('name is correct');
//   alert('You are correct! My name is Hannah!');
//   numCorrect += 1;
//   console.log(totalCorrect + numCorrect);

// } else {
//   console.log('name incorrect');
//   alert('You are incorrect. But that\'s okay because we\'ve just met. My name is Hannah!');
// }


// var grewUp = prompt('Was I born in Washington?')
// var grewUpGuess = grewUp.toLowerCase();
// console.log(' Q: was I born in Washington?' + printGuess + grewUpGuess);

// if(grewUpGuess ==='yes' || grewUpGuess ==='y') {
//   console.log(grewUpGuess + ' is correct');
//   alert('You know me so well! I was born in Seattle, WA');
//   numCorrect += 1;
//   console.log(totalCorrect + numCorrect);
// }
// else if (grewUpGuess === 'no' || grewUpGuess === 'n') {
//   console.log(grewUpGuess + ' is incorrect');
//   alert('Actaully, I was. It\'s ok though. We are still getting to know one another.');
// }
// else {
//   console.log(printGuess + grewUpGuess + 'is invalid');
//   alert(grewUpGuess + ' is not valid. Please respond with a yes or no to questions.');
// }


// var dogPerson = prompt('Do I like dogs?');
// var dogPersonGuess = dogPerson.toLowerCase();
// console.log('Q: Do I like dogs? ' + printGuess + dogPersonGuess);

// if (dogPersonGuess === 'yes' || dogPersonGuess === 'y') {
//   console.log(dogPersonGuess + 'is Correct');
//   alert('You are right! I do like dogs.');
//   numCorrect += 1;
//   console.log(totalCorrect + numCorrect);
// }
// else if (dogPersonGuess === 'no' || dogPersonGuess === 'n' ){
//   alert('In fact, I do like dogs, but sadly I do not have a dog.');
//   console.log(dogPersonGuess + ' is incorrect')
// }
// else {
//   console.log(printGuess + dogPersonGuess + ' is invalid');
//   alert(dogPersonGuess + ' is not valid. Please respond with a yes or no to questions.');
// }


// var gummy = prompt('Do I eat gummy bears?')
// var gummyGuess = gummy.toLowerCase();
// console.log('Q: Do I ear gummy bears?' + printGuess + gummyGuess);

// if (gummyGuess === 'yes' || gummyGuess === 'y'){
//   alert('You\'re right! I can eat lots and lots of gummy bears! They might be my favorite candy.');
//   console.log(gummyGuess + ' is correct');
//   numCorrect += 1;
//   console.log(totalCorrect + numCorrect);
// }
// else if(gummyGuess === 'no' || gummyGuess === 'n'){
//   alert('Wrong. I do eat gummy bears. Maybe you can get the next one?');
//   console.log(gummyGuess + ' is incorrect');
// }
// else {
//   console.log(printGuess + gummyGuess + ' is invalid');
//   alert(gummyGuess + ' is not valid. Please respond with a yes or no to questions.');
// }


// var iceCream = prompt('Do I like vegan ice cream?')
// var iceCreamGuess = iceCream.toLowerCase();
// console.log('Q: Do I like vegan ice cream? ' + printGuess + iceCreamGuess);

// if(iceCreamGuess === 'yes' || iceCreamGuess === 'y'){
//   alert('Correct, I do like vegan ice cream. My favorite in Seattle is Frankie Joes');
//   console.log(iceCreamGuess + ' is correct');
//   numCorrect += 1;
//   console.log(totalCorrect + numCorrect);
// }
// else if(iceCreamGuess === 'no' || iceCreamGuess === 'n') {
//   alert('False. I do like vegan ice cream. Unless it is bad.');
//   console.log(iceCreamGuess + ' is incorrect');
// }
// else {
//   console.log(printGuess + iceCreamGuess + ' is invalid');
//   alert(iceCreamGuess + ' is not valid. Please respond with a yes or no to questions.');
// }


// var height = prompt('Am I taller than six feet?')
// var heightGuess = height.toLowerCase();
// console.log('Q: How tall am I ' + printGuess + heightGuess);

// if(heightGuess === 'no' || heightGuess === 'n'){
//   alert('That\'s right. I\'m not that tall.');
//   console.log(heightGuess + ' is correct');
//   numCorrect += 1;
//   console.log(totalCorrect + numCorrect);
// }
// else if(heightGuess === 'yes' || heightGuess === 'y') {
//   alert('Errrr. I\'m under six feet');
//   console.log(heightGuess + ' is incorrect');
// }
// else {
//   console.log(printGuess + heightGuess + ' is invalid');
//   alert(heightGuess + ' is not valid. Please respond with a yes or no to questions.');
// }


// var guess = 1;

// while(guess<= 4){
//   var countries = prompt('How many different countries have I visited?');
//   var countriesGuess = parseInt(countries);
//   console.log(printGuess + guess + ' Q: Countries visited: ' + countriesGuess);

//   if(countriesGuess === 8){
//     alert('Right on! You got the answer correct!');
//     console.log(countriesGuess + ' is correct');
//     numCorrect += 1;
//     console.log(totalCorrect + numCorrect);
//   }
//   else if (countriesGuess < 8){
//     alert('No, the number is higher than that.');
//     console.log(countriesGuess + ' is incorrect')
//   }
//   else if (countriesGuess > 8){
//     alert('I wish! Maybe someday soon I will have visited that many countries. The actual value is lower.');
//     console.log(countriesGuess + ' is incorrect');
//   }
//   else {
//     alert('That is not a number, silly.');
//   }
//   guess++;
//   if(guess === 4 && countriesGuess !== 8){
//     alert('Careful! This is your last guess');
//   }
//   else if (guess === 5){
//     alert('Sorry, you are out of guesses :( You can try the next question');
//     console.log(totalCorrect + numCorrect);
//   }
// }

var usStates = ['washington', ' oregon', ' idaho', ' california', ' texas'];

var guess = 1;

while (guess < 8){

  var guessState = prompt('Guess what states I have visited in the past year:').toLowerCase();
  console.log(printGuess + guessState);

  for (var i = 0; i < usStates.length; i++){
    console.log('The first part of the for loop');
    if (usStates[i].trim() === guessState){
      console.log(i);
      alert('You are correct!');
      guess = 'done';
      numCorrect += 1;
      console.log(totalCorrect + numCorrect);
      console.log(guess);
      break;
    }
  }

  if (guess === 'done'){
    alert('You are finished! You guessed correctly! I also visited ' + usStates);
    break;
  }
  else if(guess === 7){
    alert('I\'m sorry. You are out of guesses. I visited the following states: ' + usStates);
  }
  else{
    alert('I did not visit ' + guessState + '. Maybe you want to guess again?');
  }
  guess++;
}

alert('You are finished with the quiz! Thanks for coming and getting to know me. You answered ' + numCorrect + ' out of 8 questions correctly.');







