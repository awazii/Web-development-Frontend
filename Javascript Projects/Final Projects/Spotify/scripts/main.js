import {library} from './library.js';    
import{main_content} from './content-area.js'; 
import{mediaplayer} from './mediaplayer.js';
export let songs =[];
export  let playstate={
    songid:null,
    currentsong:new Audio(),
    default:true,
    isplaying:null,
    songdetails:null
};
let _fetchsongs=async ()=>{
    let main=document.querySelector('.main-container');
    main.classList.add("two")
    main.innerHTML=`<div class="library"></div>
    <div class="content-area"></div>
    <div class="song-details"></div>`;
    mediaplayer();
    let res = await fetch('data/songs.json')
    let data = await res.json();
    songs=data
    library();
    main_content();
}
_fetchsongs();
