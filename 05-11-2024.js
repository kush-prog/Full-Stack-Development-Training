

// function getData() {
//     fetch('https://api.github.com/users')

//         .then((response) => response.json())
//         .then((data) => {
    
//             const parent = document.getElementById("parent");
//             parent.innerHTML = data.login;
    
//         })
    
//         .catch((error) => {
    
//             console.error("Error fetching data:", error);
    
//         });
// }


function getData() {
    const url = `https://api.github.com/users`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const userList = document.getElementById("user-list");

            // Clear any previous data
            userList.innerHTML = '';

            data.forEach(user => {
                // Create a card for each user
                const userCard = document.createElement("div");
                userCard.className = "user-card";

                const userImage = document.createElement("img");
                userImage.src = user.avatar_url;
                userImage.alt = `${user.login}'s profile picture`;

                const userName = document.createElement("h3");
                userName.textContent = user.login;

                // Append image and username to the user card
                userCard.appendChild(userImage);
                userCard.appendChild(userName);

                // Append user card to the user list
                userList.appendChild(userCard);
            });
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
            alert("An error occurred while fetching data.");
        });
}