import React, { useEffect } from 'react'
// import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export const HeadScript = function () {
    const { siteConfig, i18n } = useDocusaurusContext();

    // useEffect(function() {
    //     // add script to head
    //     var head = window.document.getElementsByTagName('head')[0];
    //     var script = document.createElement('script');
    //     script.type = 'text/javascript';
    //     script.src = `${i18n.currentLocale !== 'en' ? '/'+i18n.currentLocale : ''}/js/nlevelAnalytics.js`;
    //     head.appendChild(script);

    //     if (window.top!=window.self)  {
    //         // remove footer
    //         const footer = document.querySelector('footer');
    //         if (footer) {
    //             footer.style.display = 'none';
    //         }
    //     }
    // }, [])

    return null;
}

export default HeadScript;