/*
function myFoo() {
	alert("hello");
}
myFoo();
*/

//getSumm(4,5);
/*
function getSumm(a,b) {
	document.write(a+b);
}
*/
///getSumm(10,5);
//getSumm(1,2);
//getSumm(1000,2000);

//var func = function myFoo(a,b) {alert(a - b)};

/*
function getStr() {
	var str = prompt("Введите строку");
	
	if(!str) {
		getStr();
	}
	else {
		alert(str);
		return ;
	}
	
}
getStr();
*/

/*
function getSumm(a,b) {
	var result = a + b;
	return result;
}

function getSumm(a,b) {
	return a + b;
}
//var res = getSumm(12,34);

alert(getSumm(12,34));

*/

//var func = (function (a,b) {alert(a - b)}(10,5));

/*
function myFoo(array) {
	
	if(Array.isArray(array)) {
		var lastEl;
		for(var i = 0; i < array.length; i++) {
			document.write("Ячейка - " + i + "значение" + array[i] + "<br>");
			lastEl = array[i];
		}
		
		return lastEl;
	}
	else {
		alert("wrong parameter");
	}
	
	
}

var result = myFoo(12);
//alert(result);
*/

/*
function foo() {
	var array = arguments[];
	//document.write("<h1>" + arguments[0] + "</h1>");
	
	for(var i = 0; i < array.length; i++) {
			document.write("Ячейка - " + i + "значение " + array[i] + "<br>");
		}
}

foo("hello","hello2","hello3");
*/
/*
function foo(a,b) {
	document.write( a + b);
}
foo(12,5,23,45);
*/

/*
var a = 10;

function myfoo() {
	var a;
	alert(a);
}

myfoo();
alert(a);
*/
/*
function block() {
	/////kod 
	var x1,x2;
}
block();
*/
/*
(function() {
	//
	var x1,x2;
	alert("hello");
}())

*/
/*
function myfoo(x,y) {
	alert(x+y);
	
	function myfoo2() {
		return x-y ;
	}
	
	return myfoo2();
} 

myfoo(myfoo(10,4),1);
*/

//1
//5! = 1*2*3*4*5;

function factorial(x) {
	if ( x <= 1 ){
		return 1;
	}
	var result;
	result = x * factorial(x - 1);

	return result;
  // return (n != 1) ? n * factorial(n - 1) : 1;
  // return n != 1 factorial(n - 1) + '<br>';
}

document.write( factorial(10) + '<br><br><br>'); // 120

//2
//foo(12,324,45,1000....)
function myfoo(){
	var res_max = 0;
	for (var i = 0; i < arguments.length; i++) {
		if (arguments[i] > res_max ) {
			console.log(res_max + ' - test1');
			res_max = arguments[i];
			console.log(res_max + ' - test2');
		}		
	}
	return res_max;
}

var result = myfoo(12,42,13,2253,14,534,43,32,32,11);
document.write(result);

// function getSumm(a,b){
// 	document.write(a*b);
// }
// getSumm(20,30);
/*
function getStr(){
	var str = prompt('Введите строку');
	if (!str) {
		getStr();
		console.log(!str);
	}
	else{
		console.log(str);	
		console.log(!str);	
		return false; // bkb ghjcnj return;
	}
}*/
/*function getSumm(a,b){

}
getStr
*/

/*
function myFoo(array) {
	
	if(Array.isArray(array)) {
		var lastEl;
		for(var i = 0; i < array.length; i++) {
			document.write("Ячейка - " + i + "значение" + array[i] + "<br>");
			lastEl = array[i];
		}
		
		return lastEl;
	}
	else {
		alert("wrong parameter");
	}	
}

var result = myFoo([12,143,35345,345,433,111]);
*/


// function myFoo(array) {
	
// 		var lastEl;
// 		for(var i = 0; i < array.length; i++) {
// 			document.write("Ячейка - " + i + "значение" + array[i] + "<br>");
// 			lastEl = array[i];
// 		}
		
// 		return lastEl;

// }

// var result = myFoo([12,143,35345,345,433,111]);