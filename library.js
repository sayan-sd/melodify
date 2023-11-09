const music = new Audio("./Audio/library/1.mp3");
// music.play();
// properties of song name title and poster set up
const songs = [
    {
        id: 1,
        songName: `<h4>Tu Hai Kahan<br><span>Aur</span></h4>`,
        poster: "./Image/library/1.jpg",
    },
    {
        id: 2,
        songName: `<h4>Baat Itni Si Hai<br><span>Twin Strings
</span></h4>`,
        poster: "./Image/library/2.jpg",
    },
    {
        id: 3,
        songName: `<h4>Nahin Milta<br><span>Bayaan</span></h4>`,
        poster: "./Image/library/3.jpg",
    },
    {
        id: 4,
        songName: `<h4>Kya Karein<br><span>Aditya Rikhari</span></h4>`,
        poster: "./Image/library/4.jpg",
    },
    {
        id: 5,
        songName: `<h4>Aise Kyun<br><span>Rekha Bhardwaj</span></h4>`,
        poster: "./Image/library/5.jpg",
    },
    {
        id: 6,
        songName: `<h4>Baarishein.<br><span>Anuv Jain</span></h4>`,
        poster: "./Image/library/6.jpg",
    },
    {
        id: 7,
        songName: `<h4>Phir Se Shuru<br><span>Ashu Shukla</span></h4>`,
        poster: "./Image/library/7.jpg",
    },
    {
        id: 8,
        songName: `<h4>Meri Baaton Mein Tu<br><span>Anuv Jain
</span></h4>`,
        poster: "./Image/library/8.jpg",
    },
    {
        id: 9,
        songName: `<h4>Abhi Na Jao<br><span>Twin String</span></h4>`,
        poster: "./Image/library/9.jpg",
    },
    {
        id: 10,
        songName: `<h4>Akela Hoon<br><span>Amar</span></h4>`,
        poster: "./Image/library/10.jpg",
    },
    {
        id: 11,
        songName: `<h4>Aahatein<br><span>Prithvi Gandharv </span></h4>`,
        poster: "./Image/library/11.jpg",
    },
    {
        id: 12,
        songName: `<h4>Ae Kash Ke Hum<br><span>Mohammed Irfan
</span></h4>`,
        poster: "./Image/library/12.jpg",
    },
    {
        id: 13,
        songName: `<h4>Jo Tu Na Mila<br><span>Asim Azhar
</span></h4>`,
        poster: "./Image/library/13.jpg",
    },
    {
        id: 14,
        songName: `<h4>Pabo Ki Pabona<br><span>Debayan Banerjee
</span></h4>`,
        poster: "./Image/library/14.jpg",
    },
    {
        id: 15,
        songName: `<h4>Ek Vari<br><span>Mitraz
</span></h4>`,
        poster: "./Image/library/15.jpg",
    },
    {
        id: 16,
        songName: `<h4>Tum Aur Main<br><span>Ashu Shukla</span></h4>`,
        poster: "./Image/library/16.jpg",
    },
    {
        id: 17,
        songName: `<h4>Farq hai<br> <span>Suzonn</span></h4>`,
        poster: "./Image/library/17.jpg",
    },
    {
        id: 18,
        songName: `<h4>Laute Nahi<br><span>Papon</span></h4>`,
        poster: "./Image/library/18.jpg",
    },
    {
        id: 19,
        songName: `<h4>Taakey Olpo Kachhe Dakchhi<br><span>Mahtim Shakib</span></h4>`,
        poster: "./Image/library/19.jpg",
    },
    {
        id: 20,
        songName: `<h4>Yeh Dil Tum Bin<br><span>Bhanu Pratap Singh</span></h4>`,
        poster: "./Image/library/20.jpg",
    },
    {
        id: 21,
        songName: `<h4>Tu Rehti Hai<br><span>Aditya Rikhari</span></h4>`,
        poster: "./Image/library/21.jpg",
    },
    {
        id: 22,
        songName: `<h4>Ghawrbaari<br><span>Anupam Roy</span></h4>`,
        poster: "./Image/library/22.jpg",
    },

    {
        id: "hero",
        songName: `<h4>Do Pal<br><span>Namita Choudhary</span></h4>`,
        poster: "./Image/library/hero.jpg",
    },
];
Array.from(document.getElementsByClassName("song-item")).forEach((e, i) => {
    e.getElementsByTagName("img")[0].src = songs[i].poster;
    e.getElementsByTagName("h4")[0].innerHTML = songs[i].songName;
});

