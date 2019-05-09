<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
    <link rel="stylesheet" href="https://use.typekit.net/sdp7lpt.css"/>
    <link rel="stylesheet" href="../style/all.css"/>
    <title>Legarti - Startseite</title>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"/>
  </head>
  <body>
    <nav class="homeNavContainer">
      <a href="/" class="navLogo">
        <div>
          <img src="../assets/logoWhite.svg" alt="Legarti UG Logo, Kaligraphi Logo, Letter Logo"/>
        </div>
      </a>
      <div class="navItemContainer">
        <a href="/" class="navItem ">
          <span>Startseite</span></a>
        <a href="./projekte.php" class="navItem">
          <span>Projekte</span></a>
        <a href="./wir.php" class="navItem active">
          <span>Wir</span></a>
        <a href="./kontakt.php" class="navItem">
          <span>Kontakt</span></a>
        <div id="mobileMenuToggle" class="mobileMenuToggle icon menuIcon"></div>
      </div>
    </nav>
    <nav class="mobileMenu">
      <div class="mobileMenuItemContainer">
        <a href="/" class="navItem active">
          <span>Startseite</span></a>
        <a href="./projekte.php" class="navItem">
          <span>Projekte</span></a>
        <a href="./wir.php" class="navItem">
          <span>Wir</span></a>
        <a href="./kontakt.php" class="navItem">
          <span>Kontakt</span></a>
        <div class="sayhello">
          <p class="subheading">Sag Hallo</p>
          <p class="text">info@legarti.de</p>
        </div>
      </div>
    </nav>
    <main>
      <!-- Mission Statement -->
      <section class="container missionStatement">
        <h1>Hier koennte ein tolles mission statement stehen.</h1>
      </section>
      <!-- Teamfoto -->
      <section id="teamFotoContainer" class="fullContainer">
        <img class="teamFoto" src="../assets/wir/teamfoto.jpg" alt=""/>
        <div class="socialMediaContainer">
          <a href="" class="heroSocialItem icon brand facebookIcon"></a>
          <a href="https://www.instagram.com/legartide/" class="heroSocialItem icon brand instagramIcon"></a>
        </div>
      </section>
      <!-- Lege Artis Meaning -->
      <section id="legeartismeaning">
        <img src="../assets/wir/meaning/legeartis.svg" alt="" class="legeartis"/>
        <img src="../assets/wir/meaning/istlatein.svg" alt="" class="latein"/>
        <img src="../assets/wir/meaning/nachallenregelderkunst.svg" alt="" class="nachallenregelen"/>
      </section>

      <!-- Core Value Slideshow -->
      <!-- Werte (number&value) ueber JS setzen -->
      <section id="coreValueSlideshow" class="fullContainer legSlideshow" data-slideshow-background="data-slideshow-background">
        <h2 class="bigNumber" data-slideshow-placeholder="position" data-slideshow-anim-delay="200">
          <span>01</span>
        </h2>
        <div class="innerContent">
          <h4 class="ourValues" data-slideshow-placeholder="title" data-slideshow-anim-delay="400">
            <span>Unsere Werte</span>
          </h4>
          <h3 class="value" data-slideshow-placeholder="description" data-slideshow-anim-delay="600">
            <span>Gute Arbeit ensteht aus Überzeugung.</span>
          </h3>
        </div>
        <div class="arrows">
          <div class="left-arrow icon" data-slideshow-prev="data-slideshow-prev"></div>
          <div class="right-arrow icon" data-slideshow-next="data-slideshow-next"></div>
        </div>
      </section>

      <!-- Side Hustles -->
      <section id="sideHustle" class="fullContainer">
        <h3 class="heading">Wer keine Arbeit hat, der macht sich Welche.</h3>
        <div class="imageContainer">
          <div class="colContainer">
            <img src="../assets/wir/sideHustle/1.jpg" alt="" class="sideHustleImage"/>
            <img src="../assets/wir/sideHustle/m2.jpg" alt="" class="sideHustleImage"/>
            <img src="../assets/wir/sideHustle/4.jpg" alt="" class="sideHustleImage"/>
            <img src="../assets/wir/sideHustle/m2.jpg" alt="" class="sideHustleImage"/>
          </div>
          <div class="colContainer">
            <img src="../assets/wir/sideHustle/2.jpg" alt="" class="sideHustleImage"/>
            <img src="../assets/wir/sideHustle/m1.jpg" alt="" class="sideHustleImage"/>
            <img src="../assets/wir/sideHustle/5.jpg" alt="" class="sideHustleImage"/>
            <img src="../assets/wir/sideHustle/m1.jpg" alt="" class="sideHustleImage"/>
          </div>
          <div class="colContainer">
            <img src="../assets/wir/sideHustle/3.jpg" alt="" class="sideHustleImage"/>
            <img src="../assets/wir/sideHustle/m3.jpg" alt="" class="sideHustleImage"/>
            <img src="../assets/wir/sideHustle/6.jpg" alt="" class="sideHustleImage"/>
            <img src="../assets/wir/sideHustle/m3.jpg" alt="" class="sideHustleImage"/>
          </div>
        </div>
      </section>

      <!-- QUOTE -->
      <section class="quote">
        <h2 class="quoteText">
          Marketing is the story that you tell
        </h2>
        <h4 class="fullContainer quoteAuthor">Seth Godin</h4>
      </section>

<!-- FOOTER -->
<?php include("../components/footer.php"); ?>