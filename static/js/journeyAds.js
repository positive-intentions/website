{/*
    <script data-grow-initializer="">!(function(){window.growMe||((window.growMe=function(e){window.growMe._.push(e);}),(window.growMe._=[]));var e=document.createElement("script");(e.type="text/javascript"),(e.src="https://faves.grow.me/main.js"),(e.defer=!0),e.setAttribute("data-grow-faves-site-id","U2l0ZTplZWZkNDM4NC1jYjc2LTRiNzctOWViNi0wZTVkODY4MzY0Njk=");var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t);})();</script>

 */}

import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

if (ExecutionEnvironment.canUseDOM) {


    const scriptToInsertIntoHead = `
        <script data-grow-initializer=""></script>
    `;

    const functionToCall = `
    !(function(){window.growMe||((window.growMe=function(e){window.growMe._.push(e);}),(window.growMe._=[]));var e=document.createElement("script");(e.type="text/javascript"),(e.src="https://faves.grow.me/main.js"),(e.defer=!0),e.setAttribute("data-grow-faves-site-id","U2l0ZTplZWZkNDM4NC1jYjc2LTRiNzctOWViNi0wZTVkODY4MzY0Njk=");var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t);})();
    `
    const elementToInsertIntoHead = document.createElement('script');
    elementToInsertIntoHead.innerHTML = functionToCall;
    elementToInsertIntoHead.type = 'text/javascript';
    elementToInsertIntoHead.async = true;
    elementToInsertIntoHead.setAttribute('data-grow-initializer', '');

    const firstScript = document.getElementsByTagName('script')[0];
    if (firstScript && firstScript.parentNode) {
        firstScript.parentNode.insertBefore(elementToInsertIntoHead, firstScript);
    }
}