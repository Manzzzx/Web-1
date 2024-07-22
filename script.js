const stickyTop = document.querySelector(".sticky-top");
const offcanvas = document.querySelector(".offcanvas");

// benerin error blank pada tombol hamburger di navbar
offcanvas.addEventListener("show.bs.offcanvas", function () {
  stickyTop.style.overflow = "visible";
});

// benerin error blank ketika close pada offcanvas
offcanvas.addEventListener("hidden.bs.offcanvas", function () {
  stickyTop.style.overflow = "hidden";
});



// fitur disable scroll 

// const rootElement = document.documentElement(":root");  //<-- code error

var rootElement = document.documentElement;   //buat mematikan smooth scroll pada bootstrap sebelum user click tombol lihat undangan
const audioIconWrapper = document.querySelector('.audio-icon-wrapper');
const audioIcon = document.querySelector('.audio-icon-wrapper i');
const song = document.querySelector('#song');
let isPlaying = false;

function disableScroll() {
  // const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  // const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  const scrollLeft = window.scrollX || document.documentElement.scrollLeft;

  window.onscroll = function () {
    window.scrollTo(scrollTop, scrollLeft);
  };
  // buat mematikan smooth scroll bootstrap, sebelum user click tombol lihat undangan
  rootElement.style.scrollBehavior = "auto";
}
// untuk menyalakan kembali smooth scroll saat user sudah click lihat undangan
function enableScroll() {
  window.onscroll = function () {};
  rootElement.style.scrollBehavior = "smooth";
  playAudio();
}

// Audio
function playAudio() {
  song.volume = 0.1;
  audioIconWrapper.style.display = 'flex';
  song.play();
  isPlaying = true;
}

audioIconWrapper.onclick = function() {
  if (isPlaying) {
    song.pause();
    audioIcon.classList.remove('bi-disc');
    audioIcon.classList.add('bi-pause-circle');
  } else {
    song.play();
    audioIcon.classList.add('bi-disc');
    audioIcon.classList.remove('bi-pause-circle');
  }

  isPlaying = !isPlaying;
}

disableScroll();



// konfirmasi form
window.addEventListener("load", function () {
const form = document.getElementById("my-form");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
        method: "POST",
        body: data,
    })
    .then(() => {
        alert("Konfirmasi kehadiran berhasil terkirim!");
    });
    });
});

// buat ganti nama tamu yang sesuai  <-- code error
const urlParams = new URLSearchParams(window.location.search);
const nama = urlParams.get('n') || '';
const pronoun = urlParams.get('p') || 'Bapak/Ibu/Saudara/i';
const namaContainer = document.querySelector('.hero h4 span');
namaContainer.innerText = `${pronoun} ${nama},`.replace(/ ,$/, ',');

document.querySelector('#nama').value = nama;



