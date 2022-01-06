<?php
    $page_type = "shop";
    include '../header.php';
?>
    <main class="site-content">
        <section class="shop-banner">
            <div class="container-fluid h-100">
                <div class="row h-100">
                    <div class="col h-100">
                        <div class="cat-banner h-100 position-relative">
                            <img src="../images/banner-1.jpg" alt="">
                            <h4 class="position-relative">Interior Design</h4>
                        </div>
                    </div>
                    <div class="col h-100">
                        <div class="cat-banner h-100 position-relative">
                            <img src="../images/banner-2.jpg" alt="">
                            <h4 class="position-relative">Interior Design</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="container-fluid">
                <div class="row">
                    <div class="col">
                        <div class="row align-items-center product-filter">
                            <div class="col-md-6">
                                <span>Filter</span>
                            </div>
                            <div class="col">
                                <ul class="d-flex toggle-views">
                                    <li><i class="bi bi-grid"></i></li>
                                    <li><i class="bi bi-list-task"></i></li>
                                </ul>
                            </div>
                            <div class="col">
                                <span class="product-count d-block">loading..</span>
                            </div>
                        </div>
                        <div class="py-5"></div>
                        <div id="all-products" class="row"><span class="loading-products">Fetching products...</span></div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="../js/theme.js" type="module"></script>
    <script src="../js/customizer.js" type="module"></script>
</body>
</html>