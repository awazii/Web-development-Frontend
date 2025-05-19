export function song_details(){
 document.querySelector('.song-details').innerHTML=`  <div class="details-header">
            <div class="hide-playview">
                <div class="hide-playview-btn info" data-info="Hide Now playing view">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" data-encore-id="icon" role="img" aria-hidden="true" class="e-9812-icon e-9812-baseline e-9812-icon--auto-mirror" viewBox="0 0 16 16" style="--encore-icon-height: var(--encore-graphic-size-decorative-smaller); --encore-icon-width: var(--encore-graphic-size-decorative-smaller);"><path d="M10.03 10.53a.75.75 0 1 1-1.06-1.06L10.44 8 8.97 6.53a.75.75 0 0 1 1.06-1.06l2 2a.75.75 0 0 1 0 1.06l-2 2Z"></path><path d="M15 16a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14Zm-8.5-1.5v-13h8v13h-8Zm-1.5 0H1.5v-13H5v13Z"></path></svg>
                </div>
                <h4>Your Top 100 songs</h4>
            </div>
        </div>
        <div class="details-footer">
            <div class="details-current-song">
                <div class="details-current-song-top">
                    <div class="details-current-song-image">
                        <img src="Assests/playlist-images/ab67616d00001e02e871d679f599b5de08c7ed70.jpeg" alt="">
                    </div>
                </div>
               <div class="details-current-song-bottom">
                <div class="details-current-song-detail">
                    <div class="details-current-song-name">
                        <h5>Nawazishein Karam - Original</h5>
                    </div>
                    <div class="details-current-song-artist">
                        <h6>Shuja Haider</h6>
                    </div>
                </div>
                <div class="like-btn-container details-like-btn-container">
                    <button class="liked info" data-info="Add to Liked Songs">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#b3b3b3" width="24px" height="24px"  data-encore-id="icon" role="img" aria-hidden="true" class="e-9812-icon e-9812-baseline" viewBox="0 0 16 16" style="--encore-icon-height: var(--encore-graphic-size-decorative-smaller); --encore-icon-width: var(--encore-graphic-size-decorative-smaller);"><path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"></path><path d="M11.75 8a.75.75 0 0 1-.75.75H8.75V11a.75.75 0 0 1-1.5 0V8.75H5a.75.75 0 0 1 0-1.5h2.25V5a.75.75 0 0 1 1.5 0v2.25H11a.75.75 0 0 1 .75.75z"></path></svg>
                    </button>
                </div>
               </div>
            </div> 
            <div class="about-this-artist"> 
                <div class="about-this-artist-image">
                    <h4>About this Artist</h4>
                    <img src="Assests/playlist-images/ab6761670000ecd43a18f939ead45e341ed12510.jpeg" alt="">
                </div> 
                <div class="artist-details">
                    <div class="artist-name">
                        <h4>
                            Tatsuya Kitani
                        </h4>
                    </div>  
                    <div class="artist-followers">
                        <h4>
                            3,000,000 followers
                        </h4>
                    </div>  
                    <div class="artist-description">
                        <h4>
                            Tatsuya Kitani is a Japanese singer-songwriter and musician. He is known for his unique blend of pop, rock, and electronic music, often incorporating elements of traditional Japanese music into his work. Kitani has gained a significant following in Japan and internationally, with his music being featured in various anime series and films.
                        </h4>
                    </div>
                </div> 
            </div>
            <div class="credits">
                <div class="cr-upper">
                    <h4>Credits</h4>
                    <button class="show-credits">
                     Show more credits
                </div>
                <div class="credits-details">
                    <div class="credit-detail">
                        <h4 class="credit-name">Awazii</h4>
                        <h4 class="credit-role">Main</h4>
                    </div>    
                    <div class="credit-detail">
                        <h4 class="credit-name">Arshman</h4>
                        <h4 class="credit-role">side</h4>
                    </div>    
                    <div class="credit-detail">
                        <h4 class="credit-name">Arshman</h4>
                        <h4 class="credit-role">side</h4>
                    </div>    
                    <div class="credit-detail">
                        <h4 class="credit-name">Arshman</h4>
                        <h4 class="credit-role">side</h4>
                    </div>    
                </div>
            </div>
            <div class="next-queue">
                <div class="nq-top">
                    <h4>Next in queue</h4>
                    <button class="open-queue">
                        Open queue
                    </button>
                </div>
                <div class="next-queue-detail">
                        <div class="next-queue-image"><img src="Assests/playlist-images/wallpaperflare.com_wallpaper (5).jpg" alt="playlist-image">
                            <button class="play-pause-song info" data-info="Play">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px"  data-encore-id="icon" role="img" aria-hidden="true" class="e-9812-icon e-9812-baseline" viewBox="0 0 16 16" style="--encore-icon-height: var(--encore-graphic-size-decorative-smaller); --encore-icon-width: var(--encore-graphic-size-decorative-smaller);"><path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path></svg>
                            </button>
                        </div>
                        <div class="next-queue-info">
                            <h4 class="next-queue-title">Humraah (From "Malang - Unleash The Madness-)
                            </h4>
                            <h4 class="next-queue-artist">
                                Sachet Tandon,kunaal Vermaa,The Fusion Project
                            </h4>
                        </div>
                </div>
            </div>
        </div>`
}