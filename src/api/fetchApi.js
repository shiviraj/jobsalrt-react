const fetchGet = async (url) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error();
  return await res.json();
};

const fetchApi = (action) => {
  switch (action.type) {
    case 'ALL_JOBS':
      return fetchGet(`/api/allJobs`);
    case 'LATEST_JOBS':
      return fetchGet(`/api/latestJobs`);
    case 'ADMIT_CARD':
      return fetchGet(`/api/admitCard`);
    case 'RESULTS':
      return fetchGet(`/api/results`);
    case 'ANSWER_KEY':
      return fetchGet(`/api/answerKey`);
    case 'SYLLABUS':
      return fetchGet(`/api/syllabus`);
    case 'ADMISSION':
      return fetchGet(`/api/syllabus`);
    case 'FETCH_POST':
      return fetchGet(`/api/post/${action.id}`);
    default:
      return new Promise((_r, reject) => reject());
  }
};

export default fetchApi;
