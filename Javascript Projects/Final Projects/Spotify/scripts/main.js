import {library} from './library.js';    
import {song_details} from './song-details.js';
import{main_content} from './content-area.js'; 
export let songs =[];
let _fetchsongs=async ()=>{
    let main=document.querySelector('.main-container');
    main.innerHTML=`<div class="library"></div>
    <div class="content-area"></div>
    <div class="song-details"></div>`;
    let res = await fetch('data/songs.json')
    let data = await res.json();
    songs=data
    library();
    song_details();
    main_content();
}
_fetchsongs();
