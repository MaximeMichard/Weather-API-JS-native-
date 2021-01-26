function get(url) {
    return new Promise(function (resolve) {
      let request = new XMLHttpRequest();
      request.onreadystatechange = function () {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
          resolve(JSON.parse(this.responseText));
        }
      };
      request.open("GET", url);
      request.send();
    });
  };