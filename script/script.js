function clickHome(){
    document.getElementById('home').classList.add('active');
    let a = document.querySelectorAll('#sidebar-menu>li>a');
    a.forEach((val)=>console.log(val.classList));

console.log(a)
}


