var g = G$('John', 'Doe');
g.greet().setLang('jp').greet(true);

$('login').click(function () {
  var loginGrtr = G$('John', 'Doe');
  $('#logindiv').hide();

  loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
})
