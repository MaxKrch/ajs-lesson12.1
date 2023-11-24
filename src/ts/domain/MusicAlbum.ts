import Buyable from './Buyable';

export default class MusicAlbum implements Buyable {
	constructor(
		readonly id: number,
		readonly name: string,
		readonly author: string,
		readonly price: number,
		readonly multiple: boolean = false,
		public count: number = 1,
	) { }
}