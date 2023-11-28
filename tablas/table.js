var i, j;
var filas = Number(prompt("Introduce el numero de filas"));
var colum = Number(prompt("Introduce el numero de columnas"));
   
var res = filas * colum;
   
document.write("<table border>");
   
    for (i = 0; i < filas; i++) {
        document.write("<tr>");
           
        for (j = 0; j < colum; j++) {
            document.write("<td>");
            document.write(res);
            res --;
            document.write("</td>");
        }
   
        document.write("</tr>");
    }
        
document.write("</table>");