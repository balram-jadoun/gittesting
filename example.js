// First commit

function simulateApiCall(shouldSucceed) {
  // A Promise takes a function with two arguments: resolve and reject
  return new Promise((resolve, reject) => {
    console.log("Starting async operation...");

    // Simulating a delay (e.g., fetching data from a server)
    setTimeout(() => {
      if (shouldSucceed) {
        // If successful, we call resolve() with the result
        resolve({ status: 200, message: "Data fetched successfully!" });
      } else {
        // If it fails, we call reject() with an error reason
        reject(new Error("Failed to fetch data from the server."));
      }
    }, 5000); // 2 second delay
  });
}

// --- Using the Promise ---

console.log("--- Test 1: Successful Promise ---");
simulateApiCall(true)
  .then((result) => {
    // .then() runs when the Promise is resolved
    console.log("Success:", result.message);
  })
  .catch((error) => {
    // .catch() runs when the Promise is rejected
    console.error("Error:", error.message);
  })
  .finally(() => {
    // .finally() runs regardless of success or failure
    console.log("Operation completed.\n");
  });

// --- Test 2: Failing Promise ---
setTimeout(() => {
  console.log("--- Test 2: Rejected Promise ---");
  simulateApiCall(false)
    .then((result) => {
      console.log("Success:", result.message);
    })
    .catch((error) => {
      console.error("Error:", error.message);
    })
    .finally(() => {
      console.log("Operation completed.");
    });
}, 3000); // Wait for the first test to finish
