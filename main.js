var names = ["Huming Yan","Sophie Yang","Leo Yan"];
var imgs = ["dad.png","mom.png","me.png"];
var n = 0;
function change(){

    n = n + 1;
    if(n<=2){
    document.getElementById("image").src = imgs[n];
    document.getElementById("name").innerHTML = names[n];
    console.log(names[n]);
    }
    else{
    n = 0;
    document.getElementById("image").src = imgs[n];
    document.getElementById("name").innerHTML = names[n];
    console.log(names[n]);
    console.log("loop restarted");
    }

} 