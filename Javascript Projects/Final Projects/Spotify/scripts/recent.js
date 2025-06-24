// localStorage.removeItem("appdata");
import { _rendersongs } from "./home.js";
import { appdata, playstate } from "./main.js";
import { recent,reassignbtn } from "./main.js";
import { render_recent } from "./home.js";
export function update_recent(recentsong) {
    if (!recent.songids.includes(recentsong)) {
        if (recent.songids.length >= 10) {
            recent.songids.pop();
            recent.songids.unshift(recentsong)
        }
        else {
            recent.songids.unshift(recentsong);
        }
    }
    else {
        let index = recent.songids.indexOf(recentsong);
        recent.songids.splice(index, 1)
        recent.songids.unshift(recentsong)
    }
    appdata.recent = recent
    localStorage.setItem("appdata", JSON.stringify(appdata));
    if (playstate.home) {
        render_recent();
        reassignbtn();
    }
}
let playTimer = null;
let playedSeconds = 0;
let requiredSeconds = 20;
export function startPlayTimer(songId) {
    if (playTimer) {
        clearInterval(playTimer);
        playedSeconds=0
    }
    clearInterval(playTimer);
    playTimer = setInterval(() => {
        if (!playstate.currentsong.paused) {
            playedSeconds++;
            // console.log("Played seconds:", playedSeconds);
            if (playedSeconds >= requiredSeconds) {
                clearInterval(playTimer);
                update_recent(songId);
                playedSeconds = 0; 
            }
        }
    }, 1000);

}
export function cancelPlayTimer() {
    clearInterval(playTimer);
    playedSeconds = 0;
}