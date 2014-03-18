# subdomain-collapse

collapses www., www1., etc subdomains from pathnames. for standardization, if /www[0-9]?/ and bare domains exist together and need to be treated as the same.

[![Build Status](https://travis-ci.org/Interlincx/subdomain-collapse.png)](https://travis-ci.org/Interlincx/subdomain-collapse)  
[![NPM](https://nodei.co/npm/subdomain-collapse.png?downloads=true)](https://nodei.co/npm/subdomain-collapse/)

# install

    npm install subdomain-collapse

# test

    npm test

# usage

    var sc = require('subdomain-collapse');
    
    var result = sc('www.my-domain.org');
    console.log(result);
    // my-domain.org

    var result2 = sc('www1.my-domain.org');
    console.log(result2);
    // my-domain.org

    var result2 = sc('mail.my-domain.org');
    console.log(result2);
    // mail.my-domain.org
