import { AppEvents } from '../types';


//Generic setup for Actions
const makeAction = <T extends AppEvents, P>(type: T) => (payload: P) => {
  return {
    type,
    payload
  };
};

//All my actions
export const SetCreateNewIsOpen = makeAction<
  AppEvents.SET_CREATE_NEW_IS_OPEN,
  boolean
>(AppEvents.SET_CREATE_NEW_IS_OPEN);

export const SetActiveItem = makeAction<AppEvents.SET_ACTIVE_ITEM, string>(
  AppEvents.SET_ACTIVE_ITEM
);


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
  SetCreateNewIsOpen,
  SetActiveItem
};


export type IAction = IActionUnion<typeof actions>