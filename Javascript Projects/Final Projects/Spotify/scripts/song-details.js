import { playstate, songs, setButtonVisualState } from "./main.js"
import { playingviewupdate, _playpause } from "./mediaplayer.js"
import { queueupdater } from "./mediaplayer.js"
import { getQueuedSongsAfterCurrent, playQueuedSong } from "./queue.js"
export function song_details() {
  if (playstate.default) {
    document.querySelector('.song-details').innerHTML = ``
    let main = document.querySelector(".main-container")
    main.classList.add("two")
  }
  else {
    let main = document.querySelector(".main-container")
    main.classList.remove("two")
    let song = songs.find(song => song.id === playstate.songid)
    let song_details = document.querySelector('.song-details')
    song_details.style.display = "block"
    document.querySelectorAll('.songs-wrapper').forEach((swiperEl) => {
      $(swiperEl).slick('setPosition');
    })
    song_details.innerHTML = `<div class="details-header">
  <div class="hide-playview">
    <div class="hide-playview-btn info" data-info="Hide Now playing view">
      <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" data-encore-id="icon" role="img" aria-hidden="true" class="e-9812-icon e-9812-baseline e-9812-icon--auto-mirror" viewBox="0 0 16 16" style="--encore-icon-height: var(--encore-graphic-size-decorative-smaller); --encore-icon-width: var(--encore-graphic-size-decorative-smaller);">
        <path d="M10.03 10.53a.75.75 0 1 1-1.06-1.06L10.44 8 8.97 6.53a.75.75 0 0 1 1.06-1.06l2 2a.75.75 0 0 1 0 1.06l-2 2Z"></path>
        <path d="M15 16a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14Zm-8.5-1.5v-13h8v13h-8Zm-1.5 0H1.5v-13H5v13Z"></path>
      </svg>
    </div>
    <h4>${playstate.source}</h4>
  </div>
</div>

<div class="details-footer">
  <div class="details-current-song">
    <div class="details-current-song-top">
      <div class="details-current-song-image">
        <img src="${song.image}" alt="detail-song-image">
      </div>
    </div>
    <div class="details-current-song-bottom">
      <div class="details-current-song-detail">
        <div class="details-current-song-name">
          <h5>${song.title}</h5>
        </div>
        <div class="details-current-song-artist">
          <h6>${song.credits.join(",")}</h6>
        </div>
      </div>
      <div class="like-btn-container details-like-btn-container">
        <button class="liked info" data-info="Add to Liked Songs">
          <svg xmlns="http://www.w3.org/2000/svg" fill="#b3b3b3" width="24px" height="24px" role="img" aria-hidden="true" viewBox="0 0 16 16">
            <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"></path>
            <path d="M11.75 8a.75.75 0 0 1-.75.75H8.75V11a.75.75 0 0 1-1.5 0V8.75H5a.75.75 0 0 1 0-1.5h2.25V5a.75.75 0 0 1 1.5 0v2.25H11a.75.75 0 0 1 .75.75z"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>

  <div class="about-this-artist">
    <div class="about-this-artist-image">
      <h4>About this Artist</h4>
      <img src="${song["top-artist"].image}" alt="">
    </div>
    <div class="artist-details">
      <div class="artist-name">
        <h4>${song["top-artist"].name}</h4>
      </div>
      <div class="artist-followers">
        <h4>${song["top-artist"].followers.toLocaleString()} followers</h4>
      </div>
      <div class="artist-description">
        <h4>${song["top-artist"].description != null ? song["top-artist"].description : ""}</h4>
      </div>
    </div>
  </div>

  <div class="credits">
    <div class="cr-upper">
      <h4>Credits</h4>
      <button class="show-credits">Show more credits</button>
    </div>
    <div class="credits-details">
      ${credits_details(song.credits)}
    </div>
  </div>
  <div class="next-queue">
  </div>
   <div class="queue-container">
            <div class="queue-header">
                <h4>Queue</h4>
                <button class="queue-closing-btn info" data-info="Close">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#b3b3b3" width="16px" height="16px"
                        data-encore-id="icon" role="img" aria-hidden="true" class="e-9812-icon e-9812-baseline"
                        viewBox="0 0 24 24">
                        <path
                            d="M3.293 3.293a1 1 0 0 1 1.414 0L12 10.586l7.293-7.293a1 1 0 1 1 1.414 1.414L13.414 12l7.293 7.293a1 1 0 0 1-1.414 1.414L12 13.414l-7.293 7.293a1 1 0 0 1-1.414-1.414L10.586 12 3.293 4.707a1 1 0 0 1 0-1.414z">
                        </path>
                    </svg>
                </button>
            </div>
            <div class="queues">
                <div class="now-playing">
                    <h4 class="now-playing-title">
                        Now Playing
                    </h4>
                    <div class="now-playing-song card animate">
                        <div class="now-playing-song-image card-image"><img
                                src="${song.image}" alt="playlist-image">
                            <button class="play-pause-song info" data-info="Play">
                             <svg class="play" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="black"
                        viewBox="0 0 16 16">
                        <path d=" M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05
                        14.894A.7.7 0 0 1 3 14.288V1.713z"></path>
                    </svg>
                    <svg class="pause" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" role="img"
                        aria-hidden="true" viewBox="0 0 16 16">
                        <path
                            d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z">
                        </path>
                    </svg>
                            </button>
                        </div>
                        <div class="now-playing-song-details">
                            <div class="now-playing-song-title card-title">
                                <h4>${song.title}</h4>
                            </div>
                            <div class="now-playing-song-artists card-artist">
                                <h5>${song.credits.join(",")}</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="queue-songs">
                </div>
            </div>
        </div>
</div>
`
    renderqueuesongs()
    document.querySelector(".show-credits").addEventListener("click", (e) => {
      let credits = e.target.closest(".credits")
      let details = credits.querySelector(".credits-details")
      details.classList.toggle("showmore")
      if (details.classList.contains("showmore")) {
        e.target.innerHTML = " Show less credits"
      }
      else {
        e.target.innerHTML = " Show more credits"
      }

    })
    function credits_details(credits) {
      let html = ``
      credits.forEach(credit => {
        html += `<div class="credit-detail">
                        <h4 class="credit-name">${credit}</h4>
                        <h4 class="credit-role">Main Artist</h4>
                    </div>`
      })
      return html
    }
    document.querySelector(".hide-playview-btn").addEventListener("click", () => {
      playingviewupdate()
    })
    document.querySelector(".queue-closing-btn").addEventListener("click", () => {
      queueupdater()
    })
    let nowplaybtn = document.querySelector(".now-playing-song").querySelector(".play-pause-song")
    nowplaybtn.addEventListener("click", _playpause)
    setButtonVisualState(nowplaybtn, true, true)
    nowplaybtn.dataset.info = "pause"
    playstate.nowplaybtn = nowplaybtn
    nextqueuedetails()
  }
}
export function renderqueuesongs() {
  let queuesongs = getQueuedSongsAfterCurrent(false)
  let queuecontainer = document.querySelector(".queue-songs")
  queuecontainer.innerHTML = `<h4 class="next-from">
               ${queuesongs.length !== 0 ? `Next from : <span>${playstate.source}</span>` : ``}
                    </h4>`
  queuesongs.forEach(songid => {
    let obj = songs.find(song => song.id === songid);
    queuecontainer.innerHTML += `<div class="queue-song card">
                        <div class="queue-song-image card-image"><img
                                src="${obj.image}" alt="playlist-image">
                            <button class="play-pause-song info" data-songid="${obj.id}" data-info="Play">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" data-encore-id="icon"
                                    role="img" aria-hidden="true" class="e-9812-icon e-9812-baseline"
                                    viewBox="0 0 16 16"
                                    style="--encore-icon-height: var(--encore-graphic-size-decorative-smaller); --encore-icon-width: var(--encore-graphic-size-decorative-smaller);">
                                    <path
                                        d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z">
                                    </path>
                                </svg>
                            </button>
                        </div>
                        <div class="queue-song-details">
                            <div class="queue-song-title card-title">
                                <h4>${obj.title}</h4>
                            </div>
                            <div class="queue-song-artists card-artist">
                                <h5>${obj.credits.join(',')}</h5>
                            </div>
                        </div>
                    </div>`
    queueeventlistners()
  })
}
export function nextqueuedetails() {
  let queuesong = getQueuedSongsAfterCurrent(true)
  let obj = songs.find(song => song.id === queuesong[0]);
  let container = document.querySelector(".next-queue")
  container.style.display = "block"
  if (obj) {
    container.innerHTML = `
    <div class="nq-top">
      <h4>Next in queue</h4>
      <button class="open-queue">Open queue</button>
    </div>
    <div class="next-queue-detail">
     <div class="next-queue-image">
        <img src="${obj.image}">
        <button class="play-pause-song info" data-info="Play" data-songid="${obj.id}">
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" data-encore-id="icon" role="img" aria-hidden="true" class="e-9812-icon e-9812-baseline" viewBox="0 0 16 16" style="--encore-icon-height: var(--encore-graphic-size-decorative-smaller); --encore-icon-width: var(--encore-graphic-size-decorative-smaller);">
            <path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path>
          </svg>
        </button>
      </div>
      <div class="next-queue-info">
        <h4 class="next-queue-title">${obj.title}</h4>
        <h4 class="next-queue-artist">${obj.credits.join(',')}</h4>
      </div>
    </div>`
    document.querySelector(".open-queue").addEventListener("click", () => {
      queueupdater()
    })
    let nextbtn = container.querySelector(".play-pause-song")
    nextbtn.addEventListener("click", () => {
      let id = nextbtn.dataset.songid
      playQueuedSong(id)
    })
  }
  else {
    container.innerHTML = ``
    container.style.display = "none"
  }
}
function queueeventlistners() {
  document.querySelector(".queue-songs").querySelectorAll(".play-pause-song").forEach(button => {
    button.addEventListener("click", () => {
      let id = button.dataset.songid
      playQueuedSong(id)
    })
  })
}