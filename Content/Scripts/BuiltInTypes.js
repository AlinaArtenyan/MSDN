(function () {
	'use strict'
	var $contDiv = $('<div>', { 'class': 'container' }),
		$typeDiv = $('<div>', { 'class': 'types-content' }),
		$scoreDiv = $('<div>', { 'class': 'scores' }),
		$progressDiv = $('<div>', { 'id': 'progressBarCont' }),
		$tableDiv = $('<div>', { 'class': 'table' }),
		$captionDiv = $('<div>', { 'class': 'caption' }),
		$startButton = $('<button>', { id: 'start', text: 'Start a new Game' }),
		$resultButton = $('<button>', { id: 'finish', text: 'Correct Answer Total' }),
		arrDiv = [], $tagName, interval, id;

	$(document.body).append(
		$contDiv.append(
			$typeDiv.append(
				$scoreDiv, $progressDiv, $captionDiv, $tableDiv
			)
		)
	);

	for (let i = 0; i < scoresArr.length; ++i) {
		let $scDiv = $('<div>').appendTo($scoreDiv);
		$tagName = $('<' + scoresArr[i].tagName + '>').appendTo($scDiv);
		$tagName.text(scoresArr[i].text).attr({
			title: scoresArr[i].title,
			id: scoresArr[i].id
		});
		$scoreDiv.append($startButton, $resultButton);
	}
	var $outputCorrAnswers = $('#outputCorrAnswers'),
		$outputIncorrAnswers = $('#outputIncorrAnswers');
	$tagName = $('<' + scoresArr.tagName + '>').appendTo($scoreDiv);
	for (let i = 0; i < progBarArr.length; ++i) {
		$progressDiv.append($tagName = $('<' + progBarArr[i].tagName + '>'));
		$tagName.text(progBarArr[i].text).attr({
			'class': progBarArr[i].class,
			id: progBarArr[i].id,
			value: progBarArr[i].value,
			max: progBarArr[i].max
		});
	}
	for (let i = 0; i < tblArr.length; ++i) {
		arrDiv[i] = $('<div>', { 'class': 'row' });
		$tableDiv.append(arrDiv[i]);
		for (let j = 0; j < tblArr[i].length; ++j) {
			arrDiv[i].append($tagName = $('<' + tblArr[i][j].tagName + '>'));
			$tagName.text(tblArr[i][j].text).attr({
				'class': tblArr[i][j].class
			});
			if (tblArr[i][j].child) {
				let child = tblArr[i][j].child;
				for (let k = 0; k < child.length; ++k) {
					let $childDiv = $('<' + child[k].tagName + '>').appendTo($tagName);
					if (child[k].child) {
						for (let l = 0; l < child[k].child.length; ++l) {
							var inptChild = child[k].child[l];
							let $childInput = $('<' + inptChild.tagName + '> </' + inptChild.tagName + '>').appendTo($childDiv);
							$childInput.attr({
								'type': inptChild.type,
								'id': inptChild.id,
								'name': inptChild.name,
								'value': inptChild.value,
								'disabled': inptChild.disabled,
								'data-correct': inptChild['data-correct']
							});
						}
					}
				}
			}
		}
	}
	//START
	$('#start').click(function () {
		$('#start').attr('disabled', 'disabled');
		$('#finish').removeAttr('disabled');
		$('input[disabled=disabled]').removeAttr('disabled');
		interval = setInterval(function () {
			var progress = $('#progressBar'),
				percent = $('#lblProgress');
			progress.val(progress.val() + 1);
			percent.text(progress.val() + '%');
		}, 1 * 2000);
		$('input[type=checkbox]').is(':checked') && $('input[type=checkbox]').prop('checked', false);
		$('.selectedTrue').removeClass('selectedTrue');
		$('.selectedFalse').removeClass('selectedFalse');
		$outputCorrAnswers.empty();
		$outputIncorrAnswers.empty();
		$('.selectedTrueDott').removeClass('selectedTrueDott');
	});
	// #region FINISH
	$('#finish').click(function () {
		$('#finish').attr('disabled', 'disabled');
		$('#start').removeAttr('disabled');
		$('#progressBar').val(0);
		$('#lblProgress').text('0%');
		$('input').attr('disabled', 'disabled');
		clearInterval(interval);
		$('input[type=checkbox]').filter(function (index, item) {
			var that = $(item);
			if (that.data('correct')) {
				that.addClass('selectedTrueDott');
				if (that.is(':checked')) {
					that.parent().parent().toggleClass('selectedTrue');
				}
			}
			if (!that.data('correct') && that.is(':checked')) {
				that.parent().parent().toggleClass('selectedFalse');
			}
		});
		//OUTPUT
		[$outputCorrAnswers, $outputIncorrAnswers].forEach((index, item) => $(item).empty());
		$outputCorrAnswers.text('Correct Answers: ' + $('.selectedTrue').length);
		$outputIncorrAnswers.text('Incorrect Answers: ' + $('.selectedFalse').length);
	});

	// #endregion
}())