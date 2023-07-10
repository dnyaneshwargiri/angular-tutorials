
const promise1 = Promise.resolve(1);
const promise2 = Promise.reject("error");
const promise3 = new Promise((resolve) =>
 setTimeout(resolve, 1000, 3));
Promise.allSettled([promise1, promise2, promise3]).
then((results) => {
  console.log(results);
});
//output
[
  { status: "fulfilled", value: 1 },
  { status: "rejected", reason: "error" },
  { status: "fulfilled", value: 3 },
];
