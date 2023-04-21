function showNotification() {
  Notification.requestPermission().then((result) => {
    console.log(result);
    if (result !== "granted") {
      Notification.requestPermission();
    }
    if (result === "granted") {
      var options = {
        body: "Here I try to share awesome web development tips with you.",
        icon: "/images/channels4_profile.jpg",
      };
      var notification = new Notification("Subscribe to Brogrammers", options);
    }
  });


}
