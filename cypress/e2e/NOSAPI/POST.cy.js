describe('POST request test', () => {

  let accessToken = '803b28451962a1f65264171a2385d2f37c8090951aaa7608333d1dbc2e0866c1'
  let randomText = "" //any email
  let testEmail = "" //any email
  
  
  it('should create a new user', () => {
    var pattern = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    for (var i = 0; i <10; i++) //any email
    randomText+=pattern.charAt(Math.floor(Math.random() * pattern.length)); //any email
    testEmail = randomText + '@gmail.com' //any email

  cy.fixture('createuser').then((payload) =>{  //ambil data body Json di file createuser  
    
    cy.request({
        method: 'POST',
        url: 'https://gorest.co.in/public/v2/users',
        headers: {
          Authorization: "Bearer " + "938c7b52fe207153070542c4794748e49dd0cd2ff696761126e2e29c8086de5b",
          'Content-Type': 'application/json'
        },
        body: {
          name: 'Fabian Fabio',
          email: 'fafafadaccdcddoe@example.com',
          gender: 'male',
          status: 'active'
        }
      }).then((response) => {
        expect(response.status).to.eq(201)
        expect(response.body.data.name).to.eq('Fabian Fabio')
        // Add more assertions as needed
      })
    })
  })
})