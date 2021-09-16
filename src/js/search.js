const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
const tab = document.getElementById('cars');
const SearchTab = () => {
  const tr = tab.getElementsByTagName('tr');
  const filter = searchInput.value.toUpperCase();

  if (searchInput.value.length == 0) {
  } else {
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName('td')[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = '';
        } else {
          tr[i].style.display = 'none';
        }
      }
    }
    searchInput.value = '';
  }
};
