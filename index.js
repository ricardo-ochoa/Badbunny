
function openDialog(url, width) {

    let DivBackground= document.createElement("div");
    DivBackground.className="DivBackground";
    DivBackground.id="DivBackground";

    let DivTrack= document.createElement("div");
    DivTrack.className="DivTrack";
    DivTrack.id="DivTrack";
    DivTrack.style.width= width+"px";

    fetch(url)
    .then(function(res){
        return res.text();
    })
    .then(function(featuring){
        document.getElementById("DivTrack").innerHTML = featuring;
    })
    

    document.body.appendChild(DivBackground);
    DivBackground.appendChild(DivTrack);
}

function removeDialog(){
    let DivBackground= document.getElementById("DivBackground");
    document.body.removeChild(DivBackground);
}