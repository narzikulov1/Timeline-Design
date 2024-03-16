
const modalTitle = document.getElementById("title");
const modalPlaceholder = document.getElementById("matn");
const saveModal = document.getElementById("save");
const timelineBox = document.getElementById("timeline-card");

// saveModal.addEventListener("click")

function createTimeline() {
    let title = document.createElement("h3");
    title.innerHTML = modalTitle.value;
    let placeholder = document.createElement("p");
    placeholder.innerHTML = modalPlaceholder.value;

    let timelineCard = document.createElement("div");
    timelineCard.classList.add("timeline-card");

    let timelineDot = document.createElement("span");
    timelineDot.classList.add("timeline-dot");
    // create card
    timelineCard.appendChild(timelineDot);
    timelineCard.appendChild(title);
    timelineCard.appendChild(placeholder);

    // add card
    timelineBox.appendChild(timelineCard);
}
