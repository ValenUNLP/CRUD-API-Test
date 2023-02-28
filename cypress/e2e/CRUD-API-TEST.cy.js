describe("CRUD API TEST",()=>{

    const endpoint = "http://localhost:3000/persons"
    const getElement = (endpoint)=>{
        return cy.request(endpoint)
    }

    const addElements = (endpoint, element)=>{
        cy.request("POST",endpoint, element)
    }

    it("Se debe validar la cantidad de elementos del endpoint", ()=>{

        getElement(endpoint).its("body").should(body  =>{
            expect(body).to.have.length(2)
        })
    })

    it.only("Se deberia añadir un elemento",()=>{

        const newElement = {
            id: 3,
            name: "Valentin3",
            surname: "Banegas3"
        }

        addElements(endpoint, newElement)

        getElement(`${endpoint}/${newElement.id}`).its("body").should(body  =>{
            console.log(body)
            expect(body).deep.eq(newElement)
        })

    })
})