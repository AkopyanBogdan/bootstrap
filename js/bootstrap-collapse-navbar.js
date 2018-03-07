//Для Bootstrap 4 потрібно поміняти navbar-collapse.in на navbar-collapse
$(function() {
  $(document).on('click','.navbar-collapse',function(e) {
      if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
          $(this).collapse('hide');
      }
  });
});
