new VenoBox({
    selector: '.my-image-links',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'rotating-plane'
});
AOS.init({
    duration: 2000,
});
$(document).ready(function(){
    $(".top").click(function(){
        $("html,body").animate({scrollTop:0},1000 )
    })   
})