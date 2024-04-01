let progress=document.getElementById("progress");
let song= document.getElementById("song");
let ctrlIcon=document.getElementById("ctrlIcon");
song.onloadedmetadata=function(){
    progress.max=song.duration;
    progress.value=song.currentTime;
}
function playPause()
{
    if(ctrlIcon.classList.contains("fa-pause"))
    {
    song.pause();
    ctrlIcon.classList.replace("fa-pause","fa-play");
    }
else
{
    song.play();
    ctrlIcon.classList.replace("fa-play","fa-pause");
}
}
if(song.play())
{
    setInterval(()=>{
        progress.value=song.currentTime;
    },500);
}
progress.onchange=function()
{
    song.play();
    song.currentTime=progress.value;
    ctrlIcon.classList.replace("fa-play","fa-pause");
}

