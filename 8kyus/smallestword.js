function smallestWord(string) {
    return string.split(' ').sort((a, b) => a.length - b.length)[0].length;
}
console.log(smallestWord('chriss loue birasa ganza'));
let arr = [8,2,4,1]
arr.sort((a, b) => a - b)