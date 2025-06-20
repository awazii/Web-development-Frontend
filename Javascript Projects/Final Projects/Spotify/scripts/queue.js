import { appdata, playstate, handleAlbumPageReassign, handleHomePageReassign } from "./main.js";
import { equaliserchecker } from "./album.js";
import { playsong } from "./home.js";
export function queuegenerator() {
    let obj = [];
    for (const keys in appdata) {
        let value = appdata[keys]
        if (value.length) {
            value.forEach(element => {
                console.log(element.category, playstate.source)
                if (element.category === playstate.source) {
                    obj = element.songids
                }
            });
        }
        else {
            if (value.category === playstate.source) {
                obj = value.songids
            }
        }
    }
    playstate.queuesongs =[...obj]
    console.log(playstate)
}
export function playNextInQueue(nextqueuesong) {
   console.log(nextqueuesong)
    if (nextqueuesong) {
        playstate.songid = nextqueuesong
        if (playstate.albumpage) {
            let button = handleAlbumPageReassign()[0]
            console.log(button===playstate.currentplayingbutton,button,playstate.currentplayingbutton)
            if (!button) {
                button="dummy"
                playsong(button)
            }
            else{
              playsong(button,()=>{
                equaliserchecker(button)
              })
            }
        }
        else if (playstate.home) {
            let button = handleHomePageReassign()[0]
            console.log(button===playstate.currentplayingbutton,button,playstate.currentplayingbutton)
            if (!button) {
                button="dummy"
            }
            playsong(button)
        }
    }
}

export function playPreviousInQueue() {

}
export function getQueuedSongsAfterCurrent(onlyNext) {
  const currentSongIndex = playstate.queuesongs.indexOf(playstate.songid);
 return onlyNext
    ? playstate.queuesongs.slice(currentSongIndex + 1, currentSongIndex + 2)
    : playstate.queuesongs.slice(currentSongIndex + 1);
}
