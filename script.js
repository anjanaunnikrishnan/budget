var total = document.getElementById("total");
total.addEventListener("click", () => {
    let valTravel = parseInt(document.getElementById("travel").value);
    let valHotel = parseInt(document.getElementById("hotel").value);
    let valFood = parseInt(document.getElementById("food").value);
    document.getElementById("total-money").value = valTravel + valHotel + valFood;
});
