import { SubmitHandler } from 'react-hook-form';

import { TGameCodeEnterForm } from './form.model';

export type TGameCodeEnterProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: SubmitHandler<TGameCodeEnterForm>;
};
