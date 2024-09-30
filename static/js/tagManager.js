// <!-- Google Tag Manager -->
// <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
// new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
// j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
// 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
// })(window,document,'script','dataLayer','GTM-NJFR3TWD');</script>
// <!-- End Google Tag Manager -->

// <!-- Google Tag Manager (noscript) -->
// <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NJFR3TWD"
// height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
// <!-- End Google Tag Manager (noscript) -->


import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

if (ExecutionEnvironment.canUseDOM) {
    const googleTagManagerId = 'GTM-NJFR3TWD';

    // Initialize or extend the global `dataLayer` array
    window.dataLayer = window.dataLayer || [];

    // Create a new script element and set its attributes
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = `https://www.googletagmanager.com/gtm.js?id=${googleTagManagerId}`;
    script.async = true;

    // Paste this script as high in the <head> of the page as possible
    const firstScript = document.getElementsByTagName('script')[0];

    if (firstScript && firstScript.parentNode) {
        firstScript.parentNode.insertBefore(script, firstScript);
    }

    // Paste the second script immediately after the opening <body> tag:

    // Create a new iframe element and set its attributes
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.googletagmanager.com/ns.html?id=${googleTagManagerId}`;
    iframe.height = '0';
    iframe.width = '0';
    iframe.style.display = 'none';
    iframe.style.visibility = 'hidden';

    // Insert the iframe element into the DOM
    const body = document.getElementsByTagName('body')[0];

    if (body) {
        body.insertBefore(iframe, body.firstChild);
    }
}