// "Chapter 1"

// TASK 1 :

alert("Hello world!");

// TASK 2:

alert("Error! Please enter a valid password.");

// TASK 3:

alert("Welcome to JS land...\nHappy Coding!");

// TASK 4:

alert("Welcome to JS land..."); 
alert("Happy Coding!");

// TASK 5:

var a ="Hello...I can run JS through my web browser's console";
console.log(a);

// "Chapter 2"

// TASK 1:

var username ;

// TASK 2:

var myName ;
myName = "Mahnoor Khursheed";

// TASK 3:

var message ;
message = "Hello World";
alert(message);

// TASK 4:

var a = "Jhone Doe";
var b = "15 years old";
var c = "Certified Mobile Application Development";
alert(a);
alert(b);
alert(c);

// TASK 5:

alert("PIZZA\nPIZZ\nPIZ\nPI\nP")

// TASK 6:

var email ;
email = "mahnoor.khursheed054@gmail.com";
alert("My email address is" + " " + email);

// TASK 7:

var book;
book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the book A smarter way to learn JavaScript");

// TASK 8:

document.write("Yah! I can write HTML content through JavaScript");

// TASK 9:

var a = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”";
alert(a);
document.write(a);

// "Chapter 3"

// TASK 1:

var age;
age = 21;
alert("I am 21 years old");

// TASK 3:

var birthYear;
birthYear = 1998;
document.write("My birth year is 1998" + "<br>");
document.write("Data type of my declared variable is number")

// TASK 4:

var visitorName;
visitorName = "John Doe";
var productTitle;
productTitle = "T-shirts";
var quantity;
quantity = 5;
document.write("John Doe ordered 5 T-shirt(s) on XYZ Clothing store.");

// "Chapter 4"

// TASK 1:

var a , b , c;
a = b = c = 10;

// TASK 2:

// 5 legal variables:

var a = "Ali";
var b = $;
var c = 10;
var d = _;
var userName = "Ahmed";

// 5 illegal variables:

// var user Name = "Ali";
// var a = *;
// var b = ?;
// var c = &;
// var d = !;

// TASK 3:

document.write("Rules for naming JS variables" + " " + "<br>" + "<br>") 
document.write("Variable names can only contain , numbers, $ and _. For example $my_1stVariable" + " " + "<br>")
document.write("Variables must begin with a letter, $ or _. For example $name, _name or name" + " " + "<br>")
document.write("Variable names are case sensitive" + " " + "<br>") 
document.write("Variable names should not be JS keywords" + " " + "<br>") 

// "Chapter 5"

// TASK 1:

var a = +prompt("Enter first value","Your first value is:");
var b = +prompt("Enter second value","Your second value is:");
var c = a+b;
document.write("Sum of" + " " + a + " " + "and" + " " + b + " " + "is" + " " + c);

// TASK 2:

var a = +prompt("Enter first value","Your first value is:");
var b = +prompt("Enter second value","Your second value is:");
var c = a-b;
document.write("Subtraction of" + " " + a + " " + "and" + " " + b + " " + "is" + " " + c);

// TASK 2:

var a = +prompt("Enter first value","Your first value is:");
var b = +prompt("Enter second value","Your second value is:");
var c = a*b;
document.write("Multiplication of" + " " + a + " " + "and" + " " + b + " " + "is" + " " + c);

// TASK 2:

var a = +prompt("Enter first value","Your first value is:");
var b = +prompt("Enter second value","Your second value is:");
var c = a/b;
document.write("Division of" + " " + a + " " + "and" + " " + b + " " + "is" + " " + c);

// TASK 2:

var a = +prompt("Enter first value","Your first value is:");
var b = +prompt("Enter second value","Your second value is:");
var c = a%b;
document.write("Modulus of" + " " + a + " " + "and" + " " + b + " " + "is" + " " + c);

// TASK 3:

var a;
document.write("Value after variable declaration is undefined" + "<br>")
a = 5;
document.write("Initial value:" + " " + a + "<br>")
a = ++a;
document.write("Value after increment is:" + " " + a + "<br>")
a = a + 7;
document.write("Value after addition is:" + " " + a + "<br>")
a = --a;
document.write("Value after decrement is:" + " " + a + "<br>")
a = a%3;
document.write("The remainder is:" + " " + a + "<br>")

// TASK 4:

var a = 600;
var b = 5;
var c = a*b;
document.write("Total cost to buy 5 tickets to a movie is" + " " + c + "PKR" + "<br>")

// TASK 5:

document.write("Table of 4" + "<br>")
for(var i = 1; i <= 10; i++){
  document.write("4" + "x" + i + "=" + 4*i + "<br>")
}

// TASK 6:

var inputCelsius  = 25;
var outputFahrenheit = (inputCelsius * 9)/5 + 32;
document.write(inputCelsius + '\u00B0 C is ' + outputFahrenheit + '\u00B0 F' + "<br>");

var inputFahrenheit  = 70;
var outputCelsius = (inputFahrenheit - 32)/9 * 5;
document.write(inputFahrenheit + '\u00B0 F is ' + outputCelsius + '\u00B0 C' + "<br>");

// TASK 7:

