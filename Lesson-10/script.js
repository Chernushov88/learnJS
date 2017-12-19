var now = new Date();
/*
var new_year = new Date(2014,0,1,1,1,1);

var number_days = new_year - now;

alert(parseInt(number_days / (1000*60*60*24)));
*/
//document.write(now);

// document.write(now.toLocaleString());
// document.write("<br>");
// document.write(Date.UTC());
// document.write("<br>");
//document.write(now.toLocaleDateString());
//document.write(now.toLocaleTimeString());

//document.write(now.getDate());
//document.write(now.getMonth());

/*
var number_m = now.getMonth();
var monts = ["январь","февраль","март","апрель","май","июнь","июль","август","сентябрь","октябрь","ноябрь","декабрь"];

document.write(monts[number_m]);
*/
/*
var day_n = now.getDay();
var days = ["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"];
document.write(days[day_n]);
*/

/*
now.setFullYear(1990);
now.setMonth(9);
now.setDate(10);
now.setHours(10);
now.setMinutes(59);
now.setMilliseconds(100);

now.setTime(10000000345345);
*/
// document.write(now.getFullYear());
// document.write("<br>");
// var number_m = now.getMonth();
// var monts = ["январь","февраль","март","апрель","май","июнь","июль","август","сентябрь","октябрь","ноябрь","декабрь"];


// document.write(monts[number_m]);
// document.write("<br>");

// var day_n = now.getDay();
// var days = ["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"];
// document.write(days[day_n]);
// document.write("<br>");
// document.write(now.getDate());
// document.write("<br>");
// document.write(now.getHours());
// document.write(":");
// document.write(now.getMinutes());
// document.write(":");
// document.write(now.getSeconds());
// document.write(":");
// document.write(now.getMilliseconds());
// document.write("<br>");
// document.write(now.getTime());

// function myfoo() {
// 	alert("hello this is myfoo");
// }

// setTimeout(myfoo,2000);

var now = new Date();


document.write(now.toLocaleString() + ' --- 1 toLocaleString <br>');
document.write(now.toLocaleDateString() + ' --- 2 toLocaleDateString <br>');
document.write(now.toLocaleTimeString() + ' --- 3 toLocaleTimeString <br>');

document.write(now.getDate() + ' --- 4 getDate <br>');
document.write(now.getMonth() + ' --- 5 getMonth <br>');

var number_m = now.getMonth();
var monts = ["январь","февраль","март","апрель","май","июнь","июль","август","сентябрь","октябрь","ноябрь","декабрь"];

document.write(monts[number_m]+ ' --- 6 getMonth <br>');

document.write(now.getDay() + ' --- 7 getDay <br>');
var get_day = now.getDay();
var days = ["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"];
document.write(days[get_day] + ' --- 8 getDay <br><br><br>');

now.setFullYear(1990);
now.setMonth(9);
now.setDate(25);
now.setHours(30);
now.setMinutes(59);
now.setTime(8989898989100);

document.write(now.getFullYear() + ' --- 9 getFullYear <br>');
document.write(now.getYear() + ' --- 10 getYear <br>');
var number_m = now.getMonth();
var monts = ["январь","февраль","март","апрель","май","июнь","июль","август","сентябрь","октябрь","ноябрь","декабрь"];
document.write(monts[number_m]+ ' --- 6 getMonth <br>');
document.write(now.getDate() + ' --- 4 getDate <br>');
document.write(now.getHours() + ' --- 11 getHours <br>');
document.write(now.getMinutes() + ' --- 12 getMinutes <br>');
document.write(now.getSeconds() + ' --- 13 getSeconds <br>');
document.write(now.getMilliseconds() + ' --- 14 getMilliseconds <br>');
document.write(now.getTime() + ' --- 15 getTime <br><br><br>');




var now = new Date(2017,0,1,1,1,1);

document.write(now.getFullYear() + ' --- 9 getFullYear <br>');
var number_m = now.getMonth();
var monts = ["январь","февраль","март","апрель","май","июнь","июль","август","сентябрь","октябрь","ноябрь","декабрь"];
document.write(monts[number_m]+ ' --- 6 getMonth <br>');
document.write(now.getDate() + ' --- 4 getDate <br>');
document.write(now.getHours() + ' --- 11 getHours <br>');
document.write(now.getMinutes() + ' --- 12 getMinutes <br>');
document.write(now.getSeconds() + ' --- 13 getSeconds <br>');
document.write(now.getMilliseconds() + ' --- 14 getMilliseconds <br>');
document.write(now.getTime() + ' --- 15 getTime <br><br><br>');