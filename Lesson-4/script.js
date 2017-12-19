/*
var a,b,c,y;

a = 50;
b = 200;
c = 10;
*/
/*
if(a == b)	{
	if(b == c) {
		alert("b=c"); 
	}
	else {
		/////
	}
}
else {
	alert("a не равно b"); 
}


if(a > b || b < c)	{
	alert("a > b but b < c");
}
else if(a == c){
	alert("a = c"); 
}
else if(b == c) {
	alert("b < c"); 
}
else {
	alert("NOT");
}

*/

/*
y = (a > b)	? true : false;
alert(y);		
*/	
/* 
var test = '10';

switch(test) {
	
	case "":
	case null:
		alert("null");
		///
		////
		/////
	break;
	
	default:
		alert("default");
		////
		///
		//
		///
	break;		
	
	case "string":
		alert("string");
	break;
	
	case '10':
		alert(10);
	break;
	
		
	
}	
*/
///
///
///
/*
var i = '10';
//+i;
//alert(i++);
var b = -i;
alert(typeof(b));
alert(b);	
*/

// var str1 = "NEW 2";
// var str2 = "NEW 2";
// if(str1 >= str2) {
// 	document.write("str1 больше str2");
// }
// else {
// 	document.write("str1 меньше str2");
// }

///

//

// var result = "25";
// var len = result.length;
// alert(result[len-1]);
var resultT;
var test = 10;
test = '10';
test = null;
var typeTest = typeof(test);

if( typeTest == 'number'){
	resultT = test++;
}
else if( typeTest =='string'){
	resultT = test='test == String';
}
else{
	resultT = 'test == null';
}
console.log(resultT);




var countDay = 11;
var e_m = 31 - countDay;
if (e_m<0) {
	console.log("Введенные не коректные данные");
};
res = String(e_m);
lastN = res[res.length-1];
console.log(lastN);

if ( e_m > 4 || e_m < 21) {
	e_m = e_m + ' дней';
}
else if( lastN == 1){
	e_m = e_m + ' день';
}
else if( lastN == 2 || lastN == 3 || lastN == 4){
	e_m = e_m + ' дня';
}
else{
	e_m = e_m + ' дней';
}

console.log("До конца месяца осталось " + e_m);