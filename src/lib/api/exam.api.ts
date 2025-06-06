import { getAuthHeader } from "../utils/auth-header";

export async function getExamsApi() {
  const response = await fetch(`${process.env.API}/exams`, {
    headers: {
      ...(await getAuthHeader()),
    },
  });

  const payload: APIResponse<{ exams: Exam[] }> = await response.json();

  return payload;
}
