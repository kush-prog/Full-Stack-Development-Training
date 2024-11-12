// Function to fetch and display user data
async function fetchUser() {
    try {
        let url = `https://api.github.com/users/kush-prog}`;
        let response = await fetch(url);
        if (response.ok) {
            let result = await response.json();
            console.log(result);
            displayUser(result); // Call function to display user data
        } else {
            displayError("User not found.");
        }
    } catch (error) {
        console.error("Error fetching user data:", error);
        displayError("Failed to fetch user data.");
    }
}

// Function to display user data in the DOM
function displayUser(data) {
    const profileDiv = document.getElementById('profile');
    
    // Create HTML content for the profile
    const profileHTML = `
        <h1>GitHub Profile: ${data.name || 'Not available'}</h1>
        <img src="${data.avatar_url}" alt="${data.login}'s profile picture" />
        <p><strong>Username:</strong> ${data.login}</p>
        <p><strong>Bio:</strong> ${data.bio || 'No bio available'}</p>
        <p><strong>Public Repos:</strong> ${data.public_repos}</p>
    `;
    
    // Insert the profile HTML into the profile div
    profileDiv.innerHTML = profileHTML;
}

// Function to display error message
function displayError(message) {
    const profileDiv = document.getElementById('profile');
    profileDiv.innerHTML = `<p style="color: red;">${message}</p>`;
}

// Event listener for search button click
document.getElementById('searchButton').addEventListener('click', () => {
    const username = document.getElementById('usernameInput').value;
    if (username) {
        fetchUser(username);
    } else {
        displayError("Please enter a username.");
    }
});
