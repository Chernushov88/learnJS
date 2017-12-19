/*
var a,b;
a = 8;
b = 10;
var array = [1,10,5,20,a,b,a + b,,3,5];
var array2 = ["hello","world",2,3,4,true,];
var array3 = [,,];

var array4 = new Array(10,23,34,45,);
var array5 = new Array(5);"hello"

array[1] = 'new';
array["one"] = "hello world";
document.write(array["one"]);
*/

/*
var a = [1,"hello",3,3,4,76,7,8];
/*
for(var i = 0; i < a.length; i++) {
	document.write(a[i] + "<br>");
}


for(var index in a) {
	document.write("Ячейка массива - " + index + " - значение данной ячейки - " + a[index] + "<br>");
}
*/
/*
var arr = [1,2,3,4,["hello","world"]];
document.write(arr[4][1]);
*/
/*
var array = ["мандарин","апельсин","груша","банан"];

//document.write(array.join(" | --- |"));
//array.reverse();
//document.write(array);
*/

/*
var array = [100,200,1,2,11,111,22,222,3,4,5,];
array.sort(
		function (a,b) {
			///kod
			if(a < b) {
				return -1;
			}
			if (a > b) {
				return 1;
			}
			return 0;
		}
	);
document.write(array);
*/
/*
var arr = ["a","b","c"];
var a = arr.concat("d","e","f",[1,2,3,4]);
document.write(a);
*/
/*
var arr = ["a","b","c","d","e","f"];
document.write(arr.slice(-3,-2));

*/
/*
var arr = ["a","b","c","d","e","f"];
//alert(arr.splice(2,3));
arr.splice(2,0,"hello","world",34,45,566,67,[2,3,4])
document.write(arr);
*/

/*
var arr = ["a","b","c","d","e","f"];
arr.push(1,2,3);
alert(arr.push(1,2,3));
//alert(arr.pop());
document.write(arr);
*/
/*
var arr = ["a","b","c","d","e","f"];
arr.unshift(1);
arr.unshift(1);

alert(arr.shift());
*/
/*
var arr = ["a","b","c","d","e","f"];
//delete arr[1];
if(1 in arr) {
	alert(arr[1]);
}
else {
	alert("NOT");
}
document.write(arr);
*/
/*
arr = 1;
if (Array.isArray(arr)) {
	alert("Aray");
}
else {
	alert("FALSE");
}
*/



var array = ["мандарин","апельсин","груша","банан"];
document.write(array+' - 1 <br>');
document.write(array.join()+' - 2 <br>');
document.write(array.join(" | -+- |")+' - 3 <br>');
array.reverse();
document.write(array.join(" | -+- |")+' - 4 <br>');
document.write(array+' - 5 <br>');
array.sort();
document.write(array+' - 6 <br>');
var array = [100,200,1,2,11,111,22,222,3,4,5,];
document.write(array+' - 7 <br>');
array.sort();
document.write(array+' - 8 <br>');
var array = [100,200,1,2,11,111,22,222,3,4,5,];
array.sort(
		function (a,b) {
			///kod
			if(a < b) {
				return -1;
			}
			if (a > b) {
				return 1;
			}
			return 0;
		}
	);
document.write(array+' - 9 <br>');

var arr = ["a","b","c"];
var a = arr.concat("d","e","f",[1,2,3,4]);
document.write(a+' - 10 <br>');

var arr = ["a","b","c","d","e","f"];
document.write(arr.slice(2,4)+' - 11 <br>');
document.write(arr.slice(2)+' - 12 <br>');
document.write(arr.slice(-4,-2)+' - 13 <br>');

var arr2 = ["a","b","c","d","e","f"];
arr2.splice(3,1,"hello","world",34,45,566,67,[2,3,4])
document.write(arr2+' - 14 <br>');
// var arr = [1,2,3,4,["hello","world"]];
// document.write(arr[4][1]);
var arr3 = ["a","b","c","d","e","f"];
arr3.push(1,2,3);
// alert(arr3.pop());
// alert(arr3.push(10,20,30));
document.write(arr3+' - 15 <br>');

var arr = ["a","b","c","d","e","f"];
arr.unshift(1);
arr.unshift(1);
//alert(arr.unshift(100));
document.write(arr+' - 16 <br>');
arr.shift();
document.write(arr+' - 17 <br>');

var arr = ["a","b","c","d","e","f"];
//delete arr[1];
document.write(arr+' - 18 <br> ');
if(1 in arr) {
	// alert(arr[1]);
}
else {
	// alert("NOT");
}
document.write(arr+' - 19 <br><br><br><br><br>');


// arr = 1;
if (Array.isArray(arr)) {
	// alert("Aray");
}
else {
	// alert("FALSE");
}

// var array=new Array(10);
// document.write("<table border='1px'>");

// for (var i = 1 ; i <= array.length; i++) {
// 	document.write("<tr>");
// 	for (var j =  1; j <= array.length;  j++) {		
			
// 		document.write("<td>" + i*j + "</td>");
// 	}
// 	document.write("</tr>");
// }
// document.write("</table> <br><br><br><br><br>");


var array = new Array(10);
for (var i = 1 ; i < array.length; i++) {
	array[i] = new Array(10);
	document.write(array[i]+'<br>');
}
document.write("<table border='1px'>");
for (var j  = 1 ; j < 10; j ++) {
	document.write("<tr>");
	for(var n= 1; n < array[j].length; n ++){
		array[j][n] = j*n;
		document.write("<td>" + j*n+ "</td>");
	}
	document.write("</tr>");
}
document.write("</table> <br><br><br><br><br>");
document.write(array[5][4]);
//alert(array[5][4]);