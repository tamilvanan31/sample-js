function printValue() {
  document.getElementById("output").value = `[${
    document.getElementById("input-1").value
  }, ${document.getElementById("input-2").value}, ${
    document.getElementById("input-3").value
  }]`;
}

function copyToClipBoard() {
  navigator.clipboard.writeText(document.getElementById("output").value);
}
