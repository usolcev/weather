(function($, Drupal, window, document) {

  Drupal.behaviors.weatherChangeCity = {
    attach: function (context, settings) {
      $('#weather-choose-city-form select').change(function() {
        $this = $(this);
        $.ajax({
          url: '?q=weather/' + $this.val(),
          success: function (data) {
            if(data.type_gradus == 'C'){
              var html = data.temperature + '°C';
            }
            else{
              var html = data.temperature + '°K';
            }
          $('#temperature').html(html);
          }
        });
      });
    }
  };

})(jQuery, Drupal, this, this.document);