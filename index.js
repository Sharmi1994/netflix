function toggle(togleIndex) {
  var div = document.getElementsByClassName("Divide");

  Array.prototype.forEach.call(div, function (element, index) {
    console.log(element);
    if (index === togleIndex) {
      if (element.style.display === "none") {
        element.style.display = "block";
      } else {
        element.style.display = "none";
      }
    }
  });
}
