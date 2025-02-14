//exercise: tournament winner


function tournamentWinner(competitions,results){

    const score = {}
    let winner = ''

    for(let i=0; i<competitions.length; i++){

        const [home,away]= competitions[i];

        const winningTeam = results[i] === 0 ? away : home

        score[winningTeam] = (score[winningTeam] || 0)+3

        if(!winner || score[winningTeam]>score[winner]){
            winner= winningTeam
        } 

    }

    return winner

}


const competitions = [
    ['JavaScript','C#'],
    ['C#','Python'],
    ['Python','JavaScript']
]

const results= [0,0,1]

console.log(tournamentWinner(competitions,results))