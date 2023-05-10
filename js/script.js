const createTable = (line, column ) => {
    const table = document.createElement('table')
    for (let i = 0; i < line; i++) {
        const tr = document.createElement('tr')
        for (let j = 1; j <= column; j++) {
            const td = document.createElement('td');
            td.textContent = i * line + j;
            tr.appendChild(td);
            td.style.border  = '1px solid black';
            td.style.padding = '10px';
        }
        table.appendChild(tr);
    }
    table.style.borderCollapse = 'collapse';
    table.style.textAlign = 'center';
    document.body.appendChild(table);
}
createTable(10, 10);