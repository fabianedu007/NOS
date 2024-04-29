/// <reference types="cypress" />

describe('test api get user gorest', () => {
  
    let accessToken = '803b28451962a1f65264171a2385d2f37c8090951aaa7608333d1dbc2e0866c1'
    
    it('get users', () => {
      cy.request({
        method : 'GET',
        url : 'https://gorest.co.in/public-api/users/123/posts',
        headers : {
          'authorization' : "Bearer " + accessToken
        }
      })
      .then((res) =>{
          expect(res.status).to.eq(200)
          expect(res.body.meta.pagination.limit).to.eq(10)
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
  
    it('ger users id', () => {
      cy.request({
        method : 'GET',
        url : 'https://gorest.co.in/public-api/users/2',
        headers : {
          'authorization' : "Bearer " + accessToken
        }
      })
      .then((res) =>{
          expect(res.status).to.eq(200)
          expect(res.body.data.message).to.eq("Resource not found")
      })
    })
  
  })