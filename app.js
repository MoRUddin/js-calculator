  var calc_choice = prompt("Which calculator will you use?\n(a)Basic\n(b)Advanced");

  var num1 = parseInt(prompt("Enter the first number"));
  var num2 = parseInt(prompt("Enter the second number"));

  switch (calc_choice) {
    case 'a':
      var operator_choice = prompt("Your numbers are "+num1+" and "+num2+"\nWhich operation will you use?\n(a)Addition\n(b)Subtraction\n(c)Multiplication\n(d)Division");
      break;
    case 'b':
      var operator_choice = prompt("Your numbers are "+num1+" and "+num2+"\nWhich operation will you use?\n(a)Power\n(b)Square Root");
    default:
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
        alert( "Your answer of sqrt "+num1+" and "+num2+" is "+Math.sqrt(num1)+" and "+Math.sqrt(num2)+" respectively.");
        break;
  }
}
