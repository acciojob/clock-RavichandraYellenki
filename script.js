//your JS code here. If required.
function updateDateTime(){
	let timerElement = document.getElementById("timer");
	let currentTime = new Date();

	let year = currentTime.getFullYear();
	let month= currentTime.getMonth()+1;
	let date = currentTime.getDate();
	let hours = currentTime.getHours();
	let minutes = currentTime.getMinutes();
	let seconds = currentTime.getSeconds();


	let amOrpm = hours >= 12 ? 'PM' : 'AM';

	 let formattedHour = hours % 12 || 12;

	let formattedTime = '${formattedHour}:${minutes}:${seconds} ${amOrpm}';

	let formattedDate = '${month}/${date}/${year}'
    
   let result = formattedDate+","+" " +formattedTime;
	timerElement.textContent =result;
}







setInterval(updateDateTime,1000);
updateDateTime();