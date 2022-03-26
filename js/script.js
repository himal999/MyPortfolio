function pageLoad(){

  $('.sec1').addClass('active')
  $('.sec2').addClass('deactive')
  $('.sec3').addClass('deactive')
  $('.sec4').addClass('deactive')
  $('.sec5').addClass('deactive')

  $('#home').click(function(){

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

}

pageLoad();