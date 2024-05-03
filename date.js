
function nowTime() {
    return new Date().getTime();
}

function calculateTimeDifference(startTime, endTime) {
    return endTime - startTime;
}

// date format
function dataFormat(time) {
    let date = new Date(time);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
}

function checkAppVersion(ver, compareVer) {
    const vers = ver.split('.')
    const compareVers = compareVer.split('.')
    const maxL = Math.max(vers.length, compareVers.length)
    if (vers.length < maxL) {
      const l = maxL - vers.length
      for (let i = 0; i < l; i++) { vers.push('0') }
    }
    if (compareVers.length < maxL) {
      const l = maxL - compareVers.length
      for (let i = 0; i < l; i++) { compareVers.push('0') }
    }
    let res = 0
    for (let i = 0; i < maxL; i++) {
      const aItem = Number(vers[i])
      const bItem = Number(compareVers[i])
      if (aItem < bItem) {
        res = 1
        break
      } else if (aItem > bItem) {
        res = -1
        break
      } else if (i === maxL - 1 && aItem === bItem) {
        res = 0
      }
    }
    return res    
}

const flag = checkAppVersion('6.30.0', '6.;2.0')
console.log(flag)

const option = 'hippy_unlike'
const optionList = ['hippy_like', 'hippy_unlike']
console.log('includes: ', option.includes(optionList))
console.log('includes: ', optionList.includes(option))