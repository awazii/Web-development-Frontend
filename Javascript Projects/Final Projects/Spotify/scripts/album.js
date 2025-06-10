import { playstate, songs } from "./main.js"
import { _playpause } from "./mediaplayer.js";
import { song_details } from "./song-details.js";
import { mediaplayer } from "./mediaplayer.js";
import { appdata } from "./main.js";
import { playsong, addEventListeners } from "./home.js";
export function fetch_album() {
    let album = [
        {
            name: "Atif Aslam",
            rank: 215,
            banner: "Assests/artist banners/atif.jpeg",
            bg: "#470807",
            songids: [],
            details: {}
        }, {
            name: "Juice WRLD",
            rank: 176,
            banner: "Assests/artist banners/juicewrld.jpeg",
            bg: "#232831",
            songids: [],
            details: {}
        }, {
            name: "Arijit Singh",
            rank: 65,
            banner: false,
            bg: "#e68f5d",
            songids: [],
            details: {}
        }, {
            name: "Shawn Mendes",
            rank: 69,
            banner: "Assests/artist banners/shawn.jpeg",
            bg: "#262a2a",
            songids: [],
            details: {}
        }
    ]
    let albums_name = ["Atif's Album", "juice's Album", "Arijit's Album", "Shawn's Album"]
    songs.forEach(song => {
        if (song.category === albums_name[0]) {
            album[0].songids.push(song.id);
            album[0].category = albums_name[0]
            if (Object.keys(album[0].details).length === 0) {
                album[0].details = song["top-artist"];
            }
        } else if (song.category === albums_name[1]) {
            album[1].songids.push(song.id);
            album[1].category = albums_name[1]
            if (Object.keys(album[1].details).length === 0) {
                album[1].details = song["top-artist"];
            }

        } else if (song.category === albums_name[2]) {
            album[2].songids.push(song.id);
            album[2].category = albums_name[2]
            if (Object.keys(album[2].details).length === 0) {
                album[2].details = song["top-artist"];
            }
        } else if (song.category === albums_name[3]) {
            album[3].songids.push(song.id);
            album[3].category = albums_name[3]
            if (Object.keys(album[3].details).length === 0) {
                album[3].details = song["top-artist"];
            }
        }
    })
    appdata.album = album
    localStorage.setItem("appdata", JSON.stringify(appdata));
    // localStorage.setItem("album", JSON.stringify(album));
}
export function render_album(category) {
    playstate.home = false
    playstate.albumpage = true
    let obj = {}
    appdata.album.find(album => {
        if (album.category === category) {
            console.log(album.category, category)
            obj = album
        }
    })
    let contentarea = document.querySelector(".content-area");
    contentarea.classList.add("album-page");
    contentarea.style.background = `linear-gradient(360deg, #121212 40%, ${obj.bg} 110%)`;
    contentarea.innerHTML = ` <div class="album-artist-banner" style="background: linear-gradient(360deg, #121212 15%, ${obj.bg} 110%);">
  ${!obj.banner ? `` : `<img src="${obj.banner}" alt="banner-img"></img>`}
                <div class="artist-container">
                    <div class="artist-image-container">
                        <img src="${obj.details.image}" alt="artist-image">
                    </div>
                    <div class="artist-details-container">
                        <div class="verified">
                            <div class="svg-container">
                                <svg role="img" aria-hidden="false" xmlns="http://www.w3.org/2000/svg" width="24px"
                                    height="24px" viewBox="0 0 24 24">
                                    <circle cx="12" cy="12" r="10" fill="white" />
                                    <path
                                        d="M10.814.5a1.658 1.658 0 0 1 2.372 0l2.512 2.572 3.595-.043a1.658 1.658 0 0 1 1.678 1.678l-.043 3.595 2.572 2.512c.667.65.667 1.722 0 2.372l-2.572 2.512.043 3.595a1.658 1.658 0 0 1-1.678 1.678l-3.595-.043-2.512 2.572a1.658 1.658 0 0 1-2.372 0l-2.512-2.572-3.595.043a1.658 1.658 0 0 1-1.678-1.678l.043-3.595L.5 13.186a1.658 1.658 0 0 1 0-2.372l2.572-2.512-.043-3.595a1.658 1.658 0 0 1 1.678-1.678l3.595.043L10.814.5zm6.584 9.12a1 1 0 0 0-1.414-1.413l-6.011 6.01-1.894-1.893a1 1 0 0 0-1.414 1.414l3.308 3.308 7.425-7.425z">
                                    </path>
                                </svg>
                            </div>
                            <h5>Verified Artist</h5>
                        </div>
                        <div class="artist-name">
                            <h1>${obj.name}</h1>
                        </div>
                        <div class="artist-followers">
                            <h3>${obj.details.followers.toLocaleString()} Followers</h3>
                        </div>
                    </div>
                </div>
                <button class="albumbtn" data-songid="">
                    <svg class="play" xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" fill="black"
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
            <div class="album-content">
                <div class="album-songs-container">
                    <h2>Popular</h2>
                    <div class="album-songs">
                    ${render_songs(obj)}
                        </div>
                        <button class="show-all-songs">See more</button>
                    </div>
                    <div class="about-artist">
                        <h2>About</h2>
                        <div class="biobox">
                            <img src="${obj.details.image}"
                                alt="artist-image">
                            <div class="rank">
                                <h3>#${obj.rank}</h3>
                                <p>in the world</p>
                            </div>
                            <div class="bio">
                                <h3>${obj.details.followers.toLocaleString()
        } Followers</h3>
                                <p>${obj.details.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="line-end"></div>`;
    function render_songs(obj) {
        let html = ``
        obj.songids.forEach((songid, index) => {
            let song = songs.find(song => song.id === songid);
            html += ` <div class="album-song">
                            <h3 class="num">${index + 1}</h3>
                            <div class="album-song-details">
                                <div class="album-song-img">
                                    <img src="${song.image}"
                                        alt="album-song-image">
                                </div>
                                <h3>${song.title}</h3>
                            </div>
                            <div class="like-equaliser-container">
                            <div class="equaliser"> <img src="Assests/equaliser-animated-green.f5eb96f2.gif"></div>
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
                </div>
                                </div>
                                <button class="album-song-btn" data-songid="${song.id}">
                                    <svg class="play" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px"  fill="black" viewBox="0 0 16 16""><path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path></svg>
                                <svg class="pause" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px"  role="img" aria-hidden="true" viewBox="0 0 16 16" ><path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path></svg>
                                </button>
                            </div>`
        }
        )
        return html;
    }
    document.querySelector(".show-all-songs").addEventListener("click", () => {
        let album_songs = document.querySelector(".album-songs");
        album_songs.classList.toggle("every");
        if (album_songs.classList.contains("every")) {
            document.querySelector(".show-all-songs").innerText = "See less";
        } else {
            document.querySelector(".show-all-songs").innerText = "See more";
        }
    })
    let albumsongs = document.querySelector(".album-songs");
    addEventListeners(albumsongs, "album")
}
export function _equaliserchecker(equaliser) {
    if (playstate.albumpage) {
        if (playstate.currentsong.paused) {
            equaliser.style.opacity = 0
        }
        else {
            equaliser.style.opacity = 1
        }
    }
}