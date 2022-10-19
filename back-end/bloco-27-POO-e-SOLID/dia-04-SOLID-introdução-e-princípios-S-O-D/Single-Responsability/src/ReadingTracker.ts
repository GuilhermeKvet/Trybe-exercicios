//Antes
type BookBefore = {
  book: string;
  author: string;
  genre: string;
}

class ReadingTrackerBefore {
  private readingGoal: number;
  private booksRead: number;
  private wishlist: BookBefore[];
  constructor(readingGoal: number) {
    this.readingGoal = readingGoal;
    this.booksRead = 0;
    this.wishlist = [];
  }

  trackReadings(readsCount: number): void {
    this.booksRead += readsCount;
    if (this.booksRead >= this.readingGoal) {
      this.progressNotification(
        'Congratulations! You\'ve reached your reading goal!',
      );
      return;
    }
    this.progressNotification(
      'There are still some books to go!',
    );
  }

  addToWishlist(book: BookBefore): void {
    this.wishlist.push(book);
  }

  showWishlist(): void {
    console.log(this.wishlist);
  }

  progressNotification(message: string): void {
    console.log(message);
  }
}

// Depois
type BookAfter = {
  book: string;
  author: string;
  genre: string;
}

class ReadingTrackerAfter {
  private readingGoal: number;
  private booksRead: number;

  constructor(readingGoal: number) {
    this.readingGoal = readingGoal;
    this.booksRead = 0;
  }

  trackReadings(readsCount: number): void {
    this.booksRead += readsCount;
    if (this.booksRead >= this.readingGoal) {
      this.progressNotification(
        'Congratulations! You\'ve reached your reading goal!',
      );
      return;
    }
    this.progressNotification(
      'There are still some books to go!',
    );
  }

  progressNotification(message: string): void {
    console.log(message);
  }
}

class BookWishList {
  private wishlist: BookAfter[];

  constructor(book: BookAfter) {
    this.wishlist = [];
    this.wishlist.push(book)
  };

  addToWishlist(book: BookAfter): void {
    this.wishlist.push(book);
  }

  showWishlist(): void {
    console.log(this.wishlist);
  }
}

const readTracker = new ReadingTrackerAfter(20);
const wishList = new BookWishList({
  book: 'The Road',
  author: 'Cormac McCarthy',
  genre: 'Dystopia',
});
wishList.addToWishlist({
  book: 'Misery',
  author: 'Stephen King',
  genre: 'Thriller',
});
wishList.showWishlist();
readTracker.trackReadings(12);
readTracker.trackReadings(9);