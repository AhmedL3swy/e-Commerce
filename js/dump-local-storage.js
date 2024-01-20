const jsonFileURL ='assets/json/user-list.json';

// Fetch the JSON file
fetch(jsonFileURL)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(jsonData => {
    // Convert the JSON object to a string
    const jsonString = JSON.stringify(jsonData);

    // Store the JSON string in local storage under a specific key
    localStorage.setItem('users', jsonString);

    console.log('JSON data has been loaded and stored in local storage.');
  })
  .catch(error => {
    console.error('There was a problem fetching the JSON file:', error.message);
  });
