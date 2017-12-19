
/*
var i = 10;

while(i < 10) {
	document.write("Итерация № - " + i + "<br>");
	i++;
}
	
*/

/*
var i = 1;

do {
	//kod cikla
	if(i == 3) {
		break;
	}
	document.write("Итерация № do-while  - " + i + "<br>");
	i++;
}
while(i <= 10);



for(var i = 1; i <= 10; i++) {
	document.write(i);
	
	for(var j = 10; j > 0; j--) {
		document.write(j);
	}
	document.write("<br>");
}

*/
/*var i,j,summ;
summ = 1;
for(i = 0, j = 10; i < 10; i++, j--) {
	summ = summ + (i*j);
}
document.write(summ);
*/
//for in
/*
// 1.
var x = 104;
// 2.

123456789
246810
3
4 12
5
6
7
8
9
*/

// var i = 1;
// do{
// 	if (i == 6 ) {
// 		break;
// 	};
// 	document.write('Итерация do-while № - ' + i + '<br>');
// 	i++;
// }
// while(i <= 10);

// for (var i = 1; i < 15; i++) {
// 	if (i==3 || i ==4)
// 		continue;
// 	if (i==7) 
// 		break;
// 	document.write("цикл for Итерация № - " + i + '<br>');
// };
/*
for (var i =  1; i <= 10; i++) {
	document.write( "<b>" +i + ' - </b>');
	for (var a =  10; a >= 0; a--) {
		document.write( a+ ", " );
	}
	document.write( "<br>");
}
*/

// var i, a, summ; 
// summ = 1;
// for (i=0, a=10; i<10; i++, a--) {
// 	summ = summ + (i*a);
// };

// document.write(summ);


// 1.
var x = 1024;

while( x > 0) {
	x = x/2;
	if ( x%2 != 0 ) {
		continue;		
	}
	if (x == 0) {
			break;
	}
		document.write(x + "<br>");
};

// var sum=0;
//  for(var i = 0; i<=100; i++)
//   if(i%2==0)
//    sum+=i;
// alert(sum);



// var sum = 0, lim = 200 + 2;
// while(lim-=2) {
// 	sum += lim;
// }
// document.write(sum);


// 2.

// 123456789
// 246810
// 3
// 4 12
// 5
// 6
// 7
// 8
// 9


// var row = 1;

/*

<thead>
  <tr>
    <th>Абонент</th>
    <th>Оплачено</th>
    <th>Долг</th>
    <th>Дата</th>
    <th>Нал.Безнал</th>
    <th>Кому</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>15000</td>
    <td>5000</td>
    <td>-10000</td>
    <td>3.10.2015</td>
    <td>Нал</td>
    <td>Иванову И.И.</td>
  </tr>

*/

document.write('<table border="1px" style="text-align: center;">');                    
for (var row =  1; row <= 10; row++) {
	document.write('<tr> ');

	
	for (var line = 1; line <= 10; line++) {
		if (line == 1) {
			document.write('<td style="height:30px;width: 30px;background: #000;color: #fff;"><b>'+row + " </b></td>");
		}
		else if(row==1){
			document.write('<td style="height:30px;width: 30px;background: #000;color: #fff;"><b> '+line*row + " </b></td>");
		}
		else if (row == 2 || row == 4 || row == 6 || row == 8  || row == 10){
			document.write('<td style="height:30px;width: 30px;background: #999;color: #fff;"><b> '+line*row + " </b></td>");
		}
		else if (line > 1) {
			document.write('<td style="height:30px;width: 30px;"> '+line*row + " </td>");
		}			
		else if (line == 2 || line == 4 || line == 6 || line == 8  || line == 10){
			document.write('<td style="height:30px;width: 30px;background: #999;color: #fff;"><b> '+line*row + " </b></td>");
		}
		
	};
	document.write('</tr>');
};
document.write('</table>');  
