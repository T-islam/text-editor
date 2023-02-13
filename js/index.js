const textBoxValue = document.getElementById("textbox");

function eventListner(id, className) {
  document.getElementById(id).addEventListener("click", function () {
    textBoxValue.classList.toggle(className);
  });
}

// function for bold
eventListner("bold-btn", "bold");

// function for Italic
eventListner("italic", "italic");

// function for UnderLine
eventListner("underLine", "underLine");

// function for Align Left
eventListner("align-left", "alignLeft");

// function for Align Center
eventListner("align-center", "alignCenter");

// function for Align Right
eventListner("align-right", "alignRight");

// function for Uper Case
eventListner("UperCase", "upperCase");

/// added font Size

document.getElementById("fontSize").addEventListener("click", function () {
  const fontValue = document.getElementById("fontSize").value;
  textBoxValue.style.fontSize = `${fontValue}px`;
});

/// added font color

document.getElementById("color").addEventListener("blur", function () {
  const presentColor = document.getElementById("color").value;
  textBoxValue.style.color = presentColor;
});
