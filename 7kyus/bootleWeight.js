function contentWeight(bottleWeight, scale) {
    const bottle=1
    const newScale=scale.split(" ")
    const numberScale=parseInt(newScale[0])
    let totalContent;
    if(newScale[2]==='larger'){
         totalContent=(bottleWeight/(bottle+numberScale))*numberScale
    }else{
         totalContent=(bottleWeight/(bottle+numberScale))
    }
    
    return totalContent
}
console.log(contentWeight(120, "2 times smaller"))