let players = [
    { firstName: 'Cam', lastName: 'Newton', position: 'QB', touchdowns: 32 },
    { firstName: 'Derek', lastName: 'Anderson', position: 'QB', touchdowns: 0 },
    { firstName: 'Jonathan', lastName: 'Stewart', position: 'RB', touchdowns: 12 },
    { firstName: 'Mike', lastName: 'Tolbert', position: 'RB', touchdowns: 8 },
    { firstName: 'Fozzy', lastName: 'Whittaker', position: 'RB', touchdowns: 3 },
    { firstName: 'Ted', lastName: 'Ginn', position: 'WR', touchdowns: 9 },
    { firstName: 'Devin', lastName: 'Funchess', position: 'WR', touchdowns: 2 }
];

//Players named 'Mike'
players.find(function(player) {
    return player.firstName === 'Mike'
});

//Running backs
players.filter(function(player) {
    return player.position === 'RB';
});

//LastNames
players.map(function(player) {
    return player.lastName;
});

//Full names of all running backs with more than 5 touchdowns.
players.filter(function(player) {
    return player.touchdowns > 5 && player.position == 'RB';
}).map(function(player) {
    return `${player.firstName} ${player.lastName}`;
});

//Number of touchdowns by runningbacks
players.filter(function(player) {
    return player.position == 'RB';
}).reduce(function(total, player) {
    total += player.touchdowns;
}, 0);

console.log(lastName);