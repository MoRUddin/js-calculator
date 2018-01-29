# js-calculator
calculator built using prompts in JS

## Task
Build a calculator that can
* Add/subtract/multiply/divide
* Raise powers/square root
* calculate BMI given imperial or metric units
* calculate the travel fare and journey time.

## Formulas used
```js
if (speed>60) {
  efficiency -= ((speed-60)*2)
  if (efficiency<=20) {
    efficiency = 20;
  }
}
```
logic: higher speeds lead to lower fuel efficiency, but fuel efficiency should have a baseline with today's cars, and should never be negative.

```js
case 'a':
  var weightMetric = parseInt(prompt("Enter your weight in Kg"));
  var heightMetric = parseInt(prompt("Enter your height in cm"));
  alert("Your BMI is "+ 10000*weightMetric/(Math.pow(heightMetric,2)));
  break;
case 'b':
  var weightMetric = parseInt(prompt("Enter your weight in lbs"));
  var heightMetric = parseInt(prompt("Enter your height in in"));
  alert("Your BMI is "+ (703*weightMetric)/(Math.pow(heightMetric,2)));
```
logic: switch statement was used to allow the user to select either imperial or metric units to calculate their BMI.

```js
if ((distance/speed)>=1){
  alert("Your trip will take " +(distance/speed)+" hours, and will cost £"+(cost*(distance/efficiency)) );
} else {
  alert("Your trip will take " +(60*(distance/speed))+" minutes, and will cost £"+(cost*(distance/efficiency)) );
}
```
variables could have been used instead of raw maths code to make it more obvious what each formula does.

## Improvements
In future updates to this app I would add validation and prevention of/response to invalid input. I would also calculate formulas separately to reduce cluttering of code.
