<?php
    $page_type = "cart";
    include '../header.php';
?>
    <section class="shop">
    <div class="banner">
            
            </div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <table class="table table-striped table-borderless">
                        <thead>
                            <tr>
                                <th><h5>#</h5></th>
                                <th><h5>Product thumbnail</h5></th>
                                <th><h5>Product title</h5></th>
                                <th><h5>Price</h5></th>
                                <th><h5>Quantity</h5></th>
                                <th><h5>Amount</h5></th>
                                <!-- <th><h5>Action</h5></th> -->
                            </tr>
                        </thead>
                        <tbody id="cart">
                        </tbody>
                    </table>
                    
                </div>
            </div>
            <div class="row justify-content-end">
                <div class="col-md-4">
                    <h3>Shopping Summary</h3>
                    <table class="table table-bordered">
                        <tbody>
                            <tr>
                                <td scope="row">Shipping & delivery <span class="small d-block">Taxes and shipping calculated at checkout </span></td>
                                <td>Free</td>
                            </tr>
                            <tr>
                                <td scope="row">Total</td>
                                <td><span class="cart-total"></span></td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="my-4"></div>
                    <a href="#" class="btn rounded-0 w-100 checkout">Proceed to checkout</a>
                </div>
            </div>
        </div>
    </section>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="../js/theme.js" type="module"></script>
    <script src="../js/customizer.js" type="module"></script>
</body>
</html>