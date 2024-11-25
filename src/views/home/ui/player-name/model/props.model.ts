import { SubmitHandler } from 'react-hook-form';

import { TPlayerNameForm } from './form.model';

export type TPlayerNameProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: SubmitHandler<TPlayerNameForm>;
};
