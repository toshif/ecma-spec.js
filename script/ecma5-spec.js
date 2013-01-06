/*
 * 
 * ECMAScript 5 specification
 * http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf
 * 
 * ECMAScript 5 compatibility table
 * http://kangax.github.com/es5-compat-table/
 * 
 */

 /**
  * Creates a new object with the specified prototype object and properties.
  * </p>
  * <p>
  * Throws a TypeError exception if the proto parameter isn't null or an object.
  * </p>
  * <p>
  * Examples :
  * <pre>
  * ex1) Object.create(SuperClass.prototype);
  * ex2) Object.create(SuperClass.prototype, {
  *        x : {
  *          value : 30,
  *          enumerable : true
  *        }
  *      });
  * </pre>
  * </p>
  * @memberOf   Object
  * @param   {Object} proto - The object which should be the prototype of the newly-created object.
  * @param   {Object} [propertiesObject] - If specified and not undefined, an object whose enumerable own properties (that is, those properties defined upon itself and not enumerable properties along its prototype chain) specify property descriptors to be added to the newly-created object, with the corresponding property names.
  * @returns {Object}
  * @since   Standard ECMA-262 5th. Edition 
 */
Object.create = function(proto, propertiesObject){return "";};

/**
 * Adds the named property described by a given descriptor to an object.
 * <p>
 * Examples :
 * <pre>
 * // Example of an object property added with defineProperty with a data property descriptor
 * Object.defineProperty(obj, "num", {
 *   value : 37,
 *   writable : true,
 *   enumerable : true,
 *   configurable : true
 * });
 * </pre>
 * </p>
 * @memberOf   Object
 * @param   {Object} obj - The object on which to define the property.
 * @param   {Object} prop - The name of the property to be defined or modified.
 * @param   {Object} descriptor - The descriptor for the property being defined or modified. 
 * @returns {Object} obj
 * @since   Standard ECMA-262 5th. Edition 
*/
Object.defineProperty = function(obj, prop, descriptor){return "";};

/**
 * Adds the named properties described by the given descriptors to an object.
 * 
 * @memberOf   Object
 * @param   {Object} obj - The object on which to define or modify properties.
 * @param   {Object} props - An object whose own enumerable properties constitute descriptors for the properties to be defined or modified.
 * @returns {Object} obj
 * @since   Standard ECMA-262 5th. Edition 
*/
Object.defineProperties = function(obj, props){return "";};

/**
 * Returns the prototype of the specified object.
 * <p>
 * Throws a TypeError exception if the object parameter isn't an Object.
 * </p>
 * 
 * @memberOf   Object
 * @param   {Object} object - The object whose prototype is to be returned.
 * @returns {Object} obj
 * @since   Standard ECMA-262 5th. Edition 
*/
Object.getPrototypeOf = function(object){return "";};

/**
 * Returns an array of a given object's own enumerable properties, in the same order as that provided by a for-in loop (the difference being that a for-in loop enumerates properties in the prototype chain as well).
 * 
 * @memberOf   Object
 * @param   {Object} obj - The object whose enumerable own properties are to be returned.
 * @returns {Array} keys - 
 * @since   Standard ECMA-262 5th. Edition 
*/
Object.keys = function(obj){return [];};

/**
 * Seals an object, preventing new properties from being added to it and marking all existing properties as non-configurable. Values of present properties can still be changed as long as they are writable.
 * 
 * @memberOf   Object
 * @param   {Object} obj - The object which should be sealed.
 * @returns {Object} obj 
 * @since   Standard ECMA-262 5th. Edition 
*/
Object.seal = function(obj){return "";};

/**
 * Freezes an object: that is, prevents new properties from being added to it; prevents existing properties from being removed; and prevents existing properties, or their enumerability, configurability, or writability, from being changed. In essence the object is made effectively immutable. The method returns the object being frozen.
 * 
 * @memberOf   Object
 * @param   {Object} obj - The object to freeze.
 * @returns {Object} obj 
 * @since   Standard ECMA-262 5th. Edition 
*/
Object.freeze = function(obj){return "";};

/**
 * Prevents new properties from ever being added to an object (i.e. prevents future extensions to the object).
 * 
 * @memberOf   Object
 * @param   {Object} obj - The object which should be made non-extensible.
 * @returns {Object} obj 
 * @since   Standard ECMA-262 5th. Edition 
*/
Object.preventExtensions = function(obj){return "";};

