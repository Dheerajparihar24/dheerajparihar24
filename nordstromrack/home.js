let carousel = document.querySelector(".carousel");

let isDragging = true;
carousel.classList.add(dragging);

let dragging = (e) => {
    if (!isDragging) return;
    carousel.scrollLeft = e.pageX;
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);