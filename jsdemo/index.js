let mydate=new Date();
console.log(mydate);
console.log(mydate.getTime());
console.log(mydate.getFullYear());
console.log(mydate.getDay());
console.log(mydate.getMinutes());


let ele=document.getElementsByClassName('container');
console.log(ele);
ele[0].classList.add('bg-primary');
ele[0].classList.add('text-success');
console.log(ele[0].innerHTML);
console.log(ele[0].innerText);

// firstContainer.addEventListener('mousedown',function(){
//     console.log("mouse down");
// })firstContainer.addEventListener('mouseup',function(){
//     console.log("mouse up");
// })

let prev = document.querySelectorAll('.container')[1].innerHTML;
firstContainer.addEventListener('mouseup',function(){
    document.querySelectorAll('.container')[1].innerHTML=prev ;
})


firstContainer.addEventListener('mousedown',function(){
    document.querySelectorAll('.container')[1].innerHTML ="<p>we have clicked</p>";
})