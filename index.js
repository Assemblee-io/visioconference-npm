const fetch = require("node-fetch");

class Visioconference {
  constructor(API_KEY) {
    if (!API_KEY) throw new Error("API_KEY is not defined");
    this.API_KEY = API_KEY;
  }

  async makeRequest(endpoint, options) {
    const res = await fetch(
      `https://api.visioconference.me/api/v1${endpoint}`,
      options
    );
    return await res.json();
  }

  async createRoom(name) {
    if (!name) throw new Error("Name is not defined");
    const options = {
      method: "POST",
      headers: {
        "X-Token": this.API_KEY, //Remplacer par votre clé API
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name
      })
    };
    return await this.makeRequest("/entreprise/visio", options);
  }
}

module.exports = Visioconference;
