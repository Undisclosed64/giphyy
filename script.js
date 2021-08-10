//select gif img,search btn,input and error section
const img = document.querySelector('.show-gif');
const searchBtn = document.querySelector('.search_btn');
const input = document.querySelector('input');
const errSection = document.querySelector('.err-section');

//add event listener 
searchBtn.addEventListener("click",handleGif);

function handleGif(){
//get value of input
let inputVal = input.value;

fetch(`https://api.giphy.com/v1/gifs/translate?api_key=MOUoVphm6CuX7QhWDrq8ua0KJC1Irkx1&s=${inputVal}`,
{mode:'cors'})

 .then(function(response){
     return response.json();
 })

 .then(function(response){
     //console.log(response.data.images.original.url);
      //set img src to gif src
     img.src = response.data.images.original.url;

 })
 .catch(function(error){
     const Error = document.createElement("div");
     Error.className = 'error';
     const sryImg = document.createElement("img");
     sryImg.src = 'sry.gif';
     sryImg.className = 'sryImg';
     if(inputVal === ''){
        img.src = '';
        Error.textContent = `don\'t be lazy,search something out!!`
        errSection.appendChild(Error);
     } else {
        img.src = '';
     Error.textContent = `${error}:(`;
     errSection.appendChild(Error);
     errSection.appendChild(sryImg);
     }
 })
 errSection.innerHTML = '';

}
