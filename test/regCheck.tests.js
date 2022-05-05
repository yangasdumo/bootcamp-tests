describe('test regCheck function' , function(){
    it('should return  required registration number ', function(){
        assert.equal(regCheck('DC 55 YU GP', 'GP'), true);
    });
    it('should return  if the required registration number is not from the town ', function(){
        assert.equal(regCheck('DC 55 YU GP', 'EC'), false);
    });
it('should return a registration if an empty string is passed ', function(){
        assert.equal(regCheck(' ', 'EC'), "enter a registration");
    });
});