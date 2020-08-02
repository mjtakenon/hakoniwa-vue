export default class Island {
  private _value: number | null;
  private _text: string;

  get value(): number | null {
    return this._value;
  }

  get text(): string {
    return this._text;
  }

  constructor(value: number | null, text: string) {
    this._value = value;
    this._text = text;
  }
}
