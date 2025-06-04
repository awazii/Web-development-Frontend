import { playstate, songs } from "./main.js"
import { _playpause } from "./mediaplayer.js";
import { song_details } from "./song-details.js";
import { mediaplayer } from "./mediaplayer.js";
export let appdata = {};
export function main_content() {
    document.querySelector(".content-area").innerHTML = `    <div class="c-a-heading">
            <h5> All</h5>
        </div>
          <div class="content">
          <div class="banner">
           <img src="https://c4.wallpaperflare.com/wallpaper/705/252/985/anime-monkey-d-luffy-one-piece-wallpaper-preview.jpg" alt="banner">
           <h2>Your soundtrack, your vibe.
</h2>
          </div>
            <div class="top-playlists"></div>
            <div class="dailymix"></div>
            <div class="recent"></div>
            <div class="categories">
            ${rendercategories()}
            </div>
              <div class="albums">
              ${renderalbum()}
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
                ids: []
            }
            SongCatalog.push(obj)
        })
        songs.forEach(song => {
            SongCatalog.forEach(catalog => {
                if (song.category === catalog.category) {
                    catalog.ids.push(song.id)
                }
            })
        })
        appdata.SongCatalog = SongCatalog
        localStorage.setItem("appdata", JSON.stringify(appdata))
        console.log(appdata)
        SongCatalog.forEach((catalog, index) => {
            html += `<div class="category">
                      <h2>${catalog.category}</h2>
                      <div class="songs">
                      <div class="songs-wrapper">
                      ${_rendersongs(catalog.ids)}
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
        function _rendersongs(ids) {
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
        return html
    }
    document.querySelectorAll('.songs-wrapper').forEach((swiperEl, index) => {
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
    });
    let currentplayingbutton = null;
    document.querySelectorAll(".song").forEach(song => {
        song.addEventListener("click", (e) => {
            const button = e.target.closest("button");
            if (button) {
                if (playstate.isplaying&&currentplayingbutton === button) {
                    console.log("same button is clicked")
                    _playpause(currentplayingbutton)
                }
                else {
                    console.log("different button is clicked")
                    let songid = button.dataset.songid
                    playstate.songid = songid
                    let song = songs.find(song => song.id === songid)
                    playstate.currentsong.src = song.url;
                    playstate.default = null
                    playstate.isplaying=true
                    playstate.songdetails=true
                    playstate.queue=null;
                    if (currentplayingbutton) {
                        currentplayingbutton.querySelector(".play").style.display = "block"
                        currentplayingbutton.querySelector(".pause").style.display = "none"
                        currentplayingbutton.classList.remove("active")
                    }
                    currentplayingbutton = button
                    mediaplayer(currentplayingbutton, song)
                    song_details()
                    button.querySelector(".pause").style.display = "block"
                    button.querySelector(".play").style.display = "none"
                    button.classList.add("active")
                    playstate.currentsong.play()
                }
            }
        })
    })
    function renderalbum() {
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
  <button class="play-pause-song" data-song-id="${album.song.id}">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" data-encore-id="icon"
                            role="img" aria-hidden="true" viewBox="0 0 16 16">
                            <path
                                d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z">
                            </path>
                        </svg>
                    </button>
      </div>`
        })
        return html
    }
}
console.log(JSON.parse(localStorage.getItem("appdata")));