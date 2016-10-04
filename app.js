'use strict';

var allImages = [];
var imgContain = document.getElementById('imgContain');
var left = document.getElementById('left');
var center = document.getElementById('center');
var right = document.getElementById('right');
var leftImg;
var centerImg;
var rightImg;
var oldLeft;
var oldCenter;
var oldRight;

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
  leftImg = Math.floor(Math.random() * 20);
  centerImg = Math.floor(Math.random() * 20);
  rightImg = Math.floor(Math.random() * 20);
  console.log('left index is: ' + leftImg);
  console.log('center index is: ' + centerImg);
  console.log('right index is : ' + rightImg);
  if (leftImg === centerImg || leftImg === rightImg || centerImg === rightImg || leftImg === oldLeft || leftImg === oldCenter || leftImg === oldRight || centerImg === oldLeft || centerImg === oldCenter || centerImg === oldRight || rightImg === oldLeft || rightImg === oldCenter || rightImg === oldRight) {
    pick3();
  } else {
    left.src = allImages[leftImg].fname;
    center.src = allImages[centerImg].fname;
    right.src = allImages[rightImg].fname;
    oldLeft = leftImg;
    oldCenter = centerImg;
    oldRight = rightImg;
  }
}
pick3();
// }


// This function is the event handler for an image click
function handleImgClick(event) {
  if (event.target.id === 'left') {
    allImages[leftImg].clicked += 1;
    console.log(allImages[leftImg].clicked);
    pick3();
  }
  if (event.target.id === 'center') {
    allImages[centerImg].clicked += 1;
    console.log(allImages[centerImg].clicked);
    pick3();
  }
  if (event.target.id === 'right') {
    allImages[rightImg].clicked += 1;
    console.log(allImages[rightImg].clicked);
    pick3();
  }
  if (event.target.id === 'imgContain') {
    alert('You need to click on an image!');
    pick3();
  }
};

// Event listener for an image clicked
imgContain.addEventListener('click', handleImgClick);
