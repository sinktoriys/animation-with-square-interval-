function animation() {
  let square = document.querySelector(".square");
  let position = 0;

  let intervalId = setInterval(animate, 15);

  function animate() {
    if (position === 250) {
      clearInterval(intervalId);
    } else {
      position++;
      square.style.left = position + "px";
      square.style.top = position + "px";
    }
  }
}
document.querySelector("button").addEventListener("click", animation);
// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(response => response.json())
// .then(json => console.log(json))
