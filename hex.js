const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
// const btn=document.getElementById("btn");
// const color=document.querySelector('.color');
// btn.addEventListener('click',function(){
//   const randm=Math.floor(Math.random()*4);
//   color.innerText=colors[randm]
//   document.body.style.backgroundColor=colors[randm]
    
// })

const btn=document.getElementById("btn");
const color=document.querySelector(".color")
btn.addEventListener('click',function(){
    let colors="#"
    for(let i=0;i<6;i++)
    {
        const random=Math.floor(Math.random()*hex.length)
        colors+=hex[random];
        
    }
    document.body.style.backgroundColor=colors;
    color.innerText=colors
})