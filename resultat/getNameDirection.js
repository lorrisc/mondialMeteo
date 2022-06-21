function getNameDirection(direction) {
    let textDirection = document.querySelector('#directionVentText');


    if ((direction > 348.75) && (direction <= 11.25) || (direction == 0)) {
        textDirection.textContent = "Nord";
    }
    else if ((direction > 11.25) && (direction <= 33.75)) {
        textDirection.textContent = "Nord-Nord-Est";
    }
    else if ((direction > 33.75) && (direction <= 56.25)) {
        textDirection.textContent = "Nord-Est";
    }
    else if ((direction > 56.25) && (direction <= 78.75)) {
        textDirection.textContent = "Est-Nord-Est";
    }
    else if ((direction > 78.75) && (direction <= 101.25)) {
        textDirection.textContent = "Est";
    }
    else if ((direction > 101.25) && (direction <= 123.75)) {
        textDirection.textContent = "Est-Sud-Est";
    }
    else if ((direction > 123.75) && (direction <= 146.25)) {
        textDirection.textContent = "Sud-Est";
    }
    else if ((direction > 146.25) && (direction <= 168.75)) {
        textDirection.textContent = "Sud-Sud-Est";
    }
    else if ((direction > 168.75) && (direction <= 191.25)) {
        textDirection.textContent = "Sud";
    }
    else if ((direction > 191.25) && (direction <= 213.75)) {
        textDirection.textContent = "Sud-Sud-Ouest";
    }
    else if ((direction > 213.75) && (direction <= 236.25)) {
        textDirection.textContent = "Sud-Ouest";
    }
    else if ((direction > 236.25) && (direction <= 258.75)) {
        textDirection.textContent = "Ouest-Sud-Ouest";
    }
    else if ((direction > 258.75) && (direction <= 281.25)) {
        textDirection.textContent = "Ouest";
    }
    else if ((direction > 281.25) && (direction <= 303.75)) {
        textDirection.textContent = "Ouest-Nord-Ouest";
    }
    else if ((direction > 303.75) && (direction <= 326.25)) {
        textDirection.textContent = "Nord-Ouest";
    }
    else if ((direction > 326.25) && (direction <= 348.75)) {
        textDirection.textContent = "Nord-Nord-Ouest";
    }
}