function printLine() {
    console.log("--------------------------------------------------------------------------------");
}

let salesData = [
    {product: 'Laptop', price: 1200},
    {product: 'Smartphone', price: 800},
    {product: 'Headphones', price: 150},
    {product: 'Keyboard', price: 80},
]

let totalSales = function (input) {
    let sum = 0;
    for(let i = 0; i < input.length; i++){
        sum += input[i].price;
    }
    return sum;
}
console.log(totalSales(salesData));
totalSales = salesData.reduce( (accumulator, currentValue)=>{return accumulator + currentValue.price}, 0 )
// currentValue stores {product: 'Laptop', price: 1200}
console.log(totalSales);

printLine();

// pipe -> methods one after the another -> ex: 'vikas'.toUpperCase().slice(0,3)

//alag nikalo low stock (less than 50) valo ko
let inventory = [
    {name: 'widget A', stock: 30},
    {name: 'widget B', stock: 120},
    {name: 'widget C', stock: 45},
    {name: 'widget D', stock: 70},
]

let lowStock = inventory.filter((value)=>{
    return value.stock < 50
})
console.log(lowStock);

printLine();

//using reduce alone find most active user
let userActivity = [
    {user: 'Vikas', activityCount: 45},
    {user: 'Rakshita', activityCount: 14},
    {user: 'Harsh', activityCount: 33},
]

let mostActiveUser = userActivity.reduce((maxUser, user)=>
    user.activityCount > maxUser.activityCount ? user : maxUser
)
console.log(mostActiveUser);

printLine();

// build a report that shows total amount spent for a category
// {food: x, utilities: y}
let expenses = [
    {description: "Groceries", amount: 50, category: "Food"},
    {description: "Electricity Bill", amount: 100, category: "Utilities"},
    {description: "Dinner", amount: 30, category: "Food"},
    {description: "Internet Bill", amount: 50, category: "Utilities"},
]

let expensesReport = expenses.reduce((report, item)=>{
    report[item.category] = (report[item.category] || 0) + item.amount
    return report
}, {})
console.log(expensesReport);

// console.log() returns undefined by default like any other function after logging the argument on the console.
/*
.reduce( (accumulator, currentValue) => {}, initialValue )
if (!initialValue) {
    accumulator has 1st element of array ([0]) and currentValue has 2nd element ([1]), so iteration starts from 2nd element.
} else {
    accumulator = initialValue // for the first iteration
    currentValue = array[0]
}
at each iteration the return value becomes the value of accumulator and at last iteration, the return value becomes the return value of whole reduce method
*/

printLine();

// from to-do list, get me tasks that are incomplete and sort them

let tasks = [
    {description: "Write report", completed: false, priority: 2},
    {description: "Send Email", completed: true, priority: 3},
    {description: "Prepare Presentation", completed: false, priority: 1},
];

let incompleteSortedTask = tasks
    .filter((task) => !task.completed)
    .sort((a,b) => a.priority - b.priority)

console.log(incompleteSortedTask);

printLine();

// find average movie rating

let movieRatings = [
    {title: "Movie A", ratings: [4,5,3]},
    {title: "Movie B", ratings: [5,5,4]},
    {title: "Movie C", ratings: [3,4,2]},
]

// let averageMovieRating = []

// movieRatings.forEach((movie)=>{
//     let sum = movie.ratings.reduce((sumRating, rating)=>{
//         return sumRating + rating
//     },0)
//     let average = sum/movie.ratings.length
//     average = Number(average.toFixed(1))
//     averageMovieRating.push({title: movie.title, averageRating: average})
// })

let averageMovieRating = movieRatings.map((movie)=>{
    let sum = movie.ratings.reduce((sum, rating)=>sum+rating,0)
    let average = sum / movie.ratings.length
    // movie.ratings = average.toFixed(2)
    // return movie
    // in above the direct original object's address is being accessed and changing its value, but with below line a new object with new address is created for new mapped array.
    return {title: movie.title, averageRating: Number(average.toFixed(2))}
})

console.log(averageMovieRating);