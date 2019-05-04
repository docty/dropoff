$(document).ready(function(){


 $('#upload_form').on('submit', function(event){
 		event.preventDefault();
var formData = new FormData(this);
    
 		$.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
 	

 $.ajax({
   url: '/admin/saveproduct',
   method:"POST",
   data: new FormData(this),
   contentType: false,
   processData:false,
   success:function(data)
   {
   alert(data);
   }
  });



 	  


 	});







});