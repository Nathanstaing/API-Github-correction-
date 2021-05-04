/*async function getUser(username) {
    
    let myPromise = new Promise((resolve, reject) => {
         
        const url = `https://api.github.com/users/${username}`;
        fetch(url)
        .then(response => {
            console.log(response);
            if(response.ok == true){
                resolve(response.json());
            }
            else{
                reject(response.statusText);
            }
        })
         
    })
    
    return myPromise;
   
}*/


function getUser(username) {
    
    let myPromise = new Promise(async function(resolve, reject) {
         
        const url = `https://api.github.com/users/${username}`;
        let response = await fetch(url)
        if(response.ok == true){
           resolve(response.json());
        }
        else{
            reject(response.statusText);
        }
           
    })
    
    return myPromise;
   
}


export default getUser;
