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
        startDate: "Enero 2025",
        endDate: "01/02/2024",
        location: "Ubicación del proyecto",
        description1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam temporibus debitis iste, inventore iusto neque repellat quidem deserunt sit! Aspernatur numquam perferendis rerum soluta ipsa voluptas inventore recusandae cumque quas.",
        description2: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est inventore tempora debitis totam consectetur aut numquam rerum molestiae, dolorem expedita soluta aliquid sunt ratione ad tempore, odit facilis delectus eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius maiores, molestias culpa similique omnis aperiam explicabo atque vero dignissimos. Quo voluptas ipsam libero molestias, soluta quia? Facilis quia delectus nisi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, accusamus accusantium ullam alias quos amet vitae, animi placeat eos necessitatibus, id ipsam veniam rem voluptatibus laborum iusto odio velit et!",
        imageUrl1: "./assets/img/puente_peatonal_modal_1.jpg",
        imageUrl2: "./assets/img/puente_peatonal_modal_2.JPG",
    },
    "hotelTulum": {
        title: "Hotel Tulum",
        service: "Descripción del servicio",
        startDate: "Julio 2024",
        endDate: "01/02/2024",
        location: "Zona hotelera Tulum",
        description1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam temporibus debitis iste, inventore iusto neque repellat quidem deserunt sit! Aspernatur numquam perferendis rerum soluta ipsa voluptas inventore recusandae cumque quas.",
        description2: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est inventore tempora debitis totam consectetur aut numquam rerum molestiae, dolorem expedita soluta aliquid sunt ratione ad tempore, odit facilis delectus eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius maiores, molestias culpa similique omnis aperiam explicabo atque vero dignissimos. Quo voluptas ipsam libero molestias, soluta quia? Facilis quia delectus nisi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, accusamus accusantium ullam alias quos amet vitae, animi placeat eos necessitatibus, id ipsam veniam rem voluptatibus laborum iusto odio velit et!",
        imageUrl1: "./assets/img/hotel_tulum_modal_1.jpeg",
        imageUrl2: "./assets/img/hotel_tulum_modal_2.jpeg",
    },
    "aeropuertoCancun": {
        title: "Aeropuerto Cancún",
        service: "Descripción del servicio",
        startDate: "Octubre 2024",
        endDate: "Marzo 2025",
        location: "Cancún, Quintana Roo",
        description1: "Nuestra intervención se centró en la fabricación de elementos estructurales metálicos diseñados para soportar altos flujos de operación.",
        description2: "Gracias al dominio de procesos multitécnicos (FCAW, GMAW y SMAW), logramos optimizar los tiempos de entrega sin comprometer la precisión técnica requerida por la dirección de obra. ",
        imageUrl1: "./assets/img/aeropuerto_cancun_modal_1.jpg",
        imageUrl2: "./assets/img/aeropuerto_cancun_modal_2.jpg",
    },
    "trenMaya": {
        title: "Tren Maya",
        service: "Descripción del servicio",
        startDate: "Diciembre 2023",
        endDate: "01/02/2024",
        location: "Quintana Roo",
        description1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam temporibus debitis iste, inventore iusto neque repellat quidem deserunt sit! Aspernatur numquam perferendis rerum soluta ipsa voluptas inventore recusandae cumque quas.",
        description2: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est inventore tempora debitis totam consectetur aut numquam rerum molestiae, dolorem expedita soluta aliquid sunt ratione ad tempore, odit facilis delectus eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius maiores, molestias culpa similique omnis aperiam explicabo atque vero dignissimos. Quo voluptas ipsam libero molestias, soluta quia? Facilis quia delectus nisi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, accusamus accusantium ullam alias quos amet vitae, animi placeat eos necessitatibus, id ipsam veniam rem voluptatibus laborum iusto odio velit et!",
        imageUrl1: "./assets/img/tren_maya_modal_1.jpg",
        imageUrl2: "./assets/img/tren_maya_modal_2.jpg"
    },
    "domosChetumal": {
        title: "Domos Chetumal",
        service: "Descripción del servicio",
        startDate: "01/01/2024",
        endDate: "01/02/2024",
        location: "Chetumal",
        description1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam temporibus debitis iste, inventore iusto neque repellat quidem deserunt sit! Aspernatur numquam perferendis rerum soluta ipsa voluptas inventore recusandae cumque quas.",
        description2: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est inventore tempora debitis totam consectetur aut numquam rerum molestiae, dolorem expedita soluta aliquid sunt ratione ad tempore, odit facilis delectus eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius maiores, molestias culpa similique omnis aperiam explicabo atque vero dignissimos. Quo voluptas ipsam libero molestias, soluta quia? Facilis quia delectus nisi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, accusamus accusantium ullam alias quos amet vitae, animi placeat eos necessitatibus, id ipsam veniam rem voluptatibus laborum iusto odio velit et!",
        imageUrl1: "./assets/img/domos_chetumal_modal_1.jpg",
        imageUrl2: "./assets/img/domos_chetumal_modal_2.jpg"
    },
    "refineriaOlmeda": {
        title: "Refinería Olmeda",
        service: "Descripción del servicio",
        startDate: "Marzo 2022",
        endDate: "Julio 2024",
        location: "Paraíso, Tabasco",
        description1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam temporibus debitis iste, inventore iusto neque repellat quidem deserunt sit! Aspernatur numquam perferendis rerum soluta ipsa voluptas inventore recusandae cumque quas.",
        description2: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est inventore tempora debitis totam consectetur aut numquam rerum molestiae, dolorem expedita soluta aliquid sunt ratione ad tempore, odit facilis delectus eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius maiores, molestias culpa similique omnis aperiam explicabo atque vero dignissimos. Quo voluptas ipsam libero molestias, soluta quia? Facilis quia delectus nisi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, accusamus accusantium ullam alias quos amet vitae, animi placeat eos necessitatibus, id ipsam veniam rem voluptatibus laborum iusto odio velit et!",
        imageUrl1: "./assets/img/refineria_olmeda_modal_1.jpg",
        imageUrl2: "./assets/img/refineria_olmeda_modal_2.jpg"
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
    const modalImage1 = document.getElementById("modalImage1");
    const modalImage2 = document.getElementById("modalImage2");
    const menuButton = document.getElementById("menuButton");
    const menuButtonClose = document.getElementById("menuButtonClose");
    const menu = document.getElementById("menu");

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

    function populateModal(project) {
        modalTitle.textContent = project.title;
        modalService.textContent = project.service;
        modalStartDate.textContent = project.startDate;
        modalEndDate.textContent = project.endDate;
        modalLocation.textContent = project.location;
        modalDescription1.textContent = project.description1;
        modalDescription2.textContent = project.description2;
        modalImage1.src = project.imageUrl1;
        modalImage2.src = project.imageUrl2;
    }

    modal.addEventListener("click", function(event) {
        if (event.target === outerModal) {
            modal.classList.add("hidden");
        }    
    });

    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape") {
            modal.classList.add("hidden");
        }
    });

    menuButton.addEventListener("click", function() {
        menuButton.classList.toggle("hidden");
        menuButtonClose.classList.toggle("hidden");
        menu.style.right = "0";
    });

    menuButtonClose.addEventListener("click", function() {
        menuButton.classList.toggle("hidden");
        menuButtonClose.classList.toggle("hidden");
        menu.style.right = "-400px";
    });

});