var price1 = 350;
var price2 = 400; 
var quantity1 = 2;
var quantity2 = 1;
var shippingCharges = 250;
var totalCost = (price1*quantity1) + (price2*quantity2) + shippingCharges;
document.write("Price of item 1 is" + " " + price1 + "<br>")
document.write("Quantity of item 1 is" + " " + quantity1 + "<br>")
document.write("Price of item 2 is" + " " + price2 + "<br>")
document.write("Quantity of item 2 is" + " " + quantity2 + "<br>")
document.write("Shipping charges" + " " + shippingCharges + "<br>" + "<br>")
document.write("Total cost of your order is" + " " + totalCost)

// TASK 8:

var totalMarks = 1100;
var marksObtained = 950;
var percentage = (marksObtained/totalMarks) * 100;
document.write("Total marks:" + " " + totalMarks + "<br>")
document.write("Marks obtained:" + " " + marksObtained + "<br>")
document.write("Percentage:" + " " + percentage)

// TASK 10:

var num = 7;
var expression = (num + 5 * 10) / 2;
document.write("Total calculation is:" + " " + expression)

// TASK 11:

var currentYear  = 2020;
var birthYear = 1984;
var age  = currentYear - birthYear;
document.write("Current year:" + " " + currentYear + "<br>");
document.write("Birth year:" + " " + birthYear + "<br>");
document.write('Age is: They are either ' + age + ' or ' + (age - 1));

// TASK 12:

var radius = 20;
var circumference = 2 * 3.142 * radius;
var area = 3.142 * (radius*radius);
document.write("Radius of a circle is:" + " " + radius + "<br>");
document.write("The circumference is:" + " " + circumference + "<br>");
document.write('The area is:' + " " + area);

// "Chapter 6-9"

// TASK 1:

var a = 10;
document.write("Result:" + "<br>")
document.write("The value of a is:" + " " + " " + a + "<br>")
document.write("................................................." + "<br>" + "<br>")
var a = ++a;
document.write("The value of ++a is:" + " " + " " + a + "<br>")
document.write("Now the value of a is:" + " " + " " + a + "<br>" + "<br>" + "<br>" + "<br>")
var b = a++;
document.write("The value of a++ is:" + " " + " " + b + "<br>")
document.write("Now the value of a is:" + " " + " " + a + "<br>" + "<br>" + "<br>" + "<br>")
var c = --a;
document.write("The value of --a is:" + " " + " " + c + "<br>")
document.write("Now the value of a is:" + " " + " " + a + "<br>" + "<br>" + "<br>" + "<br>")
var d = a--;
document.write("The value of a-- is:" + " " + " " + d + "<br>")
document.write("Now the value of a is:" + " " + " " + a + "<br>" + "<br>" + "<br>" + "<br>")

// TASK 2:

var a = 2 , b = 1;
var result = --a - --b + ++b + b--;
// --a = 1;
// --a - --b = 1;
// --a - --b + ++b = 2;
// --a - --b + ++b + b-- = 3;
document.write("a is 2" + " " + " " + "<br>")
document.write("b is 1" + " " + " " + "<br>")
document.write("result is " + " " + " " + result)

// TASK 3:

var a = prompt("Enter your name" , "Your name is")
alert("Welcome" + " " + a + " ")

// TASK 4:

var a = +prompt("Enter a number")
for(var i = 1; i <= 10; i++){
    document.write(a + "x" + i + "=" + a*i + "<br>")
} 
if(a == ""){
  for(var i = 1; i <= 10; i++){
    document.write(5 + "x" + i + "=" + 5*i + "<br>")
} 
}

// TASK 5:

var subject1 = prompt("Enter subject name")
var subject2 = prompt("Enter subject name")
var subject3 = prompt("Enter subject name")
var totalMarks = 100;
var totalMarks1 = 100 + 100 + 100;
var marks1 = prompt("Enter obtained marks in subject 1")
var marks2 = prompt("Enter obtained marks in subject 2")
var marks3 = prompt("Enter obtained marks in subject 3")
var totalMarks2 = marks1 + marks2 + marks3;
var percentage1 = marks1/totalMarks *100;
var percentage2 = marks2/totalMarks *100;
var percentage3 = marks3/totalMarks *100;
var totalPercentage = totalMarks2/totalMarks1 *100;
document.write("Subject" + " " + "Total Marks" + " " + "Obtained Marks" + " " + "Percentage" + "<br>")
document.write(subject1 + " " + totalMarks + " " + marks1 + " " + percentage1 + "<br>")
document.write(Subject2 + " " + totalMarks + " " + marks2 + " " + percentage2 + "<br>")
document.write(Subject3 + " " + totalMarks + " " + marks3 + " " + percentage3 + "<br>")
document.write(" " + " " + totalMarks1 + " " + totalMarks2 + " " + totalPercentage)

// "Chapter 9-11"

// TASK 1:

var city = prompt("Enter city name")
if(city=="Karachi"){
   alert("Welcome to city of lights")
}
else{
   alert("Welcome")
}

// TASK 2:

var gender = prompt("Enter gender")
if(gender=="male"){
   alert("Good Morning Sir")
}
else{
  alert("Good Morning Ma'am")
}

// TASK 3:

