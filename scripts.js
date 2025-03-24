document.addEventListener("DOMContentLoaded", () => {
    const deleteBtn = document.querySelector(".btn");
    const increment = document.querySelector(".plus");
    const decrement = document.querySelector(".minus");
    const dashboard = document.querySelector(".dashboard");
    const btn = document.querySelector("#btn");

    let scores = [
        { "firstName": "John", "lastName": "Doe", "country": "USA", "score": 85 },
        { "firstName": "Emma", "lastName": "Smith", "country": "Canada", "score": 90 },
        { "firstName": "Liam", "lastName": "Brown", "country": "UK", "score": 75 },
        { "firstName": "Olivia", "lastName": "Davis", "country": "Australia", "score": 95 },
        { "firstName": "Noah", "lastName": "Wilson", "country": "Germany", "score": 100 },
        { "firstName": "Ava", "lastName": "Miller", "country": "France", "score": 80 },
        { "firstName": "William", "lastName": "Taylor", "country": "India", "score": 90 },
        { "firstName": "Sophia", "lastName": "Anderson", "country": "Japan", "score": 85 },
        { "firstName": "James", "lastName": "Thomas", "country": "Brazil", "score": 95 },
        { "firstName": "Mia", "lastName": "Martinez", "country": "Spain", "score": 75 },
        { "firstName": "Ethan", "lastName": "White", "country": "Italy", "score": 70 },
        { "firstName": "Charlotte", "lastName": "Harris", "country": "Netherlands", "score": 80 },
        { "firstName": "Benjamin", "lastName": "Clark", "country": "Sweden", "score": 85 },
        { "firstName": "Amelia", "lastName": "Lewis", "country": "South Korea", "score": 90 },
        { "firstName": "Lucas", "lastName": "Hall", "country": "Mexico", "score": 75 }
    ];

    function myComparator(a, b) {
        return b.score - a.score;
    }

    function displayScore(data) {
        dashboard.innerHTML = "";
        data.sort(myComparator);
        
        data.forEach((item, index) => {
            let person = document.createElement("div");
            person.classList.add("person");

            let fullName = document.createElement("span");
            fullName.innerText = `${item.firstName} ${item.lastName}`;

            let country = document.createElement("span");
            country.innerText = item.country;

            let score = document.createElement("span");
            score.innerText = item.score;

            let deleteIcon = document.createElement("span");
            deleteIcon.classList.add("btn");
            deleteIcon.innerText = "delete";
            deleteIcon.addEventListener("click", () => deleteScore(index));

            let plus5 = document.createElement("span");
            plus5.classList.add("plus");
            plus5.innerText = "+5";
            plus5.addEventListener("click", () => increment5(index));

            let minus5 = document.createElement("span");
            minus5.classList.add("minus");
            minus5.innerText = "-5";
            minus5.addEventListener("click", () => decrement5(index));

            person.append(fullName, country, score, deleteIcon, plus5, minus5);
            dashboard.append(person);
        });
    }

    function deleteScore(index) {
        if (confirm("Are you sure you want to delete the player stats?")) {
            scores.splice(index, 1);
            displayScore(scores);
        }
    }

    function increment5(index) {
        if (scores[index].score < 500) {
            scores[index].score += 5;
            displayScore(scores);
        }
    }

    function decrement5(index) {
        if (scores[index].score > 5) {
            scores[index].score -= 5;
            displayScore(scores);
        }
    }

    function addData(fname, lname, country, score) {
        if (!score || isNaN(score) || score <= 0) {
            alert("Please enter a valid positive score.");
            return;
        }
        if (!fname || !lname || !country) {
            alert("Please enter all player details.");
            return;
        }
        
        let obj = { "firstName": fname, "lastName": lname, country, score };
        scores.push(obj);
        displayScore(scores);
        
        document.querySelector("#fname").value = "";
        document.querySelector("#lname").value = "";
        document.querySelector("#country").value = "";
        document.querySelector("#score").value = "";
    }

    displayScore(scores);

    btn.addEventListener("click", (event) => {
        event.preventDefault();
        let fn = document.querySelector("#fname").value.trim();
        let ln = document.querySelector("#lname").value.trim();
        let c = document.querySelector("#country").value.trim();
        let s = parseInt(document.querySelector("#score").value);
        addData(fn, ln, c, s);
    });
});
