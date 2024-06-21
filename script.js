document.addEventListener("DOMContentLoaded", function () {
  // Codice JavaScript da eseguire dopo il caricamento completo del DOM

  let userIcon = document.getElementById("userIcon");
  let userDiv = document.getElementById("userDiv");
  let helpDiv = document.getElementById("helpDiv");
  let question = document.getElementById("question");
  let closeIcons = document.querySelectorAll(".x"); // Utilizza 'querySelectorAll'

  // Aggiungi un gestore di eventi per il clic sull'icona utente
  userIcon.addEventListener("click", function () {
    // Controlla se il div utente è già visibile
    if (userDiv.classList.contains("hidden")) {
      // Se è nascosto, mostralo con un effetto di discesa lento
      userDiv.classList.remove("hidden");
      userDiv.classList.add("visible");

      // Assicurati che l'altro div sia nascosto
      helpDiv.classList.add("hidden");
      helpDiv.classList.remove("visible");
    } else {
      // Se è visibile, nascondilo
      userDiv.classList.add("hidden");
      userDiv.classList.remove("visible");
    }
  });

  // Aggiungi un gestore di eventi per il clic sulla domanda di aiuto
  question.addEventListener("click", function () {
    // Controlla se il div di aiuto è già visibile
    if (helpDiv.classList.contains("hidden")) {
      // Se è nascosto, mostralo con un effetto di discesa lento
      helpDiv.classList.remove("hidden");
      helpDiv.classList.add("visible");

      // Assicurati che l'altro div sia nascosto
      userDiv.classList.add("hidden");
      userDiv.classList.remove("visible");
    } else {
      // Se è visibile, nascondilo
      helpDiv.classList.add("hidden");
      helpDiv.classList.remove("visible");
    }
  });

  // Aggiungi un gestore di eventi per il clic sull'icona X all'interno di userDiv e helpDiv
  closeIcons.forEach(function (icona) {
    icona.addEventListener("click", function () {
      userDiv.classList.add("hidden");
      helpDiv.classList.add("hidden");
      helpDiv.classList.remove("visible");
      userDiv.classList.remove("visible");
    });
  });
});

// ilaria

// funzione per nascondere le sections di Ilaria se non sono cliccate
document.addEventListener("DOMContentLoaded", function () {
  // Ottieni tutti i link della navbar
  let navLinks = document.querySelectorAll("#last_news_nav a");
  // Imposta la prima sezione come visibile di default
  document.querySelector("#EAnotizie_section").classList.remove("hidden2");
  // tutte le altre sezioni sono nascoste
  document.querySelector("#EA_SPORTS_FC_section").classList.add("hidden2");
  document.querySelector("#apexLegends_section").classList.add("hidden2");
  document.querySelector("#theSims_section").classList.add("hidden2");
  document.querySelector("#star_wars_section").classList.add("hidden2");
  document.querySelector("#f1_section").classList.add("hidden2");
  document.querySelector("#battlefield_section").classList.add("hidden2");
  document.querySelector("#need_for_speed").classList.add("hidden2");

  // Aggiungi un listener per ogni link della navbar
  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Previeni il comportamento predefinito del link

      // Ottieni l'ID della sezione correlata al link cliccato
      let sectionId = link.getAttribute("href").substring(1);

      // Nascondi tutte le sezioni
      let sections = document.querySelectorAll(".section");
      sections.forEach(function (section) {
        section.classList.add("hidden2");
      });

      // Mostra solo la sezione correlata al link cliccato
      document.getElementById(sectionId).classList.remove("hidden2");
    });
  });
});

