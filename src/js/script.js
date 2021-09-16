const newMarka = document.getElementById('marka');
const newModel = document.getElementById('model');
const newRok = document.getElementById('rok');
let table = document.getElementById('cars');

// localStorage do przechowywania danych
const testTable = [
  ['Mercedes', 'AMG', '2021'],
  ['Ford', 'Mustang', '1967'],
  ['Fiat', '126p', '1985'],
];
if (localStorage == 0) localStorage.setItem('Table', JSON.stringify(testTable));

// add new rows
const AddTab = () => {
  let x = table.rows.length;
  let id = 'tbl' + x;
  if (newMarka.value.length == 0 || newModel.value.length == 0 || newRok.value.length == 0) {
    alert('wypełnij wszystkie pola!');
  } else {
    let row = table.insertRow(x);
    row.id = id;
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    cell1.outerHTML = `<td contenteditable="true">${newMarka.value}</td>`;
    cell2.outerHTML = `<td contenteditable="true">${newModel.value}</td>`;
    cell3.outerHTML = `<td contenteditable="true">${newRok.value}</td>`;
    cell4.outerHTML = `<th><input type='button' value="Usuń" onClick="DelTab(this)"></th>`;
    newMarka.value = '';
    newModel.value = '';
    newRok.value = '';

    let z = document.getElementById('cars').rows.length;
    let tableInfo = Array.prototype.map.call(document.querySelectorAll('table tr'), function (tr) {
      return Array.prototype.map.call(tr.querySelectorAll('td'), function (td) {
        return td.innerHTML;
      });
    });
    const localTable = tableInfo.splice(1, z);

    const chk = JSON.parse(localStorage.getItem('Table'));

    if (chk !== localTable) {
      localStorage.setItem('Table', JSON.stringify(localTable));
    }
  }
};

// delete rows
const DelTab = (r) => {
  let de = r.parentNode.parentNode.rowIndex;
  table.deleteRow(de);
};
