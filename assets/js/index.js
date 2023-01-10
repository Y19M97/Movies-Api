
// ------------------------
// scroll Navbar 


// ---------------------

$(document).ready(()=>{
    $('#isLoading .lds-ripple').fadeOut(2000)
    $('#isLoading h2').fadeOut(2000,()=>$('#isLoading').slideUp(2000,()=>{
        $('#isLoading').remove()
        $('body').css('overflow' , 'auto')
    }))
})


