function readPyramidHeightInTextBox (height){

}

function printPyramidUsingEnterButton (){
  ${'enterButton'}.on('click', function(){
    printSolidPyramid(heights)
  })
}

function printSolidPyramid(height) {
  for (let i = 0; i < height; i++) {
    let numSpaces = (2*height)-(2*i);
    let numChars = 2*i-1;

    helpers.printCountTimes(' ', (numSpaces/2));
    helpers.printCountTimes('#', numChars);
    helpers.printCountTimes(' ', (numSpaces/2));
    helpers.printNewLine();
  }
}