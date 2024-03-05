
export default class GithubApi {
  private baseApiUrl = "https://api.github.com/";

  public async getRepoInfo(username: string, repoName: string): Promise<Object | null> {
    try {
      const url = this.baseApiUrl + "repos/" + username + "/" + repoName;
      const response = await fetch(url);
      if (response.status !== 200) {
        return null;
      }
      const json: Object = await response.json();
      return json;
    } catch (err) {
      return null;
    }
  }

  public async doesRepoExist(username: string, repoName: string): Promise<boolean> {
    const json: Object | null = await this.getRepoInfo(username, repoName);
    return !!json;
  }
}