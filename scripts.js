document.getElementById('fileInput').addEventListener('change', function () {
  var fileInput = document.getElementById('fileInput');
  var fileNameDisplay = document.getElementById('fileNameDisplay');

  if (fileInput.files.length > 0) {
      var fileName = fileInput.files[0].name;
      alert('Selected file: ' + fileName);
  }
});