
// things to do 
// find the code entered 
// use the code and loop through the list and find it 
// display the found result.

const data = {
    "men": {
        "shoes": 43,
        "clothes": 44
    },
    "women": {
        "shoes": 34,
        "clothes": 44
    }
}

document.getElementById("btn").addEventListener("click", function(){
    getValue();
});

let value;
function getValue()
{
    value  = Number(document.getElementById("code").value);

    findDepartment(value);
}




function findDepartment(Value)
{
    for(let Category in data)
    {
        for(let subCategory in data[Category])
        {
            if (Number(data[Category][subCategory]) === Value)
            {
                console.log(Category +" - "+subCategory);
                document.getElementById("textDisplay").textContent = Category +" - "+subCategory;
                return;
            }
        }
    }
    console.log(Value)
}
