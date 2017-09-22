function createAudio(params, $canvasDiv) {
	var $audio = $('<audio>', {
		id: params.id1,
		src: params.src
	}),
	 $img = $('<img>', {
	 	id: params.id2,
	 	src: "Content/Imgs/play_black.png"
	 }).css({ top: params.top, left: params.left });

	$canvasDiv.append($audio).append($img);
	$img.on('click', function () {
		$img.attr("src", "Content/Imgs/pause.jpg");
		$audio[0].play();
	})
	$audio.on('pause', function () {
		$img.attr("src", "Content/Imgs/play_black.png");
	})

};

