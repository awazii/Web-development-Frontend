import { appdata, playstate, handleAlbumPageReassign, handleHomePageReassign, getCurrentAlbumSongButton, getCurrentHomeSongButton } from "./main.js";
import { playsong } from "./home.js";
export function queuegenerator() {
    let obj = [];
    for (const keys in appdata) {
        let value = appdata[keys]
        if (value.length) {
            value.forEach(element => {
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
    playstate.queuesongs = [...obj]
}
export function playNextInQueue(nextqueuesong) {
    if (nextqueuesong) {
        playQueuedSong(nextqueuesong)
    }
}

export function playPreviousInQueue(prevqueuesong) {
    if (prevqueuesong) {
        playQueuedSong(prevqueuesong)
    }
}
export function playQueuedSong(songId) {
    if (!songId) return;
    playstate.songid = songId;
    const button = playstate.albumpage
        ? handleAlbumPageReassign()[0]
        : playstate.home
            ? handleHomePageReassign()[0]
            : null;

    playstate.albumpage
        ? getCurrentAlbumSongButton(button)
        : getCurrentHomeSongButton(button);
}
export function getQueuedSongsAfterCurrent(onlyNext) {
    let queuesongs=playstate.shuffle.active?[...playstate.shuffle.songs]:[...playstate.queuesongs]
    const currentSongIndex = queuesongs.indexOf(playstate.songid);
    let next=queuesongs.slice(currentSongIndex + 1, currentSongIndex + 2)
    let rest= queuesongs.slice(currentSongIndex + 1) 
    if (playstate.repeat.active) {
        if (next.length===0) {
            next=[queuesongs[0]]
        }
    }
    console.log(rest,next)
    return onlyNext
        ? next
        : rest;
}
export function getQueuedSongsBeforeCurrent() {
     let queuesongs=playstate.shuffle.active?[...playstate.shuffle.songs]:[...playstate.queuesongs]
    const currentSongIndex = queuesongs.indexOf(playstate.songid);
    let prev=queuesongs.slice(currentSongIndex - 1, currentSongIndex)
    if (playstate.repeat.active) {
        if (prev.length===0) {
            prev=queuesongs.slice(-1)
        }
    }
    return prev
}
