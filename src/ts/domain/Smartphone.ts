import Buyable from './Buyable';

export default class SmartPhone implements Buyable {
	constructor (
		readonly id: number,
		readonly name: string,
		readonly model: string,
		readonly price: number,
		readonly dateRelease: number,
		readonly multiple: boolean = true,
		public count: number = 1,
	) { }
}
