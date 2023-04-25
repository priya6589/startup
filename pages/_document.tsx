import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Startup - IT Startups & Digital Services </title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {/* <!-- Bootstrap CSS -->  */}
        <link rel="stylesheet" href={process.env.NEXT_PUBLIC_BASE_URL + 'assets/css/bootstrap.min.css'} />
        {/* <!-- Owl Default CSS -->  */}
        <link rel="stylesheet" href={process.env.NEXT_PUBLIC_BASE_URL + 'assets/css/owl.default.min.css'} />
        {/* <!-- Owl Carousel CSS -->  */}
        <link rel="stylesheet" href={process.env.NEXT_PUBLIC_BASE_URL + 'assets/css/owl.carousel.min.css'} />
        {/* <!-- Owl Magnific CSS -->  */}
        <link rel="stylesheet" href={process.env.NEXT_PUBLIC_BASE_URL + 'assets/css/magnific-popup.min.css'} />
        {/* <!-- Animate CSS -->  */}
        <link rel="stylesheet" href={process.env.NEXT_PUBLIC_BASE_URL + 'assets/css/animate.min.css'} />
        {/* <!-- Boxicons CSS -->  */}
        <link rel="stylesheet" href={process.env.NEXT_PUBLIC_BASE_URL + 'assets/css/boxicons.min.css'} />
        {/* <!-- Flaticon CSS -->  */}
        <link rel="stylesheet" href={process.env.NEXT_PUBLIC_BASE_URL + 'assets/css/flaticon.css'} />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        {/* <!-- Meanmenu CSS --> */}
        <link rel="stylesheet" href={process.env.NEXT_PUBLIC_BASE_URL + 'assets/css/meanmenu.css'} />
        {/* <!-- Odometer CSS--> */}
        <link rel="stylesheet" href={process.env.NEXT_PUBLIC_BASE_URL + 'assets/css/odometer.min.css'} />
        {/* <!-- Style CSS --> */}
        <link rel="stylesheet" href={process.env.NEXT_PUBLIC_BASE_URL + 'assets/css/style.css'} />
        <link rel="stylesheet" href={process.env.NEXT_PUBLIC_BASE_URL + 'assets/css/style2.css'} />
        {/* <!-- RTL CSS --> */}
        <link rel="stylesheet" href={process.env.NEXT_PUBLIC_BASE_URL + 'assets/css/dark.css'} />
        {/* <!-- Responsive CSS --> */}
        <link rel="stylesheet" href={process.env.NEXT_PUBLIC_BASE_URL + 'assets/css/responsive.css'} />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link rel="icon" type="image/png" href={process.env.NEXT_PUBLIC_BASE_URL + 'assets/img/favicon.png'} />


        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ti-icons@0.1.2/css/themify-icons.min.css" />
        {/* <link href={process.env.NEXT_PUBLIC_BASE_URL +"assets/admin/css/bootstrap.min.css"} rel="stylesheet" type="text/css" /> */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link href={process.env.NEXT_PUBLIC_BASE_URL +"assets/admin/css/icons.min.css"} rel="stylesheet" type="text/css" />
        {/* <link href={process.env.NEXT_PUBLIC_BASE_URL +"assets/admin/css/app.min.css"} rel="stylesheet" type="text/css" /> */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@mdi/font@7.2.96/css/materialdesignicons.min.css" />

      </Head>
      <body>
        <Main />
        <NextScript />
        {/* <!-- Jquery Slim JS --> */}
        <script src={process.env.NEXT_PUBLIC_BASE_URL + 'assets/js/jquery.min.js'}></script>
        {/* <!-- Popper JS --> */}
        <script src={process.env.NEXT_PUBLIC_BASE_URL + 'assets/js/popper.min.js'}></script>
        <script src={process.env.NEXT_PUBLIC_BASE_URL + 'assets/js/bootstrap.min.js'}></script>
        {/* <!-- Meanmenu JS --> */}
        <script src={process.env.NEXT_PUBLIC_BASE_URL + 'assets/js/jquery.meanmenu.js'}></script>
        {/* <!-- Owl Carousel JS --> */}
        <script src={process.env.NEXT_PUBLIC_BASE_URL + 'assets/js/owl.carousel.js'}></script>
        {/* <!-- Magnific JS --> */}
        <script src={process.env.NEXT_PUBLIC_BASE_URL + 'assets/js/jquery.magnific-popup.min.js'}></script>
        {/* <!-- Appear JS -->  */}
        <script src={process.env.NEXT_PUBLIC_BASE_URL + 'assets/js/jquery.appear.min.js'}></script>
        {/* <!-- Odometer JS -->  */}
        <script src={process.env.NEXT_PUBLIC_BASE_URL + 'assets/js/odometer.min.js'}></script>
        {/* <!-- Form Ajaxchimp JS --> */}
        <script src={process.env.NEXT_PUBLIC_BASE_URL + 'assets/js/jquery.ajaxchimp.min.js'}></script>
        {/* <!-- Form Validator JS --> */}
        <script src={process.env.NEXT_PUBLIC_BASE_URL + 'assets/js/form-validator.min.js'}></script>
        {/* <!-- Contact JS --> */}
        <script src={process.env.NEXT_PUBLIC_BASE_URL + 'assets/js/contact-form-script.js'}></script>
        {/* <!-- Wow JS --> */}

        <script src={process.env.NEXT_PUBLIC_BASE_URL + 'assets/js/wow.min.js'}></script>
        {/* <!-- Custom JS --> */}
        <script src={process.env.NEXT_PUBLIC_BASE_URL + 'assets/js/main.js'}></script>

        <script src={process.env.NEXT_PUBLIC_BASE_URL +"assets/admin/js/app.js"}></script>

      </body>
    </Html>
  );
}
