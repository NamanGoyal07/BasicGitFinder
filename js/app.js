const inputValue = document.querySelector("#search");
const searchButton = document.querySelector(".searchButton");
const nameContainer = document.querySelector(".main__profile-name");
const unContainer = document.querySelector(".main__profile-username");
const reposContainer = document.querySelector(".main__profile-repos");
const urlContainer = document.querySelector(".main__profile-url");

const client_id = 'Iv1.0be42ec2662d1704';
const client_secret = 'c8db79e5dacfebc049d2bde63720b7d77bfb3a11';

// Function to call API from Github
const fetchUsers = async(user) => {
    const api_call = await fetch(`https://api.github.com/users/${user}?client_id=${client_id}&client_secret=${client_secret}`);

    const data = await api_call.json();
    return {
        data: data 
        // Or we can do just "data" if the value and name have same variable name
    }
};

const showData = () => {
    fetchUsers(inputValue.value).then((res) => {
        console.log(res);

        

    });
};

searchButton.addEventListener('click', () =>{
    showData();
})


