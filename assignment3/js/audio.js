// Data for the "HTML Audio" Page

var audio = {
    controls: true, 
    source: [
        {src: "https://scs.senecac.on.ca/~patrick.crawford/shared/fall-2016/int222/Track03.mp3", type: "audio/mpeg"},
        {src: "https://scs.senecac.on.ca/~patrick.crawford/shared/fall-2016/int222/Track03.ogg", type: "audio/ogg"}
    ]
};
window.onload = function (){
    var audioElement = document.querySelector("#audio1");       

    var audio1 = "<audio>";
    
    if (audio.controls){
        audio1 = '<audio controls>';}
    
    for (var i =0; i<audio.source.length; i++){
        audio1 += '<source src="'+audio.source[i].src +'" type="'+ audio.source[i].type +'"';
    }
    audio1 += '</audio>';
    
    audioElement.innerHTML = audio1;
}
