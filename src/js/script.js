function AddTab() {
  const newMarka = document.getElementById('marka');
  const newModel = document.getElementById('model');
  const newRok = document.getElementById('rok');
  let table = document.getElementById('cars');
  let x = table.rows.length;
  let id = 'tbl' + x;
  let row = table.insertRow(x);
  row.id = id;
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  let cell4 = row.insertCell(3);
  cell1.outerHTML = `<th> ${x}</th>`;
  cell2.innerHTML = newMarka.value;
  cell3.innerHTML = newModel.value;
  cell4.innerHTML = newRok.value;
  newMarka.value = '';
  newModel.value = '';
  newRok.value = '';
}
