
const modalTitle = document.getElementById("title");
const modalPlaceholder = document.getElementById("matn");
const saveModal = document.getElementById("save");
const timelineBox = document.getElementById("timeline-card");



function createTimeline() {

    if (modalTitle.value == "") {
        console.log("Bosh");
        saveModal.removeAttribute("data-bs-dismiss")
    } else {
        let title = document.createElement("h3");
        title.innerHTML = modalTitle.value;
        let placeholder = document.createElement("p");
        placeholder.innerHTML = modalPlaceholder.value;

        let timelineCard = document.createElement("div");
        timelineCard.classList.add("timeline-card");

        let timelineDot = document.createElement("span");
        timelineDot.classList.add("timeline-dot");
        // month create
        const monthNames = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avgust", "Sentabr", "Oktabr", "Noyabr", "Dekabr"];
        const nowTime = new Date();

        const month = nowTime.getMonth();

        console.log(nowTime.getDate());

        let time = document.createElement("span");
        time.classList.add("timeline-time");
        time.innerHTML = `${nowTime.getDate()}. ${monthNames[month]}  ${nowTime.getFullYear()}`;

        // create card
        timelineCard.appendChild(timelineDot);
        timelineCard.appendChild(title);
        timelineCard.appendChild(placeholder);
        timelineCard.appendChild(time);

        // add card
        timelineBox.appendChild(timelineCard);

        saveModal.setAttribute("data-bs-dismiss", "modal");

    }

    modalTitle.value = "";
    modalPlaceholder.value = "";

}


