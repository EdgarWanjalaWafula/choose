<?php
    $page_type = "Home";
    include 'header.php';
?>
    <section class="landing-banner">
        <div class="d-flex">
            <img src="images/banner/1.webp" alt="">
            <img src="images/banner/3.webp" alt="">
            <img src="images/banner/2.webp" alt="">
        </div>
    </section>
    <section class="choose-products theme-padding">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-6 offset-3">
                    <ul class="product-categories d-flex align-items-center justify-content-between text-capitalize"></ul>
                </div>
            </div>
            <div class="row">
                <div class="col-md-10 offset-1">
                    <div class="owl-theme owl-carousel home-products-carousel" data-options='{"loop": true, "items":4, "margin": 16, "autoheight":true, "lazyload":true, "nav": true, "dots": true, "autoplay": true, "autoplayTimeout": 6000, "smartSpeed": 300}'>
                    </div>
                </div>
            </div>
        </div>
    </section>

<?php
    include 'footer.php';
?>



