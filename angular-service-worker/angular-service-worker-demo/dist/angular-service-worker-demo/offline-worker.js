self.addEventListener("sync", (event) => {
  if (event.tag === "submit-forms") {
    event.waitUntil(
      // Retrieve the stored form data from IndexedDB
      caches.open("form-data").then((cache) => {
        return cache.keys().then((keys) => {
          const promises = keys.map((key) => {
            return cache.match(key).then((response) => {
              return response.formData().then((formData) => {
                // Send the form data to the server
                return fetch("/submit-form", {
                  method: "POST",
                  body: formData,
                }).then(() => {
                  // Remove the stored form data from IndexedDB
                  return cache.delete(key);
                });
              });
            });
          });
          return Promise.all(promises);
        });
      })
    );
  }
});

//listn to event fetch
self.addEventListener("fetch", (event) => {
  if (event.request.method === "POST") {
    // Store the form data in IndexedDB
    event.respondWith(
      caches.open("form-data").then((cache) => {
        return cache.match(event.request).then(async (response) => {
          let data = await event.request.clone().text();
          const cacheName = "form-data-cache";
          caches.open(cacheName).then((cache) => {
            cache.put(
              new Request("/form-data"),
              new Response(JSON.stringify(data))
            );
          });
        });
      })
    );
  }
});
