(function () {
	'use strict'
	const ROOT = 'https://en.wikipedia.org/wiki/',
	AUDIO_ROOT = 'Content/Audios/Consonants/';

	var $main = $('<main>'),
		$contDiv = $('<div>', { 'class': 'container' }),
		$abbr = $('<abbr>', { text: 'IPA', title: 'International Phonetic Alphabet' }),
		$h2 = $('<h2>', { 'text': ' chart pulmonic consonants with audio' }),
		$tableDiv = $('<div>', { 'class': 'table' }),

		$canvasDiv = $('<div>', { 'class': '$canvasDiv' }),
		$CanvasTable = $('<canvas>', { id: 'myCanvas' }),
		canvas1 = document.getElementById('line_first'),
        canvas2 = document.getElementById('line_second'),
        canvas3 = document.getElementById('line_third'),
        canvas4 = document.getElementById('line_fourth'),
        ctx1 = canvas1.getContext('2d'),
        ctx2 = canvas2.getContext('2d'),
        ctx3 = canvas3.getContext('2d'),
        ctx4 = canvas4.getContext('2d'),

		width = canvas1.width,
        height = canvas1.height,
        size = 2048,
        xCenter = width / 2,
        maxHeight = width / 2 - 2,
        processed = false,
        step = height / size,
        audioEls,
        context = new AudioContext(),
        processor = null,
        loaded = 0,
        audios = [],
        sources = [],
        buffer1 = new Float32Array(size),
        buffer2 = new Float32Array(size),
        buffer3 = new Float32Array(size),
        buffer4 = new Float32Array(size);

	$(document.body).append(
		$main.append(
			$contDiv.append([$h2.prepend($abbr), canvas1, canvas2, canvas3, canvas4,
				$tableDiv.append($canvasDiv, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14,
				a15, a16, a17, a18, a19, a20, a21, a22, a23, a24, a25, a26, a27, a28).append($CanvasTable)]
				)));

	$CanvasTable.attr({ width: '1200', height: '620' });
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	ctx.moveTo(100, 0);
	ctx.lineTo(100,610);
	ctx.moveTo(200, 30);
	ctx.lineTo(200, 610);
	ctx.moveTo(300, 0);
	ctx.lineTo(300, 610);

	ctx.moveTo(400, 190);
	ctx.lineTo(400, 250);
	ctx.moveTo(500, 190);
	ctx.lineTo(500, 250);

	ctx.moveTo(400, 70);
	ctx.lineTo(400, 30);
	ctx.moveTo(500, 70);
	ctx.lineTo(500, 30);

	ctx.moveTo(600, 30);
	ctx.lineTo(600, 610);
	ctx.moveTo(700, 0);
	ctx.lineTo(700, 610);
	ctx.moveTo(800, 30);
	ctx.lineTo(800, 610);
	ctx.moveTo(900, 30);
	ctx.lineTo(900, 610);
	ctx.moveTo(1000, 0);
	ctx.lineTo(1000, 610);
	ctx.moveTo(1100, 30);
	ctx.lineTo(1100, 610);
	ctx.moveTo(1200, 0);
	ctx.lineTo(1200, 610);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(100, 30);
	ctx.lineTo(1200, 30);
	ctx.moveTo(0, 70);
	ctx.lineTo(1200, 70);
	ctx.moveTo(	0, 130);
	ctx.lineTo(1200, 130);
	ctx.moveTo(0, 190);
	ctx.lineTo(1200, 190);
	ctx.moveTo(0,250);
	ctx.lineTo(1200, 250);
	ctx.moveTo(0, 310);
	ctx.lineTo(1200, 310);
	ctx.moveTo(0, 370);
	ctx.lineTo(1200, 370);
	ctx.moveTo(0, 430);
	ctx.lineTo(1200, 430);
	ctx.moveTo(0, 490);
	ctx.lineTo(1200, 490);
	ctx.moveTo(0, 550);
	ctx.lineTo(1200, 550);
	ctx.moveTo(0, 610);
	ctx.lineTo(1200, 610);
	ctx.stroke();

	ctx.font = '16px Arial';
	ctx.fillText('m', 167, 85);
	ctx.fillText('ɱ', 267, 85);
	ctx.fillText('n̪', 367, 85);
	ctx.fillText('n', 463, 85);
	ctx.fillText('ɳ', 665, 85);
	ctx.fillText('ɲ', 766, 85);
	ctx.fillText('ŋ', 865, 85);
	ctx.fillText('ɴ', 965, 85);

	ctx.fillText('p', 123, 147);
	ctx.fillText('b', 167, 147);
	ctx.fillText('p̪', 223, 147);
	ctx.fillText('b̪', 267, 147);
	ctx.fillText('t̪', 323, 147);
	ctx.fillText('d̪', 367, 147);
	ctx.fillText('t', 423, 147);
	ctx.fillText('d', 463, 147);
	ctx.fillText('ʈ', 623, 147);
	ctx.fillText('ɖ', 665, 147);
	ctx.fillText('c', 723, 147);
	ctx.fillText('ɟ', 768, 147);
	ctx.fillText('k', 823, 147);
	ctx.fillText('ɡ', 865, 147);
	ctx.fillText('q', 923, 147);
	ctx.fillText('ɢ', 965, 147);
	ctx.fillText('ʡ', 1063, 147);
	ctx.fillText('ʔ', 1122, 147);

	ctx.fillText('ɸ', 123, 206);
	ctx.fillText('β', 167, 206);
	ctx.fillText('f', 223, 206);
	ctx.fillText('v', 267, 206);
	ctx.fillText('θ', 323, 206);
	ctx.fillText('ð', 367, 206);
	ctx.fillText('s', 423, 206);
	ctx.fillText('z', 463, 206);

	ctx.fillText('ʃ', 523, 206);
	ctx.fillText('ʒ', 565, 206);
	ctx.fillText('ʂ', 623, 206);
	ctx.fillText('ʐ', 665, 206);
	ctx.fillText('ç', 723, 206); 
	ctx.fillText('ʝ', 768, 206);
	ctx.fillText('x', 823, 206);
	ctx.fillText('ɣ', 865, 206);
	ctx.fillText('χ', 923, 206);
	ctx.fillText('ʁ', 965, 230);
	ctx.fillText('ħ', 1020, 206);
	ctx.fillText('ʡ', 1065, 230);
	ctx.fillText('h', 1122, 206);
	ctx.fillText('ɦ', 1165, 230);


	ctx.fillText('ʋ', 267, 267);
	ctx.fillText('ɹ', 565, 267);
	ctx.fillText('ɻ', 665, 267);
	ctx.fillText('j', 768, 267);
	ctx.fillText('ɰ', 865, 267);

	ctx.fillText('ʙ', 167, 325);
	ctx.fillText('r', 463, 325);
	ctx.fillText('*', 665, 325);
	ctx.fillText('ʀ', 965, 325);
	ctx.fillText('ʜ', 1020, 325);
	ctx.fillText('ʢ', 1065, 325);

	ctx.fillText('ⱱ̟', 167, 385);
	ctx.fillText('ⱱ', 267, 385);
	ctx.fillText('ɾ', 463, 385);
	ctx.fillText('ɽ', 665, 385);
	ctx.fillText('ɢ̆ *', 965, 385);
	ctx.fillText('ʡ̯', 1065, 385);

	ctx.fillText('ɬ', 423, 446);
	ctx.fillText('ɮ', 463, 446);
	ctx.fillText('ɭ˔̊', 623, 446);
	ctx.fillText('ʎ̥˔', 723, 446);
	ctx.fillText('ʟ̝̊', 823, 446);

    ctx.fillText('l', 463, 507);
    ctx.fillText('ɭ', 668, 507);
	ctx.fillText('ʎ', 766, 507);
	ctx.fillText('ʟ', 865, 507);

	ctx.fillText('ɺ', 463, 567);
	ctx.fillText('ɺ̢ *', 668, 567);
	ctx.fillText('ʎ̯', 766, 567);

	(function setAudioVowels() {
		var audioParams = [
			{ id1: 'aud1', id2: 'img1', src: AUDIO_ROOT + '1_1.ogg', left: '155px', top: '90px' },
			{ id1: 'aud2', id2: 'img2', src: AUDIO_ROOT + '1_2.ogg', left: '255px', top: '90px' },
			{ id1: 'aud3', id2: 'img3', src: AUDIO_ROOT + '1_3.ogg', left: '450px', top: '90px' },
			{ id1: 'aud4', id2: 'img4', src: AUDIO_ROOT + '1_4.ogg', left: '655px', top: '90px' },
			{ id1: 'aud5', id2: 'img5', src: AUDIO_ROOT + '1_5.ogg', left: '755px', top: '90px' },
			{ id1: 'aud6', id2: 'img6', src: AUDIO_ROOT + '1_6.ogg', left: '855px', top: '90px' },
			{ id1: 'aud7', id2: 'img7', src: AUDIO_ROOT + '1_7.ogg', left: '955px', top: '90px' },

			{ id1: 'aud8', id2: 'img8', src: AUDIO_ROOT + '2_1.ogg', left: '110px', top: '150px' },
			{ id1: 'aud9', id2: 'img9', src: AUDIO_ROOT + '2_2.ogg', left: '155px', top: '150px' },
			{ id1: 'aud10', id2: 'img10', src: AUDIO_ROOT + '2_3.ogg', left: '310px', top: '150px' },
			{ id1: 'aud11', id2: 'img11', src: AUDIO_ROOT + '2_4.ogg', left: '355px', top: '150px' },
			{ id1: 'aud12', id2: 'img12', src: AUDIO_ROOT + '2_5.ogg', left: '410px', top: '150px' },
			{ id1: 'aud13', id2: 'img13', src: AUDIO_ROOT + '2_6.ogg', left: '450px', top: '150px' },
			{ id1: 'aud14', id2: 'img14', src: AUDIO_ROOT + '2_7.oga', left: '655px', top: '150px' },
			{ id1: 'aud15', id2: 'img15', src: AUDIO_ROOT + '2_8.oga', left: '610px', top: '150px' },
			{ id1: 'aud16', id2: 'img16', src: AUDIO_ROOT + '2_9.ogg', left: '710px', top: '150px' },
			{ id1: 'aud17', id2: 'img17', src: AUDIO_ROOT + '2_10.ogg', left: '755px', top: '150px' },
			{ id1: 'aud18', id2: 'img18', src: AUDIO_ROOT + '2_11.ogg', left: '810px', top: '150px' },
			{ id1: 'aud19', id2: 'img19', src: AUDIO_ROOT + '2_12.ogg', left: '855px', top: '150px' },
			{ id1: 'aud20', id2: 'img20', src: AUDIO_ROOT + '2_13.ogg', left: '910px', top: '150px' },
			{ id1: 'aud21', id2: 'img21', src: AUDIO_ROOT + '2_14.oga', left: '955px', top: '150px' },
			{ id1: 'aud22', id2: 'img22', src: AUDIO_ROOT + '2_15.ogg', left: '1050px', top: '150px' },
			{ id1: 'aud23', id2: 'img23', src: AUDIO_ROOT + '2_16.ogg', left: '1110px', top: '150px' },

			{ id1: 'aud24', id2: 'img24', src: AUDIO_ROOT + '3_1.ogg', left: '110px', top: '210px' },
			{ id1: 'aud25', id2: 'img25', src: AUDIO_ROOT + '3_2.ogg', left: '155px', top: '210px' },
			{ id1: 'aud26', id2: 'img26', src: AUDIO_ROOT + '3_3.ogg', left: '210px', top: '210px' },
			{ id1: 'aud27', id2: 'img27', src: AUDIO_ROOT + '3_4.ogg', left: '255px', top: '210px' },
			{ id1: 'aud28', id2: 'img28', src: AUDIO_ROOT + '3_5.ogg', left: '310px', top: '210px' },
			{ id1: 'aud29', id2: 'img29', src: AUDIO_ROOT + '3_6.ogg', left: '355px', top: '210px' },
			{ id1: 'aud30', id2: 'img30', src: AUDIO_ROOT + '3_7.ogg', left: '410px', top: '210px' },
			{ id1: 'aud31', id2: 'img31', src: AUDIO_ROOT + '3_8.ogg', left: '450px', top: '210px' },
			{ id1: 'aud32', id2: 'img32', src: AUDIO_ROOT + '3_9.ogg', left: '510px', top: '210px' },
			{ id1: 'aud33', id2: 'img33', src: AUDIO_ROOT + '3_10.ogg', left: '555px', top: '210px' },
			{ id1: 'aud34', id2: 'img34', src: AUDIO_ROOT + '3_11.ogg', left: '655px', top: '210px' },
			{ id1: 'aud35', id2: 'img35', src: AUDIO_ROOT + '3_12.ogg', left: '610px', top: '210px' },
			{ id1: 'aud36', id2: 'img36', src: AUDIO_ROOT + '3_13.ogg', left: '710px', top: '210px' },
			{ id1: 'aud37', id2: 'img37', src: AUDIO_ROOT + '3_14.ogg', left: '755px', top: '210px' },
			{ id1: 'aud38', id2: 'img38', src: AUDIO_ROOT + '3_15.ogg', left: '810px', top: '210px' },
			{ id1: 'aud39', id2: 'img39', src: AUDIO_ROOT + '3_16.ogg', left: '855px', top: '210px' },
			{ id1: 'aud40', id2: 'img40', src: AUDIO_ROOT + '3_17.ogg', left: '910px', top: '210px' },
			{ id1: 'aud41', id2: 'img41', src: AUDIO_ROOT + '3_18.ogg', left: '955px', top: '235px' },
			{ id1: 'aud42', id2: 'img42', src: AUDIO_ROOT + '3_19.ogg', left: '1010px', top: '210px' },
			{ id1: 'aud43', id2: 'img43', src: AUDIO_ROOT + '3_20.ogg', left: '1055px', top: '235px' },
			{ id1: 'aud44', id2: 'img44', src: AUDIO_ROOT + '3_21.ogg', left: '1110px', top: '210px' },
			{ id1: 'aud45', id2: 'img45', src: AUDIO_ROOT + '3_22.ogg', left: '1155px', top: '235px' },

			{ id1: 'aud46', id2: 'img46', src: AUDIO_ROOT + '4_1.ogg', left: '255px', top: '270px' },
			{ id1: 'aud47', id2: 'img47', src: AUDIO_ROOT + '4_2.ogg', left: '555px', top: '270px' },
			{ id1: 'aud48', id2: 'img48', src: AUDIO_ROOT + '4_3.ogg', left: '655px', top: '270px' },
			{ id1: 'aud49', id2: 'img49', src: AUDIO_ROOT + '4_4.ogg', left: '755px', top: '270px' },
			{ id1: 'aud50', id2: 'img50', src: AUDIO_ROOT + '4_5.ogg', left: '855px', top: '270px' },

			{ id1: 'aud51', id2: 'img51', src: AUDIO_ROOT + '5_1.ogg', left: '155px', top: '330px' },
			{ id1: 'aud52', id2: 'img52', src: AUDIO_ROOT + '5_2.ogg', left: '450px', top: '330px' },
			{ id1: 'aud53', id2: 'img53', src: AUDIO_ROOT + '5_3.ogg', left: '955px', top: '330px' },
			{ id1: 'aud54', id2: 'img54', src: AUDIO_ROOT + '5_4.ogg', left: '1010px', top: '330px' },
			{ id1: 'aud55', id2: 'img55', src: AUDIO_ROOT + '5_5.ogg', left: '1055px', top: '330px' },

			{ id1: 'aud56', id2: 'img56', src: AUDIO_ROOT + '6_1.ogg', left: '255px', top: '390px' },
			{ id1: 'aud57', id2: 'img57', src: AUDIO_ROOT + '6_2.ogg', left: '450px', top: '390px' },
			{ id1: 'aud58', id2: 'img58', src: AUDIO_ROOT + '6_3.ogg', left: '655px', top: '390px' },

			{ id1: 'aud59', id2: 'img59', src: AUDIO_ROOT + '7_1.ogg', left: '410px', top: '450px' },
			{ id1: 'aud60', id2: 'img60', src: AUDIO_ROOT + '7_2.ogg', left: '450px', top: '450px' },
			{ id1: 'aud61', id2: 'img61', src: AUDIO_ROOT + '7_3.ogg', left: '610px', top: '450px' },
			{ id1: 'aud62', id2: 'img62', src: AUDIO_ROOT + '7_4.ogg', left: '710px', top: '450px' },
			{ id1: 'aud63', id2: 'img63', src: AUDIO_ROOT + '7_5.ogg', left: '810px', top: '450px' },

			{ id1: 'aud64', id2: 'img64', src: AUDIO_ROOT + '8_1.ogg', left: '450px', top: '510px' },
			{ id1: 'aud65', id2: 'img65', src: AUDIO_ROOT + '8_2.ogg', left: '655px', top: '510px' },
			{ id1: 'aud66', id2: 'img66', src: AUDIO_ROOT + '8_3.ogg', left: '755px', top: '510px' },
			{ id1: 'aud67', id2: 'img67', src: AUDIO_ROOT + '8_4.ogg', left: '855px', top: '510px' },

			{ id1: 'aud68', id2: 'img68', src: AUDIO_ROOT + '9_1.ogg', left: '450px', top: '570px' }
		];
		for (let i = 0; i < audioParams.length; i++) {
			createAudio(audioParams[i], $canvasDiv);
		}
		audioEls = document.querySelectorAll("audio");
	})();

	window.p = 0;
	window.d = 0;

	audios = [].map.call(audioEls, function (item) { item.onloadeddata = onLoad; return item; });
	processor = context.createScriptProcessor(size, 2, 2);
	processor.onaudioprocess = onAudioProcess;
	processor.connect(context.destination);

	function startProcessing() {
		audios.forEach(function (audio) {
			sources.push(context.createMediaElementSource(audio));
			sources.last.connect(processor);
		});
	}
	function onLoad() {
		++loaded;

		loaded === audios.length && startProcessing();
	}
	function onAudioProcess(e) {
		var i = null,
            inp = e.inputBuffer.getChannelData(0),
            out = e.outputBuffer.getChannelData(0);

		for (i in inp) {
			out[i] = buffer1[i] = inp[i];
		}

		inp = e.inputBuffer.getChannelData(1),
        out = e.outputBuffer.getChannelData(1);

		for (i in inp) {
			out[i] = buffer2[i] = inp[i];
		}

		for (i in inp) {
			out[i] = buffer3[i] = inp[i];
		}

		for (i in inp) {
			out[i] = buffer4[i] = inp[i];
		}

		processed = true;
	}

	(function draw() {
		var i = 0;
		if (processed) {
			processed = false;

			ctx1.clearRect(0, 0, width, height + 600);
			ctx1.beginPath();
			ctx1.moveTo(0, 600);

			for (i = 0; i < size; ++i) {
				ctx1.lineTo(0 + buffer1[i] * maxHeight, i * step);
			}
			ctx1.strokeStyle = 'red';
			ctx1.stroke();

			//ctx2.clearRect(0, 0, width, height + 600);
			//ctx2.beginPath();
			//ctx2.moveTo(0, 600);

			//for (i = 0; i < size; ++i) {
			//	ctx2.lineTo(0 - buffer2[i] * maxHeight, i * step);
			//}
			//ctx2.strokeStyle = 'red';
			//ctx2.stroke();

			//ctx3.clearRect(0, 0, width, height + 600);
			//ctx3.beginPath();
			//ctx3.moveTo(0, 600);

			//for (i = 0; i < size; ++i) {
			//	ctx3.lineTo(0 - buffer3[i] * maxHeight, i * step);
			//}

			//ctx3.strokeStyle = 'red';
			//ctx3.lineWidth = 1;
			//ctx3.stroke();


			//ctx4.clearRect(0, 0, width, height + 600);
			//ctx4.moveTo(0, 600);

			//for (i = 0; i < size; ++i) {
			//	ctx4.lineTo(0 - buffer4[i] * maxHeight, i * step);
			//}
			//ctx4.strokeStyle = 'red';
			//ctx4.stroke();
		}
		requestAnimationFrame(draw);
	}());

}())
