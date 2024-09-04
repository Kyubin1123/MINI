const data = [
    { category: "상의", brand: "superme", product:"슈프림 박스로고 후드티", Price: "390,000"}
];

const dataTable = document.getElementById('data-table');

data.forEach((item) => {
    const row = dataTable.insertRow();
    row.insertCell(0).innerHtml = item.category;
    row.insertCell(1).innerHtml = item.brand;
    row.insertCell(2).innerHtml = item.product;
    row.insertCell(3).innerHtml = item.price;
});

const darkmode = document.querySelector("#night_day")
const body = document.querySelector("body")

function changeHandle () {
    if(change.value === "night") {
        body.classList.add("night");
        body.classList.remove("Day");
        change.value = "day";
    } else {
        body.classList.remove("night");
        body.classList.add("day");
        change.value = "night"
    }
}

darkmode.addEventListener("click", changeHandle);

var Target = document.getElementById("clock");
        function clock() {
            var time = new Date();

            var month = time.getMonth();
            var date = time.getDate();
            var day = time.getDay();
            var week = ['일', '월', '화', '수', '목', '금', '토'];

            var hours = time.getHours();
            var minutes = time.getMinutes();
            var seconds = time.getSeconds();

            Target.innerText = 
            `${month + 1}월 ${date}일 ${week[day]}요일 ` +
            `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
                
        }
        clock();
        setInterval(clock, 1000);