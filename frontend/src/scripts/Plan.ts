export default class Plan {
  private _position: { x: number; y: number } | null;
  private _text: string;

  get position(): { x: number; y: number } | null {
    return this._position;
  }

  get text(): string {
    return this._text;
  }

  constructor(position: { x: number; y: number } | null, text: string) {
    this._position = position;
    this._text = text;
  }
}
