// create the club
const generateClub = club => {

    // create the Forward html
    const generateForward = forward => {
        if(forward.getCharacter().getRole() === 'Captain'){
            return `
                <div class="card captain-card">
                    <div class="card-header text-center">
                        <h3 class="card-title">
                            <i class="fas fa-certificate mr-2"></i>${forward.getCharacter().getRole()}
                        </h3>    
                        <h2 class="card-title">${forward.getCharacter().getName()}
                        </h2>
                        <h3 class="card-title"><i class="fas fa-king mr-2"></i>
                            ${forward.getPosition()}
                        </h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">Club Captain's Reign: ${forward.getCharacter().getExperience()} Seasons
                            </li>
                            <li class="list-group-item">Proudly Wears: ${forward.getKitNumber()}</li>
                            <li class="list-group-item">Email:      <a href="mailto:${forward.getCharacter().getEmail()}">${forward.getCharacter().getEmail()}
                                </a>
                            </li>
                            <li  class="list-group-item">
                                <a href="https://twitter.com/intent/tweet?screen_name=${forward.getTwitterHandle()}&ref_src=twsrc%5Etfw" class="twitter-mention-button" data-show-count="false">
                                 </a>
                            </li>
                            <li class="list-group-item">Goals Scored this Season: ${forward.getGoals()}!
                            </li>
                        </ul>
                    </div>
                </div>
                `;
        } else {
            return `
                <div class="card club-member-card">
                    <div class="card-header text-center">
                        <h2 class="card-title">${forward.getCharacter().getName()}</h2>
                        <h3 class="card-title"><i class="fas fa-chess-king mr-2"></i>${forward.getPosition()}</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">Proudly Wears: ${forward.getKitNumber()}</li>
                            <li class="list-group-item">Email:      <a href="mailto:${forward.getCharacter().getEmail()}">${forward.getCharacter().getEmail()}
                                </a>
                            </li>
                            <li class="list-group-item">
                                <a href="https://twitter.com/intent/tweet?screen_name=${forward.getTwitterHandle()}&ref_src=twsrc%5Etfw" class="twitter-mention-button" data-show-count="false">
                                </a>
                            </li>
                            <li class="list-group-item">Goals Scored for Club : ${forward.getGoals()}
                            </li>
                        </ul>
                    </div>
                </div>
            `;
        }
    };

    // create the html for Defenders
    const generateDefender = defender => {
        if(defender.getCharacter().getRole() === 'Captain'){
            return `
            <div class="card captain-card">
                <div class="card-header text-center">
                    <h3 class="card-title">
                        <i class="fas fa-certificate mr-2"></i>${defender.getCharacter().getRole()}
                    </h3>
                    <h2 class="card-title">${defender.getCharacter().getName()}</h2>
                    <h3 class="card-title"><i class="fas fa-chess-rook mr-2"></i>${defender.getPosition()}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">Club Captain's Reign: ${defender.getCharacter().getExperience()} Seasons
                        </li>
                        <li class="list-group-item">Proudly Wears: ${defender.getKitNumber()}</li>
                        <li class="list-group-item">Email:  
                            <a href="mailto:${defender.getCharacter().getEmail()}">${defender.getCharacter().getEmail()}
                            </a>
                        </li>
                        <li class="list-group-item">
                                <a href="https://twitter.com/intent/tweet?screen_name=${defender.getTwitterHandle()}&ref_src=twsrc%5Etfw" class="twitter-mention-button" data-show-count="false">
                                </a>
                        </li>
                        <li class="list-group-item">Aerial Dual Win Rate : ${defender.getAerialDualsWon()}%
                        </li>
                        <li class="list-group-item">Blocks this Season : ${defender.getBlocks()}
                        </li>
                    </ul>
                </div>
            </div>
            `;
        } else {
            return `
            <div class="card club-member-card">
                <div class="card-header text-center">
                    <h2 class="card-title">${defender.getCharacter().getName()}</h2>
                    <h3 class="card-title"><i class="fas fa-chess-rook mr-2"></i>${defender.getPosition()}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">Proudly Wears: ${defender.getKitNumber()}</li>
                        <li class="list-group-item">Email:  
                            <a href="mailto:${defender.getCharacter().getEmail()}">${defender.getCharacter().getEmail()}
                            </a>
                        </li>
                        <li class="list-group-item">
                                <a href="https://twitter.com/intent/tweet?screen_name=${defender.getTwitterHandle()}&ref_src=twsrc%5Etfw" class="twitter-mention-button" data-show-count="false">
                                </a>
                        </li>
                        <li class="list-group-item">Aerial Dual Win Rate : ${defender.getAerialDualsWon()}%
                        </li>
                        <li class="list-group-item">Blocks this Season : ${defender.getBlocks()}
                        </li>
                    </ul>
                </div>
            </div>
            `;
        }
    };

    // create the html for midfielders
    const generateMidfield = midfield => {
        if(midfield.getCharacter().getRole() === 'Captain'){
            return `
            <div class="card captain-card">
                <div class="card-header text-center">
                    <h3 class="card-title">
                        <i class="fas fa-certificate mr-2"></i>${midfield.getCharacter().getRole()}
                    </h3>
                    <h2 class="card-title">${midfield.getCharacter().getName()}
                    </h2>
                    <h3 class="card-title"><i class="fas fa-chess-knight mr-2"></i>${midfield.getPosition()}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">Club Captain's Reign: ${midfield.getCharacter().getExperience()} Seasons
                        </li>
                        <li class="list-group-item">Proudly Wears: ${midfield.getKitNumber()}</li>
                        <li class="list-group-item">Email:  
                            <a href="mailto:${midfield.getCharacter().getEmail()}">${midfield.getCharacter().getEmail()}
                            </a>
                        </li>
                        <li class="list-group-item">
                                <a href="https://twitter.com/intent/tweet?screen_name=${midfield.getTwitterHandle()}&ref_src=twsrc%5Etfw" class="twitter-mention-button" data-show-count="false">
                                </a>
                        </li>
                        <li class="list-group-item">Duals Win Rate : ${midfield.getDualsWon()}%
                        </li>
                        </li>
                        <li class="list-group-item">Longest Goal Distance Scored was ${midfield.getLongestGoalScored()} yards out!!
                        </li>
                    </ul>
                </div>
            </div>
            `;
        } else {
            return `
            <div class="card club-member-card">
                <div class="card-header text-center">
                    <h2 class="card-title">${midfield.getCharacter().getName()}</h2>
                    <h3 class="card-title"><i class="fas fa-chess-knight mr-2"></i>${midfield.getPosition()}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">Proudly Wears: ${midfield.getKitNumber()}</li>
                        <li class="list-group-item">Email:  
                            <a href="mailto:${midfield.getCharacter().getEmail()}">${midfield.getCharacter().getEmail()}
                            </a>
                        </li>
                        <li class="list-group-item">
                                <a href="https://twitter.com/intent/tweet?screen_name=${midfield.getTwitterHandle()}&ref_src=twsrc%5Etfw" class="twitter-mention-button" data-show-count="false">
                                </a>
                        </li>
                        <li class="list-group-item">Duals Win Rate : ${midfield.getDualsWon()}%
                        </li>
                        <li class="list-group-item">Longest Goal Distance Scored was ${midfield.getLongestGoalScored()} yards out!!
                        </li>
                        </li>
                    </ul>
                </div>
            </div>
            `;
        }
    };

    // create the html for goalie
    const generateGoalie = goalie => {
        if(goalie.getCharacter().getRole() === 'Captain'){
            return `   
            <div class="card captain-card">
                <div class="card-header">
                    <h3 class="card-title text-center">
                        <i class="fas fa-certificate mr-2"></i>${goalie.getCharacter().getRole()}
                    </h3>
                    <h2 class="card-title">${goalie.getCharacter().getName()}</h2>
                    <h3 class="card-title"><i class="fas fa-chess-queen mr-2"></i>${goalie.getPosition()}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">Club Captain's Reign: ${goalie.getCharacter().getExperience()} Seasons
                        </li>
                        <li class="list-group-item">Proudly Wears: ${goalie.getKitNumber()}</li>
                        <li class="list-group-item">Email:  
                            <a href="mailto:${goalie.getCharacter().getEmail()}">${goalie.getCharacter().getEmail()}
                            </a>
                        </li>
                        <li class="list-group-item">
                                <a href="https://twitter.com/intent/tweet?screen_name=${goalie.getTwitterHandle()}&ref_src=twsrc%5Etfw" class="twitter-mention-button" data-show-count="false">
                                </a>
                        </li>
                        <li class="list-group-item">Career Clean Sheets : ${goalie.getCleanSheets()}
                        </li>
                        <li class="list-group-item">Saves this Season : ${goalie.getSaves()}!!
                        </li>
                    </ul>
                </div>
            </div>
           `;
        } else {
            return `
            <div class="card club-member-card">
                <div class="card-header text-center">
                    <h2 class="card-title">${goalie.getCharacter().getName()}</h2>
                    <h3 class="card-title"><i class="fas fa-chess-queen mr-2"></i>${goalie.getPosition()}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">Proudly Wears: ${goalie.getKitNumber()}
                        </li>
                        <li class="list-group-item">Email:  
                            <a href="mailto:${goalie.getCharacter().getEmail()}">${goalie.getCharacter().getEmail()}
                            </a>
                        </li>
                        <li class="list-group-item">
                                <a href="https://twitter.com/intent/tweet?screen_name=${goalie.getTwitterHandle()}&ref_src=twsrc%5Etfw" class="twitter-mention-button" data-show-count="false">
                                </a>
                        </li>
                        <li class="list-group-item">Total Clean Sheet : ${goalie.getCleanSheets()}
                        </li>
                        <li class="list-group-item">Saves this Season : ${goalie.getSaves()}!!
                        </li>
                    </ul>
                </div>
            </div>
         `;
        }
    };


    const html = [];
    //construct the forward(s) block
    html.push(`<div class="row d-flex justify-content-around">`);
    html.push(club
        .filter(player => player.getPosition() === "Forward")
        .map(forward => generateForward(forward))
    );
    html.push(`
    </div>`);

    html.push(`
    <div class="row d-flex justify-content-around">`);
    html.push(club
        .filter(player => player.getPosition() === "Midfield")
        .map(midfield => generateMidfield(midfield))
        .join("")
    );
    html.push(`
    </div>`);

    html.push(`
    <div class="row d-flex justify-content-around">`);
    html.push(club
        .filter(player => player.getPosition() === "Defender")
        .map(defender => generateDefender(defender))
        .join("")
    );
    html.push(`
    </div>`);

    html.push(`
    <div class="row d-flex justify-content-around">`);
    html.push(club
        .filter(player => player.getPosition() === "Goalie")
        .map(goalie => generateGoalie(goalie))
    );
    html.push(`
    </div>`);

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
    <link rel="stylesheet" href="../src/style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
    <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</head>

<body class='general-background'>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 club-heading">
                <div class="row d-flex justify-content-center">
                    <h1 class="text-center cust-header">
                        <i class="fas fa-futbol p-3"></i>
                        My Club
                        <i class="fas fa-futbol p-3"></i>
                    </h1>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        ${generateClub(club)}     
    </div>
</body>
</html>
    `;
};