let PersonName: String= "Muhammad Usama";
console.log("lowercase:", PersonName.toLowerCase());
console.log("uppercase:", PersonName.toLocaleUpperCase());
console.log("Titlecase:", PersonName.replace(/\)bw/g,c => c.toUpperCase()));