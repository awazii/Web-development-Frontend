import { songs_raw } from "./raw_songs.js";
console.log(songs_raw);
/*
what we need
1. song title // we will need to do it manually for searching
2. song artists // will use api to get the artists of the song
3. song image // will use api to get the image of the song
4.artist image // will use api to get the image of the artist
5.artist description // will use api to get the description of the artist
6.credits // we see what we can do with this
7.song lyrics // will use other api to get the lyrics
8.song url // will use claudinary storage to store the song
9. song id // it  will be my own id
10. monthly listeners of artist // we see what we can do with this
11. song category // we see what we can do with this
*/
const clientId = '951a82da91da465ca860348f1b35ec08';
const clientSecret = 'eaf6e7b6591149df9350a8675e137439';
// const _getToken = async () => {

// //     const result = await fetch('https://accounts.spotify.com/api/token', {
// //         method: 'POST',
// //         headers: {
// //             'Content-Type' : 'application/x-www-form-urlencoded',
// //             'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)
// //         },
// //         body: 'grant_type=client_credentials'
// //     });

// //     const data = await result.json();
// //     console.log(data);
// //     return data.access_token;
// // }

// // const _getGenres = async (token) => {

// //     const result = await fetch(`https://api.spotify.com/v1/browse/categories?locale=sv_US`, {
// //         method: 'GET',
// //         headers: { 'Authorization' : 'Bearer ' + token}
// //     });

// //     const data = await result.json();
// //     return data.categories.items;
// // }