/**
 * Determine if an object is sealed.
 * <p>
 * Returns true if the object is sealed, otherwise false. An object is sealed if it is non-extensible and if all its properties are non-configurable and therefore not removable (but not necessarily non-writable).
 * </p>
 * @memberOf   Object
 * @param   {Object} obj - The object which should be checked.
 * @returns {Boolean} 
 * @since   Standard ECMA-262 5th. Edition 
*/
Object.isSealed = function(obj){return true;};

/**
 * Determine if an object is frozen.
 * <p>
 * An object is frozen if and only if it is not extensible, all its properties are non-configurable, and all its data properties (that is, properties which are not accessor properties with getter or setter components) are non-writable.
 * </p>
 * @memberOf   Object
 * @param   {Object} obj - The object which should be checked.
 * @returns {Boolean} 
 * @since   Standard ECMA-262 5th. Edition 
*/
Object.isFrozen = function(obj){return true;};

/**
 * Determines if an object is extensible (whether it can have new properties added to it).
 * <p>
 * Objects are extensible by default: they can have new properties added to them, and (in engines that support __proto__ Deprecated their __proto__ property) can be modified. An object can be marked as non-extensible using Object.preventExtensions, Object.seal, or Object.freeze.
 * </p>
 * @memberOf   Object
 * @param   {Object} obj - The object which should be checked.
 * @returns {Boolean} 
 * @since   Standard ECMA-262 5th. Edition 
*/
Object.isExtensible = function(obj){return true;};

/**
 * Returns a property descriptor for an own property (that is, one directly present on an object, not present by dint of being along an object's prototype chain) of a given object.
 * 
 * @memberOf   Object
 * @param   {Object} obj - The object in which to look for the property.
 * @param   {Object} prop - The name of the property whose description is to be retrieved
 * @returns {Object} 
 * @since   Standard ECMA-262 5th. Edition 
*/
Object.getOwnPropertyDescriptor = function(obj, prop){return "";};

/**
 * Returns an array of all properties (enumerable or not) found directly upon a given object.
 * 
 * @memberOf   Object
 * @param   {Object} obj - The object whose enumerable and non-enumerable own properties are to be returned.
 * @returns {Array} 
 * @since   Standard ECMA-262 5th. Edition 
*/
Object.getOwnPropertyNames = function(obj){return [];};

/**
 * Converts a date to a string following the ISO 8601 Extended Format (YYYY-MM-DDTHH:mm:ss.sssZ).
 * 
 * @memberOf   Date
 * @returns {String} 
 * @since   Standard ECMA-262 5th. Edition 
*/
Date.prototype.toISOString = function(){return "";};

/**
 * Returns the number of milliseconds elapsed since 1 January 1970 00:00:00 UTC.
 * 
 * @memberOf   Date
 * @returns {Number} 
 * @since   Standard ECMA-262 5th. Edition 
*/
Date.now = function(){return 1;};

/**
 * Returns true if an object is an array, false if it is not.
 * 
 * @memberOf   Array
 * @param   {Object} obj - The object to be checked
 * @returns {Boolean} 
 * @since   Standard ECMA-262 5th. Edition 
*/
Array.isArray = function(obj){return true;};

/**
 * Returns the first index at which a given element can be found in the array, or -1 if it is not present.
 * 
 * @memberOf   Array
 * @param   {Object} searchElement - Element to locate in the array.
 * @param   {Number} [fromIndex] - Element to locate in the array.
 * @returns {Number} 
 * @since   Standard ECMA-262 5th. Edition 
*/
Array.prototype.indexOf = function(searchElement, fromIndex){return 1;};

/**
 * Returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.
 * 
 * @memberOf   Array
 * @param   {Object} searchElement - Element to locate in the array.
 * @param   {Number} [fromIndex] - Element to locate in the array.
 * @returns {Number} 
 * @since   Standard ECMA-262 5th. Edition 
*/
Array.prototype.lastIndexOf = function(searchElement, fromIndex){return 1;};

/**
 * Tests whether all elements in the array pass the test implemented by the provided function.
 * <p>
 * Examples :
 * <pre>
 * function isBigEnough(element, index, array) {
 *   return (element >= 10);
 * }
 * var passed = [12, 5, 8, 130, 44].every(isBigEnough);
 * // passed is false
 * passed = [12, 54, 18, 130, 44].every(isBigEnough);
 * // passed is true
 * </pre>
 * </p>
 * 
 * @memberOf   Array
 * @param   {Function} callback - Function to test for each element.
 * @param   {Object} [thisObject] - Object to use as this when executing callback.
 * @returns {Boolean} 
 * @since   Standard ECMA-262 5th. Edition 
*/
Array.prototype.every = function(callback, thisObject){return true;};

