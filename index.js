const whichTile = () => console.log('tile number');         //variable whichTile zostaje przypisany funkcji whichTile. 
                                                            // Funkcja whichTile zwraca do konsoli string "tile number"

const square = () => {
    const tile = document.createElement('div');
    tile.addEventListener('onClick', whichTile );	
 	return tile;									
};                                                  // variable square zostaje przypisany funkcji która tworzy variable tile                                                      // która tworzy element div ORAZ adds addEventListener event handler do
                                                    // tile. W tym przypadku jest to onCLick i funkcja whichTile.
                                                    // na końcu square zwraca wartość const tile



/* 

let currentPlayer = player1;

let whosTurn = () => {
   if (currentPlayer == player1) {
     X cursor shows
    }
    else if (currentPlayer == player2) {
     0 cursor shows
    }
    else {
     regular cursor shows 
    };
};
*/