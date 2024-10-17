
// things to do 
// find the code entered 
// use the code and loop through the list and find it 
// display the found result.

const data = {
    "womensWear": {
        "Branded Tops": 3,
        "womens premium best brands": 4,
        "Womens Knitwear": 5,
        "Womens Denim": 6,
        "Plus Women": 9,
        "Gold Label WomensWear": 12,
        "Modbox": 15,
        "Day Dresses": 30,
        "Outerwear": 35,
        "SwimWear": 61,
        "Store Stocks Womenswear":53,
        "Trousers, Skirts & Jackets": 56,
    },
    "womens intimates": {
        "Nightwear": 50,
        "Lingerie": 52,
        "Hosiery": 55,
    },
    "Accessories": {
        "Luggage": 10,
        "Handbags": 11,
        "Sunglasses & Opticals": 13,
        "small accessories": 18,
        "Fashion accessories": 19,
        "Watches and boxed jewellery": 70,
        "Jewellery and Watches": 76,
    },
    "MensWear": {
        "Jersey": 21,
        "best brands": 29,
        "Knitwear": 48,
        "Denim": 33,
        "Tailoring": 23,
        "Gold Label MensWear": 37,
        "Mens Modbox": 92,
        "Formal Shirts & Accessories": 32,
        "Outerwear": 24,
        "SwimWear": 61,
        "Store Stocks Menswear":8,
        "Trousers, Shorts": 49,
        "Casual Shirts": 47,
    },
    "Basics": {
        "UnderWear, Socks & Lounge": 20,
        "Mens Accessories": 34,
        "LifeStyle & Tech": 36,
    },
    "Children Appreal": {
        "Kids Active": 14,
        "Boyswear": 41,
        "Girlswear": 71,
        "Children Essential": 74,
        "Kids Gold Label": 43,
        "New Born Baby 0-12 Months": 75,
        "Girls Dresses": 63,
        "Outerwear, swim & ski": 73,
    },
    "Toys & Nursery": {
        "Toys": 45,
        "Books & Media": 46,
        "Store stock kids & toys": 67,
        "Nursery & kids Home": 72,
    },
    "Shoes": {
        "Womens Shoes": 25,
        "Kids Shoes": 26,
        "Mens Shoes": 27,
        "Active": 38,
        "Store Stock Shoes": 39,
        "Gold Label Shoes": 77,
    },
    "Active": {
        "Active Accessories": 2,
        "Womens Seasonal Active": 7,
        "Womens Activewear": 17,
        "Mens Activewear": 22,
        "Mens Seasonal Active": 31,
    },
    "Body, Bath & Beauty": {
        "Body Health & Wellness": 16,
        "Beauty Accessories & Beauty Tech": 28,
        "Beauty": 42,
    },
    "Kitchen Zone": {
        "Cook": 78,
        "Utility": 79,
        "Dinning": 80,
        "Food": 81,
        "Kitchenware": 85,
        "Pets- goes with bathroom": 87,
        "Doormats": 90,
    },
    "Interiors Zone": {
        "Paper Celebration": 44,
        "Cushions": 61,
        "Paper Shop": 64,
        "Decorative Glass": 65,
        "Wall Decor": 66,
        "Furniture": 68,
        "Accent Furniture": 69,
        "Gifts": 82,
        "Decorative Objects": 83,
        "Lighting": 86,
        "Throws": 88,
        "Rugs": 90,
    },
    "Bed & Bath Zone": {
        "Bathroom Accessories": 58,
        "Filled": 59,
        "Bedding":60,
        "Towels & Bath Mats": 62,
        "Folded Throws": 88,
        "Storage": 89,
    },
    "Seasonal (Floating Zone)": {
        "Garden": 84,
        "Floral": 40,
        "Seasonal":91,
        "Charity Merchandise": 94,
    },
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
                document.getElementById("textDisplay").textContent = "";
                document.getElementById("textDisplay").textContent += Category +" - "+subCategory + "\n";
                // return;
            }
        }
    }
    console.log(Value)
}