var signal = prompt("Enter color of road traffic signal")
if(signal=="red"){
  document.write("Must stop")
}
else if(signal=="yellow"){
  document.write("Ready to move")
}
else if(signal=="green"){
  document.write("Move now")
}

// TASK 4:

var fuel = prompt("Enter remaining fuel in car (in litres)")
if(fuel < 0.25){
    alert("Please refill the fuel in car")
}
else{
    alert("Fuel quantity is ok")
}

// TASK 5:

// (a):

var a = 4;
if(++a===5){
  alert("given condition for variable a is true");
}

// Output : The alert box displayed that given condition for variable a is true

// (b):

var b = 82;
if(b++===83){
  alert("given condition for variable b is true");
}

// Output : No output shown

// (c):

var c = 12;
if(c++===13){
  alert("condition 1 is true");
}
if(c===13){
  alert("condition 2 is true");
}
if(++c<14){
  alert("condition 3 is true");
}
if(c===14){
  alert("condition 4 is true");
}

// Output : The alert box displayed the condition 2 is true and another alert box showed condition 4 is true

// (d):

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if(totalCost === laborCost + materialCost){
  alert("The cost equals");
}

// Output : The alert box displayed that the cost equals

// (e):

if(true){
  alert("True");
}
if(false){
  alert("False");
}

// Output : The alert box displayed true

// (f):

if("car"<"cat"){
  alert("car is smaller than cat");
}

// Output : The alert box displayed car is smaller than cat

// TASK 6:

// TASK 7:

var a = 7;
var a = +prompt("Guess the secret number(ranging from 1 to 10)");
if(a===7){
  alert("Bingo! Correct answer")
}
else if(a===+1){
  alert("Close enough to the correct answer")
}
else{
  alert("Try again")
}

// TASK 8:

var num = +prompt("Enter a number")
if(num % 3 == 0){
  document.write("The number is divisible by 3")
}
else{
  document.write("The number is not divisible by 3")
}

// TASK 9:

var num = +prompt("Enter a number")
if(num % 2 == 0){
  document.write("The given input is an even number")
}
else{
  document.write("The given input is an odd number")
}

// TASK 10:

var temp = +prompt("Enter temperature");
if(temp > 40){
  document.write("It is too hot outside.")
}
else if(temp > 30){
  document.write("The Weather today is Normal.")
}
else if(temp > 20){
  document.write("Today’s Weather is cool.")
}
else{
  document.write("OMG! Today’s weather is so Cool.")
}

// TASK 11:

var num1 = +prompt("Enter your first number");
var sign = prompt("Enter your operator");
var num2 = +prompt("Enter your second number");
if(sign === "+"){
  document.write(num1+num2)
}
else if(sign === "-"){
  document.write(num1-num2)
}
else if(sign === "*"){
  document.write(num1*num2)
}
 else if(sign === "/"){
  document.write(num1/num2)
}
else if(sign === "%"){
  document.write(num1%num2)
}
else{
  document.write("No value entered")
}

// "Chapter 12-13"

// TASK 1:

var ch = prompt("Enter any character")
  if("ch>=65" && "ch<=90"){
    alert("The given input is an uppercase letter")
}
	else if("ch>=97" && "ch<=122"){
    alert("The given input is a lowercase letter")
}
	else if("ch>=48" && "ch<=57"){
    alert("The given input is a number")
}

// TASK 2:

var num1, num2;
num1 = +prompt("Input the First integer");
num2 = +prompt("Input the second integer");                                            
if(num1 > num2){
  alert("The larger number is" + " " + num1)
}   
else if(num1 === num2){
  alert("The two integers are equal")
} 

// TASK 3:

var num = +prompt("Enter a number")
if(num > 0){
  alert("The number is positive")
}
else if(num == 0){
  alert("The number is zero")
}
else if(num < 0){
  alert("The number is negative")
}

// TASK 4:

var char = prompt("Enter a character")
if(char == 'a'||'e'||'i'||'o'||'u'){
  alert("true");
}
else{
  alert("flase");
}

// TASK 5:

var a = prompt("Enter your password")
var b = "abc123";
if(a == ""){
  alert("Please enter your password")
}
else if(a === b){
  alert("Correct! The password you entered matches the original password")
}
else{
  alert("Incorrect Password")
}

// TASK 6:

var greeting; 
var hour = 13; 
if(hour < "18"){ 
  alert("Good day"); 
}
else{
  alert("Good evening"); 
} 

// "Chapter 14-16"

// TASK 1:

var arrayName = [];

// TASK 2:

students.name = students.name();

// TASK 3:

var arrayString;
arrayString = ["Ali" , "Ahmed" , "Amna"]

// TASK 4:

var arrayNum;
arrayNum = [1 , 2 , 3]

// TASK 5:

var arrayBoolean;
arrayBoolean = []

// TASK 6:

var arrayMixed;
arrayMixed = [1,2,3,"paul",5.5]

// TASK 7:

