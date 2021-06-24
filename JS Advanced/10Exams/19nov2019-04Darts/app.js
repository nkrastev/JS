function dart(){
	let sixthLayer=document.querySelector('#sixthLayer');
	let fifthLayer=document.querySelector('#fifthLayer');
	let fourthLayer=document.querySelector('#fourthLayer');
	let thirdLayer=document.querySelector('#thirdLayer');
	let secondLayer=document.querySelector('#secondLayer');
	let firstLayer=document.querySelector('#firstLayer');

	const sixPoints=	Number(document.querySelector('#scoreBoard > table > tbody > tr:nth-child(6) > td:nth-child(2)').textContent.slice(0,-7));
	const fivePoints=	Number(document.querySelector('#scoreBoard > table > tbody > tr:nth-child(5) > td:nth-child(2)').textContent.slice(0,-7));
	const fourPoints=	Number(document.querySelector('#scoreBoard > table > tbody > tr:nth-child(4) > td:nth-child(2)').textContent.slice(0,-7));
	const threePoints=	Number(document.querySelector('#scoreBoard > table > tbody > tr:nth-child(3) > td:nth-child(2)').textContent.slice(0,-7));
	const twoPoints=	Number(document.querySelector('#scoreBoard > table > tbody > tr:nth-child(2) > td:nth-child(2)').textContent.slice(0,-7));
	const onePoints=	Number(document.querySelector('#scoreBoard > table > tbody > tr:nth-child(1) > td:nth-child(2)').textContent.slice(0,-7));

	sixthLayer.addEventListener('click', onSixth);
	fifthLayer.addEventListener('click', onFifth);
	fourthLayer.addEventListener('click', onFourth);
	thirdLayer.addEventListener('click', onThird);
	secondLayer.addEventListener('click', onSecond);
	firstLayer.addEventListener('click', onFirst);

	let homePoints=Number(document.querySelector('#Home > p:nth-child(1)').textContent);
	let awayPoints=Number(document.querySelector('#Away > p:nth-child(1)').textContent);

	let turn='home';

		

	function onSixth(event){
		event.stopPropagation();
		if (turn=='home') {
			homePoints+=sixPoints;	
			turn = 'away';
		}else{
			awayPoints+=sixPoints;
			turn = 'home';
		}
		setNewPoints(homePoints, awayPoints);		
	}

	function onFifth(event){
		event.stopPropagation();
		if (turn=='home') {
			homePoints+=fivePoints;	
			turn = 'away';
		}else{
			awayPoints+=fivePoints;
			turn = 'home';
		}
		setNewPoints(homePoints, awayPoints);
	}

	function onFourth(event){
		event.stopPropagation();
		if (turn=='home') {
			homePoints+=fourPoints;	
			turn = 'away';
		}else{
			awayPoints+=fourPoints;
			turn = 'home';
		}
		setNewPoints(homePoints, awayPoints);
	}

	function onThird(event){
		event.stopPropagation();
		if (turn=='home') {
			homePoints+=threePoints;	
			turn = 'away';
		}else{
			awayPoints+=threePoints;
			turn = 'home';
		}
		setNewPoints(homePoints, awayPoints);
	}

	function onSecond(event){
		event.stopPropagation();
		if (turn=='home') {
			homePoints+=twoPoints;	
			turn = 'away';
		}else{
			awayPoints+=twoPoints;
			turn = 'home';
		}
		setNewPoints(homePoints, awayPoints);
	}

	function onFirst(event){
		event.stopPropagation();
		if (turn=='home') {
			homePoints+=onePoints;	
			turn = 'away';
		}else{
			awayPoints+=onePoints;
			turn = 'home';
		}
		setNewPoints(homePoints, awayPoints);
	}

	


	function setNewPoints(home, away){
		document.querySelector('#Home > p:nth-child(1)').textContent=home;
		document.querySelector('#Away > p:nth-child(1)').textContent=away;

		if (home>=100) {
			document.querySelector('#Home > p:nth-child(2)').style.background='green';
			document.querySelector('#Away > p:nth-child(2)').style.background='red';
			
		}
		if (away>=100) {
			document.querySelector('#Home > p:nth-child(2)').style.background='red';
			document.querySelector('#Away > p:nth-child(2)').style.background='green';
			//break dart;
		}
	}

}