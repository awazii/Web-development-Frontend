export function library() {
    document.querySelector('.library').innerHTML = `<div class="library-header">
            <div class="collapse-library">
                <div class="collapse-library-btn info" data-info="Collapse Your Library">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px"   data-encore-id="icon" role="img" aria-hidden="true" class="e-9812-icon e-9812-baseline e-9812-icon--auto-mirror" viewBox="0 0 16 16" style="--encore-icon-height: var(--encore-graphic-size-decorative-smaller); --encore-icon-width: var(--encore-graphic-size-decorative-smaller);"><path d="M10.97 5.47a.75.75 0 1 1 1.06 1.06L10.56 8l1.47 1.47a.75.75 0 1 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06l2-2Z"></path><path d="M1 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H1Zm.5 1.5H5v13H1.5v-13Zm13 13h-8v-13h8v13Z"></path></svg>
                </div>
                <h4>Your Library</h4>
            </div>
          <div class="add-playlist">
            <button class="add-playlist-btn info" data-info="Create Playlist">
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px"   data-encore-id="icon" role="img" aria-hidden="true" class="e-9812-icon e-9812-baseline gPxvvwdrTY6FbTx3mvl1" viewBox="0 0 16 16" style="--encore-icon-height: var(--encore-graphic-size-decorative-smaller); --encore-icon-width: var(--encore-graphic-size-decorative-smaller);"><path d="M15.25 8a.75.75 0 0 1-.75.75H8.75v5.75a.75.75 0 0 1-1.5 0V8.75H1.5a.75.75 0 0 1 0-1.5h5.75V1.5a.75.75 0 0 1 1.5 0v5.75h5.75a.75.75 0 0 1 .75.75z"></path></svg>
            </button>
          </div>
        </div>
        <div class="create-playlist"> 
            <div class="playlist-title-container">
                <input class="playlist-title-input" type=" text" placeholder="Add playlist title
                ">
                <button class="Clear-title btn info" data-info="Clear Title">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#b3b3b3" width="20px" height="20px" data-encore-id="icon" role="img" aria-hidden="true" class="e-9812-icon e-9812-baseline" viewBox="0 0 24 24"><path d="M3.293 3.293a1 1 0 0 1 1.414 0L12 10.586l7.293-7.293a1 1 0 1 1 1.414 1.414L13.414 12l7.293 7.293a1 1 0 0 1-1.414 1.414L12 13.414l-7.293 7.293a1 1 0 0 1-1.414-1.414L10.586 12 3.293 4.707a1 1 0 0 1 0-1.414z"></path></svg>
                </button>
            </div> 
            <button class="create-playlist-btn info" data-info="Create">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"   data-encore-id="icon" role="img" aria-hidden="true" class="e-9812-icon e-9812-baseline nUKFlsWLX7TAGu3w1Xz1" viewBox="0 0 24 24"><path d="M3 8V5H0V3h3V0h2v3h3v2H5v3H3zm8-4c0 .34-.024.673-.07 1H19v9.667h-1.5a3.5 3.5 0 1 0 3.5 3.5V3H10.93c.046.327.07.66.07 1zm8 12.667v1.5a1.5 1.5 0 1 1-1.5-1.5H19zM6 10.71a6.972 6.972 0 0 0 2-.965v8.422a3.5 3.5 0 1 1-3.5-3.5H6V10.71zm0 5.957H4.5a1.5 1.5 0 1 0 1.5 1.5v-1.5z"></path></svg>
            </button>
        </div>
        <div class="playlist-container">
            <h5>Playlists</h5>
            <div class="playlists">
                <div class="playlist card">
                    <div class="playlist-image card-image"><img src="Assests/playlist-images/wallpaperflare.com_wallpaper (5).jpg" alt="playlist-image">
                        <button class="play-pause-song info" data-info="Play">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px"  data-encore-id="icon" role="img" aria-hidden="true" class="e-9812-icon e-9812-baseline" viewBox="0 0 16 16" style="--encore-icon-height: var(--encore-graphic-size-decorative-smaller); --encore-icon-width: var(--encore-graphic-size-decorative-smaller);"><path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path></svg>
                        </button>
                    </div>
                    <div class="playlist-details">
                        <div class="playlist-title card-title"><h4>Nostalgia</h4></div>
                        <div class="playlist-detail"><span>Playlist</span><span class="dot"></span><span>10 songs</span></div>
                    </div>
                </div>         
            </div>
        </div>  `
}