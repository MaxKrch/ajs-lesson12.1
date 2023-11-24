import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];


    add(item: Buyable): void {

    	const id: number = item.id;
    	const index: number | false = this.requestIndexItem(id);

    	if(index) {
    		if(this._items[index].multiple) {
    			this._items[index].count += 1;
    		}
    		return;
    	}

      this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

  	get getAmount(): number {
    	let sum: number = 0;

    	for(let item of this._items) {
    		sum += (item.price * item.count); 
    	}

    	return sum;
    }

    getAmountWithDiscount(discount: number): number {
    	const sum: number = this.getAmount;
    	let sumWithDisc: number = (sum / 100) * (100 - discount); 
    	sumWithDisc = Number(sumWithDisc.toFixed(2));
 			return sumWithDisc;
    }

		requestIndexItem(id: number): number | false {	
			const index: number = this._items.findIndex((item) => item.id === id); 

			if(index === -1) {
				return false;
			} else {
				return index;
			}
		}

		incCount(id: number): void {
			const index = this.requestIndexItem(id);
			
			if(!index) {
				return;
			}

			if(this._items[index].multiple) {
				this._items[index].count += 1;
			}

		}

		decCount(id: number): void {
			const index = this.requestIndexItem(id);

			if(!index) {
				return;
			}

			if(this._items[index].count === 1) {
				this.removeItem(id);
			} else {
				this._items[index].count -= 1;
			}


		}
    removeItem(id: number): void {
    	const index = this.requestIndexItem(id);

    	if(index) {
	    	this._items.splice(index, 1);
	    }
    }
}

