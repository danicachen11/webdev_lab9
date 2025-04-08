function init() {
  var entrybutton = document.getElementById('entrybutton');

  function showAlert() {
    var input = document.getElementById('entryinput');
    var output = document.getElementById('textoutput');
    output.innerHTML = input.value;
    alert("Danica Chen: " + input.value);
  }

  entrybutton.addEventListener('click', showAlert);
	}

window.addEventListener('load', init);
