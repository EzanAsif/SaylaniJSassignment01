
//----------------------- CHAPTER 1 ----------------

//Question 2
// document.onload(alert("Error please enter a valid password "));

// Question 3
// document.onload(alert("Welcome to JS land \n happy Coding"))

// Question 4
// document.onload("Welcome to JS land");
// document.onload("Welcome to JS land");


//----------------------- CHAPTER 2 ----------------

// Question 1 

// var username;
// Question 2

// var myName = "Ezan Asif";
// Question 3

// var message = "Hello, World"
// alert(message);

// Question 4

// var studentName = "Ezan Asif";
// alert(studentName)
// var studentAge = 15;
// alert(studentAge)
// var studentCertification = "Certified Mobile Application Developement";
// alert(studentCertification)

//  Question 5
// var printing = "PIZZA \n PIZZ \n PIZ \n PI \n P";
// alert(printing)

// Question 6
// var email = "ezanasif1972@gmail.com";
// alert("My email address is " + email);

//  Question 7
// var book = "A smarter way to learn JavaScript";
// alert("I am tring to learn from Book " + book)

// Question 8
// document.write("Yah!!! I can write HTML content through JAVASCRIPT");

// Question 9
// var stylishString = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬" ;
// alert(stylishString)

// --------------------------- Chapter 3 -------------------------
// Question 1 
// var age= 15;
// alert("I am " + age + " Years old")

//Question 2
// let counter = 0;

// if (counter > -1 ) {
//     counter += 1;
//     alert("You have visited site " + counter + "times"); 
// }

// Question 3
// var birthyear = 2002;
// alert("My birth year is " + birthyear + "\n Data type of my declared cariable is number");
// document.write("My birth year is " + birthyear );
// document.write("<br />")
// document.write(" Data type of my declared cariable is number");


// Question 4 
// var visitorName = "John Doe";
// var prodTitle = "T-Shirts";
// var prodQty = 5;

// document.write(visitorName + " " + "ordered" + " " +prodQty + " " + prodTitle + " on XYZ Clothing Store");

// --------------------------- Chapter 4 -------------------------

// var one, two, three;
// illegal names
// var 1one;
// var !two;
// var let;
// var %ag;
// var 7msn;
// LEGAL NAMES
// var one1;
// var Two;
// var _1one;
// var $ijf;
// var notlet;

// document.write("<h1>Rules for naming JS variable</h1>");
// document.write("<br />");
// document.write("<br />");
// document.write("<br />");
// document.write("Variable names can only contain numbers, $ and _ . For Example : $my_1stVariable");
// document.write("<br />");
// document.write("Variable names must begin with a letter, $ or _ . For example : $name, _name or name");
// document.write("<br />");
// document.write("Variable names are case sensitive");
// document.write("<br />");
// document.write("Variable name shouldnot be a JS reserved KEYWORDS");
// document.write("<br />");

// --------------------------- Chapter 5 -------------------------
// Question 1
// SUM
// var firstnum = prompt("Enter First Number");
// var Secnum = prompt("Enter Second Number");
// var sum = firstnum + Secnum;
// document.write("Sum of " + firstnum + " and " + Secnum + " is " + sum);

// Question 2
// Subtraction
// var firstnum = prompt("Enter First Number");
// var Secnum = prompt("Enter Second Number");
// var sum = firstnum - Secnum;
// document.write("Subtraction of " + firstnum + " and " + Secnum + " is " + sum);

// Multiplication
// var firstnum = prompt("Enter First Number");
// var Secnum = prompt("Enter Second Number");
// var sum = firstnum * Secnum;
// document.write("Multiplication of " + firstnum + " and " + Secnum + " is " + sum);

// Division
// var firstnum = prompt("Enter First Number");
// var Secnum = prompt("Enter Second Number");
// var sum = firstnum / Secnum;
// document.write("Division of " + firstnum + " and " + Secnum + " is " + sum);

// Modulus
// var firstnum = prompt("Enter First Number");
// var Secnum = prompt("Enter Second Number");
// var sum = firstnum % Secnum;
// document.write("Modulus of " + firstnum + " and " + Secnum + " is " + sum);

// --Question 3
// var a;
// document.write("Value of variable declararion is " + a);
// document.write("<br />");
// a = 5;
// document.write("Initial Value " + a);
// document.write("<br />");
// a = 5+1;
// document.write("Value after increment is " + a);
// document.write("<br />");
// a = a+7;
// document.write("Value after addition is " + a);
// document.write("<br />");
// a = a-1;
// document.write("Value after decrement is " + a);
// document.write("<br />");
// a = a%3;
// document.write("The remainder is : " + a);
// document.write("<br />");

