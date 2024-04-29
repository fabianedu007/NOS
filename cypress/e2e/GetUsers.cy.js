//This "describe" is equivalent to a Test Suite
describe('Testing https://gorest.co.in/ API', () => {
  
    let accessToken = '803b28451962a1f65264171a2385d2f37c8090951aaa7608333d1dbc2e0866c1'
    
    //This is a test to get the users
    
    it('get users', () => {
      //Here I make a GET request to retrieve a user post
        cy.request({
        method : 'GET',
        url : 'https://gorest.co.in/public/v2/users/6880321/posts',
        headers : {
          'authorization' : "Bearer " + accessToken
        }
      })
      .then((res) =>{
        //Here I assert the response status is 200
          expect(res.status).to.eq(200)
        //Here I assert the pagination limit is 10
          expect(res.body.meta.pagination.limit).to.eq(10)
        //Here I asset that the responde body matces the expected structure
          expect(res.body).has.to.deep.equal({
                "code": 200,
                "meta": {
                "pagination": {
                "total": 0,
                "pages": 0,
                "page": 1,
                "limit": 10
              }
            },
            "data": []
          })
      })
    })

    //This is another test to get a user by ID
    it('ger users id', () => {
      cy.request({
        method : 'GET',
        url : 'https://gorest.co.in/public/v2/users/6880281',
        headers : {
          'authorization' : "Bearer " + accessToken
        }
      })
      .then((res) =>{
        //Again I assert here the response status is 200
          expect(res.status).to.eq(200)
        //I assert that the message indicates resource is not found
          expect(res.body.data.message).to.eq("Resource not found")
      })
    })
  
  })