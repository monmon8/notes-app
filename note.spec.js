function testNote() {
  var note = new Note('My favorite language is JavaScript')
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
