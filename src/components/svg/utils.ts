export const colors = ['red', 'green', 'blue', 'yellow', 'brown', 'violet', 'white']
export const ignoreTags = ['svg', 'text']
export const whiteRegex = /(#fff(f+)?)|(rgba?\(255\S?,255\S?,255\S?(\S?,1)?\))$/i
export const ignoreColorRegex = /(#000(0+)?)|(rgba?\(0\S?,0\S?,0\S?(,\S?)?\))$/i

export const slideUp = (to: number) => ({opacity: [1, 0], marginTop: ['0', `-${to.toString()}px`]})
export const slideDown = (from: number) => ({opacity: [0, 1], marginTop: [`-${from.toString()}px`, '0px']})
export const fillColor = (from: string, to:string) => ({opacity: [0, 1], fill: [from, to],})
export const fadeOutIn = () => ({opacity:[0.5,1]})