const tileOnClickHandler = () => console.log('tile number');
                                                                    

const square = (pipko) => {
    const tile = document.createElement('div');
    tile.addEventListener( 'click', tileOnClickHandler );
    tile.className = 'field';
    tile.setAttribute('id', pipko);
  	return tile;									
};

const wholeBoard = () => {
    let gameBoard = document.getElementById('gameBoard');
    if(gameBoard === null ) {
        gameBoard = document.createElement('div');
        gameBoard.setAttribute("id", "gameBoard");
        document.body.appendChild(gameBoard);   
        for (let i = 0; i < 9; i++) {
           const mytile = square(i);
           gameBoard.appendChild(mytile);
        }; 
    }
    return gameBoard;
 };
