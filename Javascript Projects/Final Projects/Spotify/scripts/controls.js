import { song_details } from "./song-details.js"
import { playstate, recent ,setButtonVisualState} from "./main.js"
import { _playpause,mediaplayer } from "./mediaplayer.js";
import { cancelPlayTimer } from "./recent.js";
import { startPlayTimer } from "./recent.js";
import { playNextInQueue,getQueuedSongsAfterCurrent } from "./queue.js";
export function controls(currentplayingbutton) {
    const progressContainer = document.querySelector(".progress-bar");
    const progressFill = document.querySelector(".progress");
    const elapsedTime = document.querySelector(".elapsed-time").firstElementChild;
    const totalDuration = document.querySelector(".total-duration").firstElementChild;
    totalDuration.textContent=`0:00`
    let playpausebtn = document.querySelector(".play-pause-control")
    playpausebtn.querySelector(".play").style.display = "none"
    playpausebtn.querySelector(".pause").style.display = "block"
    playpausebtn.dataset.info = "pause"
    playpausebtn.addEventListener("click", () => {
        _playpause(currentplayingbutton)
    })
    let isDragging = false;
    playstate.currentsong.addEventListener("loadedmetadata", () => {
        durationconverter(playstate.currentsong.duration,totalDuration)
        startPlayTimer(playstate.songid);
    });
    progressContainer.addEventListener("click", (event) => {
       const clickPosition = click_position(event)
        playstate.currentsong.currentTime = clickPosition * playstate.currentsong.duration;
        progressFill.style.width = `${clickPosition * 100}%`;
    });

    progressContainer.addEventListener("mousedown", () => {
        isDragging = true;
        playstate.currentsong.pause();
        progressFill.classList.add("drag");
    });

    document.addEventListener("mousemove", (event) => {
        if (isDragging) {
           const clickPosition = click_position(event)
            let dummytimer = clickPosition * playstate.currentsong.duration;
            progressFill.style.width = `${clickPosition * 100}%`;
            durationconverter(dummytimer,elapsedTime)
        }
    });

    document.addEventListener("mouseup", (event) => {
        if (isDragging) {
            isDragging = false;
            playstate.currentsong.play()
            const clickPosition = click_position(event)
            playstate.currentsong.currentTime = clickPosition * playstate.currentsong.duration;
            progressFill.classList.remove("drag");
        }
    });
    function click_position(event) {
         const rect = progressContainer.getBoundingClientRect();
            const clickPosition = Math.min((event.clientX - rect.left) / rect.width, 1);
            if (clickPosition<0) {
                clickPosition=0
            }
            return clickPosition
    }
    const volumeBtn = document.querySelector(".volume-btn");
    const volumeTrack = document.querySelector(".volume-track");
    const volumeFill = document.querySelector(".volume-fill");

    let isVolumeDragging = false;
    volumeTrack.addEventListener("click", (event) => {
        updatevolume(event)
    });
    volumeTrack.addEventListener("mousedown", () => {
        isVolumeDragging = true;
        volumeFill.classList.add("drag");
    });
    document.addEventListener("mousemove", (event) => {
        if (isVolumeDragging) {
            updatevolume(event)
        }
    });
    document.addEventListener("mouseup", () => {
        if (isVolumeDragging) {
            isVolumeDragging = false;
            volumeFill.classList.remove("drag");
        }
    });
    function updatevolume(event) {
        const rect = volumeTrack.getBoundingClientRect();
        let volumePos = (event.clientX - rect.left) / rect.width;
        volumePos = Math.min(Math.max(volumePos, 0), 1);
        playstate.currentsong.volume = volumePos;
        playstate.volume=volumePos
        volumeFill.style.width = `${volumePos * 100}%`;
        updateVolumeIcon(volumePos);
    }
    function durationconverter(currentTime,time) {
        const currentMinutes = Math.floor(currentTime / 60);
        const currentSeconds = Math.floor(currentTime % 60);
        time.textContent = `${currentMinutes}:${currentSeconds < 10 ? "0" : ""}${currentSeconds}`;
    }
    let mute = false
    volumeBtn.addEventListener("click", () => {
        if (!mute) {
            playstate.currentsong.muted = true
            mute = true
            volumeFill.style.width = "0%";
            updateVolumeIcon(0)
            volumeBtn.dataset.info = "Unmute"
        }
        else {
            playstate.currentsong.muted = false
            mute = false
            volumeFill.style.width = `${playstate.currentsong.volume * 100}%`;
            updateVolumeIcon(playstate.currentsong.volume)
            volumeBtn.dataset.info = "mute"
        }
    });
    function toggleIconVisibility(elements, visibleIndex) {
    elements.forEach((el, index) => {
        el.style.display = index === visibleIndex ? "block" : "none";
    });
}
 function updateVolumeIcon(volume) {
    const muteIcon = volumeBtn.querySelector(".mute");
    const volIcons = [
        volumeBtn.querySelector(".vol_one"),
        volumeBtn.querySelector(".vol_two"),
        volumeBtn.querySelector(".vol_three")
    ];
    
    if (playstate.currentsong.muted || volume === 0) {
        toggleIconVisibility([muteIcon, ...volIcons], 0);
    } else if (volume > 0 && volume <= 0.33) {
        toggleIconVisibility([muteIcon, ...volIcons], 1);
    } else if (volume > 0.33 && volume <= 0.66) {
        toggleIconVisibility([muteIcon, ...volIcons], 2);
    } else {
        toggleIconVisibility([muteIcon, ...volIcons], 3);
    }

    volumeBtn.dataset.info = volume === 0 ? "Unmute" : "Mute";
    mute = volume === 0;
}
    playstate.currentsong.volume = playstate.volume;
    volumeFill.style.width = `${playstate.volume * 100}%`;
    updateVolumeIcon(playstate.volume);

    playstate.currentsong.addEventListener("timeupdate", () => {
        if (!isDragging) {
            const percentage = (playstate.currentsong.currentTime / playstate.currentsong.duration) * 100;
            progressFill.style.width = `${percentage}%`;
durationconverter(playstate.currentsong.currentTime,elapsedTime)
        }
    });
    playstate.currentsong.addEventListener("ended", () => {
        let nextqueuesong = getQueuedSongsAfterCurrent(true)[0]
       if (nextqueuesong) {
        setTimeout(() => playNextInQueue(nextqueuesong), 100); 
       }
       else
       {
       defaultinterface()
    }
    })
}
function defaultinterface() {
     playstate.default = true
        playstate.isplaying = null;
        playstate.songdetails=null;
        playstate.queue = null;
        let main = document.querySelector(".main-container")
        main.classList.add("two")
        let details = document.querySelector('.song-details')
        details.style.display = "none"
        if (playstate.albumpage) {
            playstate.equaliser.style.opacity=0
        }
        document.querySelectorAll('.songs-wrapper').forEach((swiperEl) => {
            $(swiperEl).slick('setPosition');
        })
        mediaplayer()
        song_details()
        cancelPlayTimer()
      playstate.currentplayingbutton && setButtonVisualState(playstate.currentplayingbutton,false,true) 
        playstate.albumbtn && setButtonVisualState(playstate.albumbtn,false,false)
       playstate.albumbtn && playstate.albumbtn.classList.remove("Playing")
}