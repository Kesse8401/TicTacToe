const tileOnClickHandler = () => console.log('tile number');
                                                                    

const square = () => {
    const tile = document.createElement('div');
    tile.addEventListener( 'click', tileOnClickHandler );
    tile.className = 'field';
 	return tile;									
};

const wholeBoard = () => {
    const gameBoard = document.createElement('div');
    gameBoard.setAttribute("id", "gameBoard");
    document.body.appendChild(gameBoard);
    return gameBoard; 
 };
