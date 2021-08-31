// create the club
const generateClub = club => {

    // create the Forward html
    const generateForward = forward => {
        if(forward.getCharacter().getRole() === 'Captain'){
            return `
                <div class="card employee-card">
                    <div class="card-header">
                        <h2 class="card-title">${forward.getName()}</h2>
                        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${forward.getPosition()}</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${forward.getKitNumber()}</li>
                            <li class="list-group-item">Email:      <a href="mailto:${forward.getCharacter().getEmail()}">${forward.getCharacter().getEmail()}
                                </a>
                            </li>
                            <li class="list-group-item">Club Captain's Reign: ${forward.getCharacter().getExperience()}
                            </li>
                            <li class="list-group-item">Tweet to ${forward.getTwitterHandle()}
                            <a href="https://twitter.com/intent/tweet?screen_name=${forward.getTwitterHandle()}&ref_src=twsrc%5Etfw" class="twitter-mention-button" data-show-count="false">
                            </a>
                        </li>
                        </ul>
                    </div>
                </div>
                `;
        } else {
            return `
                <div class="card club-member-card">
                    <div class="card-header">
                        <h2 class="card-title">${forward.getName()}</h2>
                        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${forward.getPosition()}</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${forward.getKitNumber()}</li>
                            <li class="list-group-item">Email:      <a href="mailto:${forward.getCharacter().getEmail()}">${forward.getCharacter().getEmail()}
                                </a>
                            </li>
                            <li class="list-group-item">Tweet to ${forward.getTwitterHandle()}
                                <a href="https://twitter.com/intent/tweet?screen_name=${forward.getTwitterHandle()}&ref_src=twsrc%5Etfw" class="twitter-mention-button" data-show-count="false">
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            `;
        }
    };

    // create the html for Defenders
    const generateDefender = defender => {
        return `
        <div class="card club-member-card">
    <div class="card-header">
        <h2 class="card-title">${defender.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${defender.getPosition()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${defender.getKitNumber()}</li>
            <li class="list-group-item">Email: <a href="mailto:${defender.getCharacter().getEmail()}">${defender.getCharacter().getEmail()}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${defender.getGithub()}" target="_blank" rel="noopener noreferrer">${defender.getGithub()}</a></li>
        </ul>
    </div>
</div>
        `;
    };

    // create the html for midfielders
    const generateMidfield = midfield => {

    };

    // create the html for midfielders
    const generateGoalie = goalie => {
       
    };


    const html = [];

    html.push(club
        .filter(player => player.getPosition() === "Forward")
        .map(forward => generateForward(forward))
    );
    html.push(club
        .filter(player => player.getPosition() === "Defender")
        .map(defender => generateDefender(defender))
        .join("")
    );
    html.push(club
        .filter(player => player.getPosition() === "Midfield")
        .map(midfield => generateMidfield(midfield))
        .join("")
    );
    html.push(club
        .filter(player => player.getPosition() === "Goalie")
        .map(goalie => generateGoalie(goalie))
        .join("")
    );
    return html.join("");

}

// export function to generate entire page
module.exports = club => {

    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Club</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
    <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 club-heading">
                <h1 class="text-center">My Club</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="club-area col-12 d-flex justify-content-center">
                ${generateClub(club)}
            </div>
        </div>
    </div>
</body>
</html>
    `;
};