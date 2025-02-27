const History = ({ history, moveTo, currentMove }) => {
  return (
    <div className="history-wrapper">
      <ul className="history">
        {history.map((_, index) => (
          <li key={index}>
            <button
              type="button"
              className={`btn-move ${currentMove === index ? 'active' : ''}`}
              style={{ foontWeight: currentMove === index ? 'bold' : 'normal' }}
              onClick={() => moveTo(index)}
            >
              {index === 0 ? 'Got to game start' : `Go to move #${index}`}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default History;
