
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


// // Task 1
// var a = prompt("Enter value of a:");
// document.write("<br><br>Result:");
// document.write("<br>The value of a is: ",a);
// document.write("<br><br>............................");
// document.write("<br><br>The value of ++a is: ",++a);
// document.write("<br>The value of a is: ",a);
// document.write("<br><br>The value of a++ is:",a++);
// document.write("<br>The value of a is:",a);
// document.write("<br><br>The value of --a is: ",--a);
// document.write("<br>The value of a is: ",a);
// document.write("<br><br>The value of a-- is: ",a--);
// document.write("<br>The value of a is: ",a);

// // Task 2
// var a = 2, b = 1;
// document.write("<br><br>a is ",a);
// document.write("<br>b is ",b);
// var result = --a - --b + ++b + b--;
// // --a = 1
// // --a - --b = 1
// // --a - --b + ++b = 2
// // --a - --b + ++b + b-- = 3
// document.write("<br>Result is ",result);


// // Task 3

// var name = prompt("Enter your name: ");
// alert("Hello " + name + " Welcome to our site!!!")


// // Task 4

// var no = prompt("Enter a number:");
// if(no === ""){
//     no = 5
// }
// for(var i = 1 ; i<11; i++){
//     document.write("<br>" + no + "   x    " + i + "    =    " + "    " + (no*i))
// }


// // Task 5


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


// ************************************** Chapter 12-13 ******************************//

// // Task 1
// var letter = prompt("Enter a letter");
// if("abcdefghijklmnopqrstuvwxyz".indexOf(letter) > -1){
//     alert("This is lowercase")
// }else if("ABCDEFGHIJKLMNOPQURSTUVWXYZ".indexOf(letter) > -1){
//     alert("This is uppercase")
// }



// // Task 2
// var no1 = parseInt(prompt("Enter 1st number"));
// var no2 = parseInt(prompt("Enter 2nd number"));
// if(no1> no2){
//     alert("1st number is greater");
// }else if(no2 > no1){
//     alert("2nd number is greater");
// }else if(no1 === no2){
//     alert("Both numbers are same");
// }

// // Task 3
// var number = prompt("Enter a number");
// if (number > 0){
//     alert("number is positive")
// }else if(number < 0){
//     alert("number is negative")
// }else if(number === 0){
//     alert("number is equal to zero")
// }

// // Task 4
// var str = prompt("Enter a letter").toLowerCase();
// if("aeiou".indexOf(str)> -1){
//     alert("True")
// }else{
//     alert("False")
// }

// // Task 5
// var pas = "12345";
// var pas1 = prompt("Enter pasword 1");
// if (pas1 === pas){
//     alert("Correct! The password you entered matches the original password")
// }else{
//     alert("Incorrect Pasword")
// }

// // Task 6
// var greeting;
// var hour = 13;
// if(hour < 18){ 
//     greeting = "Good day";
// }
// else{
//      greeting = "Good evening";
// }

// // Task 7
// var time = parseInt(prompt("Enter time in 24hr format"));
// if(time >= 0000 && time < 1200){
//     alert("Good Morning")
// }else if(time >= 1200 && time < 1700){
//     alert("Good Afternoon")
// }else if(time >= 1700 && time < 2100){
//     alert("Good Evening")
// }else if(time >= 2100 && time < 2359){
//     alert("Good Night")
// }





// *********************************** Chapter 14-16 ****************************** //

// // Task 1
// var students_list = new Array();

// // Task 2
// var students_list = new Array();

// // Task 3
// var string_array = ['a' , 'b' , 'c'];

// // Task 4
// var number_array = [1,2,3];

// / Task 5
// var bolean_array = [ true, false, false, true];

// // Task 6
// var mixed_array = ['a', 1, 1.1, true];

// // Task 7
// var degree = ['SSC', 'HSC', 'BSC', 'BS', 'BCOM', 'MS', 'M.Phill', 'Ph.D'];
// for(i = 0; i< degree.length; i++){
    // document.write("<br>",i+1,") ",degree[i]);
// }

// // Task 8
// var name_array = ["Muhammad asad", "Shayan", "Ezan"];
// var score_array = [400,350,450];
// var percent_array = [(400/500)*100, (350/500)*100, (450/500)*100];
// for(i = 0; i < name_array.length; i++){
//     document.write("<br><br>Score of ",name_array[i], " is ", score_array[i] , ". Percentage is: ", percent_array[i]);
// }

// // Task 9
// var color = ['red', 'green', 'blue'];
// document.write("<br>The array before addition");
// for(i = 0; i < color.length; i++){
//     document.write('<br>',color[i])
// }

// var color_first = prompt("Enter color to put in begining");
// document.write("<br>The array after adding color in beginning");
// color.unshift(color_first);
// for(i = 0; i < color.length; i++){
//     document.write('<br>',color[i])
// }