var arr = ["SSC" , "HSC" , "BCS" , "BS" , "BCOM" , "MS" , "M. Phil." , "PhD"]
document.write("Qualifications:" + "<br>" + "<br>");
document.write("1)" + " " + arr[0] + "<br>");
document.write("2)" + " " + arr[1] + "<br>");
document.write("3)" + " " + arr[2] + "<br>");
document.write("4)" + " " + arr[3] + "<br>");
document.write("5)" + " " + arr[4] + "<br>");
document.write("6)" + " " + arr[5] + "<br>");
document.write("7)" + " " + arr[6] + "<br>");
document.write("8)" + " " + arr[7] + "<br>");

// TASK 10:

var arr = [320 , 230 , 480 , 120]
document.write("Scores of students:" + "" + " " + arr + "<br>")
var arrSort = arr.sort()
document.write("Ordered scores of students:" + "" + " " + arrSort)

// TASK 11:

var arr = ["Karachi" , "Lahore" , "Islamabad" , "Quetta" , "Peshawar"]
var arrSelected = arr.slice(2,4)
document.write("Cities list:" + "<br>" + " " + arr + "<br>" + "<br>")
document.write("Selected cities list:" + "<br>" + " " + arrSelected + "<br>" + "<br>")

// TASK 12:

var arr = ["This" , "is" , "my" , "cat"]
var newArr = arr.join("")
document.write(newArr)

// TASK 13:

var arr = ["keyboard," , "mouse," , "printer," , "monitor"]
document.write("Devices:" + "<br>");
document.write(arr + "<br>" + "<br>");
document.write(arr[0] + "<br>");
document.write(arr[1] + "<br>");
document.write(arr[2] + "<br>");
document.write(arr[3] + "<br>");

// TASK 14:

var arr = ["keyboard," , "mouse," , "printer," , "monitor"]
document.write("Devices:" + "<br>");
document.write(arr + "<br>" + "<br>");
document.write(arr[3] + "<br>");
document.write(arr[2] + "<br>");
document.write(arr[1] + "<br>");
document.write(arr[0] + "<br>");

// "Chapter 17-20"

// TASK 1:

var arr = [[],[]];
arr[0][2] = [];
arr[1][3] = [];
alert(arr[0][2]);
alert(arr[1][3]);

// TASK 2:

var arr = [[],[],[],[]];
arr[1][1] = [0];
arr[1][2] = [1];
arr[1][3] = [2];
arr[1][4] = [3];
arr[2][1] = [1];
arr[2][2] = [0];
arr[2][3] = [1];
arr[2][4] = [2];
arr[3][1] = [2];
arr[3][2] = [1];
arr[3][3] = [0];
arr[3][4] = [1];
document.write(arr[1][1] + " ");
document.write(arr[1][2] + " ");
document.write(arr[1][3] + " ");
document.write(arr[1][4] + "<br>");
document.write(arr[2][1] + " ");
document.write(arr[2][2] + " ");
document.write(arr[2][3] + " ");
document.write(arr[2][4] + "<br>");
document.write(arr[3][1] + " ");
document.write(arr[3][2] + " ");
document.write(arr[3][3] + " ");
document.write(arr[3][4] + " ");

// TASK 3:

for(var i = 1; i <= 10; i++){
    document.write(i + "<br>")
} 

// TASK 4:

var num = +prompt("Enter a number to show its multiplication table")
var length = +prompt("Enter length multiplication table")
for(var i = 1; i <= length ; i++){
    document.write(num + "x" + i + "=" + num*i + "<br>")
} 

// TASK 5:

var fruits = new Array("apple", "banana", "mango", "orange", "strawberry")
var len = fruits.length;
for(var i = 0; i < len; i++){
  document.write(fruits[i] + "<br>");
}

// TASK 6:

for(var i = 1; i <= 10; i++){
  document.write(i + "," + " " + " " + " ")
} 
for(var i = 10; i > 0; i--){
  document.write(i + "," + " " + " " + " ")
}
for(var i = 0; i <= 20; i+=2){
  document.write(i + "," + " " + " " + " ")
} 
for(var i = 1; i <= 20; i++){
  if(i % 2 !== 0)
  document.write(i + "," + " "  + " " + " ")
} 
for(var i = 1; i <= 20; i++){
  if(i % 2 === 0)
  document.write(i + "k," + " "  + " " + " ")
} 

// TASK 8:

var arr = [24 , 53 , 78 , 91 , 12]
document.write("Array items:" + " " + arr + "<br>")
document.write("The largest number is" + " " + " ")
document.write(Math.max(24 , 53 , 78 , 91 , 12));

// TASK 9:

var arr = [24 , 53 , 78 , 91 , 12]
document.write("Array items:" + " " + arr + "<br>")
document.write("The smallest number is" + " " + " ")
document.write(Math.min(24 , 53 , 78 , 91 , 12));

// TASK 10:

for(var i = 1; i <= 100; i++){
  if(i%5 == 0)
  document.write(i + "," + " ")
} 

// "Chapter 21-25"

// TASK 1:

var firstName = prompt("Enter your first name")
var lastName = prompt("Enter your last name")
var fullName = firstName + " " + lastName;
alert("Welcome" + " " + fullName)

// TASK 2:

var a = prompt("Enter your favourite mobile phone model")
document.write("My favourite phone is:" + " " + a + "<br>")
var lenth = a.length;
document.write("Length of string:" + " " + lenth)

// TASK 3:

