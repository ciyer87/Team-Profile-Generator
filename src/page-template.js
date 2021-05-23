

function generateTeam(team){
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css">
        <title>Portfolio Demo</title>
    </head>
    
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron mb-2 team-heading">
                    <h1 class="text-center">My Team</h1>
                </div>
            </div>
            <div class = "row">
                <div class="team-area col-12 d-flex justify-content-center">
                    ${generateCards(team)};
                </div>
            </div>
        </div>        
    </body>
    </html>    

`
}

function generateCards(team){

    const teamHTML = [];
    for (let i = 0; i < team.length; i++){
        if(team[i].getRole()==='Manager'){
            teamHTML.push(generateManagerCard(team[i]))
        }
        else if (team[i].getRole()==='Engineer'){
            teamHTML.push(generateEngineerCard(team[i]))
        }
        else {
            teamHTML.push(generateInternCard(team[i]))
        } 
    }
    return teamHTML.join('')
}

function generateManagerCard(manager){
    return ` 
                    <div class="card employee-card">
                        <div class="card-header">
                            <h2 class="card-title">${manager.getName()}</h2>
                            <h3 class="card-title"> <i class="fas fa-mug-hot"></i>${manager.getRole()}</h3>
                        </div>
                        <div class="card-body">
                            <ul class="list-group">
                                <li class="list-group-item">ID: ${manager.getID()}</li>
                                <li class="list-group-item">Email: <a href="mailto: ${manager.getEmail()}">${manager.getEmail()}</a></li>
                                <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
                            </ul>
                        </div> 
                    </div>            
`
}

function generateEngineerCard(engineer){
    return ` 
                    <div class="card employee-card">
                        <div class="card-header">
                            <h2 class="card-title">${engineer.getName()}</h2>
                            <h3 class="card-title"><i class="fas fa-glasses"></i>${engineer.getRole()}</h3>
                        </div>
                        <div class="card-body">
                            <ul class="list-group">
                                <li class="list-group-item">ID: ${engineer.getID()}</li>
                                <li class="list-group-item">Email: <a href="mailto: ${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                                <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGitHub()}" target="_blank">${engineer.getGitHub()}</a></li>
                            </ul>
                        </div>
                    </div>
`
}

function generateInternCard(intern){
    return ` 
                    <div class="card employee-card">
                        <div class="card-header">
                            <h2 class="card-title">${intern.getName()}</h2>
                            <h3 class="card-title"><i class="fas fa-user-graduate"></i>${intern.getRole()}</h3>
                        </div>
                        <div class="card-body">
                            <ul class="list-group">
                                <li class="list-group-item">ID: ${intern.getID()}</li>
                                <li class="list-group-item">Email: <a href="mailto: ${intern.getEmail()}">${intern.getEmail()}</a></li>
                                <li class="list-group-item">School: ${intern.getSchool()}</li>
                            </ul>
                        </div>
                    </div>    
`
}

module.exports = generateTeam