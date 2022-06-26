
function GetPostCodeFromButton() {
   let post_code = document.getElementById("post_code").value
    console.log(post_code)
   DisplayWeatherTable(post_code)
}

function DisplayWeatherTable(post_code) {
    var xhttp = new XMLHttpRequest();
    console.log("hi")
    xhttp.open('GET', `http://localhost:3000/search_for_post_code/${post_code}`, true)
    xhttp.setRequestHeader('Content-Type', 'application/json')
    xhttp.onload = function() {
        const data = JSON.parse(xhttp.response)
        document.getElementById("Results").innerHTML = TableHTML(data)
        create_chart(data)
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

function create_chart(data) {
    var cts = document.getElementById("myChart");

    var x_values = data.map((hour) => {return hour.time})
    var y_values = data.map((hour) => {return hour.temperature})
    const myChart = new Chart(cts, {
        type: "bar",
        data: {
            labels: x_values,
            datasets: [{
                label: 'Time vs Temperature Graph',
                backgroundColor: Array(data.length).fill("orange"),
                data: y_values,
            }]
        },
    });
};
