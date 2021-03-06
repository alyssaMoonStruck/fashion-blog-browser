'use strict'
const store = require('../store')

const signUpSuccess = function (data) { 
    $('#authenticated').hide()
    
    $('form').trigger('reset')
    $('#unauthenticatedMess').text('Successfully Signed Up!')
    store.user = data.user
}

const signUpFailure = function (error) {
    $('#unauthenticatedMess').text('Failed to Sign Up')
}

const signInSuccess = function (data) {
    store.user = data.user
    $('#authenticatedMess').text('Successfully Signed In!')
    $('#authenticated').show()
    $('#unauthenticated').hide()
    
    
}


const signInFailure = function (error) {
    $('#authenticated').hide()
    $('#unauthenticatedMess').text('Failed to Sign In')
}

const changePasswordSuccess = function (data) {
    $('form').trigger('reset')
    $('#authenticatedMess').text('Successfully Changed Password!')
    $("#mymodal").modal('hide');
}

const changePasswordFailure = function (error) {
    $('form').trigger('reset')
    $('#authenticatedMess').text('Failed to Change Password')
    $("#mymodal").modal('hide');
}

const signOutSuccess = function (data) {
    $('form').trigger('reset')
    $('#unauthenticatedMess').text('Successfully Signed Out!')
    $('#unauthenticated').show()
    $('#authenticated').hide()
}

const signOutFailure = function (error) {
    $('#authenticatedMess').text('Failed to Sign Out')
    store
    store.user.token
    $('#authenticated').show()
    $('#unauthenticated').hide()
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