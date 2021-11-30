import { Difficulty } from '@mapistry/take-home-challenge-shared';
import { RadioGroup } from './RadioGroup';

interface DifficultyPickerProps {
  difficulty: Difficulty;
  setDifficulty: (difficulty: Difficulty) => void;
}

export const DifficultyPicker = ({
  difficulty,
  setDifficulty,
}: DifficultyPickerProps) => (
  <RadioGroup
    legendText="How hard should the next game be?"
    name="difficultyPicker"
    checkedValue={difficulty}
    onChange={setDifficulty}
    options={[
      {
        label: 'Easy',
        value: Difficulty.easy,
      },
      {
        label: 'Hard',
        value: Difficulty.hard,
      },
    ]}
  />
);
