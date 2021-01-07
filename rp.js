RandomPostsGenerator = typeof RandomPostsGenerator == 'undefined' ? 0 : RandomPostsGenerator + 1;

(function(nr) {
	let tab = [];
	let s = document.querySelectorAll('script[src="https://probloggerplugins.github.io/randomPosts/randomPosts.js"]')[nr];
	let glowny = document.createElement('div');
	let z = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890_-';
	let d = 'pbpRP-';
	while (d.length < 16) {
		d += z[Math.floor(Math.random() * z.length)];
	}
	glowny.id = d;
	s.parentNode.insertBefore(glowny, s);
	
	let ile = Number(s.getAttribute('numberOfPosts'));
	if (ile < 1 || isNaN(ile)) ile = 5;
	
	let kat = s.getAttribute('label');
	if (kat === 'none' || kat === '' || kat === null) {
		kat = '';
	} else {
		kat = '/-/' + kat;
	}
	
	let wtx = Number(s.getAttribute('textSize'));
	if (wtx < 4 || isNaN(wtx)) wtx = 12;
	let wtl = Number(s.getAttribute('titleSize'));
	if (wtl < 5 || isNaN(wtl)) wtl = wtx + 3;
	let mrg = wtx < 12 ? 2 : (wtx < 21 ? 3 : 4);
	
	let bw = s.getAttribute('borderWidth') ? Number(s.getAttribute('borderWidth')) : 1;
	if (bw < 0 || isNaN(bw)) bw = 1;
	
	let bs = s.getAttribute('borderStyle');
	if (bs !== 'dotted' && bs !== 'dashed') bs = 'solid';
	
	let ktl = s.getAttribute('titleColor') ? s.getAttribute('titleColor') : '#9d0000';
	let ktx = s.getAttribute('textColor') ? s.getAttribute('textColor') : '#333333';
	let ctl = s.getAttribute('titleFont') ? s.getAttribute('titleFont') : '\'Comic Sans MS\', cursive, sans-serif';
	let ctx = s.getAttribute('textFont') ? s.getAttribute('textFont') : 'Georgia, serif';
	let ob = s.getAttribute('thumbnail');
	if (ob === 'none') {
		ob = 'display:none;';
	} else if (ob === 'right') {
		ob = 'float:right;margin:0 0 5px 5px;';
	} else {
		ob = 'float:left;margin:0 5px 5px 0;';
	}
	let wo = s.getAttribute('thumbnailSize');
	if (Number(wo) < 0 || isNaN(wo) || wo === null) {
		wo = 70;
	}
	let rad = s.getAttribute('thumbnailRounding');
	if (isNaN(rad) || rad === null) {
		rad = 15;
	}
	let nOb = s.getAttribute('noThumbnail');
	if (nOb === 'default' || nOb === '' || nOb === null) nOb = 'https://3.bp.blogspot.com/-go-1bJQKzCY/XIpRVUCKeCI/AAAAAAAAAQM/YUdYK3hEkcIFwcz0r-T2uErre0JOJWnrwCLcBGAs/s1600/no-image.png';
	let tl = s.getAttribute('postTitle');
	let inf = s.getAttribute('postInfo');
	let au = s.getAttribute('postAuthor');
	let dp = s.getAttribute('publishDate');
	let ilk = s.getAttribute('numOfComments');
	let ety = s.getAttribute('postCategories');
	let skr = s.getAttribute('excerptLength');
	if (skr === null || isNaN(skr) || Number(skr) < 0) {
		skr = 200;
	}

	function dStyl(f) {
		if (f === 'none') {
			return 'display:none;';
		} else if (f === 'right') {
			return 'display:block;text-align:right;';
		} else if (f === 'center') {
			return 'display:block;text-align:center;';
		} else {
			return 'display:block;text-align:left;';
		}
	}

	function ustCz(f) {
		if (f == 'Georgia' || f == 'Georgia, serif') {
			return 'Georgia, serif'
		} else if (f == 'Palatino' || f == "'Palatino Linotype', 'Book Antiqua', Palatino, serif") {
			return '"Palatino Linotype", "Book Antiqua", Palatino, serif';
		} else if (f == 'Times New Roman' || f == "'Times New Roman', Times, serif") {
			return '"Times New Roman", Times, serif';
		} else if (f == 'Arial' || f == 'Arial, Helvetica, sans-serif') {
			return 'Arial, Helvetica, sans-serif';
		} else if (f == 'Arial Black' || f == "'Arial Black', Gadget, sans-serif") {
			return '"Arial Black", Gadget, sans-serif';
		} else if (f == 'Comic Sans' || f == "'Comic Sans MS', cursive, sans-serif") {
			return '"Comic Sans MS", cursive, sans-serif';
		} else if (f == 'Impact' || f == 'Impact, Charcoal, sans-serif') {
			return 'Impact, Charcoal, sans-serif';
		} else if (f == 'Lucida Sans' || f == "'Lucida Sans Unicode', 'Lucida Grande', sans-serif") {
			return '"Lucida Sans Unicode", "Lucida Grande", sans-serif';
		} else if (f == 'Tahoma' || f == 'Tahoma, Geneva, sans-serif') {
			return 'Tahoma, Geneva, sans-serif';
		} else if (f == 'Trebuchet' || f == "'Trebuchet MS', Helvetica, sans-serif") {
			return '"Trebuchet MS", Helvetica, sans-serif';
		} else if (f == 'Verdana' || f == 'Verdana, Geneva, sans-serif') {
			return 'Verdana, Geneva, sans-serif';
		} else if (f == 'Courier New' || f == "'Courier New', Courier, monospace") {
			return '"Courier New", Courier, monospace';
		} else if (f == 'Lucida Console' || f == "'Lucida Console', Monaco, monospace") {
			return '"Lucida Console", Monaco, monospace';
		} else {
			return 'Inherit';
		}
	}

	function usIn(f) {
		if (f === 'none') {
			return 'display:none;';
		} else {
			return 'display:inline-block;';
		}
	}

	let styl = document.createElement('style');
	styl.innerHTML = '#'+d+'{display:block;} #'+d+' .pbpRandomPost{display:block;} #'+d+' .pbpRandomPost:first-child pbprandompost{border-top:'+bw+'px '+bs+' '+ktl+';} {display:block;} #'+d+' pbprandompost{display:block;font-size:'+wtx+'px;color:'+ktx+';padding:5px;border-bottom:'+bw+'px '+bs+' '+ktl+';line-height:normal;font-family:'+ustCz(ctx)+';} #'+d+' pbprandompost:after{content:"";display:block;clear:both;} #'+d+' pbprandompost pbpostitle{'+dStyl(tl)+';font-size:'+wtl+'px;font-weight:bold;color:'+ktl+';font-family:'+ustCz(ctl)+';margin-bottom:'+mrg+'px;} #'+d+' pbprandompost a {text-decoration:none;border:none;padding:0;margin:0;} #'+d+' pbprandompost a:hover pbpostitle{text-decoration:underline;} #'+d+' pbprandompost a img{border-radius:'+rad+'%;} #'+d+' pbprandompost a img:hover {opacity:0.8;} #'+d+' pbpinfobox{'+dStyl(inf)+';cursor:default;margin-bottom:'+mrg+'px;} #'+d+' pbpinfobox pbpdatapubl{'+usIn(dp)+'} #'+d+' pbpinfobox pbpautor{'+usIn(au)+'margin-right:'+wtx+'px;} #'+d+' pbpinfobox pbpkomenty{'+usIn(ilk)+'margin-right:'+wtx+'px;} #'+d+' pbptagi{'+dStyl(ety)+';white-space:nowrap;overflow-x:hidden;cursor:default;margin-bottom:'+(mrg+1)+'px;padding-top:1px;} #'+d+' pbptagi pbplabel{display:inline-block;border:1px solid '+ktx+';padding:1px 3px;border-radius:15%;margin-right:4px;} #'+d+' pbpfragment{display:block;font-style:italic;text-align:justify;}';
	document.head.appendChild(styl);

	function los(h, j) {
		while (tab.length < j && tab.length < h) {
			let nm = Math.floor((Math.random() * h) + 1);
			if (tab.indexOf(nm) < 0) {
				tab.push(nm);
				let blok = document.createElement('div');
				blok.setAttribute('class', 'pbpRandomPost');
				blok.setAttribute('post', 'np7' + nm + 's1');
				glowny.appendChild(blok);
			}
		}
	}

	function laPos(h, j) {
		let p = {}
		p.l = h.querySelector('link[rel="alternate"]') ? h.querySelector('link[rel="alternate"]').getAttribute('href') : '/';
		p.t = skr > 0 && h.querySelector('summary') ? h.querySelector('summary').textContent.replace(/<(?:.|\n)*?>/gm, '').substring(0, skr) + '...' : '';
		p.n = h.querySelector('title') ? h.querySelector('title').textContent : 'No title';
		p.d = h.querySelector('published') ? h.querySelector('published').textContent.substring(0, 10) : ''
		let obr = h.getElementsByTagName('media\:thumbnail');
		if (obr.length > 0) {
		    p.obrzk = '<img src="' + obr[0].getAttribute('url') + '" style="' + ob + ';width:' + wo + 'px;height:auto;padding:0;border:0;" alt="No image" onerror="this.src\=\'https://3.bp.blogspot.com/-go-1bJQKzCY/XIpRVUCKeCI/AAAAAAAAAQM/YUdYK3hEkcIFwcz0r-T2uErre0JOJWnrwCLcBGAs/s1600/no-image.png\'">';
		} else {
			p.obrzk = '<img src="' + nOb + '" style="' + ob + ';width:' + wo + 'px;height:auto;padding:0;border:0;" alt="No image..." onerror="this.src\=\'https://3.bp.blogspot.com/-go-1bJQKzCY/XIpRVUCKeCI/AAAAAAAAAQM/YUdYK3hEkcIFwcz0r-T2uErre0JOJWnrwCLcBGAs/s1600/no-image.png\'">';
		}
		p.k = h.getElementsByTagName('thr\:total').length > 0 ? Number(h.getElementsByTagName('thr\:total')[0].textContent) : 0;
		p.a = h.querySelector('author') && h.querySelector('author').querySelector('name') ? h.querySelector('author').querySelector('name').textContent : 'Anonymous';
        p.b = '';
		p.c = '';
		h.querySelectorAll('category').forEach((z, x) => {
			p.b += '<pbplabel>🔖' + z.getAttribute('term') + '</pbplabel>';
			p.c += z.getAttribute('term') + (z !== h.querySelectorAll('category').length-1 ? ', ' : '');
		})
		glowny.querySelector('.pbpRandomPost[post="np7' + j + 's1"]').innerHTML = '<pbprandompost><a href="' + p.l + '" title="' + p.n + '">' + p.obrzk + '<pbpostitle>' + p.n + '</pbpostitle></a><pbpinfobox><pbpkomenty title="' + p.k + ' comments about ' + p.n + '">💬 ' + p.k + '</pbpkomenty><pbpautor title="Published by ' + p.a + '">👤 ' + p.a + '</pbpautor><pbpdatapubl title="Date of publication">📅 ' + p.d + '</pbpdatapubl></pbpinfobox><pbptagi title="Labels: ' + p.c + '">' + p.b + '</pbptagi><pbpfragment>' + p.t + '</pbpfragment></pbprandompost>';
	}

	function pojed(h) {
		let z = new XMLHttpRequest();
		z.open('GET', '/feeds/posts/summary?start-index=' + h + '&max-results=1');
		z.onload = function() {
			if (z.status === 200) {
				let t = z.responseXML.getElementsByTagName('entry')[0];
				laPos(t, h);
			}
		}
		z.send();
	}

	let pytak = new XMLHttpRequest();
	pytak.open('GET', '/feeds/posts/summary' + kat + '?start-index=1&max-results=150');
	pytak.onload = function() {
		if (pytak.status === 200) {
			let ilsc = Number(pytak.responseXML.getElementsByTagName('openSearch\:totalResults')[0].textContent);
			los(ilsc, ile);
			let wps = pytak.responseXML.getElementsByTagName('entry');
			for (var x=0; x<tab.length; x++) {
				var nmr = tab[x];
				if (nmr <= 150) {
					laPos(wps[nmr-1], nmr);
				} else {
					pojed(nmr)
				}
			}
		}
	}
	pytak.send();

})(RandomPostsGenerator);
