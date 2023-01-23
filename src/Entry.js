export default function Entry(props) {
  return (
    <div>
      <dl className="dictionary">
        <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              {props.emoji}
            </span>
            <span>{props.title}</span>
          </dt>
          <dd>{props.description}</dd>
        </div>
      </dl>
    </div>
  );
}
