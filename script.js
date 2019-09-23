function btnClick() {
    if (!validData())
        return false;
}

function Book (title, author, genre, releaseDate) {
	this.title = title;
	this.author = author;
	this.genre = genre;
	this.releaseDate = releaseDate;

	this.getTitle() = function () {
	return this.title;
}
        // DAVIT: this.isNew = function() {...}
	// () is extra with isNew(). Same is true with the rest object methods below.
	this.isNew () = function () {

	if (this.releaseDate.getFullYear() >= 2001) {
	return true;
}
	else {
	return false;
}
}
}


Book.prototype.getInfo () = function () {
	return Book.title + " " + Book.author + " " + Book.genre + " " + Book.releaseDate;
}


function Fantasy (title, author, genre, releaseDate, magicalCreatures, happyEnding) {
	Book.call (this, title, author, genre, releaseDate);
	this.magicalCreatures = magicalCreatures;
	this.happyEnding = happyEnding;

	this.hasHappyEnding () = function () {
		if (this.happyEnding === true) {
			return "Has Happy Ending";
		}
		else {
			return "Doesn't have Happy Ending";

		}
	}

	this.getFullInfo() = function () {
		console.log (Book.getInfo() + )
	}
}
			     
// DAVIT: To make Fantasy a child of Book you need to add these two:
Fantasy.prototype = Object.create(Book.prototype);

Object.defineProperty(Fantasy.prototype, 'constructor', {
    value: Fantasy,
    enumerable: false,
    writable: true
})
