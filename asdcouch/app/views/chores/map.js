function (doc) {
  if (doc._id.substr(0, 6)  === "chore:") {
    emit(doc._id);
  }
};