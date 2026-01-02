const btn = document.querySelector('.btn')
btn.addEventListener('click',()=>{
      const now = new Date();
      const timestamp = now.toLocaleTimeString();
      document.getElementById("time").innerHTML = timestamp
})

function display(){
      document.getElementById("demo").innerHTML = Date();
}