/**
In this example, we have an Originator class (TextEditor) that has a text field and methods to set and get the text, 
as well as to save and restore the state of the text using a Memento object. The Memento class has a text field and a method to get the text. 
The Caretaker class (TextEditorHistory) maintains an array of Memento objects and has methods to save the state of the TextEditor and to undo the last state change.

In the example usage, we create a TextEditor and a TextEditorHistory, set the text to "Hello, world!", save the state, set the text to "Goodbye, world!", 
save the state again, print the current text (which should be "Goodbye, world!"), undo the last state change, and print the text again (which should be "Hello, world!").
*/

// Originator class
class TextEditor {
  constructor() {
    this.text = '';
  }

  setText(text) {
    this.text = text;
  }

  getText() {
    return this.text;
  }

  save() {
    return new Memento(this.text);
  }

  restore(memento) {
    this.text = memento.getText();
  }
}

// Memento class
class Memento {
  constructor(text) {
    this.text = text;
  }

  getText() {
    return this.text;
  }
}

// Caretaker class
class TextEditorHistory {
  constructor() {
    this.history = [];
  }

  save(editor) {
    this.history.push(editor.save());
  }

  undo(editor) {
    if (this.history.length > 0) {
      editor.restore(this.history.pop());
    }
  }
}

// Example usage
const editor = new TextEditor();
const history = new TextEditorHistory();

editor.setText('Hello, world!');
history.save(editor);

editor.setText('Goodbye, world!');
history.save(editor);

console.log(editor.getText()); // prints "Goodbye, world!"

history.undo(editor);

console.log(editor.getText()); // prints "Hello, world!"
