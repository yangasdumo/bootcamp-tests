describe('test my Bellivelle function' , function(){
    
    it('should return all registration numbers that starts with CY', function(){
        assert.equal(isFromBellville("CY 123"), true);
    });
    it('should return false if the registration numbers is not from bellville', function(){
        assert.equal(isFromBellville("CJ 123"),false);
    });
    it('should return fasle if an emtpy string passed ', function(){
        assert.equal(isFromBellville(""), false);
    });
});