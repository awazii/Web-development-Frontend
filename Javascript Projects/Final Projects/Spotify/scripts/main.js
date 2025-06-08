import { library } from './library.js';
import { main_content } from './content-area.js';
import { mediaplayer } from './mediaplayer.js';
import { fetch_album } from "./album.js";
export let songs = [];
export let appdata = JSON.parse(localStorage.getItem("appdata"))||{};
console.log(appdata)
export let recent=appdata.recent|| {category: "Recently Played", songids: []}
console.log(recent)
export let playstate = {
    songid: null,
    currentsong: new Audio(),
    default: true,
    isplaying: null,
    songdetails: null,
    queue: null,
    home: true,
    albumpage: false,
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
    if (playstate.home) {
        //   homebtn.classList.remove("away")
        main_content()
    }
    else if (playstate.albumpage) {
        homebtn.classList.remove("away")
        playstate.home = true;
        playstate.albumpage = false;
        let contentarea=document.querySelector(".content-area")
        contentarea.classList.remove("album-page")
        main_content()
    }
})