describe('Testing API with Cypress', () => {
  //GET REQUEST
  it('The endpoint "POSTS" responds with a 200 status code', () => {

    cy.request({
      url: 'https://gorest.co.in/public/v2/posts'
    }).then((respuesta) => {
      expect(respuesta.status).to.eq(200);
    });
  });
//Test if the POST has 10 entries
  it('The "post" endpoint has 10 entries', () => {
    cy.visit('https://gorest.co.in');
    cy.request('/public/v2/posts')
      .its('body')
      .should('have.length', 10);
  });
//Test if Post number 1 has the correct title
  it('Post number 1 has "Acervus tepidus auris ambitus placeat contra unus molestiae.', () => {
    cy.visit('https://gorest.co.in');
    cy.request('/public/v2/posts/120746')
      .its('body')
      .should('have.property', 'title', 'Acervus tepidus auris ambitus placeat contra unus molestiae.');
  });

  //POST REQUEST
  //Test if the POST request works fine for the endpoint
  it('The POST requests works fine for the endpoint', () => {
    const accessToken = '938c7b52fe207153070542c4794748e49dd0cd2ff696761126e2e29c8086de5b'; // Access token for authorization
    const userData = generateRandomUserData();
//This is a function to generate random data since it would only work
//once without it.
    function generateRandomUserData() {
      const randomName = 'Juana de Arco'; 
      const randomEmail = `cscsdc${Math.floor(Math.random() * 100000)}@csdcsd.example`; // Generate random email
      const randomGender = 'male'; 
      const randomStatus = 'inactive';

      return {
        "id": Math.floor(Math.random() * 100000), // Any ID
        "name": randomName,
        "email": randomEmail,
        "gender": randomGender,
        "status": randomStatus
      };
    }
    
    //Making the actual POST request
    cy.request({
      method: 'POST',
      url: 'https://gorest.co.in/public/v2/users',
      headers: {
        'Authorization': `Bearer ${accessToken}`
      },
      body: userData,
    }).then((response) => {
      // This is the assertion to validate the response
      expect(response.status).to.equal(201);
    });
  });
  //PUT REQUEST
  //This is to validate if the PUT request works properly for the endpoint 
  it('The PUT works properly for the endpoint', () => {
    cy.request({
      method: 'PUT',
      url: 'https://gorest.co.in/public/v2/users/6881487',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 938c7b52fe207153070542c4794748e49dd0cd2ff696761126e2e29c8086de5b',
      },
      body: {
        id: 1, // Replace with the correct user ID
        name: 'Hello',
        email: 'cscsdc14260@csdcsd.example',
        gender: 'male',
        status: 'inactive'
      }
    }).then((response) => {
      expect(response.body).to.have.property('name', 'Hello');
    });
  });

  //DELETE REQUEST

  //This is to validate if the DELETE request works properly
  it('The DELETE request workd properly for the endpoint', () => {
    cy.request({
      method: 'DELETE',
      url: 'https://gorest.co.in/public/v2/users/2178419',
      headers: {
        'Authorization': `Bearer ${accessToken}`
      },
    });

  });

});
