import Entry from "./Entry";
import emojipedia from "./emojipedia";

function createEntry(entry) {
  return (
    <Entry
      key={entry.id}
      emoji={entry.emoji}
      title={entry.name}
      description={entry.meaning}
    />
  );
}

export default function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <div>
        <dl className="dictionary">{emojipedia.map(createEntry)} </dl>
      </div>
    </div>
  );
}

// Centrér items i mobil version
