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
    // console.log(document.)
}


// progress
document.addEventListener('scroll',()=>{
    var totalheight = document.documentElement.scrollHeight-document.documentElement.clientHeight;
    var scrollheight = window.scrollY;
    var height = scrollheight/totalheight*100;
    var width = document.getElementById('sidebar-menu').clientWidth;
    
    var y = document.getElementById('progress').style.width = (height) + '%';
    console.log(y)

    // full scroll
    if (height>15){
        
    }
});



