import { appdata, mostplayed, playstate ,songs} from "./main.js";
export function update_mostplayed(songId) {
    let obj = {}
    mostplayed.songs.forEach(song => {
        if (song.songid === songId) {
            obj = song
        }
    });
    if (!Object.keys(obj).length) {
        let newobj = { songid: songId, playedtime: 1 }
        mostplayed.songs.push(newobj)
    }
    else {
        obj.playedtime++
    }
    appdata.mostplayed = mostplayed
    localStorage.setItem("appdata", JSON.stringify(appdata))
    render_mostplayed()
}
export function render_mostplayed() {
    let mostplayedcontainer = document.querySelector(".mostplayed-container");
    mostplayedcontainer.innerHTML = ``;
    let rendersongs = []
    if (mostplayed.songs.length >= 4 && mostplayed.songs.length <= 8) {
        rendersongs = mostplayed.songs.sort((a, b) => b.playedtime - a.playedtime);
    }
    else if (mostplayed.songs.length > 8) {
        rendersongs = mostplayed.songs.sort((a, b) => b.playedtime - a.playedtime).slice(0, 8);
    }
    if (rendersongs.length !== 0) {
        mostplayedcontainer.style.padding = "10px";
        mostplayedcontainer.style.paddingBottom = "40px";
        rendersongs.forEach(song => {
            let songid = song.songid;
            let songdetails = songs.find(s => s.id === songid);
            if (songdetails) {
                mostplayedcontainer.innerHTML += `<div class="mostplayedsong">
                  <div class="mostplayedsong-song-img ">
                                <img src="${songdetails.image}" alt="mostplayed-song-image">
                            </div> 
                            <div class="mostplayed-song-title">
                                <h3>${songdetails.title}</h3>
                            </div>  
                             <button class="play-pause-song" data-songid="${songdetails.id}"><svg class="play" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px"  fill="black" viewBox="0 0 16 16"><path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path></svg>
                                <svg class="pause" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px"  role="img" aria-hidden="true" viewBox="0 0 16 16" ><path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path></svg>
                                </button> 
                                 <div class="equaliser"> <img src="Assests/equaliser-animated-green.f5eb96f2.gif"></div>     
            </div>`;
            }
        });
    }
    else {
        mostplayedcontainer.style.padding = "0px";
        mostplayedcontainer.innerHTML = ``;
    }
}
