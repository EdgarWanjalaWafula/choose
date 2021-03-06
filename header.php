<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo ucfirst($page_type); ?></title>
    <link rel="stylesheet" href="<?php echo $path = $page_type == 'Home' ? '': '../'; ?>style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.css" integrity="sha512-OTcub78R3msOCtY3Tc6FzeDJ8N9qvQn1Ph49ou13xgA9VsH9+LRxoFU6EqLhW4+PKRfU+/HReXmSZXHEkpYoOA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" integrity="sha512-tS3S5qG0BlhnQROyJXvNjeEM4UpMXHrQfTGmbQ1gKmelCxlSEBUaxhRBj/EFTzpbP4RVSrpEikbmdJobCvhE3g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body class="theme-body">
    <?php 
        $path = "";

        if($page_type == 'Home'):
            $path = '../';
        else: 
            $path = '';
        endif;

    ?>
    <div class="overlay"></div>
    <div class="notifications"></div>
    <header class="site-header w-100">
        <!-- <div class="notice-bar bg-light p-1">
            <span class="small text-center d-block">free shipping on all orders over 5k</span>
        </div> -->
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col">
                    <nav>
                        <ul class="d-flex nav-items">
                            <li><a href="page/shop.php">Shop all</a></li>
                            <li><a href="#">Categories</a></li>
                            <li><a href="#">Brands</a></li>
                        </ul>
                    </nav>
                </div>
                <div class="col-md-2">
                    <a href="<?php echo $path = $page_type == 'Home' ? '': '../'; ?>index.php" class="site-branding">
                        <img src="<?php echo $path = $page_type == 'Home' ? '': '../'; ?>images/index.webp">
                    </a>
                </div>
                <div class="col">
                    <ul class="d-flex align-items-center justify-content-end acc-search-cart p-0 m-0">
                        <li>
                            <a class="small" href="">
                                Account
                            </a>
                        </li>
                        <li> 
                            <a class="small" href="#search">
                                Search
                                <i class="bi bi-search"></i> 
                            </a> 
                        </li>
                        <li>
                            <a class="small" href="<?php echo $path; ?>page/cart.php">
                                Cart
                                <i class="bi bi-bag"></i> 
                                <span>0</span>
                            </a> 
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
    <div id="single-product-container" class="d-flex align-items-center">
        <i class="bi bi-x-lg"></i>
        <div id="single-product" class="container-fluid"></div>
    </div>