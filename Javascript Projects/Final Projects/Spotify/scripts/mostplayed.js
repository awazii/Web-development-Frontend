import { appdata, mostplayed } from "./main.js";
export function update_mostplayed(songId) {
    let obj={}
    mostplayed.songs.forEach(song => {
        if (song.songid===songId) {
            obj=song
        }
    });
    if (!Object.keys(obj).length) {
        let newobj={ songid: songId, playedtime: 1 }
        mostplayed.songs.push(newobj)
    }
    else{
        obj.playedtime++
    }
    appdata.mostplayed=mostplayed
    localStorage.setItem("appdata",JSON.stringify(appdata))
    console.log(appdata)
}