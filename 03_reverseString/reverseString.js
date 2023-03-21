const reverseString = function(string) {
    let revers = ""
    const stringLength = string.length;
    const stringSplit = string.split('');
    for (i = stringLength; i == 0; i--)
        revers += stringSplit[i]
        return revers

};

// Do not edit below this line
module.exports = reverseString;