// Question 4
// var ticketCost = 600;
// document.write("Total cost to buy 5 tickets to a movie is " + ticketCost*5 + "PKR");

// Question 5
// var numer_table = prompt("Enter number you want table of ");

// for (let index = 1; index < 11; index++) {
//     let a = numer_table * index;
//     document.write(numer_table + " x " + index + " = " + a);
//     document.write("<br />")        
// }

// Question 6
// var celciusTemp = prompt("Enter temperature in Celsius : ");
// var farhenitTemp = (celciusTemp * (9/5)) + 32;
// document.write(celciusTemp + " C is " + farhenitTemp + " F") ;

// var farhenitTemp = prompt("Enter temperature in Farhenit : ");
// var celciusTemp = (farhenitTemp - 32) * (5/9);
// document.write(farhenitTemp + " F is " + celciusTemp + " C") ;

// Question 7
// var price1 = 650;
// var price2 = 100;
// var qty1 = 3;
// var qty2 = 7;
// var shippingCharges = 100;

// var total = (price1 * qty1) + (price2 * qty2) + shippingCharges;

// document.write("Price of item 1 is " + price1);
// document.write("<br />")
// document.write("Quantity of item 1 is " + qty1);
// document.write("<br />")
// document.write("Price of item 2 is " + price2);
// document.write("<br />")
// document.write("Quantity of item 2 is " + qty2);
// document.write("<br />")
// document.write("Shipping charges " + shippingCharges);
// document.write("<br />");
// document.write("Total cost of your order is " + total);

// Question 8
// var tmarks = 980;
// var obtmarks = 804;
// var percentage = (obtmarks/tmarks) *100;

// document.write("<h1>Marks Sheet</h1>")
// document.write("<br />")
// document.write("<br />")
// document.write("<br />")
// document.write("Total Marks : " + tmarks);
// document.write("<br />")
// document.write("Marks Obtainer : " + obtmarks);
// document.write("<br />")
// document.write("Percentage : " + percentage + "%");
// document.write("<br />")

// Question 9
// var usd = 10;
// var sryal = 25;

// var totalCurrency = (usd * 104.80) + (sryal * 28);
// document.write("<h1>Currency in PKR </h1>")
// document.write("<br />")
// document.write("<br />")
// document.write("Total Currency in PKR is : " + totalCurrency +"Rs");
// document.write("<br />")


// Question 10 
// var a = 2;
// a = (((a+5)*10)/2);
// document.write("Final value is : " + a);  

// Question 11
// var cYear = 2020;
// var bYear = 2002;
// var age = cYear - bYear ;
// document.write("<h1>Age Calculator </h1>")
// document.write("<br />")
// document.write("They are neither " + (age+5) + " or " + (age-5) + " x`years old");

// Question 12
// var radius = 20;
// var pi = 3.142;
// var circumference = 2*pi*radius;
// var area = Math.ceil(circumference);
// document.write(area)

// Question 13

// var favSnack = " Sandwhich";
// var age = 15;
// var maxAge = 69;
// var estAmnt = 2;

// var estSnaxx = (maxAge-age)*estAmnt;

// document.write("You will need " + estSnaxx + " to last you until the ripe old age of " + maxAge)


// --------------------------- Chapter 6 - 9 -------------------------


// var a = 10;
// document.write("Value of a is " + a);
// document.write("<br />")

// document.write("--------------------------")
// document.write("<br />")

// document.write("<br />")
// a = ++a;
// document.write("Value of ++a is : " + a);
// document.write("<br />")
// document.write("Now the Value of a is : " + a);
// document.write("<br />")


// document.write("Value of a++ is : " + a);
// document.write("<br />")
// a = a++;
// document.write("Now the Value of a is : " + a);
// document.write("<br />")

// document.write("Value of --a is : " + a);
// document.write("<br />")
// a = --a;
// document.write("Now the Value of a is : " + a);
// document.write("<br />")


// document.write("Value of a-- is : " + a);
// document.write("<br />")
// a = a--;
// document.write("Now the Value of a is : " + a);
// document.write("<br />")



// --------------------------- Chapter 9 - 11 -------------------------

// Question 1

// var city = prompt("Enter city name");
// var correctcityname = city.toLowerCase();
// console.log(correctcityname)
// if (correctcityname === "karachi"){
//     document.write("Welcome to the city of lights");
// }

