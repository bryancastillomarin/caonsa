const PUENTE_PEATONAL = "puentePeatonal";
const HOTEL_TULUM = "hotelTulum";
const AEROPUERTO_CANCUN = "aeropuertoCancun";
const TREN_MAYA = "trenMaya";
const DOMOS_CHETUMAL = "domosChetumal";
const REFINERIA_OLMEDA = "refineriaOlmeda";

const projectsData = {
    "puentePeatonal": {
        title: "Puente Peatonal",
        service: "Descripción del servicio",
        startDate: "01/01/2024",
        endDate: "01/02/2024",
        location: "Ubicación del proyecto",
        description1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam temporibus debitis iste, inventore iusto neque repellat quidem deserunt sit! Aspernatur numquam perferendis rerum soluta ipsa voluptas inventore recusandae cumque quas.",
        description2: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est inventore tempora debitis totam consectetur aut numquam rerum molestiae, dolorem expedita soluta aliquid sunt ratione ad tempore, odit facilis delectus eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius maiores, molestias culpa similique omnis aperiam explicabo atque vero dignissimos. Quo voluptas ipsam libero molestias, soluta quia? Facilis quia delectus nisi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, accusamus accusantium ullam alias quos amet vitae, animi placeat eos necessitatibus, id ipsam veniam rem voluptatibus laborum iusto odio velit et!",
        imageDescription: "Descripción de la imagen principal del proyecto",
        imageUrl1: "./assets/img/puente_peatonal.JPG",
        imageUrl2: "./assets/img/puente_peatonal.JPG",
        imageUrl3: "./assets/img/puente_peatonal.JPG"
    },
    "hotelTulum": {
        title: "Hotel Tulum",
        service: "Descripción del servicio",
        startDate: "01/01/2024",
        endDate: "01/02/2024",
        location: "Ubicación del proyecto",
        description1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam temporibus debitis iste, inventore iusto neque repellat quidem deserunt sit! Aspernatur numquam perferendis rerum soluta ipsa voluptas inventore recusandae cumque quas.",
        description2: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est inventore tempora debitis totam consectetur aut numquam rerum molestiae, dolorem expedita soluta aliquid sunt ratione ad tempore, odit facilis delectus eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius maiores, molestias culpa similique omnis aperiam explicabo atque vero dignissimos. Quo voluptas ipsam libero molestias, soluta quia? Facilis quia delectus nisi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, accusamus accusantium ullam alias quos amet vitae, animi placeat eos necessitatibus, id ipsam veniam rem voluptatibus laborum iusto odio velit et!",
        imageDescription: "Descripción de la imagen principal del proyecto",
        imageUrl1: "./assets/img/hotel_tulum.png",
        imageUrl2: "./assets/img/hotel_tulum.png",
        imageUrl3: "./assets/img/hotel_tulum.png"
    },
    "aeropuertoCancun": {
        title: "Aeropuerto Cancún",
        service: "Descripción del servicio",
        startDate: "01/01/2024",
        endDate: "01/02/2024",
        location: "Ubicación del proyecto",
        description1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam temporibus debitis iste, inventore iusto neque repellat quidem deserunt sit! Aspernatur numquam perferendis rerum soluta ipsa voluptas inventore recusandae cumque quas.",
        description2: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est inventore tempora debitis totam consectetur aut numquam rerum molestiae, dolorem expedita soluta aliquid sunt ratione ad tempore, odit facilis delectus eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius maiores, molestias culpa similique omnis aperiam explicabo atque vero dignissimos. Quo voluptas ipsam libero molestias, soluta quia? Facilis quia delectus nisi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, accusamus accusantium ullam alias quos amet vitae, animi placeat eos necessitatibus, id ipsam veniam rem voluptatibus laborum iusto odio velit et!",
        imageDescription: "Descripción de la imagen principal del proyecto",
        imageUrl1: "./assets/img/aeropuerto_cancun.JPG",
        imageUrl2: "./assets/img/aeropuerto_cancun.JPG",
        imageUrl3: "./assets/img/aeropuerto_cancun.JPG"
    },
    "trenMaya": {
        title: "Tren Maya",
        service: "Descripción del servicio",
        startDate: "01/01/2024",
        endDate: "01/02/2024",
        location: "Ubicación del proyecto",
        description1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam temporibus debitis iste, inventore iusto neque repellat quidem deserunt sit! Aspernatur numquam perferendis rerum soluta ipsa voluptas inventore recusandae cumque quas.",
        description2: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est inventore tempora debitis totam consectetur aut numquam rerum molestiae, dolorem expedita soluta aliquid sunt ratione ad tempore, odit facilis delectus eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius maiores, molestias culpa similique omnis aperiam explicabo atque vero dignissimos. Quo voluptas ipsam libero molestias, soluta quia? Facilis quia delectus nisi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, accusamus accusantium ullam alias quos amet vitae, animi placeat eos necessitatibus, id ipsam veniam rem voluptatibus laborum iusto odio velit et!",
        imageDescription: "Descripción de la imagen principal del proyecto",
        imageUrl1: "./assets/img/tren_maya.jpg",
        imageUrl2: "./assets/img/tren_maya.jpg",
        imageUrl3: "./assets/img/tren_maya.jpg"
    },
    "domosChetumal": {
        title: "Domos Chetumal",
        service: "Descripción del servicio",
        startDate: "01/01/2024",
        endDate: "01/02/2024",
        location: "Ubicación del proyecto",
        description1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam temporibus debitis iste, inventore iusto neque repellat quidem deserunt sit! Aspernatur numquam perferendis rerum soluta ipsa voluptas inventore recusandae cumque quas.",
        description2: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est inventore tempora debitis totam consectetur aut numquam rerum molestiae, dolorem expedita soluta aliquid sunt ratione ad tempore, odit facilis delectus eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius maiores, molestias culpa similique omnis aperiam explicabo atque vero dignissimos. Quo voluptas ipsam libero molestias, soluta quia? Facilis quia delectus nisi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, accusamus accusantium ullam alias quos amet vitae, animi placeat eos necessitatibus, id ipsam veniam rem voluptatibus laborum iusto odio velit et!",
        imageDescription: "Descripción de la imagen principal del proyecto",
        imageUrl1: "./assets/img/domos_chetumal.jpg",
        imageUrl2: "./assets/img/domos_chetumal.jpg",
        imageUrl3: "./assets/img/domos_chetumal.jpg"
    },
    "refineriaOlmeda": {
        title: "Refinería Olmeda",
        service: "Descripción del servicio",
        startDate: "01/01/2024",
        endDate: "01/02/2024",
        location: "Ubicación del proyecto",
        description1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam temporibus debitis iste, inventore iusto neque repellat quidem deserunt sit! Aspernatur numquam perferendis rerum soluta ipsa voluptas inventore recusandae cumque quas.",
        description2: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est inventore tempora debitis totam consectetur aut numquam rerum molestiae, dolorem expedita soluta aliquid sunt ratione ad tempore, odit facilis delectus eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius maiores, molestias culpa similique omnis aperiam explicabo atque vero dignissimos. Quo voluptas ipsam libero molestias, soluta quia? Facilis quia delectus nisi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, accusamus accusantium ullam alias quos amet vitae, animi placeat eos necessitatibus, id ipsam veniam rem voluptatibus laborum iusto odio velit et!",
        imageDescription: "Descripción de la imagen principal del proyecto",
        imageUrl1: "./assets/img/puente_peatonal.jpg",
        imageUrl2: "./assets/img/puente_peatonal.jpg",
        imageUrl3: "./assets/img/puente_peatonal.jpg"
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById("modal");
    const outerModal = document.getElementById("outerModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalService = document.getElementById("modalService");
    const modalDescription1 = document.getElementById("modalDescription1");
    const modalDescription2 = document.getElementById("modalDescription2");
    const modalStartDate = document.getElementById("modalStartDate");
    const modalEndDate = document.getElementById("modalEndDate");
    const modalLocation = document.getElementById("modalLocation");
    const modalImageDescription = document.getElementById("modalImageDescription");
    const modalImage1 = document.getElementById("modalImage1");
    const modalImage2 = document.getElementById("modalImage2");
    const modalImage3 = document.getElementById("modalImage3");

    document.getElementById("modalClose").addEventListener("click", function() {
        modal.classList.add("hidden");
    });
    document.getElementById(PUENTE_PEATONAL).addEventListener("click", function() {
        populateModal(projectsData[PUENTE_PEATONAL]);
        modal.classList.remove("hidden");
    });
    document.getElementById(HOTEL_TULUM).addEventListener("click", function() {
        populateModal(projectsData[HOTEL_TULUM]);
        modal.classList.remove("hidden");
    });
    document.getElementById(AEROPUERTO_CANCUN).addEventListener("click", function() {
        populateModal(projectsData[AEROPUERTO_CANCUN]);
        modal.classList.remove("hidden");
    });
    document.getElementById(TREN_MAYA).addEventListener("click", function() {
        populateModal(projectsData[TREN_MAYA]);
        modal.classList.remove("hidden");
    });
    document.getElementById(DOMOS_CHETUMAL).addEventListener("click", function() {
        populateModal(projectsData[DOMOS_CHETUMAL]);
        modal.classList.remove("hidden");
    });
    document.getElementById(REFINERIA_OLMEDA).addEventListener("click", function() {
        populateModal(projectsData[REFINERIA_OLMEDA]);
        modal.classList.remove("hidden");
    });

    modal.addEventListener("click", function(event) {
        console.log(event.target);
        if (event.target === outerModal) {
            modal.classList.add("hidden");
        }    
    });

    function populateModal(project) {
        modalTitle.textContent = project.title;
        modalService.textContent = project.service;
        modalStartDate.textContent = project.startDate;
        modalEndDate.textContent = project.endDate;
        modalLocation.textContent = project.location;
        modalDescription1.textContent = project.description1;
        modalDescription2.textContent = project.description2;
        modalImageDescription.textContent = project.imageDescription;
        modalImage1.src = project.imageUrl1;
        modalImage2.src = project.imageUrl2;
        modalImage3.src = project.imageUrl3;
    }

    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape") {
            modal.classList.add("hidden");
        }
    });
});
