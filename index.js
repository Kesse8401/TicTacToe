const tileOnClickHandler = () => console.log('tile number');
                                                                    

const square = () => {
    const tile = document.createElement('div');
    tile.addEventListener( 'click', tileOnClickHandler );
    tile.className = 'field';
 	return tile;									
};
