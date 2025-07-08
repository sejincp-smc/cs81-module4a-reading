// Weekly reading log
// It's data entry of array for daily reading activities. The keys are day, book and minutes.
const readingLog = [
  { day: "Monday", book: "Dune", minutes: 30 },
  { day: "Tuesday", book: "1984", minutes: 20 },
  { day: "Wednesday", book: "Dune", minutes: 25 },
  { day: "Thursday", book: "The Hobbit", minutes: 40 },
  { day: "Friday", book: "1984", minutes: 15 }
];

// Adds a new reading entry to the log
// It's a function for adding a new entry, the new data will be added at the end of array.
function addReadBook(day, book, minutes) {
  const newEntry = { day, book, minutes };
  readingLog.push(newEntry); // The push() method of Array.
}

// Returns total minutes spent reading all week
// It's a function for calculating the total minutes of reading.
function totalReadingMinutes(log) {
  let total = 0;
  for (let entry of log) {
    total += entry.minutes; // The new entry of minutes will be added in total.
  }
  return total;
}

// Returns the book read most frequently
// Its's a function for getting the recent book, there'll be the latest entry of the array.
function mostReadBook(log) {
  const bookCounts = {};
  for (let entry of log) {
    if (!bookCounts[entry.book]) {
      bookCounts[entry.book] = 1; // Initialize count from 1.
    } else {
      bookCounts[entry.book]++; // Adding more books.
    }
  }

  let maxBook = null;
  let maxCount = 0;
  for (let book in bookCounts) {
    if (bookCounts[book] > maxCount) { // If the bookcounts are more than masCount,
      maxBook = book; // update maxBook
      maxCount = bookCounts[book]; // update maxCount
    }
  }
  return maxBook;
}

// Prints a summary of minutes read per day
// It's a function that returns the daily reading log summary.
function printDailySummary(log) {
  for (let entry of log) {
    console.log(`${entry.day}: ${entry.minutes} mins reading "${entry.book}"`);
  }
}

// Example usage
addReadBook("Saturday", "Dune", 50); // add a new entry
printDailySummary(readingLog); // print a summary
console.log("Total minutes read:", totalReadingMinutes(readingLog)); // returns the total reading time
console.log("Most read book:", mostReadBook(readingLog)); // returns the book which was read the most

// Suggest an Improvement
// The function addReadBook() could have a data valiation as any positive integers, and not negative or stings.

// Test Case
addReadBook("Sunday", "One Golden Summer", 60);
console.log("Most read book:", mostReadBook(readingLog));

