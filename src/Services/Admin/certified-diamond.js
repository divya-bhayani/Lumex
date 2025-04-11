import axios from "axios";

export const cerified = async () => {
  return await axios.get(
    "https://dev.lumex.online:8000/api/buyer/search-filter",
    {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmNlYTQ2OTM1NTA1NTUzZWNmODdiYTAiLCJpZCI6IjY2Y2VhNDY5MzU1MDU1NTNlY2Y4N2I5YyIsInJvbGUiOiJidXllciIsImlhdCI6MTc0NDM0MjY5MSwiZXhwIjoxNzQ0NDI5MDkxfQ.Wd1Z4-P7SiUZebQLFAtSffHph-y29U684b29w0rbXDs`,
      },
    }
  );
};
