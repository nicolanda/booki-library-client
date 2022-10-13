
export const uniquePositions  = (oldArrOfObj, maxCount) => {
  const arrOfObjs = oldArrOfObj.map(o => ({...o}))
  const length = arrOfObjs.length
  if(arrOfObjs.length < maxCount) return "invalid maxCount"

  const newArr = []
  while(newArr.length < maxCount) {
    let uniqueObj = arrOfObjs[Math.floor(Math.random() * length)]
    const isUnique = newArr.some(n => n === uniqueObj)

    if(!isUnique) newArr.push(uniqueObj)
  }

  return newArr
}