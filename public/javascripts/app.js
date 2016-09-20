'use strict'

$(document).ready(() => {
  console.log('wassup')
  formatDates()
  updateUserListener()
})

const id = parseInt(window.location.pathname.split('/')[2])

function formatDates(){
  var dates = $('.date')
  dates.map(date => {
    $('.date').empty()
    $('.date').append(moment(date).format('LL'))
  })
}

function updateUserListener(){
  $('#edit-user-btn').click((e) => {
    e.preventDefault()

    const first_name = $('#first_name').val().trim()
    const last_name = $('#last_name').val().trim()
    const avatar = $('#avatar').val().trim()
    const bio = $('#bio').val().trim()

    $.ajax({
      contentType: 'application/json',
      url: `/users/${id}`,
      method: 'PUT',
      dataType: 'json',
      data: JSON.stringify({
        first_name, last_name, avatar, bio,
      }),
    }).done(() => {
      console.log('here')
      window.location = '/users'
    }).fail(err => {
      console.log(err)
    })
  })
}
