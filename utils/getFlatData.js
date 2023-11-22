
const getFlatData = (apiData) => {
  if (apiData && apiData.pages) {
    const data = apiData.pages?.flatMap((page) =>
      page.data.data ? page.data.data : page
    );

    console.log(apiData,'apiiiiiii')

    return data;
  } else {
    return [];
  }
};

export default getFlatData;
