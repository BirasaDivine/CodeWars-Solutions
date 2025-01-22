// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.
// Your task is to write a function maskify, which changes all but the last four characters into '#'.
function maskify(cc) {
    let array=cc.split("")
    let firstArray=array.slice(0,-4).map((x)=> x = "#" );
    let lastFourNumbers=array.slice(-4)
    let newArray=[...firstArray,...lastFourNumbers]
    
    return newArray.join("")
}
console.log(maskify(""))