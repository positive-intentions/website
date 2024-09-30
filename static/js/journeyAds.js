{/*
    <script data-grow-initializer="">!(function(){window.growMe||((window.growMe=function(e){window.growMe._.push(e);}),(window.growMe._=[]));var e=document.createElement("script");(e.type="text/javascript"),(e.src="https://faves.grow.me/main.js"),(e.defer=!0),e.setAttribute("data-grow-faves-site-id","U2l0ZTplZWZkNDM4NC1jYjc2LTRiNzctOWViNi0wZTVkODY4MzY0Njk=");var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t);})();</script>

 */}



{/* <script data-grow-initializer="">
    !(function() {
        if (!window.growMe) {
        window.growMe = function (e) {
            window.growMe._.push(e);
        };
    window.growMe._ = [];
        }

    var e = document.createElement("script");
    e.type = "text/javascript";
    e.src = "https://faves.grow.me/main.js";
    e.defer = true;
    e.setAttribute("data-grow-faves-site-id", "U2l0ZTplZWZkNDM4NC1jYjc2LTRiNzctOWViNi0wZTVkODY4MzY0Njk=");

    var t = document.getElementsByTagName("script")[0];
    t.parentNode.insertBefore(e, t);
    })();
</script> */}

import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

if (ExecutionEnvironment.canUseDOM) {
    const growMeSiteId = 'U2l0ZTplZWZkNDM4NC1jYjc2LTRiNzctOWViNi0wZTVkODY4MzY0Njk=';

    // Initialize or extend the global `growMe` function to queue commands
    if (!window.growMe) {
        window.growMe = function (e) {
            window.growMe._.push(e);
        };
        window.growMe._ = [];
    }

    // Create a new script element and set its attributes
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://faves.grow.me/main.js';
    script.defer = true;
    script.setAttribute('data-grow-faves-site-id', growMeSiteId);

    // Insert the script element into the DOM
    const firstScript = document.getElementsByTagName('script')[0];

    if (firstScript && firstScript.parentNode) {
        firstScript.parentNode.insertBefore(script, firstScript);
    }
}