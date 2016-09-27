'use strict';

// /** @interface */
function Options() {
    this.method = 'GET';
    this.headers = [];
    this.body = '';
    this.mode = '';
    this.credentials = ''; // enum «omit», «same-origin», «include»
    this.cache = ''; // enum «default», «no-store», «reload», «no-cache», «force-cache», «only-if-cached»
    this.redirect = ''; // enum «follow», «error»
}

if (!('fetch' in window) && typeof window.fetch !== 'function') {

    /**
     * Polyfill
     * @param {string} url
     * @param {Options} options
     */
    var fetch = (url, options) => {

        const /** @type XMLHttpRequest */ xhr = new XMLHttpRequest();
        xhr.open(options.method, url, true);
        //noinspection SpellCheckingInspection
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== 4) return;
            if (xhr.status === 200)
                resolve(xhr.responseText);
            else
                reject(xhr.statusText);
        };
        xhr.send(null);
    };
}