var str = "Pakistani";
var n = str.indexOf("n");
document.write("String:" + " " + str + "<br>")
document.write("Index of letter 'n':" + " " + n)

// TASK 4:

var str = "Hello World";
var n = str.lastIndexOf("World");
document.write("String:" + " " + str + "<br>")
document.write("Last index of letter 'l':" + " " + n)

// TASK 5:

var str = "Pakistani";
var n = str.charAt(3);
document.write("String:" + " " + str + "<br>")
document.write("Character at index 3:" + " " + n)

// TASK 6:

var str1 = prompt("Enter your first name");
var str2 = prompt("Enter your last name");
var res = str1.concat(" " + str2);
alert("Welcome" + " " + res)

// TASK 7:

var text = "Hyderabad";
var newText = text.replace("Hyder", "Islam");
document.write("City:" + " " + text + "<br>")
document.write("After replacement:" + " " + newText)

// TASK 8:

var message = "Ali and Sami are best friends. They play cricket and football together.";
var rep = message.replace(/and/g, "&"); 
document.write(rep)

// TASK 9:

var str = "472";
var rep = parseInt(str)
document.write("Value:" + " " + str + "<br>")
document.write("Type: string" + " " + "<br>")
document.write("Value:" + " " + rep + "<br>")
document.write("Type: number")

// TASK 10:

var a = prompt("Enter your favourite snack")
var b = a.toUpperCase(a)
document.write("User input:" + " " + a + "<br>")
document.write("Upper case:" + " " + b)

// TASK 11:

var a = prompt("Enter your favourite snack")
var b = a.toLocaleUpperCase(b)
document.write("User input:" + " " + a + "<br>")
document.write("Title case:" + " " + b)

// TASK 12:

var num = 35.36; 
var string = num.toString();
document.write("Number:" + " " + num + "<br>")
document.write("Result:" + " " + string)

// TASK 13:

var userName = prompt("Enter your name")
var textLength = userName.length;
for(i = 0; i < userName.length; i++){
if(userName.slice(i , i + 1) == "!" || userName.slice(i , i + 1) == "," || userName.slice(i , i + 1) == "." || userName.slice(i , i + 1) == "@")
    alert("Please enter a valid username")
}

// TASK 14:

var array = ["cake" , "apple pie" , "cookie" , "chips" , "patties"]
var bakery = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?")
bakery = bakery.toLowerCase();
var bakeryItems = array.indexOf(bakery);
if(array.indexOf(bakery) != -1){
    alert(bakery + " " + "is available at index" + " " + bakeryItems + " " + "in our bakery")
}
else{
    alert("We are sorry." + " " + bakery + " " + "is not available in our bakery")
}

// TASK 16:

var str = "University of Karachi"; 
var arr = str.split();
document.write(arr)

// TASK 17:

var a = prompt("Enter any input")
var b = a.charAt(a.length-1);
document.write("User input:" + " " + a + "<br>")
document.write("Last character of input:" + " " + b)

// TASK 18:

var str = "The quick brown fox jumps over the lazy dog";
var occ = str.split(/the/g).length;
document.write("Text:" + " " + str + "<br>")
document.write("There are" + " " + occ + " " + "occurance(s) of word 'the'") 

// "Chapter 26-30"

// TASK 1:

var num = +prompt("Enter any positive integer")
var roundNum = Math.round(num)
var floorNum = Math.floor(num)
var ceilNum = Math.ceil(num)
document.write("Number:" + " " + num + "<br>")
document.write("Round off value:" + " " + roundNum + "<br>")
document.write("Floor value:" + " " + floorNum + "<br>")
document.write("Ceil value:" + " " + ceilNum)

// TASK 2:

var num = +prompt("Enter any negative floating point")
var roundNum = Math.round(num)
var floorNum = Math.floor(num)
var ceilNum = Math.ceil(num)
document.write("Number:" + " " + num + "<br>")
document.write("Round off value:" + " " + roundNum + "<br>")
document.write("Floor value:" + " " + floorNum + "<br>")
document.write("Ceil value:" + " " + ceilNum)

// TASK 3:

var num1 = Math.abs(-14);
var num2 = Math.abs(2);
document.write("Absolute value of -14 is" + " " + num1 + "<br>")
document.write("Absolute value of 2 is" + " " + num2)

// TASK 4:

var heads = 2;
var tails = 1;
if(Math.floor(Math.random() * 2) == 0){
  document.write("Random coin value:" + " " + "Heads");
}    
else{
  document.write("Random coin value:" + " " + "Tails");
}

// TASK 5:

var dice1 = (Math.floor(Math.random() * 6))
document.write("Random dice value:" + " " + dice1 + "<br>");
var dice2 = (Math.floor(Math.random() * 6))
document.write("Random dice value:" + " " + dice2 + "<br>");

// TASK 6:

var num = Math.floor((Math.random() * 100) + 1);
document.write("Randon muber between 1 and 100:" + " " + num)

// TASK 7:

var weight = prompt("Enter your weight in kilograms")
var a = parseFloat(weight);
document.write("The weight of user is:" + " " + a)

// TASK 8:

