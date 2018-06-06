$('#ajax-call').click(() => {
  $.getJSON('https://dog.ceo/api/breeds/image/random')
    .done(data => $('#output').attr('src', data.message))
    .fail(error => console.log(error))
})
