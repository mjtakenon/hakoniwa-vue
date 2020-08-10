export default class Status {
  private _population: number
  private _money: number
  private _foods: number
  private _area: number

  get population(): number {
    return this._population
  }

  get money(): number {
    return this._money
  }

  get foods(): number {
    return this._foods
  }

  get area(): number {
    return this._area
  }

  public getAll() {
    return { 人口: this.population+"万人", 資金: this.money+"億円", 食料: this.foods+"万㌧", 面積: this.area+"万坪" }
  }

  constructor(population: number, money: number, foods: number, area: number) {
    this._population = population
    this._money = money
    this._foods = foods
    this._area = area
  }
}
