describe('test Isweekday function',function(){
    it('should return true if tuesday is day the of week', function(){
        assert.equal(isWeekday('Tuesday'), true);
    })
    it('should return true if friday days is the day of the week', function(){
        assert.equal(isWeekday('Friday'), true); 
    })
    it('should return false if Sunday is the day of the week', function(){
        assert.equal(isWeekday('Sunday'), false);
    })
});
