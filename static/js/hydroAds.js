import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

if (ExecutionEnvironment.canUseDOM) {
    const hydroTagId = 'dcb42b75-f850-4581-8231-db91ad4f7876';

    // Initialize or extend the global `Hydro` function to queue commands
    window.Hydro = window.Hydro || function () {
        (window.Hydro.q = window.Hydro.q || []).push(arguments);
    };

    // Create the script element for the Hydro configuration
    const hydroConfigScript = document.createElement('script');
    hydroConfigScript.id = 'hydro_config';
    hydroConfigScript.type = 'text/javascript';
    hydroConfigScript.text = `window.Hydro_tagId = "${hydroTagId}";`;

    // Create the script element for the Hydro tracking code
    const hydroTrackingScript = document.createElement('script');
    hydroTrackingScript.id = 'hydro_script';
    hydroTrackingScript.src = 'https://track.hydro.online/';
    hydroTrackingScript.async = true;
    hydroTrackingScript.defer = true;

    // Insert the scripts into the head of the document
    document.head.appendChild(hydroConfigScript);
    document.head.appendChild(hydroTrackingScript);
}