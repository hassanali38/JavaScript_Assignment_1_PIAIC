/*
45- Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
*/

function car_info(manufacturer_name, model_name, ...additional_info)
{
    const car = {Manufacturer : manufacturer_name, Model : model_name};
    
    for (let i = 0; i < additional_info.length; i += 2)
    {
        const name = additional_info[i];
        const value = additional_info[i + 1];
        car[name] = value;
    }

    return car;
}

console.log(car_info('Honda', 'Civic LX'));
console.log(car_info('Toyota', 'Fortuner 4x4 Diesel AT', 'Color', 'White', 'Power', '2500 CC'));
console.log(car_info('Suzuki', 'WagonR', 'Color', 'Silver', 'Fuel_Capacity', '35L', 'Seating_Capacity', '5', 'Transmission', 'Automatic', 'Price', 'PKR 3,214,000'));