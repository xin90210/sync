
function arrTable(arr, element) {
    const table = document.createElement("table")
    element.appendChild(table)
    for (let i = 0; i < arr.length; i++) {
        const tr = document.createElement("tr")
        table.appendChild(tr)
        for (let j = 0; j < arr[i].length; j++) {
            const td = document.createElement("td")
            td.innerText = arr[i][j]
            tr.appendChild(td)
        }
    }
}

