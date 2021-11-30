import { Player } from '@mapistry/take-home-challenge-shared';
import { RadioGroup } from './RadioGroup';

interface StartPlayerPickerProps {
  setWhoIsFirst: (player: Player) => void;
  whoIsFirst: Player;
}

export const StartPlayerPicker = ({
  setWhoIsFirst,
  whoIsFirst,
}: StartPlayerPickerProps) => (
  <RadioGroup
    legendText="Who starts new games?"
    name="startPlayerPicker"
    checkedValue={whoIsFirst}
    onChange={setWhoIsFirst}
    options={[
      {
        label: 'Me',
        value: Player.human,
      },
      {
        label: 'The computer',
        value: Player.computer,
      },
    ]}
  />
);
