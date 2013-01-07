/*
 * ECMA-262 (ECMAScript) Global Objects
 * 
 * Mozilla - Global Objects 
 * https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects
 * 
 * ECMAScript 5 specification
 * http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf
 * 
 * Console API in Firefox Firebug
 * http://getfirebug.com/wiki/index.php/Console_API
 * 
 * Console API in Safari Webkit 
 * http://developer.apple.com/library/safari/#documentation/AppleApplications/Conceptual/Safari_Developer_Guide/DebuggingYourWebsite/DebuggingYourWebsite.html
 */

function Global() {
}

Global.Math = new Math();

Global.JSON = new JSON();

Global.Date = new Date();

/*
 * Although console is an object attached to window and not part of ECMAScript
 * spec, this is included as it's supported as a defact standard in most
 * browsers/platforms which support ECMAScript.
 */
Global.console = new Console();

/**
 * 
 * @constructor
 */
function Console() {
}

/**
 * Writes a message to the console. You may pass as many arguments as you'd
 * like, and they will be joined together in a space-delimited line. The first
 * argument to log may be a string containing printf-like string substitution
 * patterns.
 * 
 * <p>
 * For example:
 * 
 * <pre>
 * console.log(&quot;The %s jumped over %d tall buildings&quot;, animal, count);
 * </pre>
 * 
 * </p>
 * 
 * Patterns :
 * <ul>
 * <li> %s - String
 * <li> %d, %i - Integer (numeric formatting is not yet supported)
 * <li> %f - Floating point number (numeric formatting is not yet supported)
 * <li> %o - Object hyperlink %c Style formatting
 * </ul>
 * 
 * @param obj
 */
Console.prototype.log = function(obj) {
};

/**
 * Writes a message to the console, including a hyperlink to the line where it
 * was called.
 * 
 * @param obj
 */
Console.prototype.debug = function(obj) {
};

/**
 * Writes a message to the console with the visual "info" icon and color coding
 * and a hyperlink to the line where it was called.
 * 
 * @param obj
 */
Console.prototype.info = function(obj) {
};

/**
 * Writes a message to the console with the visual "warning" icon and color
 * coding and a hyperlink to the line where it was called.
 * 
 * @param obj
 */
Console.prototype.warn = function(obj) {
};

/**
 * Writes a message to the console with the visual "error" icon and color coding
 * and a hyperlink to the line where it was called.
 * 
 * @param obj
 */
Console.prototype.error = function(obj) {
};

/**
 * Tests that an expression is true. If not, it will write a message to the
 * console and throw an exception.
 * 
 * <p>
 * Examples:
 * 
 * <pre>
 * console.assert(3 == 4, &quot;This is bad!&quot;);
 * </pre>
 * 
 * </p>
 * 
 * @param expression
 */
Console.prototype.assert = function(expression) {
};

/**
 * Clears the console.
 * 
 */
Console.prototype.clear = function() {
};

/**
 * Logs all the properties of the object.
 * 
 * @param obj
 */
Console.prototype.dir = function(obj) {
};

/**
 * Logs the DOM tree of an HTML or XML element.
 * 
 * @param node
 */
Console.prototype.dirxml = function(node) {
};

/**
 * Prints an interactive stack trace of JavaScript execution at the point where
 * it is called.
 * 
 * <p>
 * The stack trace details the functions on the stack, as well as the values
 * that were passed as arguments to each function. You can click each function
 * to take you to its source in the Script tab, and click each argument value to
 * inspect it in the DOM or HTML tabs.
 * </p>
 * 
 * @param node
 */
Console.prototype.trace = function(node) {
};

/**
 * Writes a message to the console and opens a nested block to indent all future
 * messages sent to the console. Call console.groupEnd() to close the block.
 * 
 * @param obj
 */
Console.prototype.group = function(obj) {
};

/**
 * Like console.group(), but the block is initially collapsed.
 * 
 * @param obj
 */
Console.prototype.groupCollapsed = function(obj) {
};

/**
 * Closes the most recently opened block created by a call to console.group() or
 * console.groupCollapsed()
 * 
 */
Console.prototype.groupEnd = function() {
};

/**
 * Creates a new timer under the given name. Call console.timeEnd(name) with the
 * same name to stop the timer and print the time elapsed.
 * 
 * @param name
 */
Console.prototype.time = function(name) {
};

/**
 * Stops a timer created by a call to console.time(name) and writes the time
 * elapsed.
 * 
 * @param name
 */
Console.prototype.timeEnd = function(name) {
};

/**
 * Creates a time stamp, which can be used together with HTTP traffic timing to
 * measure when a certain piece of code was executed.
 * 
 * @param name
 */
Console.prototype.timeStamp = function(name) {
};

/**
 * Turns on the JavaScript profiler. The optional argument title would contain
 * the text to be printed in the header of the profile report.
 * 
 * @param title -
 *            <b>Optional.</b>
 */
Console.prototype.profile = function(title) {
};

/**
 * Turns off the JavaScript profiler and prints its report.
 * 
 */
Console.prototype.profileEnd = function() {
};

/**
 * Writes the number of times that the line of code where count was called was
 * executed. The optional argument title will print a message in addition to the
 * number of the count.
 * 
 * @param title -
 *            <b>Optional.</b>
 */
Console.prototype.count = function(title) {
};

/**
 * Prints an error message together with an interactive stack trace of
 * JavaScript execution at the point where the exception occurred.
 * 
 * @param errorObject
 */
Console.prototype.count = function(errorObject) {
};

/**
 * Allows to log provided data using tabular layout. The method takes one
 * required parameter that represents table-like data (array of arrays or list
 * of objects). The optional columns parameter can be used to specify columns
 * and/or properties to be logged.
 * 
 * @param data
 */
Console.prototype.count = function(data) {
};
