const Github = require('./github');

const username = process.argv[2];
const github = new Github();
github.getRepos(username, (error, repos) => {
    if(error) return console.error(error);

    repos.forEach(repo => console.log(repo.name))
});


