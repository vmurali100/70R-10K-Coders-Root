var api_url = "http://localhost:3000/FetchData";

async function getNestedUser() {
    var response = await fetch(api_url)
    var FetchData = await response.json()
    console.log(FetchData)
}
getNestedUser()