// var color_last = prompt("Enter color to put in begining");
// color.push(color_first);
// document.write("<br>The array after adding color in end");
// for(i = 0; i < color.length; i++){
//     document.write('<br>',color[i]);
// }

// document.write("<br>The array after adding more colors");
// color.unshift("black", 'white', 'pink');
// for(i = 0; i < color.length; i++){
//     document.write('<br>',color[i]);
// }


// document.write("<br>The array after deleting first color");
// color.splice(0,1)
// for(i = 0; i < color.length; i++){
//     document.write('<br>',color[i]);
// }




// // Task 10
// var marks = [200,400,100,300];
// document.write("<br>Score of students: ")
// for(i = 0; i < marks.length; i++){
//     document.write(marks[i] + "  ")
// }

// marks.sort();

// document.write("<br>Ordered Scores of Students: ");
// for(i = 0; i < marks.length; i++){
//     document.write(marks[i] + "  ")
// }

// // Task 11
// var cities = ['Karachi', 'Lahore', 'Islamabad', 'Quetta', 'Peshawar'];
// document.write("<br>List of cities: ")
// for(i = 0; i < cities.length; i++){
//     document.write(cities[i] + " ");
// }

// document.write("<br>Selected cities: " ,cities.slice(2,4))

// // Task 12
// var list = ['This',"is",'my','cat'];
// document.write("<br>Array<br>",list);
// document.write("<br>String<br>",list.join(" "));

// // Task 13
// var devices = [];
// devices.unshift('keyboard');
// devices.unshift('mouse');
// devices.unshift('monitor');
// devices.unshift('printer');

// document.write("<br>Devices");
// document.write("<br>",devices);

// for(i = 0 ; i < devices.length; i++){
//     document.write("<br>Out:<br>",devices[i]);
// }

// // Task 14
// var devices = [];
// devices.push('keyboard');
// devices.push('mouse');
// devices.push('monitor');
// devices.push('printer');

// document.write("<br>Devices");
// document.write("<br>",devices);

// for(i = 0 ; i < devices.length; i++){
//     document.write("<br>Out:<br>",devices[i]);
// }

// // Task 15
// solution at index.html page


// ********************************* Chapter 17-20 ***************************** //
// // Task 1
// var array_0f_array = [[] , [] , [] , []];

// // Task 2
// var array = [[0,1,2,3] , [1,0,1,2] , [2,1,0,1]];
// document.write("<br>")
// for(i = 0; i < array.length; i++){
//     for(j = 0; j < array[i].length; j++){
//         document.write(array[i][j]," ");
//     }
//     document.write("<br>")
// }

// // Task 3
// for(i = 0; i<11; i++){
//     document.write("<br>",i, "<br>");
// }

// // Task 4
// var number = parseInt(prompt("Enter number for multiplicaiton"));
// var length = parseInt(prompt("Enter length of multiplicaiton table"));

// for(i = 1; i< (length+1);i++){
//     document.write("<br>" + number + "   x    " + i + "    =    " + "    " + (number*i))
// }

// // Task 5
// var fruits = ['apple' , 'banana' , 'mango' , 'orange' , 'strawerry'];
// for(i = 0; i < fruits.length ; i++){
    // document.write(fruits[i], "<br>")
// }
// for(i = 0; i < fruits.length ; i++){
    // document.write("Element at index ", i , " is " , fruits[i] , "<br>");
// }

// // Task 6
// document.write("Counting<br>");
// for(i = 1; i < 16; i++){
//     document.write(i," ")
// }

// document.write("<br>Reverse Counting<br>");
// for(i = 10; i > 0; i--){
//     document.write(i," ");
// }

// document.write("<br>Even<br>");
// for(i = 0; i < 21; i++){
//     if(i%2 === 0){
//         document.write(i," ")
//     }
// }

// document.write("<br>Odd<br>");
// for(i = 0; i < 21; i++){
//     if(i%2 !== 0){
//         document.write(i," ")
//     }
// }

// document.write("<br>Series<br>");
// for(i = 0; i < 11; i++){
//     document.write(2*i,"K ")
// }

// // Task 7
// var items = ['cake' , 'apple pie' , 'cookie' , 'chips' , 'patties'];
// var order = prompt("Welcome to pre to pro bakery! What do you want to order");
// if(items.indexOf(order) > -1){
//     document.write("<br><br>",order," is available at index", items.indexOf(order), " in our bakery")
// }else{
//     document.write("<br><br>We are sorry ", order, " is not available in our bakery")
// }

// // Task 8
// var num = [24, 53, 78, 91, 12];
// document.write("<br>Array items: ", num);
// num.sort();
// document.write("<br>Largest number: ", num[num.length - 1]);

// // Task 9
// var num = [24, 53, 78, 91, 12];
// document.write("<br>Array items: ", num);
// num.sort();
// document.write("<br>Smallest number: ", num[0]);

// // Task 10
// document.write("<br>")
// for(i = 0; i < 101; i++){
//     if(i%5 === 0){
//         document.write(i,", ")
//     }
// }
















