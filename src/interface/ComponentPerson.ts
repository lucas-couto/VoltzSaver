import { Dispatch, SetStateAction } from "react";

export interface IComponentPerson {
  value: boolean, 
  useStateFunction: Dispatch<SetStateAction<boolean>>
}