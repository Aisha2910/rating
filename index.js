var btn = document.querySelectorAll('button');
var dynamic = document.querySelector(".dynamic");
const input = document.querySelector('input')

let answer = '';

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', ()=>{
        btn[i].classList.toggle('clicked')
        answer = i + 1
    })
    
}
const handleSubmit = (e)=>{
   if (answer) {
    e.preventDefault()
    document.querySelector('.user').classList.add('none')
    document.querySelector('.center').classList.remove('none')
    document.querySelector('.dynamic').textContent = answer
   } else {
      alert('select a rating') 
   }
}
input.addEventListener('click', handleSubmit)



