function convertToWord() {
    const fileInput = document.getElementById('pdfFile');
    const file = fileInput.files[0];
  
    if (file && file.type === 'application/pdf') {
      const formData = new FormData();
      formData.append('pdfFile', file);
  
      // Replace 'convert.php' with the server-side script URL or API endpoint
      fetch('convert.php', {
        method: 'POST',
        body: formData
      })
      .then(response => response.text())
      .then(data => {
        displayOutput(data);
      })
      .catch(error => {
        console.error('Conversion failed:', error);
      });
    } else {
      console.error('Please select a PDF file.');
    }
  }
  
  function displayOutput(text) {
    const outputContainer = document.querySelector('.output-container');
    const outputText = document.getElementById('outputText');
    const downloadLink = document.getElementById('downloadLink');
  
    outputText.textContent = text;
    downloadLink.href = 'data:application/octet-stream,' + encodeURIComponent(text);
    downloadLink.download = 'converted.docx';
  
    outputContainer.style.display = 'block';
  }
  