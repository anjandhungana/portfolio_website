const x= document.querySelectorAll('.sidebar-btn');

const clicknav = (obj) =>{
    side=document.querySelectorAll('#sidebar-menu li a');
    side.forEach(element => {
        console.log(element);
        element.classList.remove('active');
    });
    // console.log(side)
    // console.log(obj.getAttribute('id'));
    id = obj.getAttribute('id');
    document.getElementById(id).classList.add('active');
}