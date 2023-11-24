import Buyable from './Buyable';

export default class Movie implements Buyable {
	constructor (
		readonly id: number,
		readonly name: string,
		readonly originName: string,
		readonly price: number,
		readonly dateRelease: number,
		readonly country: string,
		readonly slogan: string,
		readonly genre: string[],
		readonly duration: number,   
		readonly multiple: boolean = false,
		public count: number = 1,
	) { }
}