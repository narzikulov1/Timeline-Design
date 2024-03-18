
const modalTitle = document.getElementById("title");
const modalPlaceholder = document.getElementById("matn");
const saveModal = document.getElementById("save");
const timelineBox = document.getElementById("timeline-card");

let line = document.createElement("div");
line.classList.add("timeline-line");

timelineBox.appendChild(line);

function createTimeline() {

    if (modalTitle.value == "") {
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

        let img = document.createElement("img");
        img.src = "trash.png";

        // create card
        timelineCard.appendChild(timelineDot);
        timelineCard.appendChild(title);
        timelineCard.appendChild(placeholder);
        timelineCard.appendChild(time);
        timelineCard.appendChild(img);
        // add card

    
        timelineBox.appendChild(timelineCard);

        saveModal.setAttribute("data-bs-dismiss", "modal");

    }

    modalTitle.value = "";
    modalPlaceholder.value = "";
    seveDeta();
}



timelineBox.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        seveDeta();
    }
}, false);

function seveDeta() {
    localStorage.setItem("data-timeline", timelineBox.innerHTML)
}

function showTask() {
    timelineBox.innerHTML = localStorage.getItem("data-timeline");
}

seveDeta();
showTask();






