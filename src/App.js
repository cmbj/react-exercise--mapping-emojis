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

      {emojipedia.map(createEntry)}
    </div>
  );
}

// Lav Entry component for hvert "opslag"
// Emoji, titel, beskrivelse
// Hent data fra emojipedia fil
