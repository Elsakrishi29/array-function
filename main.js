/*let icecream=[];
let arraylength=prompt("Enter the array length");
icecream.length=arraylength;
for(i=0;i<arraylength;i++){
    let arraydatas=prompt("Enter icecream Items");
    document.write(icecream[i]=arraydatas);
    document.write("<br>");
}
console.log(icecream);*/

var foodsdata=[];
var arraylenght=prompt("Enter the Array lenght");
for(i=0;i<arraylenght;i++)
{
     foodsdata[i]=prompt("Enter the Foods");

}
document.write(foodsdata);
document.write("<br>");
{
        var changeindex=prompt("Type the change Index");
        for(i=changeindex;i<=changeindex;i++)
        {
            foodsdata[i]=prompt("Enter the change value");
        }   
document.write(foodsdata);
}
