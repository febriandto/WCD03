function convertLength(value, unit) {
    if (unit === "cm")
        return "".concat(value / 100000, " km");
    if (unit === "km")
        return "".concat(value * 100000, " cm");
    return "Invalid unit";
}
console.log(convertLength(100000, "cm"));
