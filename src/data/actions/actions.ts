import App from '../../App';
import { AppEvents } from '../events';

//Generic setup for Actions
const makeAction = <T extends AppEvents, P>(type: T) => (payload: P) => {
  return {
    type,
    payload
  };
};

//All my actions
export const SetFiller = makeAction<AppEvents.SET_FILLER, string>(AppEvents.SET_FILLER);
//End of Actions

//Helper setup to aid in the reducers file

interface IStringMap<T> {
  [key: string]: T;
}
type IAnyFunction = (...args: any[]) => any;
type IActionUnion<A extends IStringMap<IAnyFunction>> = ReturnType<A[keyof A]>;

//end of Helper setup

//Any actions you create need to add it to here so reducers know what is up
const actions = {
  SetFiller
};

export type IAction = IActionUnion<typeof actions>;
