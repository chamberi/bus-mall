'use strict';

var allImages = [];
var imgContain = document.getElementById('imgContain');

// constructor function for making image objects
function MakeImages(imgname, fname) {
  this.imgname = imgname;
  this.fname = fname;
  this.shown = 0;
  this.clicked = 0;
  allImages.push(this);
}

// call constructors
function makeImgObj() {
  new MakeImages('Bag', 'bag.jpg');
  new MakeImages('Banana', 'banana.jpg');
  new MakeImages('Bathroom', 'bathroom.jpg');
  new MakeImages('Boots', 'boots.jpg');
  new MakeImages('Breakfast', 'breakfast.jpg');
  new MakeImages('Bubblegum', 'bubblegum.jpg');
  new MakeImages('Chair', 'chair.jpg');
  new MakeImages('Cthulhu', 'cthulhu.jpg');
  new MakeImages('Dog Duck', 'dog-duck.jpg');
  new MakeImages('Dragon', 'dragon.jpg');
  new MakeImages('Pen', 'pen.jpg');
  new MakeImages('Pet Sweep', 'pet-sweep.jpg');
  new MakeImages('Scissors', 'scissors.jpg');
  new MakeImages('Shark', 'shark.jpg');
  new MakeImages('Sweep', 'sweep.png');
  new MakeImages('Tauntaun', 'tauntaun.jpg');
  new MakeImages('Unicorn', 'unicorn.jpg');
  new MakeImages('USB', 'usb.gif');
  new MakeImages('Water Can', 'water-can.jpg');
  new MakeImages('Wine Glass', 'wine-glass.jpg');
};
makeImgObj();



// Event listener for an image clicked
// imgContain.addEventListener('click', handleImgClick);
