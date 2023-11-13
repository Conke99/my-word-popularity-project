const axios = require("axios");

const searchGitHubIssues = async (term) => {
  try {
    const response = await axios.get(
      `https://api.github.com/search/issues?q=${term}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

module.exports = { searchGitHubIssues };
