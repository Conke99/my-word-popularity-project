const supabaseService = require("../services/supabaseService");
const { searchGitHubIssues } = require("../services/githubService");

const calculatePopularityScore = async (term) => {
  try {
    const results = await searchGitHubIssues(term);

    console.log(`Total GitHub issues for '${term}': ${results.total_count}`);

    const totalResults = results.total_count;
    const popularityScore = totalResults / 10;

    console.log(`Popularity score for '${term}': ${popularityScore}`);

    // Insert data into Supabase
    await supabaseService.insertDataIntoSupabase({
      term,
      score: popularityScore,
    });

    return popularityScore;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getPopularityScore = async (req, res) => {
  const { term } = req.query;
  try {
    const score = await calculatePopularityScore(term);

    res.json({ term, score });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { calculatePopularityScore, getPopularityScore };
