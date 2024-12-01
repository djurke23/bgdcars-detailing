// nase usluge


const serviceDetails = {
    poliranje: {
        title: "Poliranje automobila",
        description: "Profesionalni tretman koji vraća originalni sjaj vašem vozilu i uklanja sve vrste površinskih oštećenja.",
        items: [
            "Jednoslojno poliranje",
            "Dvoslojno poliranje",
            "Troslojno poliranje",
            "Višeslojno poliranje",
            "Detaljno spoljašnje pranje",
            "Sušenje automobila",
            "Hemijska i fizička dekontaminacija laka",
            "Poliranje"
        ]
    },
    dubinsko: {
        title: "Dubinsko pranje",
        description: "Temeljno čišćenje svih površina vozila koje uklanja duboko ukorenjenu prljavštinu i održava svežinu enterijera.",
        items: [
            "Detaljno unutrašnje pranje",
            "Dubinsko pranje",
            "Sušenje automobila"
        ]
    },
    keramicka: {
        title: "Keramička zaštita",
        description: "Napredna tehnologija zaštite koja pruža dugotrajnu otpornost na spoljašnje uticaje i održava sjaj vozila.",
        items: [
            "U trajnosti od 12 meseci",
            "U trajnosti od 24 meseca",
            "U trajnosti od 36 meseci",
            "U trajnosti od 60 meseci",
            "Detaljno spoljašnje pranje",
            "Sušenje automobila",
            "Hemijska i fizička dekontaminacija laka",
            "Nanošenje keramičke zaštite"
        ]
    },
    spoljasnje: {
        title: "Detaljno spoljašnje pranje",
        description: "Pažljivo i detaljno čišćenje svih spoljašnjih površina vozila za besprekoran izgled.",
        items: [
            "Osnovno pranje",
            "Ručno pranje",
            "Pranje uvala",
            "Čišćenje felni",
            "Čišćenje potkrila",
            "Sušenje automobila"
        ]
    },
    unutrasnje: {
        title: "Detaljno unutrašnje pranje",
        description: "Kompletno osvežavanje enterijera vašeg vozila sa posebnom pažnjom na svaki detalj.",
        items: [
            "Usisavanje automobila",
            "Uklanjanje dlaka sa podova",
            "Čišćenje ventilacionih otvora",
            "Čišćenje celog enterijera četkicama",
            "Brisanje stakala"
        ]
    },
    farovi: {
        title: "Polimerizacija farova sa keramičkom zaštitom",
        description: "Profesionalna restauracija farova koja vraća njihovu providnost i štiti ih od budućeg zamućenja.",
        items: [
            "Pranje farova",
            "Šmirglanje",
            "Polimerizovanje farova",
            "Nanošenje keramičke zaštite"
        ]
    }
};

function openModal(service) {
    const modal = document.getElementById('serviceModal');
    const modalContent = document.getElementById('modalContent');
    const details = serviceDetails[service];
    
    modalContent.innerHTML = `
        <h3>${details.title}</h3>
        <p class="service-description-modal">${details.description}</p>
        <ul>
            ${details.items.map(item => `<li>${item}</li>`).join('')}
        </ul>
    `;
    
    modal.style.display = 'block';
    // Trigger reflow
    modal.offsetHeight;
    modal.classList.add('fade-in');
}

function closeModal() {
    const modal = document.getElementById('serviceModal');
    modal.classList.remove('fade-in');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300); // Vreme trajanja animacije
}

window.onclick = function(event) {
    const modal = document.getElementById('serviceModal');
    if (event.target == modal) {
        closeModal();
    }
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});