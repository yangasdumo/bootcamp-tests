describe('test CountAllFromTown', function () {
    it('should return 3 if the are three registration number from stellies', function () {
        assert.equal(fromStellies, 3)

    });

    it('should return 1 if the is one number from kuilsriver', function () {
        assert.equal(fromKuilsriver, 1)
    });
});

var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
//fromStellies should contains
assert.equal(fromStellies, 3)

var fromKuilsriver = countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341','CF');
//fromStellies should contains
assert.equal(fromKuilsriver, 1)
