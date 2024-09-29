{/*
    <script data-grow-initializer="">!(function(){window.growMe||((window.growMe=function(e){window.growMe._.push(e);}),(window.growMe._=[]));var e=document.createElement("script");(e.type="text/javascript"),(e.src="https://faves.grow.me/main.js"),(e.defer=!0),e.setAttribute("data-grow-faves-site-id","U2l0ZTplZWZkNDM4NC1jYjc2LTRiNzctOWViNi0wZTVkODY4MzY0Njk=");var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t);})();</script>

 */}



import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

if (ExecutionEnvironment.canUseDOM) {
    const growMeSiteId = 'U2l0ZTplZWZkNDM4NC1jYjc2LTRiNzctOWViNi0wZTVkODY4MzY0Njk=';

    // Initialize or extend the global `growMe` function to queue commands
    window.growMe = window.growMe || function (e) {
        window.growMe._.push(e);
    };
    window.growMe._ = window.growMe._ || [];

    // Create the script element for the Mediavine tracking code
    const growMeScript = document.createElement('script');
    growMeScript.type = 'text/javascript';
    growMeScript.src = 'https://faves.grow.me/main.js';
    growMeScript.defer = true;
    growMeScript.setAttribute('data-grow-faves-site-id', growMeSiteId);

    // Insert the script into the head of the document
    const firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode.insertBefore(growMeScript, firstScript);
}