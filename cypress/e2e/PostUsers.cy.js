describe('Testing https://gorest.co.in/ API', () => {

    let accessToken = '803b28451962a1f65264171a2385d2f37c8090951aaa7608333d1dbc2e0866c1'
    let randomText = "" //any email
    let testEmail = "" //any email

    it('post user', ( )=> {

        var pattern = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
        for (var i = 0; i <10; i++) //any email
        randomText+=pattern.charAt(Math.floor(Math.random() * pattern.length)); //any email
        testEmail = randomText + '@gmail.com' //any email

        cy.fixture('createuser').then((payload) =>{  //ambil data body Json di file createuser

        cy.request({
            method : 'POST',
            url : 'https://gorest.co.in/public/v2/users',
            headers : {
                'authorization' : "Bearer " + accessToken
              },
            body : {
                "name": payload.name,
                "email": testEmail,
                "gender": payload.gender,
                "status": payload.status
            }
        })
        .then((res) =>{
            cy.log(JSON.stringify(res))
            expect(res.status).to.eq(201)
            expect(res.body).to.have.property("name", payload.name)
            expect(res.body).to.have.property("email", testEmail)
            expect(res.body).to.have.property("gender", payload.gender)
            expect(res.body).to.have.property( "status", payload.status)


        })
        // .then((res) =>{
        //     const userId = res.body.data.id //validasi id dari data yang sudah ke create
        //     cy.log("user id is : " + userId)

        //     cy.request({
        //          method: 'GET',
        //          url: 'https://gorest.co.in/public/v1/users/'+userId,
        //          headers: {
        //              'Authorization': 'Bearer ' + accessToken
        //          }
        //     }).then((res)=>{
        //          expect(res.status).to.eq(200)
        //          expect(res.body.data).to.have.property('id', userId)
        //          expect(res.body.data).to.have.property('name',payload.name)
        //          expect(res.body.data).to.have.property('status',payload.status)
        //          expect(res.body.data).to.have.property('email', testEmail)
        //      })
        // })
     
        })
        })
    })