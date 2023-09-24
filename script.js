console.log("welcome to musify")
//initialize variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay= document.getElementById('masterPlay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
//let masterSongName = document.getElementById('masterSongName');
let songItem = Array.from(document.getElementsByClassName('songItem'));
let songs = [

    {songName:'Mai Bus Khena Chata Hon', filePath: 'songs/1.mp3', coverPath: 'album1.jpg'},
    {songName:'Talha Anjum - Agency', filePath: 'songs/2.mp3', coverPath: 'album2.jpg'},
    {songName:'Bella - I m A kid', filePath: 'songs/3.mp3', coverPath: 'album3.jpg'},
    {songName:'Bella - Deepist Desire', filePath: 'songs/4.mp3', coverPath: 'album4.jpg'},
    {songName:'MZ Bella - Vision', filePath: 'songs/5.mp3', coverPath: 'album5.jpg'},
    {songName:'Bella - Chemical Reaction', filePath: 'songs/6.mp3', coverPath: 'album6.jpg'},
    {songName:'Bella - Sweet Poison', filePath: 'songs/7.mp3', coverPath: 'album7.jpg'},
    {songName:'Bella - Humble Poet', filePath: 'songs/8.mp3', coverPath: 'album8.jpg'},




]

songItem.forEach((Element, i)=>{
    Element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    Element.getElementsByClassName('songname')[0].innerText = songs[i].songName

})

//handle play pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;

    }
})
//listen to events
audioElement.addEventListener('timeupdate',()=>{
    //update seekar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressbar.value = progress;

})

myprogressbar.addEventListener('change', ()=>{
    audioElement.currentTime = myprogressbar.value * audioElement.duration/100;
})
//const makeAllPlays = ()=>{
    //Array.from(document.getElementsByClassName('songItemPlay')).forEach(Element=>{
   //     Element.classList.remove('fa-circle-pause');
  //      Element.classList.add('fa-circle-play');
  //  })
//}
//Array.from(document.getElementsByClassName('songItemPlay')).forEach((Element)=>{
   // Element.addEventListener('click', (e)=>{
    //    makeAllPlays();
     //   songIndex = parseInt(e.target.id);
     //   e.target.classList.remove('fa-circle-play');
      //  e.target.classList.add('fa-circle-pause');
      //  masterSongName.innerText = songs[songIndex].songName;
      //  audioElement.src = 'songs/${songIndex+1}.mp3';
     //   audioElement.currentTime = 0;
      //  audioElement.play();
      //  gif.style.opacity = songs/1;
      //  masterPlay.classList.remove('fa-circle-play');
      //  masterPlay.classList.add('fa-circle-pause');

    //})


//})


//document.getElementById('next').addEventListener('click',  ()=>{
   /// if(songIndex>=7){
        //songIndex = 0
///
  ///  }
   /// else{
   ///   //  songIndex += songs/1;

   // }
   /// audioElement.src = 'songs/${songIndex+1}.mp3';
   /// masterSongName.innerText = songs[songIndex].songName;
   /// audioElement.currentTime = 0;
   // audioElement.play();
   // gif.style.opacity = songs/1;
  //  masterPlay.classList.remove('fa-circle-play');
  //  masterPlay.classList.add('fa-circle-pause');

//})

//document.getElementById('previous').addEventListener('click',  ()=>{
    //if(songIndex<=0){
      // songIndex = 0

   // }
    //else{
       //songIndex -= songs/1;

    //}
   // audioElement.src = 'songs/${songIndex+1}.mp3';
  //  masterSongName.innerText = songs[songIndex].songName;
    //audioElement.currentTime = 0;
   // audioElement.play();
  //  gif.style.opacity = songs/1;
   // masterPlay.classList.remove('fa-circle-play');
   // masterPlay.classList.add('fa-circle-pause');

//})