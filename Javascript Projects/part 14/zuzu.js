let token =[];
(async () => {
    let login= await fetch("http://waleed767.pythonanywhere.com/login", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "email": "john@example.com",
            "password": "secure123"
        })
    });
    let result = await login.json();
    console.log(result);
    token.push(result.token); // Store the token in the array
    
})() // Log the response data to the console\