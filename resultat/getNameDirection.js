//*RENVOIT LA DIRECTION DU VENT

function getNameDirection(direction) {
    if ((direction > 348.75) || (direction <= 11.25) || (direction == 0)) {
        return "Nord";
    }
    else if ((direction > 11.25) && (direction <= 33.75)) {
        return "Nord-Nord-Est";
    }
    else if ((direction > 33.75) && (direction <= 56.25)) {
        return "Nord-Est";
    }
    else if ((direction > 56.25) && (direction <= 78.75)) {
        return "Est-Nord-Est";
    }
    else if ((direction > 78.75) && (direction <= 101.25)) {
        return "Est";
    }
    else if ((direction > 101.25) && (direction <= 123.75)) {
        return "Est-Sud-Est";
    }
    else if ((direction > 123.75) && (direction <= 146.25)) {
        return "Sud-Est";
    }
    else if ((direction > 146.25) && (direction <= 168.75)) {
        return "Sud-Sud-Est";
    }
    else if ((direction > 168.75) && (direction <= 191.25)) {
        return "Sud";
    }
    else if ((direction > 191.25) && (direction <= 213.75)) {
        return "Sud-Sud-Ouest";
    }
    else if ((direction > 213.75) && (direction <= 236.25)) {
        return "Sud-Ouest";
    }
    else if ((direction > 236.25) && (direction <= 258.75)) {
        return "Ouest-Sud-Ouest";
    }
    else if ((direction > 258.75) && (direction <= 281.25)) {
        return "Ouest";
    }
    else if ((direction > 281.25) && (direction <= 303.75)) {
        return "Ouest-Nord-Ouest";
    }
    else if ((direction > 303.75) && (direction <= 326.25)) {
        return "Nord-Ouest";
    }
    else if ((direction > 326.25) && (direction <= 348.75)) {
        return "Nord-Nord-Ouest";
    }
}