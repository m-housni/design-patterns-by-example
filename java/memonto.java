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