//working on music control bar
const masterPlay = document.getElementById("audio-play");
const wave = document.getElementsByClassName("wave")[0];

//play pause song
masterPlay.addEventListener("click", () => {
    if (music.paused || music.currentTime <= 0) {
        // playMusic();
        // wave.classList.add("active-wave");
        // masterPlay.classList.remove("bi-play-fill");
        // masterPlay.classList.add("bi-pause-fill");
        posterMasterPlay.src = `./Image/library/${index}.jpg`;
        music.play();
        masterPlay.classList.remove("bi-play-fill");
        masterPlay.classList.add("bi-pause-fill");

        const a = document.createElement("p");
        a.innerHTML = songs[index - 1].songName;
        downloadBtn.href = `./Audio/library/${index}.mp3`;
        downloadBtn.download = a.innerText;

        let songTitles = songs.filter((els) => {
            return els.id == index;
        });
        songTitles.forEach((elss) => {
            let { songName } = elss;
            title.innerHTML = songName;
        });
        wave.classList.add("active-wave");
        makeCurrectBG();
        makeCurrentPlay();
        Array.from(document.getElementsByClassName("song-item"))[
            index - 1
        ].style.background = "rgba(105,105,105,0.1)";

        Array.from(document.getElementsByClassName("playlistPlay"))[
            index - 1
        ].classList.add("bi-pause-circle-fill");
        Array.from(document.getElementsByClassName("playlistPlay"))[
            index - 1
        ].classList.remove("bi-play-circle-fill");
    } else {
        music.pause();
        wave.classList.remove("active-wave");
        masterPlay.classList.remove("bi-pause-fill");
        masterPlay.classList.add("bi-play-fill");

        Array.from(document.getElementsByClassName("playlistPlay"))[
            index - 1
        ].classList.add("bi-play-circle-fill");
        Array.from(document.getElementsByClassName("playlistPlay"))[
            index - 1
        ].classList.remove("bi-pause-circle-fill");
    }
});

//backgrond and icon for current play
const makeCurrectBG = () => {
    Array.from(document.getElementsByClassName("song-item")).forEach((el) => {
        el.style.background = "rgba(105,105,105,0)";
    });
};
const makeCurrentPlay = () => {
    Array.from(document.getElementsByClassName("playlistPlay")).forEach(
        (el) => {
            el.classList.add("bi-play-circle-fill");
            el.classList.remove("bi-pause-circle-fill");
        }
    );
};

//current music play
let index = 1;
let posterMasterPlay = document.querySelector("[master-play-poster]");
let title = document.querySelector("#title");
const downloadBtn = document.getElementById("download-btn");
let previous_index = -1;
Array.from(document.getElementsByClassName("playlistPlay")).forEach((e) => {
    e.addEventListener("click", (el) => {
        index = el.target.id;
        //under developmet
        if (index == previous_index) {
            if (music.paused) {
                music.play();
                wave.classList.add("active-wave");
                makeCurrectBG();
                makeCurrentPlay();
                Array.from(document.getElementsByClassName("song-item"))[
                    index - 1
                ].style.background = "rgba(105,105,105,0.1)";
                el.target.classList.add("bi-pause-circle-fill");
                el.target.classList.remove("bi-play-circle-fill");

                masterPlay.classList.add("bi-pause-fill");
                masterPlay.classList.remove("bi-play-fill");
            } else {
                music.pause();
                wave.classList.remove("active-wave");
                makeCurrectBG();
                makeCurrentPlay();
                Array.from(document.getElementsByClassName("song-item"))[
                    index - 1
                ].style.background = "rgba(105,105,105,0.1)";
                el.target.classList.remove("bi-pause-circle-fill");
                el.target.classList.add("bi-play-circle-fill");

                masterPlay.classList.remove("bi-play-fill");
                masterPlay.classList.add("bi-pause-fill");
            }
        } else {
            heroSectionTrackPlay.innerHTML = "PLAY";
            previous_index = index;
            // console.log(clickedValue);
            playMusic();
        }
    });
});

