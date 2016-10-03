'use strict';

var allImages = [];
var imgContain = document.getElementById('imgContain');

// constructor function for making image objects
function makeImages(imgname, fname) {
  this.imgname = imgname;
  this.fname = filename;
  this.shown = 0;
  this.clicked = 0;
}

// call constructors
function makeImgObj() {
  new makeImages = ('Bag', bag.jpg);
  new makeImages = ('Banana', banana.jpg);
  new makeImages = ('Bathroom', bathroom.jpg);
  new makeImages = ('Boots', boots.jpg);
  new makeImages = ('Breakfast', breakfast.jpg);
  new makeImages = ('Bubblegum', bubblegum.jpg);
  new makeImages = ('Chair', chair.jpg);
  new makeImages = ('Cthulhu', cthulhu.jpg);
  new makeImages = ('Dog Duck', dog-duck.jpg);
  new makeImages = ('Dragon', dragon.jpg);
  new makeImages = ('Pen', pen.jpg);
  new makeImages = ('Pet Sweep', pet-sweep.jpg);
  new makeImages = ('Scissors', scissors.jpg);
  new makeImages = ('Shark', shark.jpg);
  new makeImages = ('Sweep', sweep.png);
  new makeImages = ('Tauntaun', tauntaun.jpg);
  new makeImages = ('Unicorn', unicorn.jpg);
  new makeImages = ('USB', usb.gif);
  new makeImages = ('Water Can', water-can.jpg);
  new makeImages = ('Wine Glass', wine-glass.jpg);
};

// Event listener for an image clicked
imgContain.addEventListener('click', handleImgClick);
