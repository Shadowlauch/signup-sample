export type ActionType =
  | { type: 'CHANGE_VALUE', id: string, value: string }
  | { type: 'VALIDATE' }
  | { type: 'RESET' };

