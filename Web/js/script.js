
//slide in the hidden menu when click 'MENU'
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginRight = "250px";
    document.body.style.backgroundColor ='rgba(0,0,0,0.4)';
}

// close the hidden menu
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
    document.body.style.backgroundColor ='none';
}

// alert message 
function output() {
	var Message = "Thank you for subscribing us!";
	console.log(Message);
    alert(Message);
    document.getElementById("myform").reset();
    
}

//alert message 
function message() {
	var Message = "Thank you for your message:)";
	console.log(Message);
    alert(Message);
    document.getElementById("message").reset();
}

//change the background
function night(){
    $("body").toggleClass("night-mode");
}

//popup message and scroll back to top
//reset the form
function popup() {
    $(".popup-overlay, .popup-content").addClass("active");
    $("html").scrollTop(0);
    document.getElementById("top").style.filter='blur(5px)';
    document.getElementById("form").reset();

};
  
//close popup message 
function remove() {
    $(".popup-overlay, .popup-content").removeClass("active");
    document.getElementById("top").style.filter='blur()';
};


//current page 
$(document).on('click', 'ul li', function(){
    $(this).addClass('current').siblings().removeClass('current')
})