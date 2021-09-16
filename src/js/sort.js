const Contains = (classArray, value) => {
  for (var i = 0; i < classArray.length; i++) if (classArray[i] === value) return true;
  return false;
};

const IntegerSort = (a, b) => {
  return parseInt(a) > parseInt(b);
};
function ValueSort(a, b) {
  return a > b;
}

const attachSorting = () => {
  var handlers = [
    ['SSort', ValueSort],
    ['ISort', IntegerSort],
  ];
  for (var i = 0, ths = document.getElementsByTagName('th'); (th = ths[i]); i++) {
    for (var h = 0; h < handlers.length; h++) {
      if (Contains(th.className.split(' '), handlers[h][0])) {
        th.columnIndex = i;
        th.order = -1;
        th.sortHandler = handlers[h][1];
        th.onclick = function () {
          sort(this);
        };
      }
    }
  }
};

const sort = (header) => {
  header.order *= -1;
  var table = header.parentNode.parentNode;
  for (var i = 0, th, ths = table.getElementsByTagName('th'); (th = ths[i]); i++)
    if (th != header) th.order = -1;
  var rows = table.getElementsByTagName('tr');
  for (var i = 1, tempRows = [], tr; (tr = rows[i]); i++) {
    tempRows[i - 1] = tr;
  }
  tempRows.sort((a, b) => {
    return (
      header.order *
      (header.sortHandler(
        a.getElementsByTagName('td')[header.columnIndex].innerHTML,
        b.getElementsByTagName('td')[header.columnIndex].innerHTML,
      )
        ? 1
        : -1)
    );
  });
  for (var i = 0; i < tempRows.length; i++) {
    table.appendChild(tempRows[i]);
  }
};

attachSorting();
