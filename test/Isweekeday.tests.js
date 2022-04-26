describe('test Isweekday function',function(){
    it('should return days of the week', function(){
        assert.equal(isWeekday('Tuesday'), true);
    })
    it('should return days of the week Monday, Tuesday, Friday', function(){
        assert.equal(isWeekday('Friday'), true); 
    })
    it('should return days of the week Thursday, Sartuday, Sunday', function(){
        assert.equal(isWeekday('Sunday'), false);
    })
});
