$('input').each(function(){
  var $this = $(this);
  $this.data('placeholder', $this.attr('placeholder'))
       .focus(function(){$this.removeAttr('placeholder');})
       .blur(function(){$this.attr('placeholder', $this.data('placeholder'));});
});