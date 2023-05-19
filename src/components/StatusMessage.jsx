const StatusMessage = ({ winner, gamingBoard }) => {
  const { squares, isXNext } = gamingBoard;
  const noMovesleft = squares.every(squaresValue => squaresValue !== null);
  const nextPlayer = isXNext ? 'X' : 'O';

  const renderStatusMessage = () => {
    if (winner) {
      return (
        <>
          winner is{' '}
          <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
            {winner}
          </span>
        </>
      );
    }
    if (!winner && noMovesleft) {
      return (
        <>
          <span className="text-orange">O</span> and{' '}
          <span className="text-green">X</span> tied
        </>
      );
    }
    if (!winner && !noMovesleft) {
      return (
        <>
          {' '}
          Next player is{' '}
          <span className={isXNext ? 'text-green' : 'text-orange'}>
            {nextPlayer}
          </span>
        </>
      );
    }
    return null;
  };

  return <h2 className="status-message">{renderStatusMessage()}</h2>;
};
export default StatusMessage;
