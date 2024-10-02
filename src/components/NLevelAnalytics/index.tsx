import React, { useEffect } from 'react'
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export const HeadScript = function () {
    const { siteConfig, i18n } = useDocusaurusContext();

    useEffect(function() {
        // // add script to head
        // var head = window.document.getElementsByTagName('head')[0];
        // var script = document.createElement('script');
        // script.type = 'text/javascript';
        // script.src = `${i18n.currentLocale !== 'en' ? '/'+i18n.currentLocale : ''}/js/nlevelAnalytics.js`;
        // head.appendChild(script);

        // if (window.top!=window.self)  {
        //     // remove footer
        //     const footer = document.querySelector('footer');
        //     if (footer) {
        //         footer.style.display = 'none';
        //     }
        // }

        // const functionToCall = `
        // !(function(){window.growMe||((window.growMe=function(e){window.growMe._.push(e);}),(window.growMe._=[]));var e=document.createElement("script");(e.type="text/javascript"),(e.src="https://faves.grow.me/main.js"),(e.defer=!0),e.setAttribute("data-grow-faves-site-id","U2l0ZTplZWZkNDM4NC1jYjc2LTRiNzctOWViNi0wZTVkODY4MzY0Njk=");var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t);})();
        // `
        // const elementToInsertIntoHead = document.createElement('script');
        // elementToInsertIntoHead.innerHTML = functionToCall;
        // elementToInsertIntoHead.type = 'text/javascript';
        // elementToInsertIntoHead.async = true;
        // elementToInsertIntoHead.setAttribute('data-grow-initializer', '');
    
        // const firstScript = document.getElementsByTagName('script')[0];
        // if (firstScript && firstScript.parentNode) {
        //     firstScript.parentNode.insertBefore(elementToInsertIntoHead, firstScript);
        // }
        // }, [])

    return <Head>
            <script data-grow-initializer="">!(function(){window.growMe||((window.growMe=function(e){window.growMe._.push(e);}),(window.growMe._=[]));var e=document.createElement("script");(e.type="text/javascript"),(e.src="https://faves.grow.me/main.js"),(e.defer=!0),e.setAttribute("data-grow-faves-site-id","U2l0ZTplZWZkNDM4NC1jYjc2LTRiNzctOWViNi0wZTVkODY4MzY0Njk=");var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t);})();</script>
    </Head>;
}

export default HeadScript;
