var lda = require('lda');

function getTopics(stringArray){
	return lda(stringArray, 1, 10);
}

module.exports = {
	getTopics: getTopics
}
