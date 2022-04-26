describe('test my Bellivelle function' , function(){
    
    it('should return true if the registration numberth starts with CY', function(){
        assert.equal(isFromBellville("CY 123"), true);
    });
    it('should return false if the registration numbers is not from bellville', function(){
        assert.equal(isFromBellville("CJ 123"),false);
    });
    it('should return false if an empty string passed ', function(){
        assert.equal(isFromBellville(""), false);
    });
});