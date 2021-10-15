// Вспомогательные функции (БОР)
// ----------------
// Случайное число между min и max
function getRandomFloat(min, max) {
	return Math.random() * (max - min) + min;
}
// Случайное целое между min и max
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
