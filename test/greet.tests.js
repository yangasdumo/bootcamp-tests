describe('Test my greet function' , function(){
    it('this should return hello neighbour' , function(){
        // assert.equal("hello neighbour" , greet ("neigbour"),"");

    });
    it('this should return hello if no name has passed' , function(){
        assert.equal( greet(''), 'Hello, ');

    });
    it('this should return number ' , function(){
        assert.equal( greet('5'), 'Hello, 5');

    });
});