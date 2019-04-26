<?php
$read = App\Models\Cart::where('email', Auth::user()->email)->get();;
?>


<div class="col-lg-8">
  <div class="cart-table">
    <h3>Your Cart</h3>
    <div class="cart-table-warp">
      <table>
      <thead>
        <tr>
          <th class="product-th">Product</th>
          <th class="quy-th">Quantity</th>
          <th class="size-th">SizeSize</th>
          <th class="total-th">Price</th>
        </tr>
      </thead>
      <tbody>
        
        @foreach($read as $reads)
          <tr>
          <td class="product-col">
            <img src="images/product/{{$reads->filename}}" alt="">
            <div class="pc-title">
              <h4>{{ $reads->name }}</h4>
              <p>GHC {{ $reads->price}}</p>
            </div>
          </td>
          <td class="quy-col">
            <div class="quantity">
                          <div class="pro-qty">
                <input type="text" value="1">
              </div>
                      </div>
          </td>
          <td class="size-col"><h4>Size {{ $reads->size}}</h4></td>
          <td class="total-col"><h4>GHC {{$reads->price}}</h4></td>
        </tr>
        @endforeach 
        
      </tbody>
    </table>
    </div>
    <div class="total-cost">
      <h6>Total <span>GHC find</span></h6>
    </div>
  </div>
</div>
