import "./styles.css";

var values = [20, 5, 10, 40, 15, 25];
var costs = [1, 2, 3, 8, 7, 4];
var budget = 10;

var knapsack = (values, costs, budget, n) => {
  if (budget <= 0) {
    return -5;
  }

  if (n <= 0) {
    return 0;
  }

  // we bought the last item
  let itemIncludedResult =
    values[n] + knapsack(values, costs, budget - costs[n], n - 1);

  // we didnt buy the last item
  let itemNotIncludedResult = knapsack(values, costs, budget, n - 1);
  return Math.max(itemIncludedResult, itemNotIncludedResult);
};

let result = knapsack(values, costs, budget, 5);

document.getElementById("app").innerHTML = result;
