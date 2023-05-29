/** 
GitHub Copilot
Sure! Here's an example implementation of the Memento pattern in Java:

In this example, we have an Originator class (TextEditor) that has a text field and methods to set and get the text, as well as to save and restore the state of the text using a Memento object. The Memento class has a text field and a method to get the text. The Caretaker class (TextEditorHistory) maintains a stack of Memento objects and has methods to save the state of the TextEditor and to undo the last state change.

In the example usage, we create a TextEditor and a TextEditorHistory, set the text to "Hello, world!", save the state, set the text to "Goodbye, world!", save the state again, print the current text (which should be "Goodbye, world!"), undo the last state change, and print the text again (which should be "Hello, world!").
*/

// Originator class
class TextEditor {
    private String text;

    public void setText(String text) {
        this.text = text;
    }

    public String getText() {
        return text;
    }

    public Memento save() {
        return new Memento(text);
    }

    public void restore(Memento memento) {
        text = memento.getText();
    }
}

// Memento class
class Memento {
    private String text;

    public Memento(String text) {
        this.text = text;
    }

    public String getText() {
        return text;
    }
}

// Caretaker class
class TextEditorHistory {
    private Stack<Memento> history = new Stack<>();

    public void save(TextEditor editor) {
        history.push(editor.save());
    }

    public void undo(TextEditor editor) {
        if (!history.isEmpty()) {
            editor.restore(history.pop());
        }
    }
}

// Example usage
public class Main {
    public static void main(String[] args) {
        TextEditor editor = new TextEditor();
        TextEditorHistory history = new TextEditorHistory();

        editor.setText("Hello, world!");
        history.save(editor);

        editor.setText("Goodbye, world!");
        history.save(editor);

        System.out.println(editor.getText()); // prints "Goodbye, world!"

        history.undo(editor);

        System.out.println(editor.getText()); // prints "Hello, world!"
    }
}
