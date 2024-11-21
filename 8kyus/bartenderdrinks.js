function getDrinkByProfession(input){
    let output;
    switch(input.toLowerCase){
         case "Jabroni" : 
             output= "Patron Tequila";
            break;
        case "School Counselor" : 
            output= "Anything with Alcohol";
            break;
        case "Programmer" : 
            output= "Hipster Craft Beer";
            break;
        case "Bike Gang Member" : 
            output="Moonshine";
            break;
        case "Politician" : 
            output= "Your tax dollars";
            break;
        case "Bike Gang Member" : 
            output="Cristal";
            break;
        case "Rapper" : 
            output="Cristal";
            break;
        default:        
           output= "Beer";
    }
    return output;
}