function handleScroll(direction) {
  const links = document.querySelectorAll("ul li a");
  const displayCount = 3;
  const previousButton = document.querySelector(".previous");
  const nextButton = document.querySelector(".next");

  let currentIndex = 0;

  // Trova l'indice corrente di visualizzazione
  for (let i = 0; i < links.length; i++) {
    if (links[i].parentNode.style.display !== "none") {
      currentIndex = i;
      break;
    }
  }

  // Calcola il nuovo indice in base alla direzione
  let newIndex;
  if (direction === "next") {
    newIndex = currentIndex + 1;
  } else if (direction === "previous") {
    newIndex = currentIndex - 1;
  }

  // Assicurati che il nuovo indice sia valido
  if (newIndex >= 0 && newIndex <= links.length - displayCount) {
    // Nascondi tutti gli elementi e mostra solo quelli nell'intervallo corretto
    for (let i = 0; i < links.length; i++) {
      if (i >= newIndex && i < newIndex + displayCount) {
        links[i].parentNode.style.display = "flex";
      } else {
        links[i].parentNode.style.display = "none";
      }
    }
    // Controlla se nascondere o mostrare il pulsante "Previous"
    if (newIndex === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "block";
    }
    // Controlla se nascondere o mostrare il pulsante "Next"
    if (newIndex === links.length - displayCount) {
      nextButton.style.display = "none";
    } else {
      nextButton.style.display = "block";
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const previousButton = document.querySelector(".previous");
  const nextButton = document.querySelector(".next");

  // Nascondi il pulsante "Previous" all'inizio
  previousButton.style.display = "none";

  // Gestisci il click sul pulsante "Previous"
  previousButton.addEventListener("click", function () {
    handleScroll("previous");
  });

  // Gestisci il click sul pulsante "Next"
  nextButton.addEventListener("click", function () {
    handleScroll("next");
  });
});

// Fabian
document.addEventListener("DOMContentLoaded", function() {
  // Aggiungi event listener per mostrare/nascondere i sotto menu
  document.querySelectorAll('.box-scritte-primo-piano').forEach(function(box) {
      box.addEventListener('click', function() {
          const submenu = this.nextElementSibling;
          toggleSubMenu(submenu);
          // Aggiungi/rimuovi la classe "active" al menu "Giochi"
          if (this.classList.contains('main-menu-item')) {
              // Controlla se il menu "Giochi" è attivo
              const giochiMenu = document.getElementById('giochi');
              const isGiochiActive = giochiMenu.classList.contains('active');
              // Chiudi i sotto-menu "Esplora i giochi" e "Piattaforme"
              closeSubMenu('esplora-giochi');
              closeSubMenu('PIATTAFORME');
            
              // Chiudi tutti i sotto-sotto-menu
              closeAllSubSubMenus();
              // Se il menu "Giochi" non era già attivo, attivalo
              if (!isGiochiActive) {
                  giochiMenu.classList.add('active');
              } else {
                  giochiMenu.classList.remove('active');
              }
          }
      });
  });

document.querySelectorAll('.menu').forEach(function(menu) {
  menu.addEventListener('click', function() {
      const subsubmenu = this.nextElementSibling;
      toggleSubSubMenu(subsubmenu);
      
      // Controlla lo stato del sotto-sottomenu di "Esplora i giochi"
      const esploraGiochiSubMenu = document.getElementById('esplora-giochi');
      const esploraGiochiActive = esploraGiochiSubMenu.nextElementSibling.classList.contains('active');
      
      // Controlla lo stato del sotto-sottomenu di "Piattaforme"
      const piattaformeSubMenu = document.getElementById('PIATTAFORME');
      const piattaformeActive = piattaformeSubMenu.nextElementSibling.classList.contains('active');
      
      // Nascondi i bordi inferiori se entrambi i sottomenu sono attivi contemporaneamente
      if (esploraGiochiActive && piattaformeActive) {
          esploraGiochiSubMenu.style.borderBottom = 'none';
          piattaformeSubMenu.style.borderBottom = 'none';
      } else {
          // Riporta i bordi inferiori ai valori predefiniti
          // Se il sotto sotto menu di "Esplora i giochi" è attivo, nascondi il bordo inferiore di "Esplora i giochi"
          esploraGiochiSubMenu.style.borderBottom = esploraGiochiActive ? "none" : '';
          // Se il sotto sotto menu di "Piattaforme" è attivo, nascondi il bordo inferiore di "Piattaforme"
          piattaformeSubMenu.style.borderBottom = piattaformeActive ? "none" : '';
      }
  });
});


  // Funzione per mostrare/nascondere i sotto menu
  function toggleSubMenu(submenu) {
      submenu.classList.toggle('active');
  }

  // Funzione per mostrare/nascondere i sotto sotto menu
  function toggleSubSubMenu(subsubmenu) {
      subsubmenu.classList.toggle('active');
  }

  // Funzione per chiudere un singolo sotto menu
  function closeSubMenu(submenuId) {
      const submenu = document.getElementById(submenuId);
      if (submenu.classList.contains('active')) {
          submenu.classList.remove('active');
      }
  }

  // Funzione per chiudere tutti i sotto-sotto-menu
  function closeAllSubSubMenus() {
      document.querySelectorAll('.scritte-sotto-sotto-menu').forEach(function(subsubmenu) {
          if (subsubmenu.classList.contains('active')) {
              subsubmenu.classList.remove('active');
          }
      });
  }
});


document.addEventListener('DOMContentLoaded', function() {
  let sidebar = document.getElementById('sidebar');
  let reduceSize = document.querySelector('.reduce-size');
  let overlay = document.querySelector('.fabian');
  

  sidebar.addEventListener('click', function() {
    overlay.style.display = 'block';
    
  });

  reduceSize.addEventListener('click', function() {
    overlay.style.display = 'sticky';
  });
});

document
    .querySelectorAll(".box-scritte-primo-piano")
    .forEach(function (element) {
      element.addEventListener("click", function () {
        element.classList.toggle("rosso");
      });
    });



let boxPrimoPianoItems = document.querySelectorAll(".box-scritte-primo-piano");
boxPrimoPianoItems.forEach(function (box) {
  box.addEventListener("click", function () {
    let freccia = this.querySelector(".freccia-basso");
    if (freccia.style.transform === "rotate(180deg)") {
      freccia.style.transform = "rotate(0deg)";
    } else {
      freccia.style.transform = "rotate(180deg)";
    }
  });
});


let rotazione45 = document.querySelectorAll(".menu")
rotazione45.forEach(function (plus) {
    plus.addEventListener("click", function() {
        let icona = this.querySelector(".plus")
        // Controlla se l'icona è già ruotata
        if (icona.style.transform === "rotate(45deg)") {
            // Se è ruotata, rimuovi la rotazione
            icona.style.transform = "rotate(0deg)";
        } else {
            // Se non è ruotata, aggiungi la rotazione di 45 gradi
            icona.style.transform = "rotate(45deg)";
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
  let kebMenu = document.getElementById("kebab");
  let sidebar = document.getElementById("sidebar");
  let closeFabian = document.getElementById("closeFabian");
  let reduceSizeFabianDiv = document.querySelector(".main");

  // Nascondi la barra laterale di default
  sidebar.style.display = "none";

  kebMenu.addEventListener("click", function () {
    // Mostra la barra laterale con effetto di apertura lento
    fadeIn(sidebar, 30);
    document.body.style.overflowY = "hidden";
    reduceSizeFabianDiv.style.display = "block"
    reduceSizeFabianDiv.style.overflowY = "scroll"
    reduceSizeFabianDiv.style.scrollbarWidth = "none"
    



    closeFabian.addEventListener("click", function () {
      // Nascondi la barra laterale con effetto di chiusura lento
      fadeOut(sidebar, 70);
      document.body.style.overflowY = "scroll";
    });
  });

  // Funzione per mostrare un elemento con un effetto di fadeIn
  function fadeIn(element, duration) {
    element.style.opacity = 0;
    element.style.display = "block";

    let startTime = null;

    function fade(timeStamp) {
      if (!startTime) startTime = timeStamp;
      const progress = timeStamp - startTime;
      element.style.opacity = progress / duration;
      if (progress < duration) {
        requestAnimationFrame(fade);
      }
    }

    requestAnimationFrame(fade);
  }

  // Funzione per nascondere un elemento con un effetto di fadeOut
  function fadeOut(element, duration) {
    let startTime = null;

    function fade(timeStamp) {
      if (!startTime) startTime = timeStamp;
      const progress = timeStamp - startTime;
      element.style.opacity = 1 - progress / duration;
      if (progress < duration) {
        requestAnimationFrame(fade);
      } else {
        element.style.display = "none";
      }
    }

    requestAnimationFrame(fade);
  }
  // media query reduce size

  function handleMediaQueryChange() {
    let reduceSizeFabianDiv = document.querySelector(".reduce-size");
    const menuHamburger = document.querySelector(".menu-hamburger");
    closeIcon = document.querySelector(".ea-close-icon");
    const mediaQuery = window.matchMedia("(max-width: 1024px)");
    const whiteNavabar = document.querySelector(".whiteNavbar")
    if (mediaQuery.matches) {
      menuHamburger.addEventListener("click", () => {
        const mediaQuery1 = window.matchMedia("(max-width: 767px)");
        const mediaQuery2 = window.matchMedia("(min-width: 768px)");
        reduceSizeFabianDiv.style.display = "block";
        reduceSizeFabianDiv.style.height = "100vh";
        whiteNavabar.style.display = "none"
        mediaQuery1.matches && (reduceSizeFabianDiv.style.width = "90vw");
        mediaQuery2.matches && (reduceSizeFabianDiv.style.width = "40vw");
      });

      closeIcon.addEventListener("click", () => {
        reduceSizeFabianDiv.style.display = "none";
        whiteNavabar.style.display = "flex"
      });
    } else {
      reduceSizeFabianDiv.style.display = "none";
    }
  }

  handleMediaQueryChange();
});

// dange

//access the two select elements (active below 1007px)
let pricingSelect = document.querySelector("#network-footer-pricing");
let localeSelect = document.querySelector("#network-footer-language");

//access the span that will show the selected pricing area
const selectedPricingSpan = document.querySelector(
  ".ea-regional-pricing-button-selected-text"
);
selectedPricingSpan.innerText = pricingSelect.value;

//add an event listener for the "change" event of the "select" element
pricingSelect.addEventListener("change", () => {
  const selectedPricing = pricingSelect.value;
  selectedPricingSpan.innerText = selectedPricing;
});

//access the span that will show the selected locale area and the one for the corresponding flag
const selectedLocaleSpan = document.querySelector(
  ".ea-locale-selector__selected-text"
);
selectedLocaleSpan.innerText = localeSelect.value;

const selectedLocaleFlagSpan = document.querySelector(
  ".ea-locale-selector__selected-flag"
);
selectedLocaleFlagSpan.id = localeSelect.value.split(" ").join("-");

//add an event listener for the "change" event of the "select" element
localeSelect.addEventListener("change", () => {
  const selectedLocale = localeSelect.value;
  selectedLocaleSpan.innerText = selectedLocale;
  selectedLocaleFlagSpan.id = localeSelect.value.split(" ").join("-");
});

//access the two network footer buttons relative to pricing and locale:
const pricingButton = document.querySelector("#ea-regional-pricing-button");
const localeButton = document.querySelector("#ea-locale-button");

//access the two div elements (active above 1007px)
const pricingList = document.querySelector("#princing-items");
const localeList = document.querySelector("#locale-items");

const mediaQuery = window.matchMedia("(min-width: 1007px)");

const priceClassToHide = document.querySelector(".openPrice");
const localeClassToHide = document.querySelector(".openLocale");

//add an event listener for the "click" event of the items of the lists
const pricingListItems = document.querySelectorAll(
  ".ea-regional-pricing-selector__item"
);
const localeListItems = document.querySelectorAll(".ea-locale-selector__item");

pricingListItems.forEach((item) => {
  item.addEventListener("click", () => {
    const dataTextValue = item.getAttribute("data-text");
    selectedPricingSpan.innerText = dataTextValue;
  });
});

localeListItems.forEach((item) => {
  item.addEventListener("click", () => {
    const dataTextValue = item.getAttribute("data-text");
    selectedLocaleSpan.innerText = dataTextValue;
    selectedLocaleFlagSpan.id = dataTextValue.split(" ").join("-");
  });
});

const pricingChevron = document.querySelector("#pricing-ea-chevron-footer");
const pricingWhitespace = document.querySelector(
  "#ea-pricing-button-whitespace"
);

// ! Function to toggle div in pricing select on 1007px window
function pricingOnClick() {
  // ! if click select add div class
  pricingButton.addEventListener("click", (e) => {
    if (mediaQuery.matches) {
      pricingChevron.classList.toggle("upside-down");
      pricingWhitespace.classList.toggle("whitespace");
      pricingList.classList.toggle("openPrice");
      localeList.classList.remove("openLocale");
      e.stopPropagation();
    } else {
      pricingList.classList.remove("openPrice");
    }
  });

  // ! if click anywhere on the screen remove class
  document.addEventListener("click", (e) => {
    pricingList.classList.remove("openPrice");
    pricingWhitespace.classList.remove("whitespace");
    pricingChevron.classList.remove("upside-down");
    e.stopPropagation();
  });
}

pricingOnClick();

const localeChevron = document.querySelector("#locale-ea-chevron-footer");
const localeWhitespace = document.querySelector("#ea-locale-button-whitespace");

// ! Function to toggle div in locale select on 1007px window
function localeOnClick() {
  // ! if click select add div class
  localeButton.addEventListener("click", (e) => {
    if (mediaQuery.matches) {
      localeChevron.classList.toggle("upside-down");
      localeWhitespace.classList.toggle("whitespace");
      localeList.classList.toggle("openLocale");
      pricingList.classList.remove("openPrice");

      e.stopPropagation();
    } else {
      localeList.classList.remove("openLocale");
    }
  });

  // ! if click anywhere on the screen remove class
  document.addEventListener("click", (e) => {
    localeList.classList.remove("openLocale");
    localeChevron.classList.remove("upside-down");
    localeWhitespace.classList.remove("whitespace");
    e.stopPropagation();
  });
}

localeOnClick();

//---- Copyright -----
// Set the copyright dynamically in the footer
const copyrightYear = document.querySelector("#copyright-year");

// Get the current year
const currentYear = new Date().getFullYear();

// Update the content of the element with the ID "copyright-year"
copyrightYear.innerText = currentYear