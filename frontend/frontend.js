
function GetPostCodeFromButton() {
   let post_code = document.getElementById("post_code").value
   DisplayWeatherTable(post_code)
}

function DisplayWeatherTable(post_code) {
    var xhttp = new XMLHttpRequest();
    xhttp.open('GET', `http://localhost:3000/${post_code}`, true)
    xhttp.setRequestHeader('Content-Type', 'application/json')
    xhttp.onload = function() {
        const data = JSON.parse(xhttp.response)
        document.getElementById("Results").innerHTML = TableHTML(data)
    }
    xhttp.send()
}

function TableHTML(data) {
    const HTMLString = `<h2>Results</h2>
    <table class = "centera">
    <tr><th> Time </th><th> Temperature </th><th> Current Weather </th></tr>
    ${data.map((hour) => {
        return `<tr><td>${hour.time}</td><td>${hour.temperature}</td><td>${hour.forecast_description}</td>`
    }).join("")}
    </table>
    `
    console.log(HTMLString)
    return HTMLString
}