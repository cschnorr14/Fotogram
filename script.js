const albumTitle = [
    "Alpenüberquerung",
    "Tansania",
    "La Réunion",
    "Patagonien",
    "Antarktis",
    "Argentinien",
    "Rio de Janeiro",
    "Galapagos",
    "Atacama",
    "Bolivien",
    "Peru",
    "Panama",
    "Taiwan",
    "Kanaren",
    "Marokko"
];

const allPictures = [
    myImgsBike, myImgsTanzania, myImgsLaReunion, myImgsPatagonia, myImgsAntarctica,
    myImgsArgentina, myImgsBrasil, myImgsGalapagos, myImgsAtacama, myImgsBolivia,
    myImgsPeru, myImgsPanama, myImgsTaiwan, myImgsKanaren, myImgsMarokko
];

//base states at beginning
let currentPictures = [];

let currentIndex = 0; 

const dialogRef = document.getElementById("dialog");

const nameAlbumTitle = document.getElementById("dialogTitle");

const dialogIMG = document.getElementById("dialogIMG");

const amountPictures = document.getElementById("amountPics");

//to dynamically render index-page
function renderGallery() {
    const container = document.getElementById('gallery-container');
    if (!container) return;
    
    let htmlContent = "";
    
    //going through all albums
    for (let i = 0; i < allPictures.length; i++) {
        const currentAlbum = allPictures[i];
        const coverBild = currentAlbum[0]; 
        const title = albumTitle[i];
 
        container.innerHTML += getNoteTemplate(i, coverBild, title);
    }
}

//to find the correct album
function renderFiltered(index) {
    currentPictures = allPictures[index]; 
    nameAlbumTitle.innerHTML = albumTitle[index]; 
    currentIndex = 0; 
    render(); 
}

//function to open dialog
function openDialog() {
    dialogRef.showModal();
    dialogRef.classList.add("opened");
    document.body.classList.add("no-scroll"); 
}

//function to close dialog
function closeDialog() {
    dialogRef.close();
    dialogRef.classList.remove("opened");
    document.body.classList.remove("no-scroll"); 
}

//function to load pictures of a certain album/array into dialog
function render() {
    if (currentPictures.length > 0) {
        dialogIMG.src = `./img/final/${currentPictures[currentIndex]}`;
        dialogIMG.alt = currentPictures[currentIndex];
        amountPictures.innerHTML = `${currentIndex + 1} / ${currentPictures.length}`;
    }
}

//closes dialog if clicked on background 
dialog.addEventListener('click', (event) => {
    const rect = dialog.getBoundingClientRect(); 
    const isInDialog = (               
    event.clientX >= rect.left &&       
    event.clientX <= rect.right &&     
    event.clientY >= rect.top &&        
    event.clientY <= rect.bottom        
    );

    if(!isInDialog){
    closeDialog();
    }
});

//closes dialog when escape is pressed
dialog.addEventListener('close', () => {
    closeDialog();
});

//functions to scroll through photo album
function goForward(event) {
    event.stopPropagation();            
    if (currentIndex < currentPictures.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; 
    }
    render();
}

function goBack(event) {
    event.stopPropagation();
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = currentPictures.length - 1; 
    }
    render();
}

// creates gallery if page is loaded
renderGallery();




