function testNote() {
  var note = new Note('My favorite language is JavaScript');
  assert.isTrue(note.text === 'My favorite language is JavaScript')
};
testNote();

(function (exports) {
  function testNoteCreate() {
    var noteList = new NoteList();
    noteList.create("hello")
    noteList.create("bye")
    assert.isTrue((noteList.list()[0].text === "hello") && (noteList.list()[1].text === "bye"))
  };
  exports.testNoteCreate = testNoteCreate;
})(this);

testNoteCreate();

(function (exports) {

  function testNoteView() {
    var notesList = new NotesList();
    var testString = "<ul><li><div>text1</div></li><li><div>text2</div></li></ul>"
    notesList.create("text1");
    notesList.create("text2");
    notesView = new NotesListView(notesList);
    assert.isTrue(notesView.view() === testString);

  }


  function testNoteView() {
    var noteList = new NoteList();
    // notesList.create("text1");
    // notesList.create("text2");
    noteView = new NoteListView(noteList);
    console.log(noteView.view())
    console.log(noteList.length)
    assert.isTrue(noteView.view() === "<div>No Notes</div>");

  }

  exports.testNoteView = testNoteView;
})(this);


testNoteView();