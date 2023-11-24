import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';
import Movie from './domain/Movie';
import SmartPhone from './domain/Smartphone';


const cart = new Cart();
console.log(cart.items);

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
cart.add(new Movie(1010, "Мстители", "The Avengers", 1099.50, 2012, "USA", "Avengers Asemble!", ["фанатстика", "бевик"], 137));
cart.add(new SmartPhone(1020, "IPhone", "12 Max", 99000, 2012));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
cart.add(new SmartPhone(1020, "IPhone", "12 Max", 99000, 2012));


console.log(cart.items);
console.log(cart.getAmount);
console.log(cart.getAmountWithDiscount(10));

cart.removeItem(1010);
console.log(cart.items);

cart.decCount(1020);
cart.decCount(1008);

console.log(cart.items);

cart.incCount(1020);
console.log(cart.items[0]);

