$(document).ready(function(){
  // your code goes here.
  function changeStyle(selector, property, value) {
    $(selector).css(property, value);
  }

  let style_editor = $('#style_editor');

  form.submit(function(event) {
    let selector = $("input[name='selector']").val();
    let property = $("input[name='property']").val();
    let value = $("input[name='value']").val();

    changeStyle(selector, property, value);
    event.preventDefault();
  })
});
