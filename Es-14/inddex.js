const surprisingFact = "The bumblebee bat is the world's smallest mammal";

console.log("Bumblebee:", surprisingFact);
console.log(`Bumblebee: ${surprisingFact}`);
console.log("Bumblebee: %s", surprisingFact);

// Challenge 2:
//
// Use 2 different techniques to output a formatted version
// of this complete object.

const familyTree = [
  {
    name: "Person 1",
    children: [
      {
        name: "Person 2",
        children: [
          {
            name: "Person 3",
            children: [
              {
                name: "Person 4",
              },
            ],
          },
        ],
      },
    ],
  },
];

console.dir(familyTree, { depth: null });
console.log(JSON.stringify(familyTree, null, 2));

// Challenge 3:
//
// Output a count value every time the importantTask function is called.
// Reset the count value after 4 function calls.

function importantTask() {
  console.count("n");
}

importantTask();
importantTask();
importantTask();
importantTask();
console.countReset("n");
importantTask();
importantTask();
