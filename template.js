//template function to render album
function getNoteTemplate(i, coverBild, title){
    return ` <button class="photo_button" 
                    aria-haspopup="dialog" 
                    aria-controls="dialog"
                    onclick="openDialog(); renderFiltered(${i})">
                <img class="album" src="./img/final/${coverBild}" alt="${title}">
            </button>
    `;
}