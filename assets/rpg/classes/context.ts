interface IContext {
  dependency: number;
  content: string;
  question: string;
  answer: string;
  type: string;
}

// dependency index
// 0 null
// 1 figure
// 2 story

class Context implements IContext{
  _dependency!: number;
  _content!: string;
  _question!: string;
  _answer!: string;
  _type: string;

  constructor(dependency = 0, content = '', question = '', answer = '', type = 'text') {
    this.dependency = dependency
    this._content = content
    this._question = question
    this._answer = answer
    this._type = type
  }

  // DEPENDENCY
  get dependency(): number{
    return this._dependency
  }
 
  set dependency(value: number) {
    let num = Number(value)

    this._dependency = value
  }

  // CONTENT
  get content(): string {
    return this._content
  }

  set content(value: string) {
    let text = String(value)

    this._content = text
  }

  // QUESTION
  get question(): string {
    return this._question
  }

  set question(value: string) {
    let text = String(value)

    this._question = text
  }

  // ANSWER
  get answer(): string {
    return this._answer
  }

  set answer(value: string) {
    let text = String(value)

    this._answer = text
  }

  // TYPE
  get type(): string {
    return this._type
  }

  set type(value: string) {
    let text = String(value)

    this._type = text
  }
}

export default Context