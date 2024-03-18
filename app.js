var PersonName = "Muhammad Usama";
console.log("lowercase:", PersonName.toLowerCase());
console.log("uppercase:", PersonName.toLocaleUpperCase());
console.log("Titlecase:", PersonName.replace(/\)bw/g, function (c) { return c.toUpperCase(); }));
