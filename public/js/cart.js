
	function addToCart(product_name, product_price, product_filename) {
		
		$.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });


		$.ajax({
			type : 'POST',
			url : '/addcart',
			data : {
                name: product_name,
                price: product_price,
                filename: product_filename,
                quantity : 1,
                size : 'M',
            },
			success : function(msg) {
				alert(msg);
			}
			
		});
		

	}

$(document).ready(function(){

	  $('input[type=radio][name=pm]').change(function(){
	
	  	if ($("input[name='pm']:checked").val() == 'regular') {
	  		$.ajax({
			type : 'GET',
			url : '/billingInfo',
			success : function(msg) {
				for (var i = 0; i < msg.length; i++) {
					$('input[type=text][name=address]').val(msg[msg.length-1].address);
					$('input[type=text][name=region]').val(msg[msg.length-1].region);
					$('input[type=text][name=country]').val(msg[msg.length-1].country);
					$('input[type=text][name=number]').val(msg[msg.length-1].number);
				}
				
				
			}
		});
	  		
	  	}
	  	if ($("input[name='pm']:checked").val() == 'different') {
					$('input[type=text][name=address]').val('');
					$('input[type=text][name=region]').val('');
					$('input[type=text][name=country]').val('');
					$('input[type=text][name=number]').val('');	 
	  		
	  	}
	  });

	  
	
});

