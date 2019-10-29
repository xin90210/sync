var items = [
    [1, 2],
    [3, 4],
    [5, 6]
]

function arrTable(arr, domPointer) {
    document.getElementById('domPointer').innerHTML = 

    function tablica(arr) {
        document.write("<table>");
    for ( var i = 0; i < arr.length; i++) {
        document.write("<tr>");
        for ( var j = 0; j < arr[i].length; j++) {
            document.write("<td>" + arr[i][j] + "</td>");
                }
            document.write("</tr>");
            }
        document.write("</table>");
        }
        tablica(arr);
}

arrTable(items, sample)