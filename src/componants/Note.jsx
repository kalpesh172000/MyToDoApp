import notes from "../notes";
import Entry from "./Entry";

function Note() {
    return notes.map((notes) => <Entry key={notes.id} title={notes.title} content={notes.content} />);
}

export default Note;
