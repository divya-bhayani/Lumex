import axios from "axios";

export const Search_list = async ({ limit, page }) => {
  console.log(limit, page);

  return await axios.post(
    `https://dev.lumex.online:8000/api/buyer/filter-result?size=${limit}&page=${page}&order=&sort=`,
    {},
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmNlYTQ2OTM1NTA1NTUzZWNmODdiYTAiLCJpZCI6IjY2Y2VhNDY5MzU1MDU1NTNlY2Y4N2I5YyIsInJvbGUiOiJidXllciIsImlhdCI6MTc0NDQyOTI5MCwiZXhwIjoxNzQ0NTE1NjkwfQ.2F3OmWw_juQS_la_QxnkwIAGiZVS4dJPw1gyMhVc7d8",
      },
    }
  );
};
