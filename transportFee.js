function transportFee (cost){
    switch(cost) {
        case "morning":
            return "R20";
        case "afternoon":
            return "R10";
        default:
            return "free";
    }

}