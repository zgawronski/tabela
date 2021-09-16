// localStorage do przechowywania danych
const warehouse = () => {
  const testTable = [
  ['Mercedes', 'AMG', '2021'],
  ['Ford', 'Mustang', '1967'],
  ['Fiat', '126p', '1985'],
];

if (localStorage.getItem('Table') === null)
  localStorage.setItem('Table', JSON.stringify(testTable));
}

warehouse()

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

    let cell4 = row.insertCell();
    cell4.outerHTML = `<th><input type='button' value="Usuń" onClick="DelTab(this)"></th>`;
    tableBody.appendChild(row);
  });
};

const tTable = JSON.parse(localStorage.getItem('Table'));

newTable(tTable);
