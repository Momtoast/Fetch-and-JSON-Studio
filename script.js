// TODO: add code here
window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(json) {
            let astronaut = json;
            const container = document.getElementById("container");
            let activeProp;
            let count;
            astronaut.sort((a,b)=>{
                return a.hoursInSpace<b.hoursInSpace?1:-1;
            });
            for (let x of astronaut) {
                container.innerHTML += `
                <div id="astronaut">
                    <div id="bio">
                        <h3>${x.firstName} ${x.lastName}</h3>
                        <ul>
                            <li>Hours in space: ${x.hoursInSpace}</li>
                            <li id="active">Active: ${x.active}</li>
                            <li>Skills: ${x.skills}</li>
                        </ul>
                    </div>
                <img class="avatar" id="astroImage" src="${x.picture}" />
                </div>`;
                if (x.active === true) {
                    console.log(x.active);
                    document.getElementById("active").style.color = "green";
                }
                count = count+1;
            };
        });
    });
});