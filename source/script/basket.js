document.addEventListener('DOMContentLoaded',function(){
    const basket = document.querySelector('.basket')
    let isOpen = 0
    const cardBtn = document.querySelector('.card')
    

    cardBtn.addEventListener('click', function(){
        basket.classList.add('no-basket')
        isOpen = 0
    })

    document.addEventListener('click',function(e){
        
    })
})