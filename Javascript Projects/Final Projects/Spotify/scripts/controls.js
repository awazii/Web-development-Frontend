import { song_details } from "./song-details.js"
import { playstate } from "./main.js"
import { _playpause } from "./mediaplayer.js";
import { mediaplayer } from "./mediaplayer.js";
export function controls(currentplayingbutton) {
    const progressContainer = document.querySelector(".progress-bar");
    const progressFill = document.querySelector(".progress");
    const elapsedTime = document.querySelector(".elapsed-time").firstElementChild;
    const totalDuration = document.querySelector(".total-duration").firstElementChild;
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
    });
    progressContainer.addEventListener("click", (event) => {
       const clickPosition = click_position(event)
        playstate.currentsong.currentTime = clickPosition * playstate.currentsong.duration;
        progressFill.style.width = `${clickPosition * 100}%`;
    });

    progressContainer.addEventListener("mousedown", () => {
        isDragging = true;
        playstate.currentsong.muted = true;
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
            playstate.currentsong.muted = false;
            const clickPosition = click_position(event)
            playstate.currentsong.currentTime = clickPosition * playstate.currentsong.duration;
            progressFill.classList.remove("drag");
        }
    });
    function click_position(event) {
         const rect = progressContainer.getBoundingClientRect();
            const clickPosition = Math.min((event.clientX - rect.left) / rect.width, 1);
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
            playstate.currentsong.volume = 0.5;
            mute = false
            volumeFill.style.width = `${playstate.currentsong.volume * 100}%`;
            updateVolumeIcon(playstate.currentsong.volume)
            volumeBtn.dataset.info = "mute"
        }
    });
    function updateVolumeIcon(volume) {
        const muteIcon = volumeBtn.querySelector(".mute");
        const volOne = volumeBtn.querySelector(".vol_one");
        const volTwo = volumeBtn.querySelector(".vol_two");
        const volThree = volumeBtn.querySelector(".vol_three");
        if (playstate.currentsong.muted || volume === 0) {
            muteIcon.style.display = "block";
            volOne.style.display = "none";
            volTwo.style.display = "none";
            volThree.style.display = "none";
        } else if (volume > 0 && volume <= 0.33) {
            muteIcon.style.display = "none";
            volOne.style.display = "block";
            volTwo.style.display = "none";
            volThree.style.display = "none";
        } else if (volume > 0.33 && volume <= 0.66) {
            muteIcon.style.display = "none";
            volOne.style.display = "none";
            volTwo.style.display = "block";
            volThree.style.display = "none";
        } else {
            muteIcon.style.display = "none";
            volOne.style.display = "none";
            volTwo.style.display = "none";
            volThree.style.display = "block";
        }
        if (volume===0) {
            volumeBtn.dataset.info = "Unmute"
            mute = true
        }
        else{
            volumeBtn.dataset.info = "mute"
             mute = false
        }
    }
    playstate.currentsong.volume = 0.5;
    volumeFill.style.width = "50%";
    updateVolumeIcon(0.5);

    playstate.currentsong.addEventListener("timeupdate", () => {
        if (!isDragging) {
            const percentage = (playstate.currentsong.currentTime / playstate.currentsong.duration) * 100;
            progressFill.style.width = `${percentage}%`;
durationconverter(playstate.currentsong.currentTime,elapsedTime)
        }
    });
    playstate.currentsong.addEventListener("ended", () => {
        playstate.default = true
        playstate.isplaying = null;
        playstate.songdetails=null;
        playstate.queue = null;
        console.log(playstate)
        let main = document.querySelector(".main-container")
        main.classList.add("two")
        let details = document.querySelector('.song-details')
        details.style.display = "none"
        document.querySelectorAll('.songs-wrapper').forEach((swiperEl) => {
            $(swiperEl).slick('setPosition');
        })
        mediaplayer()
        song_details()
        currentplayingbutton.classList.remove("active")
        currentplayingbutton.querySelector(".play").style.display = "block"
        currentplayingbutton.querySelector(".pause").style.display = "none"
    })
}