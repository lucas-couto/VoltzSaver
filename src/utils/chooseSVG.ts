export function chooseSVG(width: number, heigth: number){
  let calc = width / heigth
  if(calc < 0.5) return "Large"
  if(calc >= 0.5) return "Medium"
  if(calc > 0.7) return "Small"
}