document.addEventListener('DOMContentLoaded', function(){


const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	console.log(str);

	//let results = []; this part of the starter code not needed, as i used the method filter, which automaticly returns a new array
	return fruit.filter(fruitName => fruitName.toLowerCase().includes(str.toLowerCase()));



}

function searchHandler(e) {
	const inputVal = e.target.value;
	console.log(inputVal);

	const results = search( inputVal);
	console.log(results);

	showSuggestions(results, inputVal);
}

function showSuggestions(results, inputVal) {
	console.log(inputVal);
	console.log(results);

	const html = results.map(fruitName => `<li>${fruitName}</li>`).join('');
	suggestions.innerHTML = html;

}

function useSuggestion(e) {
	if (e.target.tagName === 'LI') {
		console.log( e.target.textContent);
		input.value = e.target.textContent;
		suggestions.innerHTML = '';
	}
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
});