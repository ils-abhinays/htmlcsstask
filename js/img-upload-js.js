const img_upl=document.querySelector("#img-input");
var upl_img="";
var div=document.getElementById("img22");
img_upl.addEventListener("change", function(){
    const reader = new FileReader();
    reader.addEventListener("load", ()=>{
        localStorage.setItem("recent-image",reader.result);
    });
    reader.readAsDataURL(this.files[0]);
})
document.addEventListener("DOMContentLoaded", ()=>{
    const recentdata=localStorage.getItem("recent-image");
    if(recentdata){
        document.querySelector("#imgview").setAttribute("src", recentdata);
        showimg();
    }
})

function showimg(){
    for(let i=0;i<window.localStorage.length;i++){
      let res = window.localStorage.getItem(window.localStorage.key(i))
      var imgage = new Image()
      Image.src = res;
      div.appendChild(image);
    }
}