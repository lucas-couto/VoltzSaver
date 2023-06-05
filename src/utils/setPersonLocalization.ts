import { informations } from '../configs'
import { IComponentPerson } from '../interface'

let lastIndex: number | null = null

export function setPersonLocalization(componentsPerson: IComponentPerson[]) {

  let { amountComponents } = informations
  let randomIndex = Math.floor(Math.random() * amountComponents)

  if (lastIndex !== null)
    while (randomIndex === lastIndex)
      randomIndex = Math.floor(Math.random() * amountComponents)

  lastIndex = randomIndex

  // PEGA ALGUM COMODO ALEATORIO

  let emphasisComponent = componentsPerson[randomIndex]
  const { useStateFunction, hasLight } = emphasisComponent
  if (hasLight) return

  // ELE TIRA TODAS AS PESSOAS DOS OUTROS COMODOS
  for (let i = 0; i < amountComponents; i++) {
    const component = componentsPerson[i]
    const { useStateFunction } = component
    if (randomIndex !== i) useStateFunction(false)
  }

  // COLOCA A PESSOA NO COMODO ESCOLHIDO
  useStateFunction(true)
}