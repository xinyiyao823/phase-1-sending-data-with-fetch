// Add your code here
const BASE_URL = 'http://localhost:3000/users'
function submitData(userName, userEmail) {
    fetch(BASE_URL, {
        method: 'POST',
        headers: {

            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "name": userName,
            "email": userEmail
        })
    })
    .then(function(resp) {
        return resp.json();
    })
    .then(function(obj) {
        return obj.id;
    })
}
submitData()