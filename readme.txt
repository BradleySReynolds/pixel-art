Etch-a-Sketch Project by Bradley Reynolds

This project can be viewed at https://bradleysreynolds.github.io/etch-a-sketch/

I took inspiration for design and functionality from this example project https://michalosman.github.io/etch-a-sketch/. I did not copy any code at all, so all the code is mine and created by me.

This project uses only html, css, and javascript. The Etch-a-Sketch allows the user to make a small pixel art project on the browser. There are 5 main functionlities: color mode, rainbow mode, eraser mode, clear and the resizing the etch-a-sketch. 

Color Mode --> Color mode is the simpliest function. The user selects a color from the color wheel and then is able to click or click-hover to draw on the etch a sketch. Changing the color on the color wheel will immedietly activate color mode. 

Rainbow Mode --> Rainbow mode gives a random color each time the user enters a new square on the etch-a-sketch.

Eraser --> Sets the current color to white

Clear --> Clears the entire board.

Resize Slider --> A change in the slider makes a square of the specified dimensions.

------------- Java Script code

I used a series of event listeners to make the drawing functionality. There is a variable called 'mousedown' that is initialized as being false, but when the user presses down on the mouse anywhere on the main container of the etch a sketch the variable is set to true, while this variable is true the user can draw on the etch a sketch. When the mouse button is lifted this the variable is set back to false. Using the 'mouseover' event, I can specify that if mousedown === true, then change the background color of the small box within the main container.

To Render the etch a sketch its self I use a loop that creates x amount of small divs within the main container. Since the etch a sketch is always going to be a square I can determin x by taking the value from the slider and just using the value^2, thus x = [value of slider] ^ 2. Also, the main container is set to grid so I have to edit the amount of column programmatically, I do this by setting the style of the main container using dom manipulation. mainContainer.style.gridTemplateColumns = `repeat(${value of slider}, 1fr)`