var a = 7;
var a = +prompt("Guess the secret number(ranging from 1 to 10)");
if(a===7){
  alert("Bingo! Correct answer")
}
else{
  alert("Try again")
}

// "Chapter 31-34"

// TASK 1:

var a = new Date();
document.write(a)

// TASK 2:

var date = new Date();
var currentMonth = date.getMonth();
if(currentMonth === 0){
    alert("Current month is January");
}
else if(currentMonth === 1){
    alert("Current month is Feburary");
}
else if(currentMonth === 2){
    alert("Current month is March");
}
else if(currentMonth === 3){
    alert("Current month is April");
}
else if(currentMonth === 4){
    alert("Current month is May");
}
else if(currentMonth === 5){
    alert("Current month is June");
}
else if(currentMonth === 6){
    alert("Current month is July");
}
else if(currentMonth === 7){
    alert("Current month is August");
}
else if(currentMonth === 8){
    alert("Current month is September");
}
else if(currentMonth === 9){
    alert("Current month is October");
}
else if(currentMonth === 10){
    alert("Current month is November");
}
else if(currentMonth === 11){
    alert("Current month is December");
}
document.write(currentMonth)

// TASK 3:

var date = new Date();
var currentDay = date.getDay();
if(currentDay === 0){
    alert("Today is Sunday");
}
else if(currentDay === 1){
    alert("Today is Monday");
}
else if(currentDay === 2){
    alert("Today is Tuesday");
}
else if(currentDay === 3){
    alert("Today is Wednesday");
}
else if(currentDay === 4){
    alert("Today is Thursday");
}
else if(currentDay === 5){
    alert("Today is Friday");
}
else if(currentDay === 6){
    alert("Today is Saturday");
}
alert(currentDay)

// TASK 4:

var date = new Date();
var currentDay = date.getDay();
if(currentDay === 0){
    alert("It's fun day");
}
else if(currentDay === 1){
    alert("Today is Monday");
}
else if(currentDay === 2){
    alert("Today is Tuesday");
}
else if(currentDay === 3){
    alert("Today is Wednesday");
}
else if(currentDay === 4){
    alert("Today is Thursday");
}
else if(currentDay === 5){
    alert("Today is Friday");
}
else if(currentDay === 6){
    alert("It's fun day");
}

// TASK 5:

var a = new Date ();
var b = a.getDate();
if(b < 16){
    alert("First fifteen days of the month")
}
else{
    alert("Last fifteen days of the month")
}

// TASK 6:

var d = new Date ();
document.write("Current date:" + " " + d + "<br>")
var e = new Date("January 1, 1970 01:15:00:526");
var todayMili = d.getTime()
document.write("Elapsed miliseconds since January 1, 1970:" + " " + todayMili + "<br>")
var f = new Date("January 1, 1970 01:15:00:526");
var minCovert = todayMili / (1000*60*60);
document.write("Elapsed minutes since January 1, 1970:" + " " + minCovert)

// TASK 7:

var a = new Date ();
var b = a.getHours();
if(b < 11){
    alert("It's AM")
}
else{
    alert("It's PM")
}

// TASK 8:

var d = new Date();
d.setFullYear(2020, 11, 31);
document.write("Later date:" + " " + d)

// TASK 9:

var d = new Date ();
var a = d.setFullYear(2015, 05, 18);
var b = a.getDay();
document.write(a + " " + "days have passed since 1st Ramadan, 2015")

// TASK 11:

var d = new Date();
document.write("Current date:" + " " + d + "<br>")
d.setHours(d.getHours() - 1);
document.write("1 hour ago, it was" + " " + d)

// TASK 12:

var d = new Date();
document.write("Current date:" + " " + d + "<br>")
d.setFullYear(d.getFullYear() - 100);
document.write("100 years back, it was" + " " + d)

// TASK 13:

var age = +prompt("Enter your age")
document.write("Your age is:" + " " + age + "<br>")
var birthYear = 1998;
document.write("Your birth year is:" + " " + birthYear)

// TASK 14:

document.write("K-Electric Bill" + " " + "<br>" + "<br>") 
var customerName = "ABC customer";
var d = new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var e = months[d.getMonth()];
var units = 410;
var charges = 16;
var netAmount = units * charges;
var latePayment = 350;
var grossAmount = netAmount + latePayment;
document.write("Customer name:" + " " + customerName + "<br>")
document.write("Month:" + " " + e + "<br>")
document.write("Number of units:" + " " + units + "<br>")
document.write("Charges per unit:" + " " + charges + "<br>")
document.write("Late payment surcharge:" + " " + latePayment + "<br>" + "<br>")
document.write("Net amount payable (Within due date):" + " " + netAmount + "<br>")
document.write("Gross amount payable (After due date):" + " " + grossAmount + "<br>")

// "Chapter 35-38"

// TASK 1:

var curDay = function(sp){
    today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //As January is 0.
    var yyyy = today.getFullYear();
    
    if(dd<10) dd='0'+dd;
    if(mm<10) mm='0'+mm;
    return (mm+sp+dd+sp+yyyy);
    };
    console.log(curDay(" "));
    console.log(curDay(" "));
 
// TASK 2:

