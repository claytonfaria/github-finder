class Github {
  constructor() {
    this.client_id = '16aa8c896b96fc6c8f18';
    this.client_secret = '7274e00c20c4be24f5df3253f998848748726b20';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  };

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    };
  };
};
