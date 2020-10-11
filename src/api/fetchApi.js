const fetchGet = async (url) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error();
  return await res.json();
};

const fetchApi = (action) => {
  switch (action.type) {
    case 'ALL_JOBS':
      return fetchGet(`/api/allJobs`);
    case 'FETCH_POST':
      return fetchGet(`/api/post/${action.id}`);
    default:
      return new Promise((_r, reject) => reject());
  }
};

export default fetchApi;
