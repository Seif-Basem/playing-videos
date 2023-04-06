let go = document.getElementById("go");
let input = document.getElementById("search");
let videos = document.querySelectorAll("section iframe");
let play = document.getElementById("play");
let refrech = document.getElementById("refrech");

// click go to put the link in the iframes
go.onclick = function () {
  for (let i=0; i<videos.length; i++) {
    videos[i].src = input.value;
  }
}

input.addEventListener('input', function() {
  // Save the input value to local storage
  localStorage.setItem('inputValue', input.value);
});
// Retrieve the saved value from local storage
const savedValue = localStorage.getItem('inputValue');
if (savedValue) {
  // Set the input value to the saved value
  input.value = savedValue;
  // set the input value to the iframes
  for (let i=0; i<videos.length; i++) {
    videos[i].src = input.value;
  }
}

// play btn add this little code to the link to start the video
play.onclick = function () {
  for (let i=0; i<videos.length; i++) {
    videos[i].src += "?autoplay=1";
  }
}

// refrech btn
refrech.onclick = function () {
  window.location.reload();
}

// window.localStorage.clear();