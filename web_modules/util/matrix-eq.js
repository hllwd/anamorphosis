'use strict';

function eq(m1, m2){
    var i;
    for(i = 0; i < m1.elements.length; i++){
        if(m1.elements[i] !== m2.elements[i]){
            return false;
        }
    }
    return true;
}

module.exports = eq;