
(function (exports) {
  function testNote() {

    var note = new Note();

    if (note.text !== 'My favorite language is JavaScript') {
      throw new Error('u hate JS');
    }
  };
  testNote();
})(this);

