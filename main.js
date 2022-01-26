const container = document.querySelector('.container');
let numbSquares = 16;

function getRow(){
    for(let i = 0; i < numbSquares; i++){
        const newSquare = document.createElement('div');
        newSquare.classList = 'square'
        newSquare.setAttribute('style',`width:${600/numbSquares}px;height:${600/numbSquares}px`);
        container.appendChild(newSquare);
    }
}

function getGrid(){
    for(let j =0; j < numbSquares; j++){
        getRow();
    }
}

getGrid();

const squares = document.querySelectorAll('.square');

squares.forEach((square)=>{

    square.addEventListener('mouseover', (e)=>{
        let randoR = Math.floor((Math.random())*256);
        let randomG = Math.floor((Math.random())*256);
        let randomB = Math.floor((Math.random())*256);

        e.target.style.backgroundColor = `rgb(${randoR},${randomG},${randomB})`;

    });

});



