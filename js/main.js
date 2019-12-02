const panels = document.querySelectorAll('.panel');

// Toggle class to open after click
function toggleOpen() {
    this.classList.toggle("open");
}

// Toggle class to open-active after transition
function toggleActive() {
    this.classList.toggle("open-active")
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive))