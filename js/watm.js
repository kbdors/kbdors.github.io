// Логирование
// ----------------
function add_logging(msg) {
	var log_box = document.getElementById("JournalLogging");
	log_box.innerHTML += "<br />" + msg;
	log_box.scrollTop = log_box.scrollHeight;
}
function clear_logging() {
	document.getElementById('JournalLogging').innerHTML = "";
}

// Привязка обработчиков к элементам
// ----------------
document.addEventListener('DOMContentLoaded', function(event) {
		// Область логирования
		document.getElementById("btnClearLog").onclick = clear_logging;
	}
);
