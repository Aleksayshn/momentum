const playList = [
    {
        title: 'Aqua Caelestis',
        url: '../assets/sounds/Aqua Caelestis.mp3',
        duration: '00:58'
    }, {
        title: 'River Flows In You',
        url: '../assets/sounds/River Flows In You.mp3',
        duration: '03:50'
    },
    {
        title: 'Summer Wind',
        url: '../assets/sounds/Summer Wind.mp3',
        duration: '05:05'
    },
    {
        title: 'Ennio Morricone',
        url: '../assets/sounds/Ennio Morricone.mp3',
        duration: '05:03'
    }
];

const playBtn = document.querySelector('.play');
const playPrevBtn = document.querySelector('.play-prev');
const playNextBtn = document.querySelector('.play-next');
const playListEl = document.querySelector('.play-list');
const audio = new Audio();
let currentSongIndex = 0;
let isPlaying = false;

function initPlayList() {
    playList.forEach((song, index) => {
        const li = document.createElement('li');
        const titleEl = document.createElement('span');
        const durationEl = document.createElement('span');
        titleEl.textContent = song.title;
        durationEl.textContent = song.duration;
        li.appendChild(titleEl);
        li.appendChild(durationEl);
        li.addEventListener('click', () => {
            currentSongIndex = index;
            playSong();
        });
        playListEl.appendChild(li);
    });
}

function playSong() {
    const currentSong = playList[currentSongIndex];
    audio.src = currentSong.url;
    audio.play();
    isPlaying = true;
    playBtn.classList.add('pause');
}

function pauseSong() {
    audio.pause();
    isPlaying = false;
    playBtn.classList.remove('pause');
}

function togglePlayPause() {
    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
}

function playPrev() {
    currentSongIndex = (currentSongIndex - 1 + playList.length) % playList.length;
    playSong();
}

function playNext() {
    currentSongIndex = (currentSongIndex + 1) % playList.length;
    playSong();
}

initPlayList();

playBtn.addEventListener('click', togglePlayPause);
playPrevBtn.addEventListener('click', playPrev);
playNextBtn.addEventListener('click', playNext);