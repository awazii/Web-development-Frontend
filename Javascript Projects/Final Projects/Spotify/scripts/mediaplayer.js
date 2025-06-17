import { playstate,setButtonVisualState } from "./main.js"
import { default_media } from "./default.js"
import { controls } from "./controls.js"
export function mediaplayer(song) {
    if (playstate.default) {
        default_media()
    }
    else if (playstate.currentsong) {
        document.querySelector(".media-player").innerHTML = `<div class="current-song">
        ${_currentsong(song)}
            </div>
        </div>
        <div class="controls">
            <div class="upper-controls">
                <div class="controls-left">
                    <button class="shuffle activated info" data-info="Shuffle">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px"
                            role="img"  viewBox="0 0 16 16">
                            <path
                                d="M13.151.922a.75.75 0 1 0-1.06 1.06L13.109 3H11.16a3.75 3.75 0 0 0-2.873 1.34l-6.173 7.356A2.25 2.25 0 0 1 .39 12.5H0V14h.391a3.75 3.75 0 0 0 2.873-1.34l6.173-7.356a2.25 2.25 0 0 1 1.724-.804h1.947l-1.017 1.018a.75.75 0 0 0 1.06 1.06L15.98 3.75 13.15.922zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.979 1.167-1.796-2.14A2.25 2.25 0 0 0 .39 3.5z">
                            </path>
                            <path
                                d="m7.5 10.723.98-1.167.957 1.14a2.25 2.25 0 0 0 1.724.804h1.947l-1.017-1.018a.75.75 0 1 1 1.06-1.06l2.829 2.828-2.829 2.828a.75.75 0 1 1-1.06-1.06L13.109 13H11.16a3.75 3.75 0 0 1-2.873-1.34l-.787-.938z">
                            </path>
                        </svg>
                    </button>
                    <button class="prev info" data-info="Previous">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px"
                            role="img" aria-hidden="true" viewBox="0 0 16 16">
                            <path
                                d="M3.3 1a.7.7 0 0 1 .7.7v5.15l9.95-5.744a.7.7 0 0 1 1.05.606v12.575a.7.7 0 0 1-1.05.607L4 9.149V14.3a.7.7 0 0 1-.7.7H1.7a.7.7 0 0 1-.7-.7V1.7a.7.7 0 0 1 .7-.7h1.6z">
                            </path>
                        </svg>
                    </button>
                </div>
                <div class="controls-centre">
                    <button class="play-pause-control info" data-info="Play">
                        <svg class="play" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px"
                            role="img" aria-hidden="true" viewBox="0 0 16 16">
                            <path
                                d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z">
                            </path>
                        </svg>
                          <svg class="pause" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px"  role="img" aria-hidden="true" viewBox="0 0 16 16" ><path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path></svg>
                    </button>
                </div>
                <div class="controls-right">
                    <button class="next info" data-info="Next">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px"
                            role="img" aria-hidden="true" viewBox="0 0 16 16">
                            <path
                                d="M12.7 1a.7.7 0 0 0-.7.7v5.15L2.05 1.107A.7.7 0 0 0 1 1.712v12.575a.7.7 0 0 0 1.05.607L12 9.149V14.3a.7.7 0 0 0 .7.7h1.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-1.6z">
                            </path>
                        </svg>
                    </button>
                    <button class="repeat info" data-info="Repeat">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px"
                            role="img" aria-hidden="true" viewBox="0 0 16 16">
                            <path
                                d="M0 4.75A3.75 3.75 0 0 1 3.75 1h8.5A3.75 3.75 0 0 1 16 4.75v5a3.75 3.75 0 0 1-3.75 3.75H9.81l1.018 1.018a.75.75 0 1 1-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 1 1 1.06 1.06L9.811 12h2.439a2.25 2.25 0 0 0 2.25-2.25v-5a2.25 2.25 0 0 0-2.25-2.25h-8.5A2.25 2.25 0 0 0 1.5 4.75v5A2.25 2.25 0 0 0 3.75 12H5v1.5H3.75A3.75 3.75 0 0 1 0 9.75v-5z">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="lower-controls">
                <div class="elapsed-time">
                   <h6></h6>
                </div>
                <div class="progress-bar">
                    <div class="progress">
                    </div>
                </div>
                <div class="total-duration">
                    <h6></h6>
                </div>
            </div>
        </div>
        <div class="volume-queue">
            <button class="playingview  activated info" data-info="Now Playing View">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#b3b3b3" width="16px" height="16px" data-encore-id="icon"
                    role="img" aria-hidden="true" viewBox="0 0 16 16">
                    <path d="M11.196 8 6 5v6l5.196-3z"></path>
                    <path
                        d="M15.002 1.75A1.75 1.75 0 0 0 13.252 0h-10.5a1.75 1.75 0 0 0-1.75 1.75v12.5c0 .966.783 1.75 1.75 1.75h10.5a1.75 1.75 0 0 0 1.75-1.75V1.75zm-1.75-.25a.25.25 0 0 1 .25.25v12.5a.25.25 0 0 1-.25.25h-10.5a.25.25 0 0 1-.25-.25V1.75a.25.25 0 0 1 .25-.25h10.5z">
                    </path>
                </svg>
            </button>
            <button class="queue info" data-info="Queue">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#b3b3b3" width="16px" height="16px" 
                    role="img" aria-hidden="true" viewBox="0 0 16 16">
                    <path
                        d="M15 15H1v-1.5h14V15zm0-4.5H1V9h14v1.5zm-14-7A2.5 2.5 0 0 1 3.5 1h9a2.5 2.5 0 0 1 0 5h-9A2.5 2.5 0 0 1 1 3.5zm2.5-1a1 1 0 0 0 0 2h9a1 1 0 1 0 0-2h-9z">
                    </path>
                </svg>
            </button>
            <div class="volume-wrapper">
                <button class="volume-btn info" data-info="Mute">
                    <svg class="vol_two" xmlns="http://www.w3.org/2000/svg" fill="#b3b3b3" width="16px" height="16px"
                        role="presentation" aria-label="Volume medium" aria-hidden="false"  viewBox="0 0 16 16">
                        <path
                            d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 6.087a4.502 4.502 0 0 0 0-8.474v1.65a2.999 2.999 0 0 1 0 5.175v1.649z">
                        </path>
                    </svg>
                    <svg  class="mute" xmlns="http://www.w3.org/2000/svg" fill="#b3b3b3" width="16px" height="16px"  data-encore-id="icon" role="presentation" aria-label="Volume off" aria-hidden="false"  viewBox="0 0 16 16"><path d="M13.86 5.47a.75.75 0 0 0-1.061 0l-1.47 1.47-1.47-1.47A.75.75 0 0 0 8.8 6.53L10.269 8l-1.47 1.47a.75.75 0 1 0 1.06 1.06l1.47-1.47 1.47 1.47a.75.75 0 0 0 1.06-1.06L12.39 8l1.47-1.47a.75.75 0 0 0 0-1.06z"></path><path d="M10.116 1.5A.75.75 0 0 0 8.991.85l-6.925 4a3.642 3.642 0 0 0-1.33 4.967 3.639 3.639 0 0 0 1.33 1.332l6.925 4a.75.75 0 0 0 1.125-.649v-1.906a4.73 4.73 0 0 1-1.5-.694v1.3L2.817 9.852a2.141 2.141 0 0 1-.781-2.92c.187-.324.456-.594.78-.782l5.8-3.35v1.3c.45-.313.956-.55 1.5-.694V1.5z"></path></svg>
                    <svg class="vol_three" xmlns="http://www.w3.org/2000/svg" fill="#b3b3b3" width="16px" height="16px" data-encore-id="icon" role="presentation" aria-label="Volume high" aria-hidden="false"viewBox="0 0 16 16" ><path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z"></path><path d="M11.5 13.614a5.752 5.752 0 0 0 0-11.228v1.55a4.252 4.252 0 0 1 0 8.127v1.55z"></path></svg>
                    <svg class="vol_one" xmlns="http://www.w3.org/2000/svg" fill="#b3b3b3" width="16px" height="16px"  data-encore-id="icon" role="presentation" aria-label="Volume low" aria-hidden="false"  viewBox="0 0 16 16" ><path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z"></path></svg>
                </button>
                <div class="volume-track">
                    <div class="volume-fill"></div>
                </div>
            </div>
        </div>`
        function _currentsong(song) {
            let html = `<div class="current-song-image">
                <img src="${song.image}" alt="current-song-img">
                <div class="ex-col info" data-info="Collapse">
                    <svg  class="collapse" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px"
                        fill="#b3b3b3" role="img" aria-hidden="true"
                        viewBox="0 0 16 16">
                        <path
                            d="M.47 11.03a.75.75 0 0 0 1.06 0L8 4.56l6.47 6.47a.75.75 0 1 0 1.06-1.06L8 2.44.47 9.97a.75.75 0 0 0 0 1.06z">
                        </path>
                    </svg>
                    <svg class="expand" class="collapse" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px"  role="img" aria-hidden="true" viewBox="0 0 16 16"><path d="M.47 4.97a.75.75 0 0 1 1.06 0L8 11.44l6.47-6.47a.75.75 0 1 1 1.06 1.06L8 13.56.47 6.03a.75.75 0 0 1 0-1.06z"></path></svg>
                </div>
            </div>
            <div class="current-song-details">
                <div class="current-song-name">
                    <h5>${song.title}</h5>
                </div>
                <div class="current-song-artist">
                    <h6>${song.credits.join(",")}</h6>
                </div>
            </div>
            <div class="like-btn-container">
                <button class="liked info" data-info="Add to Liked Songs">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#b3b3b3" width="24px" height="24px" role="img" aria-hidden="true"
                        viewBox="0 0 16 16">
                        <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z">
                        </path>
                        <path
                            d="M11.75 8a.75.75 0 0 1-.75.75H8.75V11a.75.75 0 0 1-1.5 0V8.75H5a.75.75 0 0 1 0-1.5h2.25V5a.75.75 0 0 1 1.5 0v2.25H11a.75.75 0 0 1 .75.75z">
                        </path>
                    </svg>
                </button>
                </div>`
            return html
        }
        controls(playstate.currentplayingbutton)
        document.querySelector(".playingview").addEventListener("click", playingviewupdate)
        document.querySelector(".ex-col").addEventListener("click", playingviewupdate)
        document.querySelector(".queue").addEventListener("click", () => {
            if (!playstate.songdetails) {
                queueupdater()
                playingviewupdate()
            } else {
                queueupdater()
            }
        })

    }
}
export function _playpause() {
    let playpausebtn = document.querySelector(".play-pause-control")
    if (playstate.currentplayingbutton!=="albumbtn") {
        playstate.currentplayingbutton.classList.toggle("active")    
    }
    playstate.nowplaybtn.classList.toggle("active")
    if (playstate.albumbtn) {
        playstate.albumbtn.classList.toggle("active")
    }
    if (playstate.currentsong.paused) {
        playstate.currentsong.play();
        setButtonVisualState(playpausebtn,true,false)
         if (playstate.currentplayingbutton!=="albumbtn") {
              setButtonVisualState(playstate.currentplayingbutton,true,false)
            }
            setButtonVisualState(playstate.nowplaybtn,true,false)
            setButtonVisualState(playstate.albumbtn,true,false)
        playpausebtn.dataset.info = "pause"
        playstate.nowplaybtn.dataset.info = "pause"
        if (playstate.albumpage) {
            playstate.equaliser.style.opacity = 1                       
        }
    }
    else {
        playstate.currentsong.pause()
         setButtonVisualState(playpausebtn,false,false)
         if (playstate.currentplayingbutton!=="albumbtn") {
             setButtonVisualState(playstate.currentplayingbutton,false,false)}
             setButtonVisualState(playstate.nowplaybtn,false,false)
             setButtonVisualState(playstate.albumbtn,false,false)
        playpausebtn.dataset.info = "play"
        playstate.nowplaybtn.dataset.info = "play"
         if (playstate.albumpage) {
        playstate.equaliser.style.opacity = 0}
    }
}
export function playingviewupdate() {
    if (playstate.songdetails && !playstate.queue) {
        playstate.songdetails = null
        let excol = document.querySelector(".ex-col")
        excol.dataset.info = "expand"
        excol.querySelector(".expand").style.display = "none"
        excol.querySelector(".collapse").style.display = "block"
        document.querySelector('.song-details').style.display = "none"
        document.querySelector(".playingview").classList.remove("activated")
        let main = document.querySelector(".main-container")
        main.classList.add("two")
        document.querySelectorAll('.songs-wrapper').forEach((swiperEl) => {
            $(swiperEl).slick('setPosition');
        })
    }
    else if (playstate.songdetails && playstate.queue) {
        queueupdater()
    }
    else if (!playstate.songdetails && playstate.queue) {
        playstate.songdetails = true
        let main = document.querySelector(".main-container")
        main.classList.remove("two")
        document.querySelector('.song-details').style.display = "block"
        document.querySelectorAll('.songs-wrapper').forEach((swiperEl) => {
            $(swiperEl).slick('setPosition');
        })
    }
    else {
        playstate.songdetails = true
        document.querySelector(".playingview").classList.add("activated")
        let main = document.querySelector(".main-container")
        main.classList.remove("two")
        document.querySelector('.song-details').style.display = "block"
        let excol = document.querySelector(".ex-col")
        excol.dataset.info = "collapse"
        excol.querySelector(".expand").style.display = "block"
        excol.querySelector(".collapse").style.display = "none"
        document.querySelectorAll('.songs-wrapper').forEach((swiperEl) => {
            $(swiperEl).slick('setPosition');
        })
    }
}
export function queueupdater() {
    if (playstate.queue) {
        playstate.queue = false
        document.querySelector(".playingview").classList.add("activated")
        let excol = document.querySelector(".ex-col")
        excol.dataset.info = "collapse"
        excol.querySelector(".expand").style.display = "block"
        excol.querySelector(".collapse").style.display = "none"
    }
    else {
        playstate.queue = true
        document.querySelector(".playingview").classList.remove("activated")
        let excol = document.querySelector(".ex-col")
        excol.dataset.info = "expand"
        excol.querySelector(".expand").style.display = "none"
        excol.querySelector(".collapse").style.display = "block"
    }
    let queuecontainer = document.querySelector(".queue-container")
    let queue = document.querySelector(".queue")
    queue.classList.toggle("activated")
    queuecontainer.classList.toggle("queue-visible")
}
