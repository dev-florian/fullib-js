document.getElementById('buttonshare').addEventListener('click', ()=>{
    document.getElementsByClassName('social instagram')[0].classList.toggle('clicked');
    document.getElementsByClassName('social facebook')[0].classList.toggle('clicked');
    document.getElementsByClassName('social youtube')[0].classList.toggle('clicked');
});