document.addEventListener('DOMContentLoaded', () => {
   const list = document.querySelector('.list');
   const strongCounter = (event) => {
    // let arr = [];
 // for(l = 1; l <=6; l++){
 //     arr.push(l);
 // }
 // event.target.innerText = arr.reduce((a,b)=>(a*b))'

 // albo lepsze:
 let num = 1;
 for(l = 1; l <=6; l++){
     num = l * num;
 }
 event.target.innerText = num;
}
   
   for(let i = 1; i <= 12; i++){
       const listElem = document.createElement('li');    
       listElem.innerText = i;
       listElem.className = `list-elem-${i}`;
       if(i === 6){
           listElem.addEventListener('click', strongCounter);
        }
        list.appendChild(listElem)
    }
        const lastElem = document.querySelector('.list-elem-12');
        lastElem.addEventListener('click', () => {
                lastElem.classList.add('animation');
            })
    })