import Github from '../../../node_modules/github-api/github.js';

class GithubService {

  initGithubService() {
    if(this.github == undefined){
      this.accessToken = localStorage.getItem('accessToken')
      if (this.accessToken) {
        this.github = new Github({
          token: this.accessToken,
          auth: 'oauth'
        });
        this.user = this.github.getUser();
      }
    }
  }

  constructor() {
    this.initGithubService();
  }

  getOrganizationIssues(filter, cb) {
    if(this.github == undefined) {
      this.initGithubService();
    }
    this.user.orgIssues('Wolox', filter, function(err, issues) {
      console.log(issues);
      cb(issues);
    });
  }

  getPullRequestData(org, repo, pullRequestNumber, cb) {
    var repo = this.github.getRepo(org, repo);
    repo.getPull(pullRequestNumber, function(err, pullRequestInfo) { cb(pullRequestInfo) });
  }

  getIssueComments(org, repo, number, cb) {
    var repo = this.github.getRepo(org, repo);
    repo.getPullComments(number, cb);
  }
}

export default GithubService;
