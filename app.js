'use strict';

var allImages = [];
var imgContain = document.getElementById('imgContain');
var randImg = [];

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
  new MakeImages('Bag', 'images/bag.jpg');
  new MakeImages('Banana', 'images/banana.jpg');
  new MakeImages('Bathroom', 'images/bathroom.jpg');
  new MakeImages('Boots', 'images/boots.jpg');
  new MakeImages('Breakfast', 'images/breakfast.jpg');
  new MakeImages('Bubblegum', 'images/bubblegum.jpg');
  new MakeImages('Chair', 'images/chair.jpg');
  new MakeImages('Cthulhu', 'images/cthulhu.jpg');
  new MakeImages('Dog Duck', 'images/dog-duck.jpg');
  new MakeImages('Dragon', 'images/dragon.jpg');
  new MakeImages('Pen', 'images/pen.jpg');
  new MakeImages('Pet Sweep', 'images/pet-sweep.jpg');
  new MakeImages('Scissors', 'images/scissors.jpg');
  new MakeImages('Shark', 'images/shark.jpg');
  new MakeImages('Sweep', 'images/sweep.png');
  new MakeImages('Tauntaun', 'images/tauntaun.jpg');
  new MakeImages('Unicorn', 'images/unicorn.jpg');
  new MakeImages('USB', 'images/usb.gif');
  new MakeImages('Water Can', 'images/water-can.jpg');
  new MakeImages('Wine Glass', 'images/wine-glass.jpg');
};
makeImgObj();

function pick3() {
  for (var i = 0; i < 3; i++) {
    randImg.push(Math.floor(Math.random() * 20));
  }
}
pick3();
console.log(randImg[0]);
console.log(randImg[1]);
console.log(randImg[2]);

function makeImageShow() {
  for (var j = 0; j < 3; j++) {
    var imgsrcEl = document.createElement('img');
    imgsrcEl.src = allImages[randImg[j]].fname;
    imgContain.appendChild(imgsrcEl);
  }
}
makeImageShow();


// This function is the event handler for the submission of new store
// function handleImgClick(event) {
//
// var newImgClicked = event.target.imgContain.value;
//
// }
// Event listener for an image clicked
// imgContain.addEventListener('click', handleImgClick);
