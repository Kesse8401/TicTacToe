const whichTile = () => console.log('tile number');         //variable whichTile zostaje przypisany funkcji whichTile. 
                                                            // Funkcja whichTile zwraca do konsoli string "tile number"

const square = () => {
    const tile = document.createElement('div');
    tile.addEventListener('onClick', whichTile );	
 	return tile;									
};                                                  // variable square zostaje przypisany funkcji która tworzy variable tile                                                      // która tworzy element div ORAZ adds addEventListener event handler do
                                                    // tile. W tym przypadku jest to onCLick i funkcja whichTile.
                                                    // na końcu square zwraca wartość const tile



/* Skąd whichTile ma wiedzieć który tile został clicknięty skoro nie ma zadnych tajli do klikniecia?
   Nalezy podmienić string "tile number" na array providujący numery od 0-8 eby concole.log mógł wskazać które pole zostało kliknięte.
   How to use appropriate pointer on roll over without css and html? */

