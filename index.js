function toggle(togleIndex) {
  var div = document.getElementsByClassName("Divide");

  var div2 = document.getElementsByClassName("myDiv");

  Array.prototype.forEach.call(div2, function (e, index) {
    if (index === togleIndex) {
      // chnage icon
      e.getElementsByTagName("i")[0].classList.toggle("fa-minus");
    }
  });

  Array.prototype.forEach.call(div, function (element, index) {
    if (index === togleIndex) {
      // chnage icon
      console.log(element);
      if (element.style.display === "none") {
        element.style.display = "block";
      } else {
        element.style.display = "none";
      }
    }
  });
}
