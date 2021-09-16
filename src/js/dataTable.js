const newTable = (tableData) => {
  let table = document.getElementById('cars');
  let tableBody = document.getElementById('tbody');
  tableData.forEach(function (rowData) {
    let row = document.createElement('tr');
    let r = table.rows.length;
    let id = 'tbl' + r;
    row.setAttribute('id', id);

    rowData.forEach(function (cellData) {
      let cell = document.createElement('td');
      cell.setAttribute('contenteditable', 'true');
      cell.appendChild(document.createTextNode(cellData));
      row.appendChild(cell);
    });

    tableBody.appendChild(row);
  });
};

const tTable = JSON.parse(localStorage.getItem('Table'));

newTable(tTable);
