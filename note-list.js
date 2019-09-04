(function (exports) {
  function NoteList() {
    this.noteArray = [];
  }


  NoteList.prototype.create = function (text) {
    this.noteArray.push(new Note(text))
  }
  NoteList.prototype.list = function () {
    return this.noteArray
  }
  exports.NoteList = NoteList;
})(this);


