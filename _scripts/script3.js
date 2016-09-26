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
    let x = 8;
}

// Options.prototype = Object.create(Object.prototype);
// Options.prototype.constructor = Options;

{
    let x = 8;

    Options.prototype.m1 = () => {
        x = 9;
    };

    Options.prototype.m1 = () => {
        x = 3;
    };
}

Options.m1 = () => {
    // jhsdfkljsdf
};

Options.m1();
new Options().m2();

if (!('fetch' in window)
    && typeof window.fetch !== 'function'
// && window.fetch.length === 2
) {

    /**
     * Polyfill
     * @param {string} url
     * @param {Options} options
     */
    window.fetch = (url, options) => {

        const /** @type XMLHttpRequest */ xhr = new XMLHttpRequest();
        xhr.open(METHOD, url, true);
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