export function setButtonVisualState(button, isPlaying, useActive) {
    const playIcon = button.querySelector(".play");
    const pauseIcon = button.querySelector(".pause");
    if (isPlaying) {
        playIcon.style.display = "none";
        pauseIcon.style.display = "block";
        if (useActive) button.classList.add("active");
    } else {
        playIcon.style.display = "block";
        pauseIcon.style.display = "none";
        if (useActive) button.classList.remove("active");
    }
}
