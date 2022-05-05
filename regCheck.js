function regCheck(registrationNumber, locationIndicator){
  if (registrationNumber === "" || registrationNumber === " ") {
    return "enter a registration"
  }
    return registrationNumber.endsWith(locationIndicator)
  
  }