import Cart from '../service/Cart';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Movie from '../domain/Movie';
import SmartPhone from '../domain/Smartphone';



test('new card should be empty', () => {
  const cart = new Cart();
	cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
	cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
	cart.add(new Movie(1010, "Мстители", "The Avengers", 1099.50, 2012, "USA", "Avengers Asemble!", ["фанатстика", "бевик"], 137));
	cart.add(new SmartPhone(1020, "IPhone", "12 Max", 99000, 2012));
	cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
	cart.add(new SmartPhone(1020, "IPhone", "12 Max", 99000, 2012));
	
  expect(cart.items.length).toBe(4);
});



test('get amount', () => {
	const cart = new Cart();
	cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
	cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
	cart.add(new Movie(1010, "Мстители", "The Avengers", 1099.50, 2012, "USA", "Avengers Asemble!", ["фанатстика", "бевик"], 137));

	const received: number = cart.getAmount;
	const expected = 3999.50;

	expect(received).toBe(expected);
})



test('get amount with Discount', () => {
	const cart = new Cart();
	cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
	cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));

	const received: number = cart.getAmountWithDiscount(20);
	const expected = 2320;

	expect(received).toBe(expected);

})



test('incCount empty item', () => {
	const cart = new Cart();
	cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
	cart.incCount(1010);

	const received: number = cart.items[0].count;
	const expected = 1;

	expect(received).toBe(expected);
})



test('incCount nonMultiple item', () => {
	const cart = new Cart();
	cart.add(new Movie(1010, "Мстители", "The Avengers", 1099.50, 2012, "USA", "Avengers Asemble!", ["фанатстика", "бевик"], 137));
	
	cart.incCount(1010);

	const received = cart.items[0].count;
	const expected = 1;

	expect(received).toBe(expected);

})



test('correct incCount item', () => {
	const cart = new Cart();
	cart.add(new SmartPhone(1020, "IPhone", "12 Max", 99000, 2012));

	cart.incCount(1020);	

	const received = cart.items[0].count;
	const expected = 2;

	expect(received).toBe(expected);
})



test('decCount empty item', () => {
	const cart = new Cart();
	cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
	cart.decCount(1010);

	const received = cart.items[0].count;
	const expected = 1;

	expect(received).toBe(expected);
})



test('correct decCount item', () => {
	const cart = new Cart();
	cart.add(new SmartPhone(1020, "IPhone", "12 Max", 99000, 2012));
	cart.add(new SmartPhone(1020, "IPhone", "12 Max", 99000, 2012));

	const received = cart.items[0].count;
	const expected = 1;

	expect(received).toBe(expected);
})



test('decCount item with delete', () => {
	const cart = new Cart();
	cart.add(new Movie(1010, "Мстители", "The Avengers", 1099.50, 2012, "USA", "Avengers Asemble!", ["фанатстика", "бевик"], 137));
	
	cart.decCount(1010);

	const received = cart.requestIndexItem(1010);
	const expected = false;

	expect(received).toBe(expected);
})