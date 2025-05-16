import { songs_raw } from "./raw_songs.js";
let final_songs=[];
/*
what we need
1. song title // Done
2. artists details // will use api to get the details of the artist including img,followers,descriptions etc
3. song image // Done
4.credits // are just all the artists who are involved in the song
5.song url // Done
6. song id // Done
7. song category // Done
*/
const clientId = '951a82da91da465ca860348f1b35ec08';
const clientSecret = 'eaf6e7b6591149df9350a8675e137439';
const _getToken = async () => {

    const result = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/x-www-form-urlencoded',
            'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)
        },
        body: 'grant_type=client_credentials'
    });

    const data = await result.json();
    return data.access_token;
}
let token = await _getToken(); // this is top level await we don't need to use async function
const _songdetails= async (token,title,num,id,song_url,category) => {
const access_token= token;
let song ={};
// track 13 and 73  are those which search api is not giving us the correct result so we are using track id for them
if (num===13 || num===73) {
  const url = `https://api.spotify.com/v1/tracks/${id}`;
  const result = await fetch(url, {
    headers: {
      'Authorization': 'Bearer ' + token
    }
  });
  const data = await result.json();
  console.log(data);
song.title=data.name;
song.id=data.id;
song.url=song_url;
song.category=category;
song.image=data.album.images[0].url;
song.credits=[]
  let artists=data.artists;
if (artists.length>1) {
  artists.forEach(artist => {
      song.credits.push(artist.name);
  });
}
else{
song.credits.push(artists[0].name);
song["top-artist"]=await _fetchArtist(access_token,artists[0].id)
}
console.log(song);
   let demo=document.createElement('div');
demo.classList.add('demo');
demo.innerHTML=`
<h2>${song_number}</h2>
<div class="img-container">
            <img src="${data.album.images[0].url}" alt="song-img">
        </div>
        <h3>api title :${	data.name} </h3>
        <input type="checkbox" name="" id="">`
    document.querySelector(".data").appendChild(demo);
final_songs.push(song);
}
else{
const query = encodeURIComponent(title);
const url = `https://api.spotify.com/v1/search?q=${query}&type=track&limit=1`;
const result = await fetch(url, {
  headers:{
    'Authorization': 'Bearer ' + access_token
  }
})
const data = await result.json();
console.log(data);
song.title=data.tracks.items[0].name;
song.id=data.tracks.items[0].id;
song.url=song_url;
song.category=category;
song.image=data.tracks.items[0].album.images[0].url;
song.credits=[]
let artists=data.tracks.items[0].artists;
console.log(artists.length);
if (artists.length>1) {
  artists.forEach(artist => {
     song.credits.push(artist.name);
  });
}
else{
song["top-artist"]= await _fetchArtist(access_token,artists[0].id)
 song.credits.push(artists[0].name);
}
console.log(song);
 let demo=document.createElement('div');
demo.classList.add('demo');
demo.innerHTML=`
<h2>${song_number}</h2>
<div class="img-container">
            <img src="${data.tracks.items[0].album.images[0].url}" alt="song-img">
        </div>
        <h3>our title :${title}</h3>
        <h3>api title :${	data.tracks.items[0].name} </h3>
        <input type="checkbox" name="" id="">`
    document.querySelector(".data").appendChild(demo);
    final_songs.push(song);
}
}
let song_number=1
for (const song of songs_raw) {
    let title = song.title;
    let trackid = song.trackid;
    let url= song.url;
    let category = song.category;
   await _songdetails(token,title,song_number,trackid,url,category);
   song_number++;
}
async function _fetchArtist(token,artistId){
  let artist={};
const url = `https://api.spotify.com/v1/artists/${artistId}`;
const response = await fetch(url, {
    headers: {
      'Authorization': 'Bearer ' + token
    }
  });
  const data = await response.json();
  artist.name=data.name;
  artist.image=data.images[0].url;
  artist.followers=data.followers.total;
  artist.description= await _artistdescription(data.name);
  console.log(artist);
  return artist;
};
async function _artistdescription(artistname) {
  const formattedName = artistname.replace(/\s+/g, '_');
  const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${formattedName}`;
  try{
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('no wiki found for this artist');
    }
    const data = await response.json();
    return data.extract_html
  }
  catch (error) {
    console.error('Error fetching artist description:', error);
    return null;
  }
}
// console.log(final_songs);
const jsonData = JSON.stringify(final_songs, null, 2);
    const blob = new Blob([jsonData], { type: "application/json" });  
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "songs.json";
    a.click();