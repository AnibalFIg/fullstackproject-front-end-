'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')
console.log(store)

const onSignUp = event => {
  console.log()
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onSearch = event => {
  event.preventDefault()
  const data = getFormFields('heroes_information.csv')
  api.search(data)
}
console.log()

const onCreateHeroVillain = function (event) {
  // prevent default reload of page
  console.log('got into onCreateHeroVillain...about to prevent default')
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createHeroVillain(data)
    .then(ui.createHeroVillainSuccess)
    .catch(ui.createHeroVillainFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onSearch,
  onCreateHeroVillain
}