var person = {
    firstName: prompt("Enter your first name"),
    lastName: prompt("Enter your first name"),
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
  alert("Welcome" + " " + person.fullName());

// TASK 3:

function calculation(a , b){
    return a + b;
}

document.write(calculation(+prompt("Enter first number") , +prompt("Enter second number")))
     
// TASK 5:

square = function(i){
    return i * i;
};
  
document.write("The square of a number is:" + " " + square(12));

// TASK 6:

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
  }

  alert(factorial(5));

// TASK 9:

function areaRectangle(w,h){
        var a = w*h;
        document.write("The area of rectangle is " + a + ".");
}
    areaRectangle(2,2)

// TASK 10: 

function check_Palindrome(str_entry){
   
       var char = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
        var ccount = 0;
    
        if(char==="") {
            console.log("Nothing found!");
            return false;
        }
    
        if ((char.length) % 2 === 0) {
            ccount = (char.length) / 2;
        } else {
    
            if (char.length === 1) {
                console.log("Entry is a palindrome.");
                return true;
            } else {
    
                ccount = (char.length - 1) / 2;
            }
        }
    
        for (var x = 0; x < ccount; x++) {

            if (char[x] != char.slice(-1-x)[0]) {
                console.log("Entry is not a palindrome.");
                return false;
            }
        }
        console.log("The entry is a palindrome.");
        return true;
    }
    check_Palindrome('madam');
    check_Palindrome('nurses run');
    check_Palindrome('fox');     

// TASK 11:

function upperCase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
document.write(upperCase("the quick brown fox"));


// TASK 12:

function longestWord(string) {
    var str = string.split(" ");
    var longest = 0;
    var word = null;
    str.forEach(function(str) {
        if (longest < str.length) {
            longest = str.length;
            word = str;
        }
    });
    return word;
}
console.log(longestWord("Web Development Tutorial"));

// TASK 13:

function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var i = 0; i < str.length; i++) 
 {
    if (str.charAt(i) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

console.log(char_count('JSResourceS.com', 'o'));

// TASK 14:

function calcCircumfrence(radius){
    var y = 2*3.142*radius;
    document.write("The circumfrence is " + y + "." + "<br>");
}
  function calcArea(radius){
    var x = 3.142*radius* radius;
    document.write("The area is " + x + ".");
}
  
calcCircumfrence(1);
calcArea(2);

// "Chapter 38-42"

// TASK 1:

var power = function(a,b){
   var P = Math.pow(a, b);
   return P;
}

// console.log(power(2,3));

// TASK 2:

function isLeapYear() { 
    var year= document.getElementById("year").value;
    document.getElementById("YEAR1").innerHTML = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0); 
} 

// TASK 3:

var triarea = function(a,b,c) {
	var S = (a + b + c) / 2;
	var area = S*(S-a)*(S-b)*(S-c);
    return area;
}

console.log(triarea(4,5,6));

// TASK 5:

String.prototype.character = function() {
    return this.indexOf("H");
}
  
  function submit() {
    var input = document.getElementById('input').value;
    document.getElementById('output').innerHTML = input.indexOf("H");
}

// TASK 6:

String.prototype.character = function() {
    return this.replace(/[aeiou]+/g, '');
}
  
  function submit() {
    var input = document.getElementById('input').value;
    document.getElementById('output').innerHTML = input.character();
}

// TASK 7:

function findOccurrences() {
    var str = "Pleases read this application and give me gratuity";
    var count = 0;
    let haveSeenVowel = false;
  
    for (const letter of str.toLowerCase()) {
      switch (letter) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
          {
            if (haveSeenVowel) {
              count++;
              haveSeenVowel = false;
            } else {
              haveSeenVowel = true;
            }
            break;
          }
        default:
          haveSeenVowel = false
      }
    }
  
    return count
  }
  
  console.log(findOccurrences());

// TASK 8:

var a = prompt("Enter city distance in km");

var distance = function(b){
    var b = a * 1000;
    return b;
 }
 
 console.log(distance(b));

var distanceInF = function(c){
    c = b * 3.28;
    return c;
}

console.log(distanceInF(c));

var distanceInI = function(d){
    d = c * 12;
    return d;
}

console.log(distanceInI(d));

var distanceInCm = function(f){
    f = d * 30;
    return f;
}

console.log(distanceInCm(f));

// TASK 9:

var overTimePay = 0;
var timeWork = prompt("Enter hours")
if(timeWork > 40){
overTime = Math.floor(timeWork - 40);
overTimePay = overTimePay + (12 * overTime);
}
console.log(overTimePay);

// TASK 10:

var amount = prompt("Enter amount to withdraw!!")
var a = Math.floor(amount / 100);
document.write("Required notes of 100 is :" + " " + a + " " + "notes" + "<br>")
var b = Math.floor((amount % 100) / 50);
document.write("Required notes of 50 is :" + " " + b + " " + "notes" + "<br>")
var c = Math.floor((amount % 100) % 50 / 10);
document.write("Required notes of 10 is :" + " " + c + " " + "notes" + "<br>")

// "Chapter 43-48"

// TASK 1:

function myFunction(){
    alert("Hello World!")
}

// TASK 2:

function secondFunction(){
    alert("Thank you purchasing a phone from us")
}

// TASK 3:

