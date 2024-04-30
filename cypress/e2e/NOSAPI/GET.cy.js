describe('API Tests', () => {
    it('should return a list of users', () => {
      cy.request({
        method: 'GET',
        url: 'https://gorest.co.in/public/v1/users',
        headers: {
          Authorization: '938c7b52fe207153070542c4794748e49dd0cd2ff696761126e2e29c8086de5b'
        }
      }).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.data).to.be.an('array')
      })
    })
  })

  