export function PostData(userData) {
    let BaseUrl = "http://localhost:3000/api/post_form";
    console.log("userData", userData);
    return new Promise((resolve, reject) => {
    fetch(BaseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "json",
        Accept: "json"
      }
     // body: JSON.stringify(userData)
    })
      .then(response => response.json())
      .then(responseJson => {
        resolve(responseJson);
      })
      .catch(error => {
        reject(error);
      });
    });
    }