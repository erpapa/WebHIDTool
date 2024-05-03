
class Person {
  constructor(name) {
    this.name = name;
  }
  sayName() {
    console.log(this.name);
  }
}

class Teacher extends Person {
  constructor(name, subject) {
    super(name);
    this.subject = subject;
  }
  saySubject() {
    console.log(this.subject);
  }
}

class Student extends Person {
  constructor(name, grade) {
    super(name);
    this.grade = grade;
  }
  sayGrade() {
    console.log(this.grade);
  }
}

/**
 * @description 生成64位的随机字符串
 * @example 使用场景
 * 1、发布接口增加uuid参数，用于防止重复提交
 */
const getUUID = () => {
  function tid() {
    let myDate = new Date()
    let tim = myDate.getDay() + myDate.getHours() + myDate.getMinutes() + myDate.getMinutes() + myDate.getMilliseconds()
    let ran = Math.round(Math.random() * 10000)
    let uuid = tim + ran
    if (uuid >= 10000) {
      console.log(uuid);
    }
    return uuid
  }

  function rid() {
    const hex = Math.floor((1 + Math.random()) * 0x10000).toString(16)
    const rid = hex.substring(1)
    return rid;
  }

  return tid() + rid() + rid() + rid() + rid() + rid() + rid() + rid() + rid() + rid() + rid() + rid() + rid() + rid() + rid() + rid()
}

console.log(getUUID());

const data = { show: 1 }
const config = { show: 0, ...data }
console.log(config);

function generateUUID() {
  const h = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
  const k = ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', '-', 'x', 'x', 'x', 'x', '-', '4', 'x',
    'x', 'x', '-', 'y', 'x', 'x', 'x', '-', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x']

  let u = ''
  let rb = Math.random() * 0xffffffff | 0
  let i = 0
  while (i++ < 36) {
    const c = k[i - 1]
    const r = rb & 0xf
    const v = c === 'x' ? r : (r & 0x3 | 0x8)
    u += (c === '-' || c === '4') ? c : h[v]
    rb = (i % 8 === 0) ? (Math.random() * 0xffffffff | 0) : (rb >> 4)
  }
  return u
}

const uuid = generateUUID()
const uuidStr = uuid.replace(/-/g, '')
console.log(uuidStr)

const len = 0
console.log(len)
console.log(!len)
console.log(!!len)

const version = ''
console.log(version)
console.log(!version)
console.log(!version?.length)
console.log(!!version?.length)
