import { playstate, recent, songs, reassignbtn } from "./main.js"
import { _playpause, queueupdater, shufflesongs } from "./mediaplayer.js";
import { song_details } from "./song-details.js";
import { mediaplayer } from "./mediaplayer.js";
import { appdata, dailymix, setButtonVisualState } from "./main.js";
import { main_content } from './content-area.js';
import { equaliserchecker } from "./album.js";
import { update_recent } from "./recent.js";
import { queuegenerator } from "./queue.js";
import{render_mostplayed} from "./mostplayed.js";
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
export function fetch_home() {
    playstate.albumpage = false;
    playstate.home = true;
    document.querySelector(".content-area").innerHTML = `
         <div class="banner">
           <img src="https://c4.wallpaperflare.com/wallpaper/84/515/763/k-pop-iu-sony-wallpaper-preview.jpg" alt="banner">
           <h2>Your soundtrack, your vibe.
</h2>
          </div>
          <div class="c-a-heading">
            <h5> All</h5>
           <a href="demo.html" class="nav-link">Explore Features</a>
        </div>
          <div class="content">
            <div class="mostplayed-container"></div>
            <div class="dailymix">
            </div>
            <div class="recent">
            </div>
            <div class="categories">
            ${rendercategories()}
            </div>
              <div class="albums">
              ${renderalbum_card()}
            </div> 
            <div class="about"></div>
        </div>
          </div>`
    function rendercategories() {
        let html = ``
        let categories = ["Naat", "Qawali&old", "love", "lofi", "hip-hop", "sad", "motivation", "rap", "japanese"]
        categories.sort((a, b) => b.localeCompare(a));
        let SongCatalog = []
        categories.forEach(category => {
            let obj = {
                category,
                songids: []
            }
            SongCatalog.push(obj)
        })
        songs.forEach(song => {
            SongCatalog.forEach(catalog => {
                if (song.category === catalog.category) {
                    catalog.songids.push(song.id)
                }
            })
        })
        appdata.SongCatalog = SongCatalog
        localStorage.setItem("appdata", JSON.stringify(appdata));
        SongCatalog.forEach((catalog, index) => {
            html += `<div class="category">
                      <h2>${catalog.category}</h2>
                      <div class="songs">
                      <div class="songs-wrapper catalog">
                      ${_rendersongs(catalog.songids)}
                      </div>
                       <div class="custom-prev${index} custom-prev">
       <svg class="left" width="16px" height="16px"  data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" "><path d="M11.03.47a.75.75 0 0 1 0 1.06L4.56 8l6.47 6.47a.75.75 0 1 1-1.06 1.06L2.44 8 9.97.47a.75.75 0 0 1 1.06 0z"></path></svg>
    </svg>
      </div>
      <div class="custom-next${index} custom-next">
        <svg class="right" width="16px" height="16px" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="black"><path d="M4.97.47a.75.75 0 0 0 0 1.06L11.44 8l-6.47 6.47a.75.75 0 1 0 1.06 1.06L13.56 8 6.03.47a.75.75 0 0 0-1.06 0z"></path></svg>
      </div>
                      </div>
                </div>`
        })
        return html
    }
    let catalogcontainer = document.querySelector(".categories")
    catalogcontainer.querySelectorAll('.songs-wrapper').forEach((swiperEl, index) => {
        slider(swiperEl, index)
    })
    addEventListeners(catalogcontainer, "home");
    render_mostplayed();
    render_recent();
    _dailymix();
    function renderalbum_card() {
        let albums_name = ["Arijit's Album", "Atif's Album", "juice's Album", "Shawn's Album"]
        const albums = albums_name.map(albumName => {
            const firstSong = songs.find(song => song.category === albumName);
            return {
                name: albumName,
                artist: firstSong["top-artist"].name,
                image: firstSong["top-artist"].image,
                song: {
                    name: firstSong.title,
                    image: firstSong.image,
                    id: firstSong.id
                }
            };
        });
        let html = ``
        albums.forEach(album => {
            html += `
           <div class="album" data-album-name="${album.name}">
    <img src="${album.image}" alt="album-image">
    <div class="about-album">
    <div class="album-song-img">
        <img src="${album.song.image}" alt="song-image">
    </div> 
    <div class="album-info">
        <div class="album-song-name">
            <h2>${album.song.name}</h2>
        </div>
        <div class="album-name">
            <h4><span>Album</span><span class="dot"></span><span>${album.artist}</span></h4>
        </div>
    </div> 
</div> 
  <button class="play-pause-song" data-album-name="${album.name}" data-songid="${album.song.id}">
                     <svg class="play" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"  fill="black" viewBox="0 0 16 16""><path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path></svg>
                                <svg class="pause" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"  role="img" aria-hidden="true" viewBox="0 0 16 16" ><path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path></svg>
                    </button>
      </div>`
        })
        return html
    }
    document.querySelectorAll(".album").forEach(album => {
        album.addEventListener("click", (e) => {
            let albumbtn = e.target.closest(".play-pause-song")
            if (albumbtn) {
                playstate.songid = albumbtn.dataset.songid
                _albumbtn(albumbtn)
            } else {
                playstate.albumpage = true;
                playstate.home = false;
                let homebtn = document.querySelector(".homebtn")
                homebtn.classList.add("away")
                main_content(album.dataset.albumName);
                reassignbtn()
            }
        })
    })
}
export function _rendersongs(ids) {
    let song_ids = ids
    let html = ``
    song_ids.forEach(id => {
        let obj = songs.find(song => song.id === id);
        html += `<div class="song">
                            <div class="song-image">
                                <img src="${obj.image}" alt="title-img">
                                <button class="play-pause-song" data-songid="${obj.id}"><svg class="play" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px"  fill="black" viewBox="0 0 16 16""><path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path></svg>
                                <svg class="pause" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px"  role="img" aria-hidden="true" viewBox="0 0 16 16" ><path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path></svg>
                                </button>
                            </div>
                            <div class="song-title">
                                <h4>${obj.title}</h4>
                            </div>
                            <div class="song-artist">
                                <h5>${obj.credits.join(',')}</h5>
                            </div>
                        </div>`
    }
    )
    return html
}
export function slider(swiperEl, index) {
    if (swiperEl.classList.contains("slick-initialized")) {
        $(swiperEl).slick('unslick');
    }
    $(swiperEl).slick({
        arrows: true,
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1750,
                settings: { slidesToShow: 5, slidesToScroll: 3 }
            },
            {
                breakpoint: 1600,
                settings: { slidesToShow: 3, slidesToScroll: 3 }
            },
            {
                breakpoint: 1100,
                settings: { slidesToShow: 3, slidesToScroll: 3 }
            },
            {
                breakpoint: 900,
                settings: { slidesToShow: 2, slidesToScroll: 2, dots: false, infinite: true }
            },
            {
                breakpoint: 600,
                settings: { slidesToShow: 1, slidesToScroll: 1, dots: false, infinite: true }
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1, slidesToScroll: 1, dots: false, infinite: true }
            }
        ]
    });
    $(`.custom-prev${index}`).on('click', function () {
        $(swiperEl).slick('slickPrev');
    });

    $(`.custom-next${index}`).on('click', function () {
        $(swiperEl).slick('slickNext');
    });
    $(swiperEl).on('init reInit afterChange', function (event, slick, currentSlide) {
        const $prevBtn = $(`.custom-prev${index}`)
        const $nextBtn = $(`.custom-next${index}`)
        const current = currentSlide || 0;
        const maxVisible = slick.slideCount - slick.options.slidesToShow;
        if (current === 0) {
            $prevBtn.hide();
        } else {
            $prevBtn.show();
        }
        if (current >= maxVisible) {
            $nextBtn.hide();
        } else {
            $nextBtn.show();
        }
    });
    $(swiperEl).trigger('init', [$(swiperEl).slick('getSlick'), 0]);
}
export function render_recent() {
    let recentcontainer = document.querySelector(".recent")
    if (recent.songids.length >= 7) {
        recentcontainer.innerHTML = `<div class="category">
                      <h2>${appdata.recent.category}</h2>
                      <div class="songs">
                      <div class="songs-wrapper">
                      ${_rendersongs(appdata.recent.songids)}
                      </div>
                       <div class="custom-prev9 custom-prev">
       <svg class="left" width="16px" height="16px"  data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" "><path d="M11.03.47a.75.75 0 0 1 0 1.06L4.56 8l6.47 6.47a.75.75 0 1 1-1.06 1.06L2.44 8 9.97.47a.75.75 0 0 1 1.06 0z"></path></svg>
    </svg>
      </div>
      <div class="custom-next9 custom-next">
        <svg class="right" width="16px" height="16px" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="black"><path d="M4.97.47a.75.75 0 0 0 0 1.06L11.44 8l-6.47 6.47a.75.75 0 1 0 1.06 1.06L13.56 8 6.03.47a.75.75 0 0 0-1.06 0z"></path></svg>
      </div>
                      </div>
                </div>`
        let recentslider = recentcontainer.querySelector(".songs-wrapper")
        slider(recentslider, 9)
        addEventListeners(recentcontainer, "home");
    }
}
export function _dailymix() {
    let dailymixcontainer = document.querySelector(".dailymix")
    let today = dayjs().format('DD-MM-YYYY');
    const dailyTitles = {
        0: "Sunday Slowdown",
        1: "Monday Mix",
        2: "Tuesday Turnup",
        3: "Midweek Vibes",
        4: "Throwback Thursday",
        5: "Friday Fire",
        6: "Weekend Waves"
    };
    if (today === dailymix.date) {
        dailymixcontainer.innerHTML = _renderdailymix(dailymix)
    }
    else {
        dailymix.date = today;
        dailymix.category = dailyTitles[dayjs().day()];
        const mixSongs = [...songs].sort(() => 0.5 - Math.random()).slice(0, 30);
        dailymix.songids = mixSongs.map(song => song.id);
        appdata.dailymix = dailymix;
        localStorage.setItem("appdata", JSON.stringify(appdata));
        dailymixcontainer.innerHTML = _renderdailymix(dailymix)
    }
    let dailymixslider = dailymixcontainer.querySelector(".songs-wrapper")
    slider(dailymixslider, 10)
    addEventListeners(dailymixcontainer, "home");
}
function _renderdailymix(dailymix) {
    let html = `<div class="category">
                      <h2>${dailymix.category}</h2>
                      <div class="songs">
                      <div class="songs-wrapper">
                      ${_rendersongs(dailymix.songids)}
                      </div>
                       <div class="custom-prev10 custom-prev">
       <svg class="left" width="16px" height="16px"  data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" "><path d="M11.03.47a.75.75 0 0 1 0 1.06L4.56 8l6.47 6.47a.75.75 0 1 1-1.06 1.06L2.44 8 9.97.47a.75.75 0 0 1 1.06 0z"></path></svg>
    </svg>
      </div>
      <div class="custom-next10 custom-next">
        <svg class="right" width="16px" height="16px" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="black"><path d="M4.97.47a.75.75 0 0 0 0 1.06L11.44 8l-6.47 6.47a.75.75 0 1 0 1.06 1.06L13.56 8 6.03.47a.75.75 0 0 0-1.06 0z"></path></svg>
      </div>
                      </div>
                </div>`;
    return html
}
export function playsong(button, equaliser, albumbtn, manualclick) {
    if (playstate.isplaying && playstate.currentplayingbutton === button) {
        _playpause();
    }
    else {
        let song = songs.find(song => song.id === playstate.songid)
        playstate.currentsong.src = song.url;
        playstate.currentsong.preload = "auto";
        playstate.default = null
        playstate.isplaying = true
        playstate.songdetails = true
        if (playstate.currentplayingbutton) {
            setButtonVisualState(playstate.currentplayingbutton, false, true)
        }
        if (manualclick) {
            queuegenerator()
            if (playstate.shuffle.active && playstate.shuffle.source !== playstate.source) {
                playstate.shuffle.source = playstate.source
                shufflesongs()
            }
        }
        mediaplayer(song)
        song_details()
        if (playstate.queue) {
            playstate.queue = null;
            queueupdater()
        }
        playstate.currentsong.onloadeddata = () => {
            if (albumbtn) {
                playstate.currentplayingbutton = null
                playstate.albumbtn = button
            }
            else {
                playstate.currentplayingbutton = button
            }
            if (button === "dummy") {
                playstate.currentplayingbutton = null
            }
            if (playstate.albumpage) {
                if (equaliser) {
                    equaliser()
                }
            }
            if (button !== "dummy") {
                setButtonVisualState(button, true, true)
            }
            playstate.currentsong.play().catch(err => {
                console.warn("Play failed:", err);
            });
        };
    }
}
export function addEventListeners(element, location) {
    if (location === "home") {
        element.querySelectorAll(".song").forEach(song => {
            song.addEventListener("click", (e) => {
                const button = e.target.closest("button");
                const source = button.closest(".category").firstElementChild.textContent;
                playstate.songid = button.dataset.songid
                playstate.source = source
                if (button) {
                    playsong(button, false, false, true);
                }
            })
        })
    }
    else if (location === "album") {
        element.querySelectorAll(".album-song-btn").forEach(button => {
            button.addEventListener("click", (e) => {
                let id = button.dataset.songid
                const source = songs.find(song => song.id === id)
                playstate.source = source.category
                let albumbtn = document.querySelector(".albumbtn")
                albumbtn.classList.add("Playing")
                playstate.albumbtn = albumbtn
                setButtonVisualState(playstate.albumbtn, true, false)
                playstate.songid = button.dataset.songid
                playsong(button, () => {
                    equaliserchecker(button)
                }, false, true);
            })
        })
    }
}
export function _albumbtn(button) {
    if (button.classList.contains("Playing")) {
        _playpause()
    }
    else {
        button.classList.add("Playing")
        if (playstate.albumbtn) {
            playstate.albumbtn.classList.remove("Playing")
            setButtonVisualState(playstate.albumbtn, false, true)
        }
        playstate.source = button.dataset.albumName
        playsong(button, null, "albumbtn", true);
        setTimeout(reassignbtn, 100)
    }
}