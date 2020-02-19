// ==UserScript==
// @name         Auto login
// @namespace    http://tampermonkey.net/
// @version      0.8
// @description  Keep dashboard updated
// @author       Acquisition
// @match        http://rp.leo-platform-infra.lvg-tech.net/ui/
// @grant        none
// @updateURL    https://raw.githubusercontent.com/gutro/public-aq-tab/master/relog.js
// @downloadURL  https://raw.githubusercontent.com/gutro/public-aq-tab/master/relog.js
// ==/UserScript==

(function() {
    'use strict';

    const setVersion = () => {
        const versionHtml = `<span class="login-versions-item autolog"><span class="service-name">Auto login:</span>: <span>${GM_info.script.version}</span>;</span>`
        const versionEl = document.querySelector('.login-versions-item.autolog');

        if (versionEl) {
            versionEl.outerHTML = versionHtml;
        } else {
            document.querySelector('[data-js-build-versions]').innerHTML += versionHtml;
        }
    }

    const login = () => {
        const loginBtn = document.querySelector('button.rp-btn.rp-btn-login');

        if (loginBtn) {
            setVersion();

            document.querySelectorAll('.login-form input').forEach(element => {
                element.dispatchEvent(new Event('change'));
                element.dispatchEvent(new Event('input'));
            });

            loginBtn.click();
        }
    };

    setInterval(login, 2000)
})();
