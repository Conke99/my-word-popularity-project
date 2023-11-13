const githubService = require("../../src/services/githubService");
const wordController = require("../../src/controllers/wordController");

jest.mock("../../src/services/githubService");

test("calculatePopularityScore returns a valid score", async () => {
  const mockSearchGitHubIssues = jest.fn(() =>
    Promise.resolve({ total_count: 10 })
  );

  githubService.searchGitHubIssues.mockImplementation(mockSearchGitHubIssues);

  const term = "test";
  const score = await wordController.calculatePopularityScore(term);

  expect(score).toBeGreaterThan(0);
  expect(score).toBeLessThanOrEqual(10);
  expect(mockSearchGitHubIssues).toHaveBeenCalledWith(term);
});
