describe('Blog app', function () {
  beforeEach(function () {
    cy.request('POST', 'http://localhost:3001/api/testing/reset')
    cy.request('POST', 'http://localhost:3001/api/Users', {
      username: 'mluukkai', password: 'salainen'
    }).then(response => {
      localStorage.setItem('loggedNoteappUser', JSON.stringify(response.body))
      cy.visit('http://localhost:3000')
    })
  })

  it('Login form is shown', function () {
    cy.visit('http://localhost:3000')
    cy.contains('log in').click()
  })
  describe('Login', function () {
    it('succeeds with correct credentials', function () {
      cy.get('#username').type('mluukkai')
      cy.get('#password').type('salainen')
      cy.get('#login-Button').click()

      cy.contains('mluukkai logged in')
    })

    it('fails with wrong credentials', function () {
      cy.get('#username').type('mluukkai')
      cy.get('#password').type('wrong')
      cy.get('#login-Button').click()

      cy.contains('wrong username or password')
        .and('have.css', 'color', 'rgb(255, 0, 0)')
    })
  })

  describe('When logged in', function () {
    beforeEach(function () {
      cy.get('#username').type('mluukkai')
      cy.get('#password').type('salainen')
      cy.get('#login-Button').click()

      cy.contains('Create blog').click()
      cy.get('#title').type('Test Blog')
      cy.get('#author').type('mluukkai')
      cy.get('#url').type('some url here')
      cy.get('#create').click()

    })

    it('A blog can be created', function () {
      cy.contains('Create blog').click()
      cy.get('#title').type('Test Blog2')
      cy.get('#author').type('mluukkai')
      cy.get('#url').type('some url here')
      cy.get('#create').click()
      cy.contains('Test Blog2')
    })
    it('A blog can be liked', function () {
      cy.get('.blogTest').parent().find('#view').as('theButton')
      cy.get('@theButton').click()
      cy.get('#like').click()
      cy.contains('likes 1')
    })
    it('A blog can be removed', function () {
      cy.get('.blogTest').parent().find('#view').as('theButton')
      cy.get('@theButton').click()
      cy.get('#remove').click()
      cy.get('html').should('not.contain','.blogTest')
    })
  })

})