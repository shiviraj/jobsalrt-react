const fetchGet = async (url) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error();
  return await res.json();
};

const fetchPost = async (url, body) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  };
  const res = await fetch(url, options);
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
    case 'GET_LOCATIONS':
      return fetchGet(`/api/getLocations`);
    case 'FETCH_POST':
      return fetchGet(`/api/post/${action.id}`);
    case 'FETCH_POSTS_BY_LOCATION':
      return fetchPost('/api/postsByLocation', { location: action.location });
    default:
      return new Promise((_r, reject) => reject());
  }
};

export default fetchApi;
