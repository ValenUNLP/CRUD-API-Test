describe("CRUD API TEST",()=>{

    const fixedElement = {
        id: 3,
        name: "Valentin3",
        surname: "Banegas3"
    }

    const newElement = {
        id: 3,
        name: "Valentin4",
        surname: "Banegas4"
    }

    const endpoint = "http://localhost:3000/persons"

    const getElement = (endpoint)=>{
        return cy.request(endpoint)
    }

    const addElement = (endpoint, element)=>{
        cy.request("POST",endpoint, element)
    }

    const changeElement = (endpoint, element)=>{
        const realEndpoint = `${endpoint}/${element.id}`
        cy.request("PUT", realEndpoint, element)
    }

    const deleteElement = (endpoint, element)=>{
        const realEndpoint = `${endpoint}/${element.id}`
        cy.request("DELETE", realEndpoint)
    }

    it("Se debe validar la cantidad de elementos del endpoint", ()=>{

        getElement(endpoint).its("body").should(body  =>{
            expect(body).to.have.length(2)
        })
    })

    it("Se deberia añadir un elemento",()=>{

        addElement(endpoint, newElement)

        getElement(endpoint).its("body").should(body =>{
            expect(body).to.have.length(3)
            expect(body[newElement.id - 1]).deep.eq(newElement)
        })
    })

    it("Se deberia cambiar un elemento", ()=>{
        
        changeElement(endpoint, fixedElement)

        getElement(endpoint).its("body").should(body =>{
            expect(body).to.have.length(3)
            expect(body[fixedElement.id - 1]).deep.eq(fixedElement)
        })
    })

    it("Se deberia eliminar un elemento",function(){
        deleteElement(endpoint, fixedElement)

        getElement(endpoint).its("body").should(body =>{
            expect(body).to.have.length(2)
        })
    })
})