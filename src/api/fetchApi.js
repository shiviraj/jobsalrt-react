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
      return fetchGet(`/api/allJobs/page/${action.currentPageNo}`);
    case 'ALL_JOBS_PAGECOUNT':
      return fetchGet(`/api/allJobs/pageCount`);
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
    case 'OTHERS':
      return fetchGet(`/api/others`);
    case 'UPCOMING':
      return fetchGet(`/api/upcoming`);
    case 'EXPIRING_SOON':
      return fetchGet(`/api/expiringSoon`);
    case 'FETCH_POST':
      return fetchGet(`/api/post/${action.url}`);
    case 'GET_LIST':
      return fetchPost(`/api/getList`, action.payload);
    case 'FETCH_POSTS_BY':
      return fetchPost('/api/postsBy', action.payload);
    case 'FETCH_POSTS_BY_PAGECOUNT':
      return fetchPost('/api/postsBy/pageCount', action.payload);
    case 'SHARE_FEEDBACK':
      return fetchPost('/api/shareFeedback', action.payload);
    case 'SEARCH':
      return fetchPost('/api/search', action.payload);
    case 'SEARCH_PAGECOUNT':
      return fetchPost('/api/search/pageCount', action.payload);
    default:
      return new Promise((_r, reject) => reject());
  }
};

export default fetchApi;
