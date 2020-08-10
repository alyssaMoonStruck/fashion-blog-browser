'use strict'
const store = require('../store')

const signUpSuccess = function (data) { console.log(data)
    $('form').trigger('reset')
    $('#message1').text('Successfully signed up!')
    store.user = data.user
}

const signUpFailure = function (error) {
    $('#authenticated').hide()
    $('#log-out').hide()
    $('#message1').text('Failed to sign up')
}

const signInSuccess = function (data) {
    store.user = data.user
    $('#message').text('Successfully signed in!')
    $('#authenticated').show()
    $('#log-out').show()
    $('#unauthenticated').hide()
    
}


const signInFailure = function (error) {
    $('#authenticated').hide()
    $('#log-out').hide()
    $('#message1').text('Failed to sign in')
}

const changePasswordSuccess = function (data) {
    $('form').trigger('reset')
    $('#message').text('Successfully changed password!')
}

const changePasswordFailure = function (error) {
    $('#message').text('Failed to change password')
}

const signOutSuccess = function (data) {
    $('form').trigger('reset')
    $('#message1').text('Successfully signed out!')
    $('#unauthenticated').show()
    $('#authenticated').hide()
    $('#log-out').hide()
}

const signOutFailure = function (error) {
    $('#message1').text('Failed to sign out')
    store
    store.user.token
    $('#authenticated').hide()
    $('#log-out').show()
    $('#unauthenticated').show()
}


module.exports = {
    signUpSuccess,
    signUpFailure,
    signInFailure,
    signInSuccess,
    changePasswordSuccess,
    changePasswordFailure,
    signOutSuccess,
    signOutFailure
}