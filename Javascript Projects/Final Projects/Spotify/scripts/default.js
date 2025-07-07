import { currentsongupdate } from "./mediaplayer.js";
export function default_media(isnew) {
    if (isnew) {
        document.querySelector(".media-player").innerHTML = ` <div class="current-song">
        </div>
        <div class="controls">
            <div class="upper-controls">
                <div class="controls-left">
                    <button disabled class="shuffle disable">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px"
                            role="img" viewBox="0 0 16 16">
                            <path
                                d="M13.151.922a.75.75 0 1 0-1.06 1.06L13.109 3H11.16a3.75 3.75 0 0 0-2.873 1.34l-6.173 7.356A2.25 2.25 0 0 1 .39 12.5H0V14h.391a3.75 3.75 0 0 0 2.873-1.34l6.173-7.356a2.25 2.25 0 0 1 1.724-.804h1.947l-1.017 1.018a.75.75 0 0 0 1.06 1.06L15.98 3.75 13.15.922zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.979 1.167-1.796-2.14A2.25 2.25 0 0 0 .39 3.5z">
                            </path>
                            <path
                                d="m7.5 10.723.98-1.167.957 1.14a2.25 2.25 0 0 0 1.724.804h1.947l-1.017-1.018a.75.75 0 1 1 1.06-1.06l2.829 2.828-2.829 2.828a.75.75 0 1 1-1.06-1.06L13.109 13H11.16a3.75 3.75 0 0 1-2.873-1.34l-.787-.938z">
                            </path>
                        </svg>
                    </button>
                    <button disabled class="prev disable">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px"
                            role="img" aria-hidden="true" viewBox="0 0 16 16">
                            <path
                                d="M3.3 1a.7.7 0 0 1 .7.7v5.15l9.95-5.744a.7.7 0 0 1 1.05.606v12.575a.7.7 0 0 1-1.05.607L4 9.149V14.3a.7.7 0 0 1-.7.7H1.7a.7.7 0 0 1-.7-.7V1.7a.7.7 0 0 1 .7-.7h1.6z">
                            </path>
                        </svg>
                    </button>
                </div>
                <div class="controls-centre">
                    <button disabled class="play-pause-control disable">
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
                    <button disabled class="next disable">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px"
                            role="img" aria-hidden="true" viewBox="0 0 16 16">
                            <path
                                d="M12.7 1a.7.7 0 0 0-.7.7v5.15L2.05 1.107A.7.7 0 0 0 1 1.712v12.575a.7.7 0 0 0 1.05.607L12 9.149V14.3a.7.7 0 0 0 .7.7h1.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-1.6z">
                            </path>
                        </svg>
                    </button>
                    <button disabled class="repeat disable">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px"
                            role="img" aria-hidden="true" viewBox="0 0 16 16">
                            <path
                                d="M0 4.75A3.75 3.75 0 0 1 3.75 1h8.5A3.75 3.75 0 0 1 16 4.75v5a3.75 3.75 0 0 1-3.75 3.75H9.81l1.018 1.018a.75.75 0 1 1-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 1 1 1.06 1.06L9.811 12h2.439a2.25 2.25 0 0 0 2.25-2.25v-5a2.25 2.25 0 0 0-2.25-2.25h-8.5A2.25 2.25 0 0 0 1.5 4.75v5A2.25 2.25 0 0 0 3.75 12H5v1.5H3.75A3.75 3.75 0 0 1 0 9.75v-5z">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="lower-controls not-allowed">
                <div class="elapsed-time">
                    <h6>-:-</h6>
                </div>
                <div class="progress-bar">
                    <div class="progress">
                    </div>
                </div>
                <div class="total-duration">
                    <h6>-:-</h6>
                </div>
            </div>
        </div>
        <div class="volume-queue">
            <button class="playingview disable" disabled>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#b3b3b3" width="16px" height="16px" data-encore-id="icon"
                    role="img" aria-hidden="true" viewBox="0 0 16 16">
                    <path d="M11.196 8 6 5v6l5.196-3z"></path>
                    <path
                        d="M15.002 1.75A1.75 1.75 0 0 0 13.252 0h-10.5a1.75 1.75 0 0 0-1.75 1.75v12.5c0 .966.783 1.75 1.75 1.75h10.5a1.75 1.75 0 0 0 1.75-1.75V1.75zm-1.75-.25a.25.25 0 0 1 .25.25v12.5a.25.25 0 0 1-.25.25h-10.5a.25.25 0 0 1-.25-.25V1.75a.25.25 0 0 1 .25-.25h10.5z">
                    </path>
                </svg>
            </button>
            <button class="queue disable" disabled>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#b3b3b3" width="16px" height="16px" 
                    role="img" aria-hidden="true" viewBox="0 0 16 16">
                    <path
                        d="M15 15H1v-1.5h14V15zm0-4.5H1V9h14v1.5zm-14-7A2.5 2.5 0 0 1 3.5 1h9a2.5 2.5 0 0 1 0 5h-9A2.5 2.5 0 0 1 1 3.5zm2.5-1a1 1 0 0 0 0 2h9a1 1 0 1 0 0-2h-9z">
                    </path>
                </svg>
            </button>
            <div class="volume-wrapper">
                <button class="volume-btn disable" disabled>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#b3b3b3" width="16px" height="16px"
                        role="presentation" aria-label="Volume medium" aria-hidden="false"  viewBox="0 0 16 16">
                        <path
                            d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 6.087a4.502 4.502 0 0 0 0-8.474v1.65a2.999 2.999 0 0 1 0 5.175v1.649z">
                        </path>
                    </svg>
                </button>
                <div class="volume-track not-allowed">
                    <div class="volume-fill"></div>
                </div>
            </div>
        </div>`
    }
    else {
        togglePlayerControls(true)
    }
}
export function togglePlayerControls(isDisabled) {
    document.querySelector(".current-song").style.visibility = isDisabled ? "hidden" : "visible";
    document.querySelector(".media-player").classList.add("disabled");
  const mainSelectors = [
    ".shuffle",
    ".prev",
    ".play-pause-control",
    ".next",
    ".repeat",
    ".playingview",
    ".queue",
    ".volume-btn"
  ];

  mainSelectors.forEach(selector => {
    const el = document.querySelector(selector);
    if (el) {
      el.classList.toggle("disable");
      el.classList.toggle("info");
        el.disabled = isDisabled? true : false;
    }
  });

  [".volume-track", ".lower-controls"].forEach(selector => {
    const el = document.querySelector(selector);
    if (el) el.classList.toggle("not-allowed", isDisabled);
  });

  const elapsed = document.querySelector(".elapsed-time")?.firstElementChild;
  const total = document.querySelector(".total-duration")?.firstElementChild;

  if (elapsed) elapsed.textContent = isDisabled ? "-:-" : "0:00";
  if (total) total.textContent = isDisabled ? "-:-" : "0:00"; // or set dynamically
}
