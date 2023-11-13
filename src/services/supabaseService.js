const { createClient } = require("@supabase/supabase-js");
require("dotenv").config();

// Initialize Supabase client with Supabase URL and API key
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_API_KEY
);

const fetchDataFromSupabase = async (filter = {}) => {
  try {
    const { data, error } = await supabase
      .from("popularity_scores")
      .select()
      .eq(filter)
      .single();

    return { data, error };
  } catch (error) {
    console.error("Error in fetchDataFromSupabase:", error);
    throw error;
  }
};

const insertDataIntoSupabase = async (data) => {
  try {
    const { error } = await supabase
      .from("popularity_scores")
      .upsert(data, { onConflict: ["id"] });

    if (error) {
      console.error("Error inserting data into Supabase:", error);
      throw error;
    }

    console.log("Data inserted into Supabase successfully.");
  } catch (error) {
    console.error("Error in insertDataIntoSupabase:", error);
    throw error;
  }
};

module.exports = {
  fetchDataFromSupabase,
  insertDataIntoSupabase,
};
