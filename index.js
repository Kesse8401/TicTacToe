const tileOnClickHandler = () => console.log('tile number');
                                                                    

const square = () => {
    const tile = document.createElement('div');
    tile.addEventListener( 'click', tileOnClickHandler );
    tile.className = 'field';
 	return tile;									
};

const wholeBoard = () => {
   for (var i = 0; i < 9; i++) {
    document.getElementsByClassName('singleTile').innerHTML;   //is tile local so how to use it in a different function?
    console.log("weee");
    };
};

wholeBoard();