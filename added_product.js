$(document).ready(function() {
  $(document).on('click', '.added-close', function(event) {
    event.preventDefault();
    $.fancybox.close();
  });

  EventBus.subscribe('add_items:insales:cart', function (cart) {

    if (cart.action && cart.action.form) {

      Products.getInstance(cart.action.form).then(function (product) {
        var id = _.keys(cart.action.items)[0];
        var variant = product.variants.getVariant(id);
        var modalCartData = {
          product: product.product,
          cart: cart,
          variant: variant
        }

        $('.js-added_product').html( Template.render(modalCartData, 'added-product') );

        $.fancybox.open({
          src  : '#added-product',
          type : 'inline'
        });
      });

    }

  });
});
