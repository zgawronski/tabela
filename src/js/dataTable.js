const newTable = (tableData) => {
  let table = document.getElementById('cars');
  let tableBody = document.getElementById('tbody');
  tableData.forEach(function (rowData) {
    let row = document.createElement('tr');
    let r = 1;
    r++;
    row.setAttribute('id', r);

    rowData.forEach(function (cellData) {
      let cell = document.createElement('td');
      cell.setAttribute('contenteditable', 'true');
      cell.appendChild(document.createTextNode(cellData));
      row.appendChild(cell);
      // let cell4 = row.insertCell(3);
      // cell4.outerHTML = `<th><input type='button' value="Usuń" onClick="DelTab(this)"></th>`;
    });

    tableBody.appendChild(row);
  });
};

newTable([
  ['Mercedes', 'AMG', '2021'],
  ['Ford', 'Mustang', '1967'],
  ['Fiat', '126p', '1985'],
]);

let tableInfo = Array.prototype.map.call(document.querySelectorAll('table tr'), function (tr) {
  return Array.prototype.map.call(tr.querySelectorAll('td'), function (td) {
    return td.innerHTML;
  });
});

console.log(tableInfo);
