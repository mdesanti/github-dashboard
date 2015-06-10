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
        this.github = this.github.getUser();
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
    this.github.orgIssues('Wolox', filter, function(err, issues) {
      console.log(issues);
      cb(issues);
    });
  }
}

export default GithubService;
