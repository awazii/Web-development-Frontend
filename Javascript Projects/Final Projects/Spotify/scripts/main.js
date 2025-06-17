import { library } from './library.js';
import { main_content } from './content-area.js';
import { mediaplayer } from './mediaplayer.js';
import { fetch_album } from "./album.js";
export let songs = [];
export let appdata = JSON.parse(localStorage.getItem("appdata")) || {};
console.log(appdata)
export let recent = appdata.recent || { category: "Recently Played", songids: [] }
console.log(recent)
export let dailymix = appdata.dailymix || { category: "Daily Mix", date: null, songids: [] }
export let playstate = {
    songid: null,
    currentsong: new Audio(),
    default: true,
    isplaying: null,
    songdetails: null,
    queue: null,
    home: true,
    albumpage: false,
    currentplayingbutton: null,
    nowplaybtn: null,
    equaliser: null,
    source: null,
    albumbtn: null
};
let _fetchsongs = async () => {
    let main = document.querySelector('.main-container');
    main.classList.add("two")
    main.innerHTML = `<div class="library"></div>
    <div class="content-area"></div>
    <div class="song-details"></div>`;
    mediaplayer();
    let res = await fetch('data/songs.json')
    let data = await res.json();
    songs = data
    fetch_album();
    library();
    main_content();
}
_fetchsongs();
let homebtn = document.querySelector(".homebtn")
homebtn.addEventListener("click", () => {
    if (playstate.albumpage) {
        homebtn.classList.remove("away")
        playstate.home = true;
        playstate.albumpage = false;
        let contentarea = document.querySelector(".content-area")
        contentarea.classList.remove("album-page")
        main_content()
        reassignbtn()
    }
})
export function reassignbtn() {
    if (playstate.source) {
        if (playstate.albumpage) {
            console.log("inside")
            let albumbtn = document.querySelector(".albumbtn")
            let songs = document.querySelector(".album-songs")
            songs.querySelectorAll(".album-song").forEach(song => {
                let equaliser = song.querySelector(".equaliser")
                let songbtn = song.querySelector(".album-song-btn")
                console.log(playstate.songid, songbtn.dataset.songid, playstate.songid === songbtn.dataset.songid)
                if (playstate.songid === songbtn.dataset.songid) {
                    if (playstate.source === songbtn.dataset.category) {
                        playstate.currentplayingbutton = songbtn
                        playstate.equaliser = equaliser
                        playstate.albumbtn = albumbtn
                        if (!playstate.currentsong.paused) {
                            playstate.currentplayingbutton.querySelector(".pause").style.display = "block"
                            playstate.currentplayingbutton.querySelector(".play").style.display = "none"
                            playstate.currentplayingbutton.classList.add("active")
                            playstate.albumbtn.querySelector(".pause").style.display = "block"
                            playstate.albumbtn.querySelector(".play").style.display = "none"
                            playstate.albumbtn.classList.add("Playing")
                            equaliser.style.opacity = 1
                        }
                    }

                }
            })
        }
        else if (!playstate.albumpage) {
            console.log(playstate.albumpage)
            console.log("inside1")
            let categories = document.querySelectorAll(".category")
            console.log(categories)
            let songscontainer;
            let albumcards = document.querySelectorAll(".album")
            albumcards.forEach(card => {
                if (card.dataset.albumName === playstate.source) {
                    let albmbtn = card.querySelector(".play-pause-song")
                    playstate.albumbtn = albmbtn
                    playstate.albumbtn.querySelector(".pause").style.display = "block"
                    playstate.albumbtn.querySelector(".play").style.display = "none"
                    playstate.albumbtn.classList.add("Playing","active")
                }
            })
            categories.forEach(category => {
                let heading = category.firstElementChild
                if (playstate.source === heading.innerHTML) {
                    songscontainer = category
                }
            })
            if (songscontainer) {
                songscontainer.querySelectorAll(".song").forEach(song => {
                    let songbtn = song.querySelector(".play-pause-song")
                    if (playstate.songid === songbtn.dataset.songid) {
                        playstate.currentplayingbutton = songbtn
                        if (!playstate.currentsong.paused) {
                            playstate.currentplayingbutton.querySelector(".pause").style.display = "block"
                            playstate.currentplayingbutton.querySelector(".play").style.display = "none"
                            playstate.currentplayingbutton.classList.add("active")
                        }
                    }
                })
            }
        }
    }
}
export function setButtonVisualState(button, isPlaying, useActive) {
    const playIcon = button.querySelector(".play");
    const pauseIcon = button.querySelector(".pause");
    if (isPlaying) {
        playIcon.style.display = "none";
        pauseIcon.style.display = "block";
        if (useActive) button.classList.add("active");
    } else {
        playIcon.style.display = "block";
        pauseIcon.style.display = "none";
        if (useActive) button.classList.remove("active");
    }
}
