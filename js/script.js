function pageLoad(){

  $('.sec1').addClass('active')
  $('.sec2').addClass('deactive')
  $('.sec3').addClass('deactive')
  $('.sec4').addClass('deactive')
  $('.sec5').addClass('deactive')
  $('#home').addClass('active-btn')

  $('#home').click(function(){
    $('#home').addClass('active-btn')
    $('#portfolio').removeClass('active-btn')
    $('#work').removeClass('active-btn')
    $('#blog').removeClass('active-btn')
    $('#contact').removeClass('active-btn')


    $('.sec1').addClass('active')
    $('.sec1').removeClass('deactive')

    $('.sec2').addClass('deactive')
    $('.sec2').removeClass('active')

    $('.sec3').addClass('deactive')
    $('.sec3').removeClass('active')

    $('.sec4').addClass('deactive')
    $('.sec4').removeClass('active')

    $('.sec5').addClass('deactive')
    $('.sec5').removeClass('active')
})

  $('#portfolio').click(function(){
    $('#home').removeClass('active-btn')
    $('#portfolio').addClass('active-btn')
    $('#work').removeClass('active-btn')
    $('#blog').removeClass('active-btn')
    $('#contact').removeClass('active-btn')

      $('.sec1').addClass('deactive')
      $('.sec1').removeClass('active')

      $('.sec2').addClass('active')
      $('.sec2').removeClass('deactive')

      $('.sec3').addClass('deactive')
      $('.sec3').removeClass('active')

      $('.sec4').addClass('deactive')
      $('.sec4').removeClass('active')

      $('.sec5').addClass('deactive')
      $('.sec5').removeClass('active')
  })

  $('#work').click(function(){
    $('#home').removeClass('active-btn')
    $('#portfolio').removeClass('active-btn')
    $('#work').addClass('active-btn')
    $('#blog').removeClass('active-btn')
    $('#contact').removeClass('active-btn')

    $('.sec1').addClass('deactive')
    $('.sec1').removeClass('active')

    $('.sec2').addClass('deactive')
    $('.sec2').removeClass('active')

    $('.sec3').addClass('active')
    $('.sec3').removeClass('deactive')

    $('.sec4').addClass('deactive')
    $('.sec4').removeClass('active')

    $('.sec5').addClass('deactive')
    $('.sec5').removeClass('active')
})
$('#blog').click(function(){
  $('#home').removeClass('active-btn')
  $('#portfolio').removeClass('active-btn')
  $('#work').removeClass('active-btn')
  $('#blog').addClass('active-btn')
  $('#contact').removeClass('active-btn')

  $('.sec1').addClass('deactive')
  $('.sec1').removeClass('active')

  $('.sec2').addClass('deactive')
  $('.sec2').removeClass('active')

  $('.sec3').addClass('deactive')
  $('.sec3').removeClass('active')

  $('.sec4').addClass('active')
  $('.sec4').removeClass('deactive')

  $('.sec5').addClass('deactive')
  $('.sec5').removeClass('active')
})
$('#contact').click(function(){
  $('#home').removeClass('active-btn')
  $('#portfolio').removeClass('active-btn')
  $('#work').removeClass('active-btn')
  $('#blog').removeClass('active-btn')
  $('#contact').addClass('active-btn')

  $('.sec1').addClass('deactive')
  $('.sec1').removeClass('active')

  $('.sec2').addClass('deactive')
  $('.sec2').removeClass('active')

  $('.sec3').addClass('deactive')
  $('.sec3').removeClass('active')

  $('.sec4').addClass('deactive')
  $('.sec4').removeClass('active')

  $('.sec5').addClass('active')
  $('.sec5').removeClass('deactive')
})

$('.theme-btn').click(function(){
   $('body').toggleClass('light-mode')
})

}




pageLoad();

function welcomeSta(){
var time  = new Date();

 
 if(time.getHours()>=0 && time.getHours()<12){
   $('#welcome-sta').text(" Hi,Good Morning !!!")
 }else if(time.getHours()>=12 && time.getHours()<16){
  $('#welcome-sta').text(" Hi,Good Afternon !!!")
 }
 else if(time.getHours()>=16 && time.getHours()<21){
  $('#welcome-sta').text(" Hi,Good Evening !!!")
 }else{
  $('#welcome-sta').text(" Hi,Good Night !!!")
 }
  
}

welcomeSta()