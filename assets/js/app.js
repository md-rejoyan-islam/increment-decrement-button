// all button selector 
const add = document.getElementById('add');
const remove = document.getElementById('remove');
const value = document.getElementById('value');
//select audio button
const audio = document.querySelectorAll('.audio')[0];
const resetAudio = document.querySelectorAll('.audio')[1];
//select reset button
const reset = document.querySelector('.reset')


// add button event 
let count = 0;
add.onclick = () => {
	audio.play()
	count++;
	if (count >= 0 && count < 10) {
		value.innerHTML = `0${count}`
	} else if (count < 0 && count > -10) {
		value.innerHTML = `-0${Math.abs(count)}`
	} else {
		value.innerHTML = count
	}
}

//remove button event
remove.onclick = () => {
	count--;
	audio.play()
	if (count >= 0 && count < 10) {
		value.innerHTML = `0${count}`
	} else if (count < 0 && count > -10) {
		value.innerHTML = `-0${Math.abs(count)}`
	} else {
		value.innerHTML = count;
	}
}

//reset button event
reset.onclick = () => {
	count = 0;
	resetAudio.play()
	value.innerHTML = `0${count}`
}