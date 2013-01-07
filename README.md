# ecma-spec.js

It is a set of stub Javascript files which declare ECMA-262(ECMAScript) related APIs, using JSDoc. 

 * [ecma5-spec.js](https://github.com/toshif/ecma-spec.js/blob/master/script/ecma5-spec.js) - ECMA5 APIs for features which are not included in ECMA3
 * [ecma5-global.js](https://github.com/toshif/ecma-spec.js/blob/master/script/ecma5-global.js) - Global object references and console object
   

# Download

* the latest [zip](https://github.com/toshif/ecma-spec.js/archive/master.zip)

# How to use it
## Enable ECMA5 auto-completion in Eclipse JSDT

As of Jan 2013, JSDT (Eclipse 4.2.1, WTP 3.4.1) supports only ECMA 3 features and ECMA 5 is not supported (i.e. forEach of Array doesn't show up on the auto-completion). 
You can use them by referring the spec files in your project.  

Copy the 2 files under script into a directory on included paths in a Javascript project.

* ecma5-spec.js
* ecma5-global.js

That's it ! You can use auto completions with ECMA 5 features like this.

-![alt text](https://raw.github.com/toshif/ecma-spec.js/master/misc/img/eclipse-ecma5-complete.jpg "auto-completion")
