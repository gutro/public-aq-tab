// ==UserScript==
// @name         Auto login
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Keep dashboard updated
// @author       Acquisition
// @match        http://rp.leo-platform-infra.lvg-tech.net/ui/
// @grant        none
// @updateURL    https://raw.githubusercontent.com/gutro/public-aq-tab/master/relog.js
// ==/UserScript==
(function() {
    'use strict';
    const login = () => {
        const loginBtn = document.querySelector('button.rp-btn.rp-btn-login');
        if (loginBtn) {
            loginBtn.click();
        }
    };
    setTimeout(login, 2000)
    setInterval(login, 30000)
})();
