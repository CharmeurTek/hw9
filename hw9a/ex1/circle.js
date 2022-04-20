function circumference(radius)  {
    return 2 * Math.PI * radius;
}

function area(radius)  {
    return Math.PI * radius * radius;
}

module.exports.circumference = circumference;
module.exports.area = area;