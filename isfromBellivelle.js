function isFromBellville (registration) {
      if(registration ==="") {
        return "invalid registration"
      }
      return registration.startsWith('CY')
  }
  
//   isFromBellville("CY 123")
//   isFromBellville('CJ 123')