const boxes = document.querySelectorAll(".col")

window.addEventListener("scroll", () => {
  for (let i = 0; i < boxes.length; i++) {
    animate(boxes[i])
  }
})

function animate(item) {
  if (scrollY > item.offsetTop - window.innerHeight / 1.25) {
    item.classList.add("appear-on-scroll")
  } else {
    item.classList.remove("appear-on-scroll")
  }
}