// Question 2
// var gender = prompt("Enter gender");
// var correctgendername = gender.toLowerCase();

// if (correctgendername === "male"){
//     document.write("Good morning sir");
// }
// else if(correctgendername == "female"){
//     document.write("Good morning sir");
// }
// else{
//     document.write("Good morning");
// }



//Question 3
// var color = prompt("Enter signal color").toLowerCase();
// document.write("<table><tr><th>Signal color</th><th>Message</th></tr><tr><th>Red</th><th>Must stop</th></tr><tr><th>Yellow</th><th>Ready to move</th></tr><tr><th>Green</th><th>Move now</th></tr></table>")

// Question 4
// var fuel = prompt("Enter remaining fuel in car (in litres)");

// if (fuel < 0.25){
//     document.write("Please refill your car")
// }

// Question 5
// var a = 4;
// if (++a === 5){
//     alert("Given condition for variable a is true");
// } //alert message was shown
// var b = 82;
// if(b++ === 83){
//     alert("Given condition for b is true");
// }    //alert message was not shown
// var c = 12;
// if (c++===13){
//     alert("Condition 1 is true");
// }  //alert message was not shown
// if(c===13){
//     alert("Condition 2 is true")
// }//alert message was shown
// if(++c < 14){
//     alert("Condition 3 is true")
// }//alert message was not shown
// if(c===14){
//     alert("Condition 4 is true")
// }//alert message was shown

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");  //alert message was shown
// }

// if (true){
//     alert("True");
//     }  //alert message was shown
//     if (false){
//     alert("False");
//     }

// if("car" < "cat"){
//     alert("car is smaller than cat");
// } //alert message was shown

// Question 6

// var marks = prompt("Enter Marks obtained");
// var totalMarks = prompt("Enter total marks");
// var percentage = Math.ceil((marks/totalMarks) * 100);

// document.write("<h1>Marks Sheet</h1>");
// document.write("<br/>");
// document.write("<br/>");
// document.write("Total Marks : " + totalMarks);
// document.write("<br/>");
// document.write("Obtained Marks : " + marks);
// document.write("<br/>");
// document.write("Percentage : " + percentage + "%");
// document.write("<br/>");

// if (percentage >= 80){
//     document.write("Grade : A-one");
//     document.write("<br/>")
//     document.write("Remarks : Excellent");
// }
// else if (percentage >= 70){
//     document.write("Grade : A");
//     document.write("<br/>")
//     document.write("Remarks : Good");
// }
// else if (percentage >= 60){
//     document.write("Grade : B");
//     document.write("<br/>")
//     document.write("Remarks : You need to improve");
// }
// else if (percentage < 60){
//     document.write("Grade : F");
//     document.write("<br/>")
//     document.write("Remarks : Sorry");
// }

// Question no 7
// var secNo = 8;
// var guess = prompt("Guess the number : \n (hint : the number ranges from 1 to 10)")
// if ( guess == secNo){
//     document.write("Bingo! Correct answer");
// }

// else if ( guess == 9 ) {
//     document.write("Close enough to correct answer");
// }


// Question no 8 
// var number = 9;

// if (number%3 == 0){
//     alert("The number is divisible by 3")
// }

// Question 9 
// var inp = prompt("Enter number")

// if ( inp % 2  == 0 ){
//     document.write("The input is even");
// }
// else{
//     document.write("The input is odd");  
// }

// Question 10 

// var temp = prompt("Enter temp");

// if (temp > 40 ){
//     document.write("its too hot outside")
// }
// else if (temp > 30 ){
//     document.write("The weather today is normal")
// }
// else if (temp > 20 ){
//     document.write("Today's weather is cool " )
// }
// else if (temp > 10 ){
//     document.write("OMG! Today’s weather is so Cool. " )
// }

// Question 11 
// var firstNumber = parseInt(prompt("Enter first number : "));
// var SecondNumber = parseInt(prompt("Enter Second number : "));
// var operation = prompt("Enter Operation you wanna perform \n Choose from +, -, *, /, %");

// if (operation == "+"){
//     document.write("Answer is " + (firstNumber + SecondNumber));
// }
// if (operation == "-"){
//     document.write("Answer is " + (firstNumber - SecondNumber));
// }
// if (operation == "*"){
//     document.write("Answer is " + (firstNumber * SecondNumber));
// }
// if (operation == "/"){
//     document.write("Answer is " + (firstNumber / SecondNumber));
// }
// if (operation == "%"){
//     document.write("Answer is " + (firstNumber % SecondNumber));
// }


