//left - right button control of - pupular song listing
const popularSong = document.getElementsByClassName("popular-song-ul")[0];
const popularSongLeft = document.getElementById("popular-song-switch-left-btn");
const popularSongRight = document.getElementById(
    "popular-song-switch-right-btn"
);
popularSongLeft.addEventListener("click", () => {
    popularSong.scrollLeft -= 640;
});
popularSongRight.addEventListener("click", () => {
    popularSong.scrollLeft += 640;
});

//left right button control of - popular artist listing
const popularArtist = document.getElementsByClassName("popular-artist-ul")[0];
const pipularArtistLeft = document.getElementById("popular-artist-switch-left");
const pipularArtistRight = document.getElementById(
    "popular-artist-switch-right"
);
pipularArtistLeft.addEventListener("click", () => {
    popularArtist.scrollLeft -= 333;
});
pipularArtistRight.addEventListener("click", () => {
    popularArtist.scrollLeft += 333;
});

//music time and range controler
const currentSongStart = document.querySelector("[currentSongStart]");
const currentSongEnd = document.querySelector("[currentSongEnd]");

//input range
const seek = document.getElementById("seek");
const bar2 = document.getElementById("bar2");
const dot = document.getElementById("dot");

music.addEventListener("timeupdate", () => {
    const musicCurrentTime = music.currentTime;
    const musicDuration = parseInt(music.duration);

    if (!isNaN(musicDuration)) {
        let songMin = Math.floor(musicDuration / 60);
        let songSec = Math.floor(musicDuration % 60);

        if (songSec < 10) songSec = `0${songSec}`;
        currentSongEnd.innerText = `${songMin}:${songSec}`;

        let songMinStart = Math.floor(musicCurrentTime / 60);
        let songSecStart = Math.floor(musicCurrentTime % 60);
        if (songSecStart < 10) songSecStart = `0${songSecStart}`;
        currentSongEnd.innerText = `${songMin}:${songSec}`;
        currentSongStart.innerText = `${songMinStart}:${songSecStart}`;

        //progress bar
        let progressBar = parseInt((musicCurrentTime / musicDuration) * 100);
        seek.value = progressBar;
        let seekbar = seek.value;
        bar2.style.width = `${seekbar}%`;
        dot.style.left = `${seekbar}%`;
    }
});

seek.addEventListener("change", () => {
    music.currentTime = (seek.value * music.duration) / 100;
});

//volume bar
const vol_icon = document.querySelector("[volume-icon]");
const volInput = document.getElementById("vol-seek");
const volBar = document.getElementsByClassName("vol-bar")[0];
const volDot = document.getElementsByClassName("vol-dot")[0];

volInput.addEventListener("change", () => {
    // bi-volume-off-fill
    if (volInput.value == 0) {
        vol_icon.classList.remove("bi-volume-up-fill");
        vol_icon.classList.remove("bi-volume-down-fill");
        vol_icon.classList.remove("bi-volume-off-fill");
        vol_icon.classList.add("bi-volume-mute-fill");
    } else if (volInput.value > 0 && volInput.value <= 25) {
        vol_icon.classList.remove("bi-volume-up-fill");
        vol_icon.classList.remove("bi-volume-mute-fill");
        vol_icon.classList.remove("bi-volume-down-fill");
        vol_icon.classList.add("bi-volume-off-fill");
    } else if (volInput.value > 25 && volInput.value <= 50) {
        vol_icon.classList.remove("bi-volume-mute-fill");
        vol_icon.classList.remove("bi-volume-down-fill");
        vol_icon.classList.remove("bi-volume-off-fill");
        vol_icon.classList.add("bi-volume-down-fill");
    } else {
        vol_icon.classList.remove("bi-volume-mute-fill");
        vol_icon.classList.remove("bi-volume-off-fill");
        vol_icon.classList.remove("bi-volume-down-fill");
        vol_icon.classList.add("bi-volume-up-fill");
    }
    let vol_a = volInput.value;
    volBar.style.width = `${vol_a}%`;
    volDot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
});

