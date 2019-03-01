export function setKeyWithString(obj, path, value) {
    // protect against being something unexpected
    obj = typeof obj === 'object' ? obj : {};
    // split the path into and array if its not one already
    var keys = Array.isArray(path) ? path : path.split('.');
    // keep up with our current place in the object
    // starting at the root object and drilling down
    var curStep = obj;
    // loop over the path parts one at a time
    // but, dont iterate the last part,
    for (var i = 0; i < keys.length - 1; i++) {
        // get the current path part
        var key = keys[i];

        // if nothing exists for this key, make it an empty object or array
        if (!curStep[key] && !Object.prototype.hasOwnProperty.call(curStep, key)){
            // get the next key in the path, if its numeric, make this property an empty array
            // otherwise, make it an empty object
            var nextKey = keys[i+1];
            var useArray = /^\+?(0|[1-9]\d*)$/.test(nextKey);
            curStep[key] = useArray ? [] : {};
        }
        // update curStep to point to the new level
        curStep = curStep[key];
    }
    // set the final key to our value
    var finalStep = keys[keys.length - 1];
    curStep[finalStep] = value;
}