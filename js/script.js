$(function(){

    var res = $(".ContactBox");
    $("#ContactMe").on("click", funk);

    $(document).click(function(e) {
      if ($(e.target).closest(res).length || $(e.target).closest('#ContactMe').length) return;
      res.fadeOut(100);
      e.stopPropagation();
    });
function funk(){
    if(res.css("display") == "none"){
        res.fadeIn(100);
      }
    else{
        res.fadeOut(100);
      }
    }

});
// $(function(){
//     $('#moreGoogle').on('click', function(){
//         console.log('helo');
//         $('.attachment_box').fadeToggle();
//     });
// });
// $(function(){
//     $("#boom").click(function(){
//         console.log("GOOD JOB, IRMA!");
//     });
// });