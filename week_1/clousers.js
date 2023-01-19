function parent() {
    const message = "Hello World!!! I am Dhruvi";
    function child() {
      alert(message);
    }
    child();
  }
  parent();
  
  const childFN = parent();
  childFN();