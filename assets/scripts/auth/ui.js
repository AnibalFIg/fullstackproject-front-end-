'use strict'
const store = require('../store.js')

const signUpSuccess = data => {
  store.user = data.user
  $('#message').text('Signed up successfully') // .text() method allows us to set its text in the html
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#change-password').hide()
  document.getElementById('sign-up').reset()
}

const signInSuccess = data => {
  store.user = data.user
  $('#message').text('Signed in successfully') // .text() method allows us to set its text in the html
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#sign-up').hide()
  $('#sign-in').hide()
  document.getElementById('sign-in').reset()
}

const signUpFailure = data => {
  store.user = data.user
  $('#message').text('Error on sign up')
  $('#message').removeClass()
  $('#message').addClass('failure')
  document.getElementById('sign-up').reset()
}

const signInFailure = data => {
  store.user = data.user
  $('#message').text('Error on sign up')
  $('#message').removeClass()
  $('#message').addClass('failure')
  document.getElementById('sign-in').reset()
}

const changePasswordSuccess = data => {
  $('#message').text('Password Changed Successfully')
  $('#message').removeClass()
  $('#message').addClass('Success')
  document.getElementById('change-password').reset()
}

const changePasswordFailure = data => {
  $('#message').text('Error on change password')
  $('#message').removeClass()
  $('#message').addClass('failure')
  document.getElementById('change-password').reset()
}

const signOutFailure = data => {
  store.user = data.user
  $('#message').text('Error Logging Out')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const signOutSuccess = data => {
  store.user = null
  $('#message').text('Logged Out Successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#sign-up').show()
  $('#sign-in').show()
  document.getElementById('sign-in').reset()
}

const searchBarSuccess = data => {
  store.user = data.user
  $('#message').text('Successfull Search')
  $('#message').removeClass()
  $('#message').addClass('success')
  document.getElementById('search').reset()
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  signUpFailure,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutFailure,
  signOutSuccess,
  searchBarSuccess
}