const previous = document.getElementById("previous-track");
const next = document.getElementById("next-track");

previous.addEventListener("click", () => {
    index -= 1;

    if (index < 1) {
        index = Array.from(document.getElementsByClassName("song-item")).length;
    }

    playMusic();
});

next.addEventListener("click", () => {
    index++;

    if (
        index > Array.from(document.getElementsByClassName("song-item")).length
    ) {
        index = 1;
    }
    playMusic();
});

// music 2
//shuffle music
const shuffle = document.getElementById("shuffle");
shuffle.addEventListener("click", () => {
    // bi-music-note-beamed bi-arrow-repeat bi-shuffle
    let a;
    if (shuffle.classList.contains("bi-music-note-beamed")) a = "next";
    else if (shuffle.classList.contains("bi-arrow-repeat")) a = "repeat";
    else if (shuffle.classList.contains("bi-shuffle")) a = "shuffle";
    console.log(a);
    switch (a) {
        case "next":
            shuffle.classList.add("bi-arrow-repeat");
            shuffle.classList.remove("bi-shuffle");
            shuffle.classList.remove("bi-music-note-beamed");
            break;

        case "repeat":
            shuffle.classList.add("bi-shuffle");
            shuffle.classList.remove("bi-arrow-repeat");
            shuffle.classList.remove("bi-music-note-beamed");
            break;

        case "shuffle":
            shuffle.classList.add("bi-music-note-beamed");
            shuffle.classList.remove("bi-arrow-repeat");
            shuffle.classList.remove("bi-shuffle");
            break;
    }
});
music.addEventListener("ended", () => {
    let b;
    if (shuffle.classList.contains("bi-music-note-beamed")) b = "next";
    else if (shuffle.classList.contains("bi-arrow-repeat")) b = "repeat";
    else if (shuffle.classList.contains("bi-shuffle")) b = "shuffle";

    switch (b) {
        case "next":
            if (
                index >=
                Array.from(document.getElementsByClassName("song-item")).length
            ) {
                index = 1;
            } else index++;
            playMusic();
            break;

        case "repeat":
            playMusic();
            break;

        case "shuffle":
            index = Math.floor(Math.random() * songs.length + 1);
            break;
    }

    // if (
    //     index >= Array.from(document.getElementsByClassName("song-item")).length
    // ) {
    //     index = 1;
    // } else index++;
    // playMusic();
});

const playMusic = () => {
    music.src = `./Audio/library/${index}.mp3`;
    posterMasterPlay.src = `./Image/library/${index}.jpg`;
    music.play();
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });
    songTitles.forEach((elss) => {
        let { songName } = elss;
        title.innerHTML = songName;
    });
    wave.classList.add("active-wave");
    makeCurrectBG();
    makeCurrentPlay();  
    Array.from(document.getElementsByClassName("song-item"))[
        index - 1
    ].style.background = "rgba(105,105,105,0.1)";
    Array.from(document.getElementsByClassName("playlistPlay"))[
        index - 1
    ].classList.add("bi-pause-circle-fill");
    Array.from(document.getElementsByClassName("playlistPlay"))[
        index - 1
    ].classList.remove("bi-play-circle-fill");
};

//search box
const searchResult = document.querySelector(".search-result");
songs.forEach((element) => {
    const { id, songName, poster } = element;
    // console.log(id);
    let card = document.createElement("a");
    card.classList.add("card");
    card.href = "#" + id;

    card.innerHTML = ` <img src="${poster}">
                                ${songName}`;
    searchResult.appendChild(card);

    card.addEventListener("click", () => {
        index = id;
        playMusic();
    });
});

