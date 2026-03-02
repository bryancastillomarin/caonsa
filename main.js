const PUENTE_PEATONAL = "puentePeatonal";
const HOTEL_TULUM = "hotelTulum";
const AEROPUERTO_CANCUN = "aeropuertoCancun";
const TREN_MAYA = "trenMaya";
const DOMOS_CHETUMAL = "domosChetumal";
const REFINERIA_OLMECA = "refineriaOlmeca";

let isModalOpen = false;
let isModalImageOpen = false;

const projectsData = {
    "puentePeatonal": {
        title: "Puente Peatonal",
        service: "Descripción del servicio",
        startDate: "Enero 2025",
        location: "Puerto Vallarta, Jalisco",
        description1: "Desarrollo de herrería estructural pesada para puente peatonal. Implementamos un riguroso protocolo de limpieza mecánica motorizada para eliminar contaminantes y preparar el acero contra la corrosión acelerada del entorno vallartense. El montaje en sitio fue ejecutado con soldadura de arco manual (SMAW), logrando una integración sólida y estética en la estructura principal del puente.",
        description2: "Resultado: una infraestructura segura, con acabados de alta calidad y protección industrial de largo alcance.",
        imageUrl1: "./assets/img/puente_peatonal_modal_1.jpg",
        imageUrl2: "./assets/img/puente_peatonal_modal_2.JPG",
    },
    "hotelTulum": {
        title: "Hotel Tulum",
        service: "Descripción del servicio",
        startDate: "Julio 2024",
        location: "Zona hotelera Tulum",
        description1: "Desarrollo de soluciones estructurales metálicas para desarrollo hotelero de gran escala en Quintana Roo. ",
        description2: "Nos enfocamos en el cumplimiento de protocolos de alta durabilidad. Se realizó un proceso SMAQ con electrodos de alta eficiencia, garantizando uniones sólidas y resistentes. La trazabilidad del proyecto se respaldó con la certificación de nuestro personal ante la AWS, asegurando que cada punto de unión cumpla con las pruebas de carga y resistencia requeridas por la dirección de la obra.",
        imageUrl1: "./assets/img/hotel_tulum_modal_1.jpeg",
        imageUrl2: "./assets/img/hotel_tulum_modal_2.jpeg",
    },
    "aeropuertoCancun": {
        title: "Aeropuerto Cancún",
        service: "Descripción del servicio",
        startDate: "Octubre 2024",
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
        location: "Quintana Roo",
        description1: "Ejecución de fabricación y reparaciones estructurales críticas para el proyecto prioritario del Tren Maya. El desarrollo se realizó bajo la estricta supervisión de Grupo INDI, cumpliendo con los más altos estándares de seguridad y calidad técnica. Se implementaron procesos de soldadura especializada FCAW para alta productividad y SMAW para montajes de precisión en campo, todos alineados a la normativa internacional AWS (American Welding Society).",
        description2: "La intervención garantizó la integridad mecánica de los componentes esenciales para la operatividad del sistema ferroviario.",
        imageUrl1: "./assets/img/tren_maya_modal_1.jpg",
        imageUrl2: "./assets/img/tren_maya_modal_2.jpg"
    },
    "domosChetumal": {
        title: "Domos Chetumal",
        service: "Descripción del servicio",
        startDate: "Diciembre 2024",
        location: "Chetumal",
        description1: "Diseño, fabricación y montaje de estructuras metálicas para techumbres (domos) en diversas instituciones de educación pública.",
        description2: "El proyecto se centró en proporcionar espacios seguros y protegidos para el desarrollo de actividades académicas y deportivas. Se empleó el proceso de soldadura SMAW (Shielded Metal Arc Welding) para garantizar uniones de alta resistencia mecánica, cumpliendo con las normas de seguridad estructural vigentes para edificios de concurrencia masiva.",
        imageUrl1: "./assets/img/domos_chetumal_modal_1.jpg",
        imageUrl2: "./assets/img/domos_chetumal_modal_2.jpg"
    },
    "refineriaOlmeca": {
        title: "Refinería Olmeca",
        service: "Descripción del servicio",
        startDate: "Marzo 2022",
        location: "Paraíso, Tabasco",
        description1: "Fabricación y habilitado de tubería de 4\" de diámetro para red de seguridad industrial. ",
        description2: "El proceso incluyó el rolado de precisión y la integración de accesorios especializados mediante soldadura de alta integridad en tredolets, bridas y soportes estructurales. Toda la ejecución se realizó bajo normativas internacionales de seguridad petroquímica, garantizando la estanqueidad y resistencia del sistema ante condiciones de alta presión.",
        imageUrl1: "./assets/img/refineria_olmeca_modal_1.jpg",
        imageUrl2: "./assets/img/refineria_olmeca_modal_2.jpg"
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modalImage");
    const outerModal = document.getElementById("outerModal");
    const outerModalImage = document.getElementById("outerModalImage");
    const modalTitle = document.getElementById("modalTitle");
    const modalService = document.getElementById("modalService");
    const modalDescription1 = document.getElementById("modalDescription1");
    const modalDescription2 = document.getElementById("modalDescription2");
    const modalStartDate = document.getElementById("modalStartDate");
    const modalLocation = document.getElementById("modalLocation");
    const modalImage1 = document.getElementById("modalImage1");
    const modalImage2 = document.getElementById("modalImage2");
    const modalImage3 = document.getElementById("modalImage3");
    const menuButton = document.getElementById("menuButton");
    const menuButtonClose = document.getElementById("menuButtonClose");
    const menu = document.getElementById("menu");

    document.getElementById("modalClose").addEventListener("click", function() {
        modal.classList.add("hidden");
    });
    document.getElementById("modalImageClose").addEventListener("click", function() {
        modal.classList.remove("hidden");
        modalImage.classList.add("hidden");
        isModalOpen = true;
        isModalImageOpen = false;
    });
    document.getElementById(PUENTE_PEATONAL).addEventListener("click", function() {
        populateModal(projectsData[PUENTE_PEATONAL]);
        modal.classList.remove("hidden");
        isModalOpen = true;
    });
    document.getElementById(HOTEL_TULUM).addEventListener("click", function() {
        populateModal(projectsData[HOTEL_TULUM]);
        modal.classList.remove("hidden");
        isModalOpen = true;
    });
    document.getElementById(AEROPUERTO_CANCUN).addEventListener("click", function() {
        populateModal(projectsData[AEROPUERTO_CANCUN]);
        modal.classList.remove("hidden");
        isModalOpen = true;
    });
    document.getElementById(TREN_MAYA).addEventListener("click", function() {
        populateModal(projectsData[TREN_MAYA]);
        modal.classList.remove("hidden");
        isModalOpen = true;
    });
    document.getElementById(DOMOS_CHETUMAL).addEventListener("click", function() {
        populateModal(projectsData[DOMOS_CHETUMAL]);
        modal.classList.remove("hidden");
        isModalOpen = true;
    });
    document.getElementById(REFINERIA_OLMECA).addEventListener("click", function() {
        populateModal(projectsData[REFINERIA_OLMECA]);
        modal.classList.remove("hidden");
        isModalOpen = true;
    });

    function populateModal(project) {
        modalTitle.textContent = project.title;
        modalService.textContent = project.service;
        modalStartDate.textContent = project.startDate;
        modalLocation.textContent = project.location;
        modalDescription1.textContent = project.description1;
        modalDescription2.textContent = project.description2;
        modalImage1.src = project.imageUrl1;
        modalImage2.src = project.imageUrl2;
    }

    modalImage1.addEventListener("click", function(e) {
        showImageModal(e.target.src);
    });

    modalImage2.addEventListener("click", function(e) {
        showImageModal(e.target.src);
    });

    function showImageModal(src) {
        modal.classList.add("hidden");
        modalImage.classList.remove("hidden");
        modalImage3.src = src;
        isModalOpen = false;
        isModalImageOpen = true;
        console.log({isModalOpen, isModalImageOpen});
    }

    modal.addEventListener("click", function(event) {
        if (event.target === outerModal) {
            modal.classList.add("hidden");
            isModalOpen = false;
        }    
    });

    modalImage.addEventListener("click", function(event) {
        if(event.target === outerModalImage) {
            modalImage.classList.add("hidden");
            modal.classList.remove("hidden");
            isModalImageOpen = false;
            isModalOpen = true;
        }
    })

    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape") {
            if(isModalOpen) {
                modal.classList.add("hidden");
                isModalOpen = false;
            }
            if(isModalImageOpen) {
                modalImage.classList.add("hidden");
                modal.classList.remove("hidden");
                isModalImageOpen = false;
                isModalOpen = true;
            }
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
