$(document).ready(function () {
	$('.submit').click(function (event) {
		console.log('clicked button')

		var email = $('.E-mail').val()
		var message = $('.Message').val()
		var statusELm = $('.status')
		statusELm.empty()

		if (email.length > 5 && email.includes('@') && email.includes('.')) {
			statusELm.append('<div>E-mail is valid</div')
		} else {
			event.preventDefault()
			statusELm.append('<div>E-mail is not valid</div>')
		}
		if (message.length >= 10) {
			statusELm.append('<div>Message is valid</div>')
		} else {
			event.preventDefault()
			statusELm.append('<div>Message is not valid</div>')
		}
	})
})