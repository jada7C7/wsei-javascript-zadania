document.addEventListener("DOMContentLoaded", function () {
    let form = document.querySelector('form');

    form.addEventListener("submit", validateSend)

    function validateSend() {
        event.preventDefault();
        let getTeam1 = document.getElementById("team1").value;
        let getPoints1 = document.getElementById("points1").value;
        let getTeam2 = document.getElementById("team2").value;
        let getPoints2 = document.getElementById("points2").value;

        let validateScore = (getPoints1 >= 0 && getPoints1 != "") && (getPoints2 >= 0 && getPoints2 != "");
        let validateTeam = (getTeam1 != "" && getTeam2 != "") && getTeam1 != getTeam2;
        if (validateScore && validateTeam) {
            addNewData(getTeam1, getTeam2, getPoints1, getPoints2);
        } else {
            alert("Wprowadzone dane są nieprawidowe");
        }
    }

    function addNewData(team1, team2, points1, points2) {
        let table = document.querySelector('table tbody');
        const newRow = document.createElement('tr');
        newRow.innerHTML = `<td>${team1}</td><td>${team2}</td><td>${points1} - ${points2}</td>`;
        table.append(newRow);
    }

});