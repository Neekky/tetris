/**
 * 返回min、max之间的随机数
 * @param min 
 * @param max 
 */
export function getRandom(min:number,max:number){
  const dec = max - min;
  return Math.floor(Math.random()*dec + min);
}