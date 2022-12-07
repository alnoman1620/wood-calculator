function woodCalculator(chairQuantity,tableQuantity,bedQuantity){
    const chairWoodQuantity = 3;
    const tableWoodQuantity = 10;
    const bedWoodQuantity = 50;

    const neededWoodForChair = chairQuantity * chairWoodQuantity;
    const neededWoodForTable = tableQuantity * tableWoodQuantity;
    const neededWoodForBed = bedQuantity * bedWoodQuantity;

    const totalNeededWood = neededWoodForChair + neededWoodForTable + neededWoodForBed;

    return totalNeededWood;
}
const result = woodCalculator(1,1,1,);
console.log(result);