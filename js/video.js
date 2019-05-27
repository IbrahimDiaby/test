var video = document.getElementById("video");
var iframe = document.getElementById("video").getElementsByTagName("iframe")[0];

var video_min = document.getElementById("movies-lst");
var iframes_min = document.getElementById("movies-lst").getElementsByTagName("iframe");

iframe.style.width = '100%';
iframe.style.height = '100%';

for(let i = 0; i < iframes_min.length; i++){
    iframes_min[i].addEventListener("mouseover", function (){
        iframe.src = `${iframes_min[i].src}`;
    }, false);
}