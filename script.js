// console.log("rachi");
// initialize the variables
let songIndex =0;
let audioElement = new Audio('assets/songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressbar = document.getElementById('myProgressbar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songitems = Array.from(document.getElementsByClassName('songitem'))
// console.log(audioElement,masterPlay)
let songs = [
   {songName: "Warriyo - Mortals [NCS Release]", filePath: "assets/songs/1.mp3", coverPath: "assets/covers/1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "assets/songs/2.mp3", coverPath: "assets/covers/2.jpg"},
    {songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "assets/songs/3.mp3", coverPath: "assets/covers/3.jpg"},
    {songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "assets/songs/4.mp3", coverPath: "assets/covers/4.jpg"},
    {songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "assets/songs/5.mp3", coverPath: "assets/covers/5.jpg"},
    {songName: "Rabba - Salam-e-Ishq", filePath: "assets/songs/2.mp3", coverPath: "assets/covers/6.jpg"},
]

songitems.forEach((element, i)=>{ 
    
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})


// handle play and pause click button
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 0.4;
    }

    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
        
    }
    
})

// // // listen to events
// // audioElement.addEventListener('timeupdate', ()=>{
// //     // update seekbar
// //     progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
// //      myProgressbar.value = progress;
// // })

// // myProgressbar.addEventListener('change',()=>{
// //     audioElement.currentTime = myProgressbar.value*audioElement.duration/100;
// // })

// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressbar.value = progress;
})

myProgressbar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressbar.value * audioElement.duration/100;
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songitemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songitemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
          makeAllPlays();
          songIndex = parseInt(e.target.id)
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `assets/songs/${songIndex+1}.mp3`
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 0.4;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    })
})
    document.getElementById('next').addEventListener('click', ()=>{
       if(songIndex>=5){
        songIndex =0;

       }
       else{
             songIndex += 1;
         }
           audioElement.src = `assets/songs/${songIndex+1}.mp3`    
           masterSongName.innerText = songs[songIndex].songName;
           audioElement.currentTime = 0;
           audioElement.play();
           gif.style.opacity = 0.4;
           masterPlay.classList.remove('fa-play-circle');
           masterPlay.classList.add('fa-pause-circle');
    
})


document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
     songIndex =0;
     }

    else{
          songIndex -= 1;
      }
        audioElement.src = `assets/songs/${songIndex+1}.mp3`
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');


        
 

})