let input = document.getElementsByTagName("input")[0];
input.addEventListener("keyup", () => {
    let input_value = input.value.toLocaleUpperCase();
    let items = searchResult.getElementsByTagName("a");
    for (let index = 0; index < items.length; index++) {
        let temp = items[index].getElementsByTagName("h4")[0];
        let text_value = temp.textContent || temp.innerHTML;

        if (text_value.toLocaleUpperCase().indexOf(input_value) > -1) {
            items[index].style.display = "flex";
        } else {
            items[index].style.display = "none";
        }

        if (input.value == 0) {
            searchResult.style.display = "none";
        } else {
            searchResult.style.display = "";
        }
    }
});

// play pause hero section btn
const heroSectionTrackPlay = document.querySelector("[hero-section-playBtn]");
heroSectionTrackPlay.addEventListener("click", () => {
    if (index == "hero") {
        if (music.paused || music.currentTime <= 0) {
            music.play();
            heroSectionTrackPlay.innerHTML = "PAUSE";
        } else {
            music.pause();
            heroSectionTrackPlay.innerHTML = "PLAY";
        }
    } else {
        heroSectionTrackPlay.innerHTML = "PAUSE";
        index = "hero";
        playMusic();
    }
});

//side bar section
let sidebar_active = document.getElementById("get-sidebar");
let left_sidebar = document.getElementsByClassName("left-side-bar")[0];

sidebar_active.addEventListener("click", () => {
    // left_sidebar.style.transform = "unset";
    left_sidebar.classList.toggle("left-side-bar-active");
});

//nav menu
const menu_list = document.getElementById("menu-list");
const nav_ul = document.getElementById("nav-ul");

menu_list.addEventListener("click", () => {
    // alert("woek");
    nav_ul.classList.toggle("right-side-home-interface_nav_ul");
});



//keydown function
document.addEventListener("keydown", (event) => {
    const key = event.key;
    if (key === " ") {
        // Space bar
        if(music.paused || music.currentTime <= 0){
        // playMusic();
        // wave.classList.add("active-wave");
        // masterPlay.classList.remove("bi-play-fill");
        // masterPlay.classList.add("bi-pause-fill");
        posterMasterPlay.src = `./Image/${index}.jpg`;
        music.play();
        masterPlay.classList.remove("bi-play-fill");
        masterPlay.classList.add("bi-pause-fill");

        const a = document.createElement("p");
        a.innerHTML = songs[index - 1].songName;
        downloadBtn.href = `./Audio/${index}.mp3`;
        downloadBtn.download = a.innerText;

        let songTitles = songs.filter((els) => {
            return els.id == index;
        });
        songTitles.forEach((elss) => {
            let { songName } = elss;
            title.innerHTML = songName;
        });
        wave.classList.add("active-wave");
        makeCurrectBG();
        makeCurrentPlay();
        Array.from(document.getElementsByClassName("song-item"))[
            index - 1
        ].style.background = "rgba(105,105,105,0.1)";

        Array.from(document.getElementsByClassName("playlistPlay"))[
            index - 1
        ].classList.add("bi-pause-circle-fill");
        Array.from(document.getElementsByClassName("playlistPlay"))[
            index - 1
        ].classList.remove("bi-play-circle-fill");
    }
    else{
        music.pause();
        wave.classList.remove("active-wave");
        masterPlay.classList.remove("bi-pause-fill");
        masterPlay.classList.add("bi-play-fill");

        Array.from(document.getElementsByClassName("playlistPlay"))[
            index - 1
        ].classList.add("bi-play-circle-fill");
        Array.from(document.getElementsByClassName("playlistPlay"))[
            index - 1
        ].classList.remove("bi-pause-circle-fill");
    }
    } else if (key === "ArrowLeft") {
        index -= 1;
        if (index < 1) {
            index = Array.from(
                document.getElementsByClassName("song-item")
            ).length;
        }
        playMusic();
    } 
    else if (key === "ArrowRight") {
        index++;
        if (
            index >
            Array.from(document.getElementsByClassName("song-item")).length
        ) {
            index = 1;
        }
        playMusic();
    }
});