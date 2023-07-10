const users = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function processForLoop() {
  for (const user of users) {
    fetch(`https://reqres.in/api/users/${user}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Network response was not ok.");
        }
      })
      .then((data) => {
        // Handle the fetched data
        console.log(data);
      });
  }
}

async function processForLoopInSequence() {
  for (const user of users) {
    const response = await fetch(`https://reqres.in/api/users/${user}`);
    const jsonData = await response.json();
    console.log(jsonData);
  }
}

//processForLoop();
processForLoopInSequence()
