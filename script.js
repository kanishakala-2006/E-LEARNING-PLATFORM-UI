let progressValue = 0;

function increaseProgress(){
if(progressValue < 100){
progressValue += 20;
document.getElementById("progress").style.width = progressValue + "%";
}
}
