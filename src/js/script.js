const newMarka = document.getElementById('marka');
const newModel = document.getElementById('model');
const newRok = document.getElementById('rok');
let table = document.getElementById('cars');
const AddTab = () => {
  let x = table.rows.length;
  let id = 'tbl' + x;
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
};

const DelTab = (r) => {
  let de = r.parentNode.parentNode.rowIndex;
  table.deleteRow(de);
};

// const ChangeTab = (r) => {
//   let ed = r.parentNode.parentNode.cellIndex;
//   ed.innerHTML = '<td><input type="text" id="r" /></td>';
// };
