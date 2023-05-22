import { informations } from '../configs'
import { IComponentPerson } from '../interface'

export function setPersonLocalization(componentsPerson: IComponentPerson[]) {

  let { amountComponents } = informations
  let indexComponents = amountComponents

  let randomComponent = Math.floor(Math.random() * indexComponents)
  let emphasisComponent = componentsPerson[randomComponent].useStateFunction

  emphasisComponent(true)
}