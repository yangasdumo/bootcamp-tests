describe('test regCheck function' , function(){
    it('should return  requiredregistration number ', function(){
        assert.equal(regCheck('DC 55 YU GP', 'GP'), true);
    });
    it('should return  if the requiredregistration number is not from the town ', function(){
        assert.equal(regCheck('DC 55 YU GP', 'EC'), false);
    });
it('should return  false if an empty string is passed ', function(){
        assert.equal(regCheck(' ', 'EC'), false);
    });
});