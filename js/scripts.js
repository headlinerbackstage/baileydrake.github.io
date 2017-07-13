
$( function() {

  var $container = $('#container').masonry({
    itemSelector: 'li',
    columnWidth: 200
  });
    
  // reveal initial images
  $container.masonryImagesReveal( $('#photo').find('li') );
});

$.fn.masonryImagesReveal = function( $lis ) {
  var msnry = this.data('masonry');
  var itemSelector = msnry.options.itemSelector;
  // hide by default
  $lis.hide();
  // append to container
  this.append( $lis );
  $lis.imagesLoaded().progress( function( imgLoad, image ) {
    // get li
    // image is imagesLoaded class, not <img>, <img> is image.img
    var $li = $( image.img ).parents( liSelector );
    // un-hide li
   $li.show();
    // masonry does its thing
    msnry.appended( $li );
  });
  
  return this;
};