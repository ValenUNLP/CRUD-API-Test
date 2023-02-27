describe("CRUD API TEST",()=>{

    const endpoint = "http://localhost:3000/persons"

    const getElement = (endpoint)=>{
        return cy.request(endpoint)
    }

    it("Se debe validar la cantidad de elementos del endpoint", ()=>{

        getElement(endpoint).its("body").should(body  =>{
            expect(body).to.have.length(2)
        })
    })
})