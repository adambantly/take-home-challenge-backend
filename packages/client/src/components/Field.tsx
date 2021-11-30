import { Marker, Player } from '@mapistry/take-home-challenge-shared';
import classNames from 'classnames';
import { getComputerMarker } from '../utils/boardUtil';
import '../styles/Field.css';

interface FieldProps {
  token: Marker | null;
  onClick: () => void;
  position: number;
  whoIsFirst: Player;
}

export const Field = ({ token, onClick, position, whoIsFirst }: FieldProps) => {
  const computerMarker = getComputerMarker(whoIsFirst);
  return (
    <button
      className={classNames('Field', {
        'Field--filled': token,
        'Field--autoFilled': token === computerMarker,
      })}
      title={`Field ${position}`}
      type="button"
      disabled={!!token}
      onClick={onClick}
    >
      <span className="visually-hidden">
        {/* announce field position and token to screen reader users */}
        {`Field ${position}: ${token ? '' : 'empty'}`}
      </span>
      {token}
    </button>
  );
};
