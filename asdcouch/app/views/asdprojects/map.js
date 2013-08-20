function (doc) {
  if (doc._id.substr(0, 6)  === "chore:") {
    emit(doc._id,  {
    	"choreDate": doc.choreDate,
    	"choreDifficulty": doc.choreDifficulty,
    	"choreLocation": doc.choreLocation,
    	"choreName": doc.choreName,
    	"choreNotes": doc.choreNotes
    });
  }
};