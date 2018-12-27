;(function() {
  var imageArray = [{image: 'car.jpg', alt: 'Car'}, {image: 'apple.jpg', alt: 'Apple'}, {image: 'cat.jpg', alt: 'Cat'}, {image: 'orange.jpg', alt: 'Orange'}, {image: 'frog.jpg', alt: 'Frog'}];
  var currentSlide = 0;
  var newSlide = {image: 'dog.jpg', alt: 'Dog'};

  console.log(switchToNextSlide());
  console.log(switchToPreviousSlide());
  console.log(switchToNthSlide(2));
  console.log(getInformationAboutCurrentSlide());
  console.log(addNewSlide(3, newSlide));
  console.log(deleteNthSlide(1));

  function switchToNextSlide() {
    if (currentSlide < imageArray.length - 1) {
      currentSlide++;
    } else {
      currentSlide = 0;
    }
    return currentSlide;
  }

  function switchToPreviousSlide() {
    if (currentSlide > 0) {
      currentSlide--;
    } else {
      currentSlide = imageArray.length - 1;
    }
    return currentSlide;
  }

  function switchToNthSlide(n) {
    if ((n >= 0) && (n <= imageArray.length - 1)) {
      currentSlide = n;
    }
    return currentSlide;
  }

  function getInformationAboutCurrentSlide() {
    return imageArray[currentSlide];
  }

  function addNewSlide(n, newSlide) {
    if (n === 0) {
      imageArray.unshift(newSlide);
    } else if (n === imageArray.length - 1) {
      imageArray.push(newSlide);
    } else if (n > 0 && n < imageArray.length - 1) {
      imageArray.splice(n, 0, newSlide);
    }
    return imageArray;
  }

  function deleteNthSlide(n) {
    if (n === 0) {
      imageArray.shift();
    } else if (n === imageArray.length - 1) {
      imageArray.pop();
    } else if (n > 0 && n < imageArray.length - 1) {
      imageArray.splice(n, 1);
    }
    return imageArray;
  }
}());