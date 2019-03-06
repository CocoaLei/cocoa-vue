export default {
  async loadData(url) {
    const cvReq = new XMLHttpRequest();
    if (!cvReq && !url) return;
    cvReq.open('GET', url, true);
    cvReq.onreadystatechange = () => {
      // eslint-disable-next-line
      console.log(cvReq);
    };
    cvReq.onloadstart = (req) => {
      console.log(req);
    };
    cvReq.send();
  },
};
