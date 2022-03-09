const sinon = require("sinon");
const { expect } = require("chai");

const ProductsService = require("../../../services/products");
const ProductsController = require("../../../controllers/products");

describe('CONTROLLER TESTS', () => {
    let request = {}, response = {}, next = () => {};

    before(() => {
        response.status = sinon.stub().returns(response);
        response.json = sinon.stub().returns();
        next = sinon.stub().returns();

    })

    describe("Calling getAll fuction controller", () => {
        describe('When there are products on data base', () => {
    
            before(() => {
                sinon.stub(ProductsService, 'getAll').resolves([]);
            });
    
            after(() => {
                ProductsService.getAll.restore();
              });
            
            it('retuns request with status 200', async () => {
                await ProductsController.getAll(request, response, next);
    
                expect(response.status.calledWith(200)).to.be.equal(true);
            });
    
            it('res.json() is called and returns an array', async () => {
                await ProductsController.getAll(request, response, next);
    
                expect(response.json.calledWith(sinon.match.array)).to.be.equal(true);
            });
    
        });
    
        describe('When an error happens', () => {
            const err = Error('Deu erro...');
            before(() => {
              next = sinon.stub();
              sinon.stub(ProductsService, 'getAll').throws(err);
            });
        
            after(() => {
                ProductsService.getAll.restore();
            });
            
            it('pass to the error', async () => {
              await ProductsController.getAll(request, response, next);
        
              expect(next.calledWith(sinon.match(err))).to.be.equal(true);
            });       
        });
    });
    
    // describe("Calling getById fuction controller", () => {
    //     describe('When it find the product by Id', () => {
    //         const serviceResponse = [
    //             { id: 2, name: 'Traje de encolhimento', quantity: 20 }
    //         ]
    
    //         before(() => {
    //             request.params = { id:2 };
    //             sinon.stub(ProductsService, 'getById').resolves(serviceResponse);
    //         });
    
    //         after(() => {
    //             ProductsService.getById.restore();
    //         });
            
    //         it('retuns request with status 200', async () => {
    //             await ProductsController.getById(request, response, next);
    
    //             expect(response.status.calledWith(200)).to.be.equal(true);
    //         });
    
    //         it('res.json() is called and returns an array', async () => {
    //             await ProductsController.getById(request, response, next);
    
    //             expect(response.json.calledWith(sinon.match.array)).to.be.equal(true);
    //         });
    
    //     });

        // describe('When it did not find the product by Id', () => {
        //     const errorMessage = {
        //         "message": "Product not found"
        //     }
            
        //     before(() => {
        //         request.params = { id:2 };
        //         sinon.stub(ProductsService, 'getById').resolves([]);
        //     });
    
        //     after(() => {
        //         ProductsService.getById.restore();
        //     });
            
        //     it('retuns request with status 404', async () => {
        //         await ProductsController.getById(request, response, next);
    
        //         expect(response.status.calledWith(404)).to.be.equal(true);
        //     });
    
        //     it('res.json() is called and returns an err massage', async () => {
        //         await ProductsController.getById(request, response, next);
    
        //         expect(response.json.calledWith(errorMessage)).to.be.equal(true);
        //     });
        // });
    
        // describe('When an error happens', () => {
        //     const err = Error('Deu erro...');
        //     before(() => {
        //       sinon.stub(ProductsService, 'getById').throws(err);
        //     });
        
        //     after(() => {
        //         ProductsService.getById.restore();
        //     });
            
        //     it('pass to the error', async () => {
        //       await ProductsController.getById(request, response, next);
        
        //       expect(next.calledWith(sinon.match(err))).to.be.equal(true);
        //     });       
        // });
    // });

    // describe("Calling delById fuction controller", () => {
    //     describe('When it find the product by Id', () => {
    //         before(() => {
    //             request.params = { id:2 };
    //             sinon.stub(ProductsService, 'delById').resolves([]);
    //         });
    
    //         after(() => {
    //             ProductsService.delById.restore();
    //         });
            
    //         it('retuns request with status 204', async () => {
    //             await ProductsController.delById(request, response, next);
    
    //             expect(response.status.calledWith(204)).to.be.equal(true);
    //         });
    
    //         it('res.json() is called and returns an array', async () => {
    //             await ProductsController.delById(request, response, next);
    
    //             expect(response.json.calledWith(sinon.match.array)).to.be.equal(true);
    //         });
    
    //     });

    //     describe('When it did not find the product by Id', () => {
    //         const errorMessage = {
    //             "message": "Product not found"
    //         }
            
    //         before(() => {
    //             request.params = { id:2 };
    //             sinon.stub(ProductsService, 'delById').resolves([]);
    //         });
    
    //         after(() => {
    //             ProductsService.delById.restore();
    //         });
            
    //         it('retuns request with status 404', async () => {
    //             await ProductsController.delById(request, response, next);
    
    //             expect(response.status.calledWith(404)).to.be.equal(true);
    //         });
    
    //         it('res.json() is called and returns an err massage', async () => {
    //             await ProductsController.delById(request, response, next);
    
    //             expect(response.json.calledWith(errorMessage)).to.be.equal(true);
    //         });
    //     });
    // });

    // describe("Calling create fuction controller", () => {
    //     describe('When there are products on data base', () => {
    
    //         before(() => {
    //             request.body = {
    //                 name: 'something',
    //                 quantity: 20
    //             }
    //             sinon.stub(ProductsService, 'create').resolves([]);
    //         });
    
    //         after(() => {
    //             ProductsService.create.restore();
    //           });
            
    //         it('retuns request with status 201', async () => {
    //             await ProductsController.create(request, response, next);
    
    //             expect(response.status.calledWith(201)).to.be.equal(true);
    //         });
    
    //         it('res.json() is called with the created product', async () => {
    //             await ProductsController.create(request, response, next);
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
    //           sinon.stub(ProductsService, 'create').throws(err);
    //         });
        
    //         after(() => {
    //             ProductsService.create.restore();
    //         });
            
    //         it('pass to the error', async () => {
    //           await ProductsController.create(request, response, next);
        
    //           expect(next.calledWith(sinon.match(err))).to.be.equal(true);
    //         });       
    //     });
    // });

});