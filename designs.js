// Select color input
// Select size input
// When size is submitted by the user, call makeGrid()
let drawGrid = $('input[type="submit"]');
function makeGrid() {
  // Select size input
  let canvas, height, width, row, cell, color, td, tr;

  canvas = $('#pixelCanvas');
  height = $('#inputHeight').val();
  width = $('#inputWidth').val();
  td='<td></td>';
  tr= '<tr></tr>';



  canvas.children().remove()

  for (i = 0; i<height; i++) {
    canvas.append(tr);
  }
  row = $('tr');

  for (j = 0; j<width; j++) {
    row.append(td);
  }
//find cell
  cell = canvas.find('td');
  // set cell color
  cell.on('click', function () {
    color = $('#colorPicker').val();
    $(this).attr('bgcolor', color);
  });

}

// call make grid on submit
drawGrid.click(function (e) {
  e.preventDefault();
  makeGrid();
});
