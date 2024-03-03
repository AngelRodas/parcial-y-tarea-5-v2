const btnswitch = document.querySelector('#switch');
btnswitch.addEventListener('click',()=>{
    document.body.classList.toggle('Dark');
    btnswitch.classList.toggle('active');
});