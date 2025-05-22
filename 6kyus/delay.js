// Write a JavaScript function fetchToDo that uses XMLHttpRequest to fetch data from the given URL
//  (https://jsonplaceholder.typicode.com/todos/1). The function should handle both successful 
//     responses and errors (such as network issues or invalid URLs). Upon receiving a successful response, 
//     it should log the fetched data to the console.
//      If there's an error, it should catch the error and log an appropriate message.
function fetchToDo() {
  const url = "https://jsonplaceholder.typicode.com/todos/1";
  const xhr = new XMLHttpRequest();

  xhr.open("GET", url, true);

  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      try {
        const data = JSON.parse(xhr.responseText);
        console.log("Fetched data:", data);
      } catch (error) {
        console.error("Error parsing response:", error);
      }
    } else {
      console.error(`Request failed with status ${xhr.status}: ${xhr.statusText}`);
    }
  };

  xhr.onerror = function () {
    console.error("Network error occurred while trying to fetch data.");
  };

  xhr.send();
}