function removeFunction(){
    var td = event.target.parentNode; 
    var tr = td.parentNode;
    tr.parentNode.removeChild(tr);
}

// "Chapter 49-52"

// TASK 1:

function submitFunction(){
    var para = document.getElementById('para');
    para.innerHTML = alert("You've signed in successfully");
    var email = document.getElementById('email-name');
    document.write("Email:" + " " + email.value);
    var password = document.getElementById('password-name');
    document.write("Password:" + " " + password.value);
    var repeatPassword = document.getElementById('repeat-password');
    document.write("Repeat Password:" + " " + repeatPassword.value);
}

function cancelFunction(){
    var email = document.getElementById('email-name');
    email.value = " ";
    var password = document.getElementById('password-name');
    password.value = " ";
    var repeatPassword = document.getElementById('repeat-password');
    repeatPassword.value = " ";
}

// TASK 2:

function readMore(){
    var text = "Samsung Galaxy Note 9 price in Pakistan starts at Rs. 139,999. This is for the base variant that comes with 6GB of RAM and 128GB of internal storage.";
    var para = document.getElementById("para");
    para.innerHTML = text
}

function readMore1(){
    var text = "Samsung Galaxy Z Flip price in Pakistan is Rs. 249,999. Official dealers and warranty providers regulate the retail price of Samsung mobile products in official warranty."
    var para1 = document.getElementById("para1");
    para1.innerHTML = text
}

function readMore2(){
    var text = "Samsung Galaxy Note 10 price in Pakistan starts at Rs. 169,999. This is for the base variant that comes with 8GB of RAM and 256GB of internal storage."
    var para2 = document.getElementById("para2");
    para2.innerHTML = text
}

function readMore3(){
    var text = "Samsung Galaxy S20 Plus price in Pakistan is Rs. 191,500. Dealers & warranty providers regulate the retail price of Samsung mobile products in official warranty.";
    var para3 = document.getElementById("para3");
    para3.innerHTML = text
}

// TASK 3:

function removeFunction(){
    var td = event.target.parentNode; 
    var tr = td.parentNode;
    tr.parentNode.removeChild(tr);
}

function editFunction(){
    var tr = document.getElementById('row1');
    tr.value = " ";
}

// "Chapter 52-57"

// TASK 1:

function functionClose(){
    var image = document.getElementById('image1').style.width = "300px";
}

function functionZoom(){
    var image = document.getElementById('image2').style.width = "300px";
}

function functionWidth(){
    var image = document.getElementById('image3').style.width = "300px";
}

var modal = document.getElementById("myModal");

var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
  modal.style.display = "none";
}

var modal = document.getElementById("myModal1");

var img = document.getElementById("myImg1");
var modalImg = document.getElementById("img011");
var captionText = document.getElementById("caption1");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
  modal.style.display = "none";
}

var modal = document.getElementById("myModal2");

var img = document.getElementById("myImg2");
var modalImg = document.getElementById("img012");
var captionText = document.getElementById("caption2");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
  modal.style.display = "none";
}

// TASK 2:

function functionZoomIn(){
    var paragraph = "Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus. Most people infected with the COVID-19 virus will experience mild to moderate respiratory illness and recover without requiring special treatment. Older people, and those with underlying medical problems like cardiovascular disease, diabetes, chronic respiratory disease, and cancer are more likely to develop serious illness."
    paragraph = document.getElementById('paragraph').style.fontSize = "40px";
}

function functionZoomOut(){
    var paragraph = "Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus. Most people infected with the COVID-19 virus will experience mild to moderate respiratory illness and recover without requiring special treatment. Older people, and those with underlying medical problems like cardiovascular disease, diabetes, chronic respiratory disease, and cancer are more likely to develop serious illness."
    paragraph = document.getElementById('paragraph').style.fontSize = "20px";
}

// "Chapter 58-67"

// "Question 1"

// TASK 1:

var a = document.getElementById('main-content')

// TASK 2:

var p = document.getElementsByTagName("p")
console.log(p)

// TASK 3:

var p = document.getElementsByTagName("p")
for(var i=0; i<p.length; i++){
    var content = p[i].innerHTML;
    console.log(content);
}

// TASK 4:

var a = document.getElementById('first-name');
var text = document.createTextNode("Alex");
a.appendChild(text)

// TASK 5:

var b = document.getElementById('last-name')
var text1 = document.createTextNode("Bank");
b.appendChild(text1)
var c = document.getElementById('email')
var text2 = document.createTextNode("alexbank@example.com");
c.appendChild(text2)

// "Question 2"

// TASK 1:

var a = document.getElementById('form-content')
console.log(a.nodeType);

// TASK 2:

var a = document.getElementById('lastName')
console.log(a.nodeType);

// TASK 3:

var a = document.getElementById('lastName')
var text = document.createTextNode("Bank");
a.appendChild(text)

// TASK 4:

var a = document.getElementById('main-content')
console.log(a.firstChild);
console.log(a.lastChild);

// TASK 5:

var a = document.getElementById('lastName')
console.log(a.previousSibling);
console.log(a.nextSibling);

// TASK 6:

var a = document.getElementById('email')
console.log(a.parentNode);
console.log(a.nodeType);