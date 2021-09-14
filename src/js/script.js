const AddTab = () => {
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
  let cell5 = row.insertCell(4);
  cell1.outerHTML = `<th> ${x}</th>`;
  cell2.innerHTML = newMarka.value;
  cell3.innerHTML = newModel.value;
  cell4.innerHTML = newRok.value;
  cell5.outerHTML = `<th><input type='button' value="Usuń" onClick="DelTab(this)"></th>`;
  newMarka.value = '';
  newModel.value = '';
  newRok.value = '';
};

const DelTab = (r) => {
  let x = r.parentNode.parentNode.rowIndex;
  document.getElementById('cars').deleteRow(x);
};

const ChangeTab = () => {
  const changer = document.querySelector('td');
  changer.addEventListener('click', (e) => {});
};
