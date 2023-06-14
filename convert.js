function convertLength() {
    var inputLength = parseFloat(document.getElementById('input-length').value);
    var inputUnit = document.getElementById('input-unit').value;
    var outputUnit = document.getElementById('output-unit').value;
    var outputLength = 0;
  
    // Conversion formulas
    if (inputUnit === 'mm') {
      if (outputUnit === 'cm') {
        outputLength = inputLength / 10;
      } else if (outputUnit === 'm') {
        outputLength = inputLength / 1000;
      } else if (outputUnit === 'km') {
        outputLength = inputLength / 1000000;
      } else {
        outputLength = inputLength;
      }
    } else if (inputUnit === 'cm') {
      if (outputUnit === 'mm') {
        outputLength = inputLength * 10;
      } else if (outputUnit === 'm') {
        outputLength = inputLength / 100;
      } else if (outputUnit === 'km') {
        outputLength = inputLength / 100000;
      } else {
        outputLength = inputLength;
      }
    } else if (inputUnit === 'm') {
      if (outputUnit === 'mm') {
        outputLength = inputLength * 1000;
      } else if (outputUnit === 'cm') {
        outputLength = inputLength * 100;
      } else if (outputUnit === 'km') {
        outputLength = inputLength / 1000;
      } else {
        outputLength = inputLength;
      }
    } else if (inputUnit === 'km') {
      if (outputUnit === 'mm') {
        outputLength = inputLength * 1000000;
      } else if (outputUnit === 'cm') {
        outputLength = inputLength * 100000;
      } else if (outputUnit === 'm') {
        outputLength = inputLength * 1000;
      } else {
        outputLength = inputLength;
      }
    } else if (inputUnit === 'ft') {
      if (outputUnit === 'in') {
        outputLength = inputLength * 12;
      } else {
        outputLength = inputLength;
      }
    } else if (inputUnit === 'in') {
      if (outputUnit === 'ft') {
        outputLength = inputLength / 12;
      } else {
        outputLength = inputLength;
      }
    }
  
    document.getElementById('output-length').textContent = outputLength.toFixed(2) + ' ' + outputUnit;
  }
  