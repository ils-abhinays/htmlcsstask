const img_upl=document.querySelector("#img-input");
var upl_img="";
var div=document.getElementById("img22");
var  img_container=document.querySelector(".img-container");
let i=0;

// for(let i=0;i<5;i++){
img_upl.addEventListener("change", function(){
    const reader = new FileReader();
    reader.addEventListener("load", ()=>{
        localStorage.setItem("recent-image",reader.result);
    });
    reader.readAsDataURL(this.files[i]);
})
document.addEventListener("DOMContentLoaded", ()=>{
    const recentdata=localStorage.getItem("recent-image");
    let new_img=document.createElement("img");
    img_container.appendChild(new_img);
    if(recentdata){
        new_img.setAttribute("class","imgview");
        new_img.setAttribute("src", recentdata);
    }
    // i++;
})
// }

// function showimg(){
//     for(let i=0;i<window.localStorage.length;i++){
//       let res = window.localStorage.getItem(window.localStorage.key(i))
//       var imgage = new Image()
//       Image.src = res;
//       div.appendChild(image);
//     }
// }

// const img_upl=document.querySelector("#img-input");
// var  img_container=document.querySelector(".img-container");

// function imgupload(){
//  for( i of img_upl.files){
    // const reader = new FileReader();
    // reader.onload=()=>{
        // let new_img=document.createElement("img");
        // new_img.setAttribute("src",reader.result);
    // }
    // img_container.appendChild(new_img);
    // reader.readAsDataURL(i);

//     return false;
// }