export type TGameOverProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  winner?: string;
  onContinueClick: () => void;
};
