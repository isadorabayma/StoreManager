const sinon = require("sinon");
const { expect } = require("chai");

const SalesService = require("../../../services/sales");
const SalesController = require("../../../controllers/sales");

describe('CONTROLLER TESTS', () => {
    let request = {}, response = {}, next = () => {};

    before(() => {
        response.status = sinon.stub().returns(response);
        response.json = sinon.stub().returns();
        next = sinon.stub().returns();

    })

    describe("Calling getAll fuction controller", () => {
        describe('When there are Sales on data base', () => {
    
            before(() => {
                sinon.stub(SalesService, 'getAll').resolves([]);
            });
    
            after(() => {
                SalesService.getAll.restore();
              });
            
            it('retuns request with status 200', async () => {
                await SalesController.getAll(request, response, next);
    
                expect(response.status.calledWith(200)).to.be.equal(true);
            });
    
            it('res.json() is called and returns an array', async () => {
                await SalesController.getAll(request, response, next);
    
                expect(response.json.calledWith(sinon.match.array)).to.be.equal(true);
            });
    
        });
    
        describe('When an error happens', () => {
            const err = Error('Deu erro...');
            before(() => {
              next = sinon.stub();
              sinon.stub(SalesService, 'getAll').throws(err);
            });
        
            after(() => {
                SalesService.getAll.restore();
            });
            
            it('pass to the error', async () => {
              await SalesController.getAll(request, response, next);
        
              expect(next.calledWith(sinon.match(err))).to.be.equal(true);
            });       
        });
    });
    
    describe("Calling getById fuction controller", () => {
        describe('When it find the product by Id', () => {
            const serviceResponse = [
                { id: 2, name: 'Traje de encolhimento', quantity: 20 }
            ]
    
            before(() => {
                request.params = { id:2 };
                sinon.stub(SalesService, 'getById').resolves(serviceResponse);
            });
    
            after(() => {
                SalesService.getById.restore();
            });
            
            it('retuns request with status 200', async () => {
                await SalesController.getById(request, response, next);
    
                expect(response.status.calledWith(200)).to.be.equal(true);
            });
    
            // it('res.json() is called and returns an array', async () => {
            //     await SalesController.getById(request, response, next);
    
            //     expect(response.json.calledWith(sinon.match.array)).to.be.equal(true);
            // });
    
        });
    });
    
    //     describe('When it did not find the product by Id', () => {
    //         const errorMessage = {
    //             "message": "Product not found"
    //         }
            
    //         before(() => {
    //             request.params = { id:2 };
    //             sinon.stub(SalesService, 'getById').resolves([]);
    //         });
    
    //         after(() => {
    //             SalesService.getById.restore();
    //         });
            
    //         it('retuns request with status 404', async () => {
    //             await SalesController.getById(request, response, next);
    
    //             expect(response.status.calledWith(404)).to.be.equal(true);
    //         });
    
    //         it('res.json() is called and returns an err massage', async () => {
    //             await SalesController.getById(request, response, next);
    
    //             expect(response.json.calledWith(errorMessage)).to.be.equal(true);
    //         });
    //     });
    
    //     // describe('When an error happens', () => {
    //     //     const err = Error('Deu erro...');
    //     //     before(() => {
    //     //       sinon.stub(SalesService, 'getById').throws(err);
    //     //     });
        
    //     //     after(() => {
    //     //         SalesService.getById.restore();
    //     //     });
            
    //     //     it('pass to the error', async () => {
    //     //       await SalesController.getById(request, response, next);
        
    //     //       expect(next.calledWith(sinon.match(err))).to.be.equal(true);
    //     //     });       
    //     // });
    // });

    // describe("Calling delById fuction controller", () => {
    //     describe('When it find the product by Id', () => {
    //         before(() => {
    //             request.params = { id:2 };
    //             sinon.stub(SalesService, 'delById').resolves([]);
    //         });
    
    //         after(() => {
    //             SalesService.delById.restore();
    //         });
            
    //         it('retuns request with status 204', async () => {
    //             await SalesController.delById(request, response, next);
    
    //             expect(response.status.calledWith(204)).to.be.equal(true);
    //         });
    
    //         it('res.json() is called and returns an array', async () => {
    //             await SalesController.delById(request, response, next);
    
    //             expect(response.json.calledWith(sinon.match.array)).to.be.equal(true);
    //         });
    
    //     });

    //     describe('When it did not find the product by Id', () => {
    //         const errorMessage = {
    //             "message": "Product not found"
    //         }
            
    //         before(() => {
    //             request.params = { id:2 };
    //             sinon.stub(SalesService, 'delById').resolves([]);
    //         });
    
    //         after(() => {
    //             SalesService.delById.restore();
    //         });
            
    //         it('retuns request with status 404', async () => {
    //             await SalesController.delById(request, response, next);
    
    //             expect(response.status.calledWith(404)).to.be.equal(true);
    //         });
    
    //         it('res.json() is called and returns an err massage', async () => {
    //             await SalesController.delById(request, response, next);
    
    //             expect(response.json.calledWith(errorMessage)).to.be.equal(true);
    //         });
    //     });
    // });

    // describe("Calling create fuction controller", () => {
    //     describe('When there are Sales on data base', () => {
    
    //         before(() => {
    //             request.body = {
    //                 name: 'something',
    //                 quantity: 20
    //             }
    //             sinon.stub(SalesService, 'create').resolves([]);
    //         });
    
    //         after(() => {
    //             SalesService.create.restore();
    //           });
            
    //         it('retuns request with status 201', async () => {
    //             await SalesController.create(request, response, next);
    
    //             expect(response.status.calledWith(201)).to.be.equal(true);
    //         });
    
    //         it('res.json() is called with the created product', async () => {
    //             await SalesController.create(request, response, next);
    //             const created = {
    //                 id: undefined,
    //                 name: 'something',
    //                 quantity: 20
    //             }
    
    //             expect(response.json.calledWith(sinon.match.array)).to.be.equal(true);
    //         });
    
    //     });
    
    //     describe('When an error happens', () => {
    //         const err = Error('Deu erro...');
    //         before(() => {
    //           next = sinon.stub();
    //           sinon.stub(SalesService, 'create').throws(err);
    //         });
        
    //         after(() => {
    //             SalesService.create.restore();
    //         });
            
    //         it('pass to the error', async () => {
    //           await SalesController.create(request, response, next);
        
    //           expect(next.calledWith(sinon.match(err))).to.be.equal(true);
    //         });       
    //     });
    // });

});
