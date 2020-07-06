$(document).ready(function () {
	$('body').css('visibility', 'visible')
})

$(function editBg () {
	$('td span').filter(function () {
		return $(this).text() === '5' || $(this).text() === '4';
	}).css('background', '#b6eb7a');

	$('td span').filter(function () {
		return $(this).text() === '3';
	}).css('background', '#eebb4d');

	$('td span').filter(function () {
		return $(this).text() === '2';
	}).css('background', '#e36387')
})



items = [
	"Алгебра", "Английский", "Биология",
	"Всемирная", "География", "Геометрия", "Информатика",
	"История", "Казахский", "Основы", "Литература",
	"Русский", "Самопознание", "Религиоведение",
	"Физика", "Физкультура", "Химия", "Труд"
]

estimations = [
	[3, 3, 3, 3, 3],
	[3, 3, 3, 3, 3],
	[3, 3, 4, 4, 4],
	[3, 3, "-", 3, 3],
	[3, 3, 3, 3, 3],
	[3, 3, 3, 3, 3],
	[4, 4, "-", 5, 5],
	[3, 3, 3, 4, 3],
	[3, 3, 3, 3, 3],
	[3, 3, "-", 4, 4],
	[3, 3, 3, 3, 3],
	[3, 3, 3, 3, 3],
	["-", "ЗЧ", "-", "ЗЧ", "ЗЧ"],
	["-", "ЗЧ", "-", "ЗЧ", "ЗЧ"],
	[3, 3, 3, 4, 3],
	["ЗЧ", "ЗЧ", "ЗЧ", "ЗЧ", "ЗЧ"],
	[4, 3, 3, 3, 3],
	["-", "ЗЧ", "-", "ЗЧ", "ЗЧ"]
]

for (i = 1; i <= items.length; i++) {
	$('tbody')
	// .')
	// .append($('<tr>'))
	.append($('<tr>', {
		append: $('<th>', {
			scope: 'row',
			text: i
		})
		.add($('<td>', {
			text: items[i - 1]
		}))
		.add($('<td>', {
			text: estimations[i - 1][0]
		}))
		.add($('<td>', {
			text: estimations[i - 1][1]
		}))
		.add($('<td>', {
			text: estimations[i - 1][2]
		}))
		.add($('<td>', {
			text: estimations[i - 1][3]
		}))
		.add($('<td>', {
			text: estimations[i - 1][4]
		}))
	}))
}