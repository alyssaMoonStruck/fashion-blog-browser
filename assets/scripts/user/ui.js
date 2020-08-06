'use strict'

const setMessage = (response) => {
    console.log(response)
    $('#message').text(response.message)
} 

const messageFail = (error) => {

    $('#message').text('fail')
} 

module.exports = {
    setMessage,
    messageFail
}