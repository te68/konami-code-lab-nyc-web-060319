
// alert("complete")
const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

let copy = codes.slice(0)

function init() {
  console.log(copy)
  console.log(copy.length === 0)

if (copy.length === 0) {
  console.log("done")
  debugger
  alert("complete")
  copy = codes.slice(0)
}
}

document.addEventListener('keydown', function(event) {
  if (event.key === copy[0]) {
    copy.splice(0, 1)
    console.log("next")
    return init()
    }
  else {
    copy = codes.slice(0)
  }
})
