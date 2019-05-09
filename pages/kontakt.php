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
  <body class="dark">
    <nav class="homeNavContainer dark">
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
        <a href="./wir.php" class="navItem ">
          <span>Wir</span></a>
        <a href="./kontakt.php" class="navItem active">
          <span>Kontakt</span></a>
        <div id="mobileMenuToggle" class="mobileMenuToggle icon menuIcon"></div>
      </div>
    </nav>
    <nav class="mobileMenu dark">
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
    <!-- MAIN -->
    <main>
      <div id="ContactContentContainer">
        <!-- CONTACT FORM -->
        <section id="contactFormContainer" class="fullContainer">
          <h2 class="heading">Was wollen Wir zusammen machen?</h2>
          <form action="https://formspree.io/info@legarti.de" method="POST" class="contactForm">
            <div class="inputGroup" id="name" data-label="Wie heißt Du?">
              <input type="text" name="Ansprechpartner" placeholder="Wie heißt Du?"/>
            </div>
            <div class="inputGroup" data-label="Wie können wir Dich erreichen?" id="contactWay">
              <input type="text" name="Kontaktinformationen" placeholder="Wie können wir Dich erreichen?"/>
            </div>
            <div id="message" class="inputGroup" data-label="Erzähl uns ein bisschen über dein Projekt.">
              <textarea name="Nachricht" cols="30" rows="13" placeholder="Erzähl uns ein bisschen über dein Projekt, dein Budget und deinen Zeitraum."></textarea>
            </div>
            <div class="inputGroup">
              <button type="submit" class="primaryButton">Absenden</button>
            </div>
          </form>
        </section>
        <!-- Direct Contact -->
        <section id="DirectContact" class="fullContainer">
          <div class="content">
            <div class="innerContent">
              <h3 class="heading">Du kannst uns auch direkt etwas fragen.</h3>
              <div class="contactData">
                <div class="contactDataItem">
                  <p class="subheading">Webseiten/Graphic Design</p>
                  <p class="heading">ms@legarti.de</p>
                </div>
                <div class="contactDataItem">
                  <p class="subheading">Branding/Content</p>
                  <p class="heading">rt@legarti.de</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <!-- Footer -->
      <footer class="fullContainer dark">
        <div class="bottom">
          <p class="copyright">
            Legarti UG (haftungsbeschränkt) | Copyright 2019
          </p>
          <p class="social">
            <a href="" class="heroSocialItem icon brand facebookIcon"></a>
            <a href="https://www.instagram.com/legartide/" class="heroSocialItem icon brand instagramIcon"></a>

          </p>
          <p class="withLove">
            Made with
            <i class="fas fa-heart"></i>
            and
            <i class="fas fa-smile"></i>
            in Germany.
          </p>
          <p class="rights negativeContainer">
            <span >
              <a href="/pages/datenschutzerklaerung.php">Datenschutzerklärung</a >
            </span >
            <span>
              <a href="/pages/impressum.php">
                | Impressum</a>
            </span>
          </p>
        </div>
      </footer>
    </main>

    <!-- Scripts -->
    <script src="https://code.jquery.com/jquery-3.4.0.slim.min.js" integrity="sha256-ZaXnYkHGqIhqTbJ6MB4l9Frs/r7U4jlx7ir8PJYBqbI=" crossorigin="anonymous"></script>
    <script src="../scripts/bodyScrollLock.min.js"></script>

    <script src="../functions.js"></script>
  </body>
</html>