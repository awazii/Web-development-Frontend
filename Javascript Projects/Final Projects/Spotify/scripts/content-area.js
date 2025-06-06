import { playstate} from "./main.js"
import { _playpause } from "./mediaplayer.js";
import { fetch_home } from "./home.js";
import { render_album} from "./album.js";
export function main_content(category) {
    console.log(playstate.home, playstate.albumpage);
    if (playstate.home=== true) {
        fetch_home();  
    }
    else if (playstate.albumpage === true) {
         render_album(category)
    } 
}
//atif 215  #470807  pic
// jucie 176 #232831 pic
// arijit 65 #e68f5d no pic
// shawn 69  #262a2a pic