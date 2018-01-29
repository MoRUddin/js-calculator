  var calc_choice = prompt("Which calculator will you use?\n(a)Basic\n(b)Advanced\n(c)BMI\n(d)Travel Fare");

  if (calc_choice=='a'||calc_choice=='b') {
    var num1 = parseInt(prompt("Enter the first number."));
    var num2 = parseInt(prompt("Enter the second number."));
  }

  switch (calc_choice) {
    case 'a':
      var operator_choice = prompt("Your numbers are "+num1+" and "+num2+"\nWhich operation will you use?\n(a)Addition\n(b)Subtraction\n(c)Multiplication\n(d)Division");
      break;
    case 'b':
      var operator_choice = prompt("Your numbers are "+num1+" and "+num2+"\nWhich operation will you use?\n(a)Power\n(b)Square Root");
    case 'c':
      var operator_choice = prompt("Which units would you like?\n(a)Metric\n(b)Imperial");
      break;
    case 'd':
      var distance = parseInt(prompt("Enter distance travelled in miles."));
      var efficiency = parseInt(prompt("Enter fuel efficiency in mpg."));
      var cost = parseInt(prompt("Enter cost per gallon in pounds."));
      var speed = parseInt(prompt("Enter speed in mph."));
      if (speed>60) {
        efficiency -= ((speed-60)*2)
        if (efficiency<=20) {
          efficiency = 20;
        }
      }
      break;
    default:
      alert("Nothing happened.");
  }

  if (calc_choice=='a') {
    switch (operator_choice) {
      case 'a':
        alert( "Your answer of "+num1+"+"+num2+" is "+(num1+num2));
        break;
      case 'b':
        alert( "Your answer of "+num1+"-"+num2+" is "+(num1-num2));
        break;
      case 'c':
        alert( "Your answer of "+num1+"*"+num2+" is "+(num1*num2));
        break;
      case 'd':
        alert( "Your answer of "+num1+"/"+num2+" is "+(num1/num2));
        break;
      default:
        alert("Nothing happened");
      }
  } else if (calc_choice=='b') {
    switch (operator_choice) {
      case 'a':
        alert( "Your answer of "+num1+"^"+num2+" is "+Math.pow(num1,num2));
        break;
      case 'b':
        alert("Your answer of sqrt "+num1+" and "+num2+" is "+Math.sqrt(num1)+" and "+Math.sqrt(num2)+" respectively.");
        break;
      default:
        alert("Nothing happened");
      }
  } else if (calc_choice=='c') {
      switch (operator_choice) {
        case 'a':
          var weightMetric = parseInt(prompt("Enter your weight in Kg"));
          var heightMetric = parseInt(prompt("Enter your height in cm"));
          alert("Your BMI is "+ 10000*weightMetric/(Math.pow(heightMetric,2)));
          break;
        case 'b':
          var weightMetric = parseInt(prompt("Enter your weight in lbs"));
          var heightMetric = parseInt(prompt("Enter your height in in"));
          alert("Your BMI is "+ (703*weightMetric)/(Math.pow(heightMetric,2)));
          break;
        default:
      }
  } else if (calc_choice=='d') {
    if ((distance/speed)>=1){
      alert("Your trip will take " +(distance/speed)+" hours, and will cost £"+(cost*(distance/efficiency)) );
    } else {
      alert("Your trip will take " +(60*(distance/speed))+" minutes, and will cost £"+(cost*(distance/efficiency)) );
    }
  }