/**
 * Tests whether some element in the array passes the test implemented by the provided function.
 * <p>
 * Examples :
 * <pre>
 * function isBigEnough(element, index, array) {
 *   return (element >= 10);
 * }
 * var passed = [2, 5, 8, 1, 4].some(isBigEnough);
 * // passed is false
 * passed = [12, 5, 8, 1, 4].some(isBigEnough);
 * // passed is true
 * </pre>
 * </p>
 * 
 * @memberOf   Array
 * @param   {Function} callback - Function to test for each element.
 * @param   {Object} [thisObject] - Object to use as this when executing callback.
 * @returns {Boolean} 
 * @since   Standard ECMA-262 5th. Edition 
*/
Array.prototype.some = function(callback, thisObject){return true;};

/**
 * Executes a provided function once per array element.
 * 
 * callback is invoked with three arguments:
 * <ul>
 *   <li> the element value
 *   <li> the element index
 *   <li> the array being traversed
 * </ul>
 * 
 * <p>
 * Examples :
 * <pre>
 * var array = [ 1, 2, 3 ];
 * 
 * array.forEach(function(e) {
 *   console.log(e);
 * });
 * 
 * array.forEach(function(element, index, array) {
 *   ...
 * });
 * </pre>
 * </p>
 * 
 * @memberOf   Array
 * @param   {Function} callback - unction to execute for each element.
 * @param   {Object} [thisObject] - Object to use as this when executing callback.
 * @since   Standard ECMA-262 5th. Edition 
*/
Array.prototype.forEach = function(callback, thisObject){};

/**
 * Creates a new array with the results of calling a provided function on every element in this array.
 * 
 * @memberOf   Array
 * @param   {Function} callback - Function that produces an element of the new Array from an element of the current one.
 * @param   {Object} [thisArg] - Object to use as this when executing callback.
 * @returns {Array}
 * @since   Standard ECMA-262 5th. Edition 
*/
Array.prototype.map = function(callback, thisArg){return [];};

/**
 * Creates a new array with all elements that pass the test implemented by the provided function.
 * 
 * @memberOf   Array
 * @param   {Function} callback - Function to test each element of the array.
 * @param   {Object} [thisObject] - Object to use as this when executing callback.
 * @returns {Array}
 * @since   Standard ECMA-262 5th. Edition 
*/
Array.prototype.filter = function(callback, thisObject){return [];};

/**
 * Apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value.
 * 
 * <p>
 * callback is invoked with four arguments:
 * <ul>
 *  <li> previousValue - The value previously returned in the last invocation of the callback, or initialValue, if supplied. 
 *  <li> currentValue - The current element being processed in the array.
 *  <li> index - The index of the current element being processed in the array.
 *  <li> array - The array reduce was called upon.
 * <ul>
 * </p>
 * 
 * @memberOf   Array
 * @param   {Function} callback - Function to execute on each value in the array, taking four arguments.
 * @param   {Object} [initialValue] - Object to use as the first argument to the first call of the callback.
 * @returns {Object}
 * @since   Standard ECMA-262 5th. Edition 
*/
Array.prototype.reduce = function(callback, initialValue){return "";};

/**
 * Apply a function simultaneously against two values of the array (from right-to-left) as to reduce it to a single value.
 * 
 * @memberOf   Array
 * @param   {Function} callback - Function to execute on each value in the array.
 * @param   {Object} [initialValue] - Object to use as the first argument to the first call of the callback.
 * @returns {Object}
 * @since   Standard ECMA-262 5th. Edition 
*/
Array.prototype.reduceRight = function(callback, initialValue){return "";};

/**
 * Creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function was called.
 * 
 * @memberOf   Function
 * @param   {Object} thisArg - The value to be passed as the this parameter to the target function when the bound function is called. The value is ignored if the bound function is constructed using the new operator.
 * @returns {Function}
 * @since   Standard ECMA-262 5th. Edition 
*/
Function.prototype.bind = function(thisArg){return function(){};};

/**
 * Removes whitespace from both ends of the string.
 * 
 * @memberOf   String
 * @returns {String}
 * @since   Standard ECMA-262 5th. Edition 
*/
String.prototype.trim = function(){};


//JSON
