describe('Test my greet function' , function(){
    it(' should return hello neighbour' , function(){
        assert.equal(greet('neighbour'), 'Hello, neighbour');

    });
    it('should return hello if no name has passed' , function(){
        assert.equal( greet(''), 'enter valid name');

    });
    it('should return a valid name when passes a number ' , function(){
        assert.equal( greet(5), 'enter valid name');

    });
});