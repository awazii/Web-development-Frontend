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
            let [songbtn, equaliser, albumbtn] = handleAlbumPageReassign()
            playstate.currentplayingbutton = songbtn
            playstate.equaliser = equaliser
            playstate.albumbtn = albumbtn
            if (!playstate.currentsong.paused) {
                songbtn && setButtonVisualState( playstate.currentplayingbutton, true, true)
                albumbtn && setButtonVisualState(playstate.albumbtn, true, false)
                albumbtn && albumbtn.classList.add("Playing")
                if (equaliser) {
                    playstate.equaliser.style.opacity = 1;
                }
            }
        }
        else {
            let [songbtn, albumbtn] = handleHomePageReassign()
            playstate.albumbtn = albumbtn
            console.log(songbtn, albumbtn)
            playstate.currentplayingbutton = songbtn
            if (!playstate.currentsong.paused) {
                songbtn && setButtonVisualState(playstate.currentplayingbutton, true, true)
                albumbtn && albumbtn.classList.add("Playing")
                albumbtn && setButtonVisualState(playstate.albumbtn, true, true)
            }
        }
    }

}
function handleAlbumPageReassign() {
    console.log("inside album page");
    let albumbtn1 = document.querySelector(".albumbtn")
    let songbtn, equaliser,albumbtn ;
    let songs = document.querySelector(".album-songs")
    songs.querySelectorAll(".album-song").forEach(song => {
       let equaliser1 = song.querySelector(".equaliser")
        let  songbtn1 = song.querySelector(".album-song-btn")
        if (playstate.songid === songbtn1.dataset.songid) {
            if (playstate.source === songbtn1.dataset.category) {
                songbtn =songbtn1
                equaliser =equaliser1
                albumbtn =albumbtn1
            }
        }
    })
    return [songbtn, equaliser, albumbtn]
}
function handleHomePageReassign() {
    console.log(playstate.albumpage)
    console.log("inside home page");
    let categories = document.querySelectorAll(".category")
    console.log(categories)
    let songscontainer, songbtn, albumbtn;
    let albumcards = document.querySelectorAll(".album")
    albumcards.forEach(card => {
        if (card.dataset.albumName === playstate.source) {
            albumbtn = card.querySelector(".play-pause-song")
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
            let songbtn1 = song.querySelector(".play-pause-song")
            if (playstate.songid === songbtn1.dataset.songid) {
                songbtn = songbtn1
            }
        })
    }
    return [songbtn, albumbtn]
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
