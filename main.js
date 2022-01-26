const container = document.querySelector('.container')



let numbSquares = 16;

for(let i = 0; i < numbSquares; i++){
    const square = document.createElement('div');
    square.classList = 'square'
    square.setAttribute('style',`width:${600/numbSquares}px;height:${600/numbSquares}px`);
    //square.setAttribute('style',`height:"${600/numbSquares}"`);
    container.appendChild(square);
}

