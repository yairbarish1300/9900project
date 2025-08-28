// const { log } = require('console');
// const app = require('http')

// const users = [
//   {
//     id: 0,
//     email: "langroth@genmex.com",
//     isActive: false,
//     phone: "+1 (832) 418-2630",
//     address: "673 Herzl Street, Wilsonia, Kansas, 1685",
//     age: 29
//   },
//   {
//     id: 1,
//     email: "langroth@genmex.com",
//     isActive: true,
//     phone: "+1 (820) 461-2577",
//     address: "815 Porter Avenue, Klondike, Georgia, 2039",
//     age: 29
//   },
//   {
//     id: 2,
//     email: "langroth@genmex.com",
//     isActive: true,
//     phone: "+1 (878) 461-3565",
//     address: "204 Mill Avenue, Diaperville, Oklahoma, 8343",
//     age: 33
//   },
//   {
//     id: 3,
//     email: "langroth@genmex.com",
//     isActive: false,
//     phone: "+1 (984) 508-3675",
//     address: "224 Lawton Street, Osage, Washington, 766",
//     age: 29
//   },
//   {
//     id: 4,
//     email: "langroth@genmex.com",
//     isActive: true,
//     phone: "+1 (939) 492-2632",
//     address: "289 Suydam Street, Windsor, Arkansas, 1552",
//     age: 28
//   },
//   {
//     id: 5,
//     email: "langroth@genmex.com",
//     isActive: false,
//     phone: "+1 (946) 471-3994",
//     address: "191 Elliott Place, Faxon, New Hampshire, 6227",
//     age: 32
//   },
//   {
//     id: 6,
//     email: "langroth@genmex.com",
//     isActive: false,
//     phone: "+1 (880) 415-3359",
//     address: "764 Roosevelt Court, Ferney, West Virginia, 6922",
//     age: 39
//   },
//   {
//     id: 7,
//     email: "langroth@genmex.com",
//     isActive: true,
//     phone: "+1 (928) 479-2312",
//     address: "467 Hampton Place, Saddlebrooke, Kentucky, 6603",
//     age: 38
//   },
//   {
//     id: 8,
//     email: "langroth@genmex.com",
//     isActive: false,
//     phone: "+1 (959) 553-2377",
//     address: "440 Etna Street, Darrtown, Marshall Islands, 5137",
//     age: 20
//   },
//   {
//     id: 9,
//     email: "langroth@genmex.com",
//     isActive: true,
//     phone: "+1 (819) 570-3181",
//     address: "598 Clifton Place, Gardiner, Pennsylvania, 5195",
//     age: 27
//   }
// ];


// const app = require("http");
// const { users } = require("./users");

// const handlerResponse = (res, data) => {
//   res.writeHead(200, { "content-type": "application/json" });
//   res.write(data);
//   return res.end();
// };
// const findUser = (id) => {
//   if (!id) {
//     return users;
//   }
//   return users.find((u) => u.id === id);
// };

// const getIdFromQueryString = (userUrl) => {
//   if (!userUrl.includes("?")) {
//     return null;
//   }
//   const queryString = userUrl.split("?")[1];
//   const parameter = queryString.split("=");
//   const key = parameter[0];
//   const value = parameter[1];
//   if (key === "id") {
//     return Number(value);
//   }
//   return null;
// };

// function serverHandler(req, res) {
//   if (req.url.startsWith("/users")) {
//     const id = getIdFromQueryString(req.url);
//     const user = findUser(id);
//     return handlerResponse(
//       res,
//       JSON.stringify({
//         user
//       })
//     );
//   }
//   return res.end();
// }

// const server = app.createServer(serverHandler);

// server.listen(3000, () => {
//   console.log("Server up and running");
// });


// const users = [

//  {

//     age: 28,

//     name: "Chris Adams"

//  },

//  {

//     age: 30,

//     name: "Christina Butler"

//  },

//  {

//     age: 33,

//     name: "Marietta Walters"

//  },

//  {

//     age: 25,

//     name: "Sharlene Gutierrez"

//  },

//  {

//     age: 34,

//     name: "Moreno Davis"

//  },

//  {

//     age: 40,

//     name: "Buchanan Cantrell"

//  },

//  {

//     age: 34,

//     name: "Deena Fulton"

//  },

//  {

//     age: 29,

//     name: "Kristen Talley"

//  },

//  {

//     age: 30,

//     name: "Riley Austin"

//  },

//  {

//     age: 38,

//     name: "Cole Conrad"

//  },

//  {

//     age: 40,

//     name: "Flores Wynn"

//  },

//  {

//     age: 38,

//     name: "Rocha Mayer"

//  },

//  {

//     age: 31,

//     name: "Duke Doyle"

//  },

//  {

//     age: 20,

//     name: "Palmer Fry"

//  },

//  {

//     age: 34,

//     name: "Nancy Navarro"

//  },

//  {

//     age: 32,

//     name: "Emma Estrada"

//  },

//  {

//     age: 24,

//     name: "Molina Bowman"

//  },

//  {

//     age: 24,

//     name: "Dorsey Conway"

//  },

//  {

//     age: 23,

//     name: "Sosa Humphrey"

//  },

//  {

//     age: 27,

//     name: "Edith Moss"

//  },

//  {

//     age: 32,

//     name: "Molly Brady"

//  },

//  {

//     age: 37,

//     name: "Cheri Head"

//  },

//  {

//     age: 23,

//     name: "Suzette Walker"

//  },

//  {

//     age: 27,

//     name: "Horne Holmes"

//  },

//  {

//     age: 22,

//     name: "Sara Deleon"

//  },

//  {

//     age: 32,

//     name: "Dixie Witt"

//  },

//  {

//     age: 32,

//     name: "Shana Morgan"

//  },

//  {

//     age: 21,

//     name: "Dena Bender"

//  },

//  {

//     age: 23,

//     name: "Baker Dennis"

//  },

//  {

//     age: 38,

//     name: "Della Gillespie"

//  }

// ];


// const http = require("http");
// const { users } = require("./users");


// const handlerResponse = (res, data) => {
//   res.writeHead(200, { "Content-Type": "application/json" });
//   res.write(data);
//   return res.end();
// };

// const findUsers = (searchTerm) => {
//   if (!searchTerm) {
//     return users; 
//   }
//   return users.filter((u) => u.name.startsWith(searchTerm));
// };

// const getNameFromQueryString = (url) => {
//   if (!url.includes("?")) return null;
//   const queryString = url.split("?")[1];
//   const [key, value] = queryString.split("=");
//   if (key === "name") return value;
//   return null;
// };

// function serverHandler(req, res) {
//   if (req.url.startsWith("/users")) {
//     const name = getNameFromQueryString(req.url);
//     const user = findUsers(name);
//     return handlerResponse(res, JSON.stringify({ user }));
//   }

//   res.writeHead(404, { "Content-Type": "application/json" });
//   res.end(JSON.stringify({ error: "Not Found" }));
// }

// const server = http.createServer(serverHandler);

// server.listen(3000, () => {
//   console.log("Server up and running");
// });







// const app = require("http");
// const { users } = require("./users");

// const handlerResponse = (res, data) => {
//   res.writeHead(200, { "content-type": "application/json" });
//   res.write(data);
//   return res.end();
// };

// const findUsers = (searchTerm) => {
//   if (!searchTerm) {
//     return users; // אם לא הכניסו name בכלל נחזיר את כולם
//   }
//   return users.filter((u) => u.name.toLowerCase().startsWith(searchTerm.toLowerCase()));
// };

// const getNameFromQueryString = (userUrl) => {
//   if (!userUrl.includes("?")) {
//     return null;
//   }
//   const queryString = userUrl.split("?")[1]; // לוקחים את החלק אחרי ה-?
//   const parameter = queryString.split("="); // מפרקים ל-key=value
//   const key = parameter[0];
//   const value = parameter[1];
//   if (key === "name") {
//     return value;
//   }
//   return null;
// };

// function serverHandler(req, res) {
//   if (req.url.startsWith("/users")) {
//     const searchTerm = getNameFromQueryString(req.url); // השם שהגיע מה-query
//     const result = findUsers(searchTerm); // כל המשתמשים שמתחילים בזה
//     return handlerResponse(res, JSON.stringify({ users: result }));
//   }

//   // ברירת מחדל
//   res.writeHead(404, { "content-type": "text/plain" });
//   return res.end("Not Found");
// }

// // יצירת השרת
// const server = app.createServer(serverHandler);

// server.listen(3000, () => {
//   console.log("Server up and running on http://localhost:3000");
// });


// const users = [

//   {

//     age: 28,

//     name: "Chris Adams"

//   },

//   {

//     age: 30,

//     name: "Christina Butler"

//   },

//   {

//     age: 33,

//     name: "Marietta Walters"

//   },

//   {

//     age: 25,

//     name: "Sharlene Gutierrez"

//   },

//   {

//     age: 34,

//     name: "Moreno Davis"

//   },

//   {

//     age: 40,

//     name: "Buchanan Cantrell"

//   },

//   {

//     age: 34,

//     name: "Deena Fulton"

//   },

//   {

//     age: 29,

//     name: "Kristen Talley"

//   },

//   {

//     age: 30,

//     name: "Riley Austin"

//   },

//   {

//     age: 38,

//     name: "Cole Conrad"

//   },

//   {

//     age: 40,

//     name: "Flores Wynn"

//   },

//   {

//     age: 38,

//     name: "Rocha Mayer"

//   },

//   {

//     age: 31,

//     name: "Duke Doyle"

//   },

//   {

//     age: 20,

//     name: "Palmer Fry"

//   },

//   {

//     age: 34,

//     name: "Nancy Navarro"

//   },

//   {

//     age: 32,

//     name: "Emma Estrada"

//   },

//   {

//     age: 24,

//     name: "Molina Bowman"

//   },

//   {

//     age: 24,

//     name: "Dorsey Conway"

//   },

//   {

//     age: 23,

//     name: "Sosa Humphrey"

//   },

//   {

//     age: 27,

//     name: "Edith Moss"

//   },

//   {

//     age: 32,

//     name: "Molly Brady"

//   },

//   {

//     age: 37,

//     name: "Cheri Head"

//   },

//   {

//     age: 23,

//     name: "Suzette Walker"

//   },

//   {

//     age: 27,

//     name: "Horne Holmes"

//   },

//   {

//     age: 22,

//     name: "Sara Deleon"

//   },

//   {

//     age: 32,

//     name: "Dixie Witt"

//   },

//   {

//     age: 32,

//     name: "Shana Morgan"

//   },

//   {

//     age: 21,

//     name: "Dena Bender"

//   },

//   {

//     age: 23,

//     name: "Baker Dennis"

//   },

//   {

//     age: 38,

//     name: "Della Gillespie"

//   }

// ];



// const app = require("http");
// const { users } = require("./users");


// const handlerResponse = (res, data) => {
//   res.writeHead(200, { "content-type": "application/json" });
//   res.write(data);
//   return res.end();
// };

// // עכשיו הפונקציה מקבלת גם name וגם age
// const findUsers = (name, age) => {
//   return users.filter((u) => {
//     let matchName = true;
//     let matchAge = true;

//     if (name) {
//       matchName = u.name.toLowerCase().startsWith(name.toLowerCase());
//     }

//     if (age) {
//       matchAge = String(u.age).startsWith(String(age));
//     }

//     return matchName && matchAge; // שניהם צריכים להתאים
//   });
// };


// function getQueryParams(url) {
//   const myUrl = new URL(url, "http://localhost:3000"); 
//   return {
//     name: myUrl.searchParams.get("name"),
//     age: myUrl.searchParams.get("age"),
//   };
// }


// function serverHandler(req, res) {
//   if (req.url.startsWith("/users")) {
//     const { name, age } = getQueryParams(req.url);
//     const result = findUsers(name, age);
//     return handlerResponse(res, JSON.stringify({ users: result }));
//   }

//   res.writeHead(404, { "content-type": "text/plain" });
//   return res.end("Not Found");
// }



// const server = app.createServer(serverHandler);

// server.listen(3000, () => {
//   console.log("Server up and running on http://localhost:3000");
// });




// const users = [

//  {

//     age: 28,

//     name: "Chris Adams"

//  },

//  {

//     age: 30,

//     name: "Christina Butler"

//  },

//  {

//     age: 33,

//     name: "Marietta Walters"

//  },

//  {

//     age: 25,

//     name: "Sharlene Gutierrez"

//  },

//  {

//     age: 34,

//     name: "Moreno Davis"

//  },

//  {

//     age: 40,

//     name: "Buchanan Cantrell"

//  },

//  {

//     age: 34,

//     name: "Deena Fulton"

//  },

//  {

//     age: 29,

//     name: "Kristen Talley"

//  },

//  {

//     age: 30,

//     name: "Riley Austin"

//  },

//  {

//     age: 38,

//     name: "Cole Conrad"

//  },

//  {

//     age: 40,

//     name: "Flores Wynn"

//  },

//  {

//     age: 38,

//     name: "Rocha Mayer"

//  },

//  {

//     age: 31,

//     name: "Duke Doyle"

//  },

//  {

//     age: 20,

//     name: "Palmer Fry"

//  },

//  {

//     age: 34,

//     name: "Nancy Navarro"

//  },

//  {

//     age: 32,

//     name: "Emma Estrada"

//  },

//  {

//     age: 24,

//     name: "Molina Bowman"

//  },

//  {

//     age: 24,

//     name: "Dorsey Conway"

//  },

//  {

//     age: 23,

//     name: "Sosa Humphrey"

//  },

//  {

//     age: 27,

//     name: "Edith Moss"

//  },

//  {

//     age: 32,

//     name: "Molly Brady"

//  },

//  {

//     age: 37,

//     name: "Cheri Head"

//  },

//  {

//     age: 23,

//     name: "Suzette Walker"

//  },

//  {

//     age: 27,

//     name: "Horne Holmes"

//  },

//  {

//     age: 22,

//     name: "Sara Deleon"

//  },

//  {

//     age: 32,

//     name: "Dixie Witt"

//  },

//  {

//     age: 32,

//     name: "Shana Morgan"

//  },

//  {

//     age: 21,

//     name: "Dena Bender"

//  },

//  {

//     age: 23,

//     name: "Baker Dennis"

//  },

//  {

//     age: 38,

//     name: "Della Gillespie"

//  }

// ];




// const app = require("http");
// const { users } = require("./users");

// const handlerResponse = (res, data) => {
//   res.writeHead(200, { "content-type": "application/json" });
//   res.write(data);
//   return res.end();
// };

// const findUsers = (query) => {
//   const { min, max } = query;
//   if (min && max) {
//     return users.filter((u) => u.age > Number(min) && u.age < Number(max));
//   }
//   return [];
// };

// const getQueryStringObject = (userUrl) => {
//   const queryString = userUrl.split("?")[1];
//   const parameters = queryString.split("&");
//   const keyValuePairs = parameters.map((x) => x.split("="));
//   const result = {};
//   for (let i = 0; i < keyValuePairs.length; i++) {
//     result[keyValuePairs[i][0]] = keyValuePairs[i][1];
//   }
//   return result;
// };

// function serverHandler(req, res) {
//   if (req.url.startsWith("/users")) {
//     const query = getQueryStringObject(req.url);
//     const users = findUsers(query);
//     return handlerResponse(
//       res,
//       JSON.stringify({
//         users
//       })
//     );
//   }
//   return res.end();
// }

// const server = app.createServer(serverHandler);

// server.listen(3000, () => {
//   console.log("Server up and running");
// });



// const countries = [

//   {

//     name: "Afghanistan",

//     population: 40218234,

//     area: 652230

//   },

//   {

//     name: "Åland Islands",

//     population: 28875,

//     area: 1580

//   },

//   {

//     name: "Albania",

//     population: 2837743,

//     area: 28748

//   },

//   {

//     name: "Algeria",

//     population: 44700000,

//     area: 2381741

//   },

//   {

//     name: "American Samoa",

//     population: 55197,

//     area: 199

//   },

//   {

//     name: "Andorra",

//     population: 77265,

//     area: 468

//   },

//   {

//     name: "Angola",

//     population: 32866268,

//     area: 1246700

//   },

//   {

//     name: "Anguilla",

//     population: 13452,

//     area: 91

//   },

//   {

//     name: "Antarctica",

//     population: 1000,

//     area: 14000000

//   },

//   {

//     name: "Antigua and Barbuda",

//     population: 97928,

//     area: 442

//   },

//   {

//     name: "Argentina",

//     population: 45376763,

//     area: 2780400

//   },

//   {

//     name: "Armenia",

//     population: 2963234,

//     area: 29743

//   },

//   {

//     name: "Aruba",

//     population: 106766,

//     area: 180

//   },

//   {

//     name: "Australia",

//     population: 25687041,

//     area: 7692024

//   },

//   {

//     name: "Austria",

//     population: 8917205,

//     area: 83871

//   },

//   {

//     name: "Azerbaijan",

//     population: 10110116,

//     area: 86600

//   },

//   {

//     name: "Bahamas",

//     population: 393248,

//     area: 13943

//   },

//   {

//     name: "Bahrain",

//     population: 1701583,

//     area: 765

//   },

//   {

//     name: "Bangladesh",

//     population: 164689383,

//     area: 147570

//   },

//   {

//     name: "Barbados",

//     population: 287371,

//     area: 430

//   },

//   {

//     name: "Belarus",

//     population: 9398861,

//     area: 207600

//   },

//   {

//     name: "Belgium",

//     population: 11555997,

//     area: 30528

//   },

//   {

//     name: "Belize",

//     population: 397621,

//     area: 22966

//   },

//   {

//     name: "Benin",

//     population: 12123198,

//     area: 112622

//   },

//   {

//     name: "Bermuda",

//     population: 63903,

//     area: 54

//   },

//   {

//     name: "Bhutan",

//     population: 771612,

//     area: 38394

//   },

//   {

//     name: "Bolivia (Plurinational State of)",

//     population: 11673029,

//     area: 1098581

//   },

//   {

//     name: "Bonaire, Sint Eustatius and Saba",

//     population: 17408,

//     area: 294

//   },

//   {

//     name: "Bosnia and Herzegovina",

//     population: 3280815,

//     area: 51209

//   },

//   {

//     name: "Botswana",

//     population: 2351625,

//     area: 582000

//   },

//   {

//     name: "Bouvet Island",

//     population: 0,

//     area: 49

//   },

//   {

//     name: "Brazil",

//     population: 212559409,

//     area: 8515767

//   },

//   {

//     name: "British Indian Ocean Territory",

//     population: 3000,

//     area: 60

//   },

//   {

//     name: "United States Minor Outlying Islands",

//     population: 300

//   },

//   {

//     name: "Virgin Islands (British)",

//     population: 30237,

//     area: 151

//   },

//   {

//     name: "Virgin Islands (U.S.)",

//     population: 106290,

//     area: 346.36

//   },

//   {

//     name: "Brunei Darussalam",

//     population: 437483,

//     area: 5765

//   },

//   {

//     name: "Bulgaria",

//     population: 6927288,

//     area: 110879

//   },

//   {

//     name: "Burkina Faso",

//     population: 20903278,

//     area: 272967

//   },

//   {

//     name: "Burundi",

//     population: 11890781,

//     area: 27834

//   },

//   {

//     name: "Cambodia",

//     population: 16718971,

//     area: 181035

//   },

//   {

//     name: "Cameroon",

//     population: 26545864,

//     area: 475442

//   },

//   {

//     name: "Canada",

//     population: 38005238,

//     area: 9984670

//   },

//   {

//     name: "Cabo Verde",

//     population: 555988,

//     area: 4033

//   },

//   {

//     name: "Cayman Islands",

//     population: 65720,

//     area: 264

//   },

//   {

//     name: "Central African Republic",

//     population: 4829764,

//     area: 622984

//   },

//   {

//     name: "Chad",

//     population: 16425859,

//     area: 1284000

//   },

//   {

//     name: "Chile",

//     population: 19116209,

//     area: 756102

//   },

//   {

//     name: "China",

//     population: 1402112000,

//     area: 9640011

//   },

//   {

//     name: "Christmas Island",

//     population: 2072,

//     area: 135

//   },

//   {

//     name: "Cocos (Keeling) Islands",

//     population: 550,

//     area: 14

//   },

//   {

//     name: "Colombia",

//     population: 50882884,

//     area: 1141748

//   },

//   {

//     name: "Comoros",

//     population: 869595,

//     area: 1862

//   },

//   {

//     name: "Congo",

//     population: 5518092,

//     area: 342000

//   },

//   {

//     name: "Congo (Democratic Republic of the)",

//     population: 89561404,

//     area: 2344858

//   },

//   {

//     name: "Cook Islands",

//     population: 18100,

//     area: 236

//   },

//   {

//     name: "Costa Rica",

//     population: 5094114,

//     area: 51100

//   },

//   {

//     name: "Croatia",

//     population: 4047200,

//     area: 56594

//   },

//   {

//     name: "Cuba",

//     population: 11326616,

//     area: 109884

//   },

//   {

//     name: "Curaçao",

//     population: 155014,

//     area: 444

//   },

//   {

//     name: "Cyprus",

//     population: 1207361,

//     area: 9251

//   },

//   {

//     name: "Czech Republic",

//     population: 10698896,

//     area: 78865

//   },

//   {

//     name: "Denmark",

//     population: 5831404,

//     area: 43094

//   },

//   {

//     name: "Djibouti",

//     population: 988002,

//     area: 23200

//   },

//   {

//     name: "Dominica",

//     population: 71991,

//     area: 751

//   },

//   {

//     name: "Dominican Republic",

//     population: 10847904,

//     area: 48671

//   },

//   {

//     name: "Ecuador",

//     population: 17643060,

//     area: 276841

//   },

//   {

//     name: "Egypt",

//     population: 102334403,

//     area: 1002450

//   },

//   {

//     name: "El Salvador",

//     population: 6486201,

//     area: 21041

//   },

//   {

//     name: "Equatorial Guinea",

//     population: 1402985,

//     area: 28051

//   },

//   {

//     name: "Eritrea",

//     population: 5352000,

//     area: 117600

//   },

//   {

//     name: "Estonia",

//     population: 1331057,

//     area: 45227

//   },

//   {

//     name: "Ethiopia",

//     population: 114963583,

//     area: 1104300

//   },

//   {

//     name: "Falkland Islands (Malvinas)",

//     population: 2563,

//     area: 12173

//   },

//   {

//     name: "Faroe Islands",

//     population: 48865,

//     area: 1393

//   },

//   {

//     name: "Fiji",

//     population: 896444,

//     area: 18272

//   },

//   {

//     name: "Finland",

//     population: 5530719,

//     area: 338424

//   },

//   {

//     name: "France",

//     population: 67391582,

//     area: 640679

//   },

//   {

//     name: "French Guiana",

//     population: 254541

//   },

//   {

//     name: "French Polynesia",

//     population: 280904,

//     area: 4167

//   },

//   {

//     name: "French Southern Territories",

//     population: 140,

//     area: 7747

//   },

//   {

//     name: "Gabon",

//     population: 2225728,

//     area: 267668

//   },

//   {

//     name: "Gambia",

//     population: 2416664,

//     area: 11295

//   },

//   {

//     name: "Georgia",

//     population: 3714000,

//     area: 69700

//   },

//   {

//     name: "Germany",

//     population: 83240525,

//     area: 357114

//   },

//   {

//     name: "Ghana",

//     population: 31072945,

//     area: 238533

//   },

//   {

//     name: "Gibraltar",

//     population: 33691,

//     area: 6

//   },

//   {

//     name: "Greece",

//     population: 10715549,

//     area: 131990

//   },

//   {

//     name: "Greenland",

//     population: 56367,

//     area: 2166086

//   },

//   {

//     name: "Grenada",

//     population: 112519,

//     area: 344

//   },

//   {

//     name: "Guadeloupe",

//     population: 400132

//   },

//   {

//     name: "Guam",

//     population: 168783,

//     area: 549

//   },

//   {

//     name: "Guatemala",

//     population: 16858333,

//     area: 108889

//   },

//   {

//     name: "Guernsey",

//     population: 62999,

//     area: 78

//   },

//   {

//     name: "Guinea",

//     population: 13132792,

//     area: 245857

//   },

//   {

//     name: "Guinea-Bissau",

//     population: 1967998,

//     area: 36125

//   },

//   {

//     name: "Guyana",

//     population: 786559,

//     area: 214969

//   },

//   {

//     name: "Haiti",

//     population: 11402533,

//     area: 27750

//   },

//   {

//     name: "Heard Island and McDonald Islands",

//     population: 0,

//     area: 412

//   },

//   {

//     name: "Vatican City",

//     population: 451,

//     area: 0.44

//   },

//   {

//     name: "Honduras",

//     population: 9904608,

//     area: 112492

//   },

//   {

//     name: "Hungary",

//     population: 9749763,

//     area: 93028

//   },

//   {

//     name: "Hong Kong",

//     population: 7481800,

//     area: 1104

//   },

//   {

//     name: "Iceland",

//     population: 366425,

//     area: 103000

//   },

//   {

//     name: "India",

//     population: 1380004385,

//     area: 3287590

//   },

//   {

//     name: "Indonesia",

//     population: 273523621,

//     area: 1904569

//   },

//   {

//     name: "Ivory Coast",

//     population: 26378275,

//     area: 322463

//   },

//   {

//     name: "Iran (Islamic Republic of)",

//     population: 83992953,

//     area: 1648195

//   },

//   {

//     name: "Iraq",

//     population: 40222503,

//     area: 438317

//   },

//   {

//     name: "Ireland",

//     population: 4994724,

//     area: 70273

//   },

//   {

//     name: "Isle of Man",

//     population: 85032,

//     area: 572

//   },

//   {

//     name: "Israel",

//     population: 9216900,

//     area: 20770

//   },

//   {

//     name: "Italy",

//     population: 59554023,

//     area: 301336

//   },

//   {

//     name: "Jamaica",

//     population: 2961161,

//     area: 10991

//   },

//   {

//     name: "Japan",

//     population: 125836021,

//     area: 377930

//   },

//   {

//     name: "Jersey",

//     population: 100800,

//     area: 116

//   },

//   {

//     name: "Jordan",

//     population: 10203140,

//     area: 89342

//   },

//   {

//     name: "Kazakhstan",

//     population: 18754440,

//     area: 2724900

//   },

//   {

//     name: "Kenya",

//     population: 53771300,

//     area: 580367

//   },

//   {

//     name: "Kiribati",

//     population: 119446,

//     area: 811

//   },

//   {

//     name: "Kuwait",

//     population: 4270563,

//     area: 17818

//   },

//   {

//     name: "Kyrgyzstan",

//     population: 6591600,

//     area: 199951

//   },

//   {

//     name: "Lao People's Democratic Republic",

//     population: 7275556,

//     area: 236800

//   },

//   {

//     name: "Latvia",

//     population: 1901548,

//     area: 64559

//   },

//   {

//     name: "Lebanon",

//     population: 6825442,

//     area: 10452

//   },

//   {

//     name: "Lesotho",

//     population: 2142252,

//     area: 30355

//   },

//   {

//     name: "Liberia",

//     population: 5057677,

//     area: 111369

//   },

//   {

//     name: "Libya",

//     population: 6871287,

//     area: 1759540

//   },

//   {

//     name: "Liechtenstein",

//     population: 38137,

//     area: 160

//   },

//   {

//     name: "Lithuania",

//     population: 2794700,

//     area: 65300

//   },

//   {

//     name: "Luxembourg",

//     population: 632275,

//     area: 2586

//   },

//   {

//     name: "Macao",

//     population: 649342,

//     area: 30

//   },

//   {

//     name: "North Macedonia",

//     population: 2083380,

//     area: 25713

//   },

//   {

//     name: "Madagascar",

//     population: 27691019,

//     area: 587041

//   },

//   {

//     name: "Malawi",

//     population: 19129955,

//     area: 118484

//   },

//   {

//     name: "Malaysia",

//     population: 32365998,

//     area: 330803

//   },

//   {

//     name: "Maldives",

//     population: 540542,

//     area: 300

//   },

//   {

//     name: "Mali",

//     population: 20250834,

//     area: 1240192

//   },

//   {

//     name: "Malta",

//     population: 525285,

//     area: 316

//   },

//   {

//     name: "Marshall Islands",

//     population: 59194,

//     area: 181

//   },

//   {

//     name: "Martinique",

//     population: 378243

//   },

//   {

//     name: "Mauritania",

//     population: 4649660,

//     area: 1030700

//   },

//   {

//     name: "Mauritius",

//     population: 1265740,

//     area: 2040

//   },

//   {

//     name: "Mayotte",

//     population: 226915

//   },

//   {

//     name: "Mexico",

//     population: 128932753,

//     area: 1964375

//   },

//   {

//     name: "Micronesia (Federated States of)",

//     population: 115021,

//     area: 702

//   },

//   {

//     name: "Moldova (Republic of)",

//     population: 2617820,

//     area: 33846

//   },

//   {

//     name: "Monaco",

//     population: 39244,

//     area: 2.02

//   },

//   {

//     name: "Mongolia",

//     population: 3278292,

//     area: 1564110

//   },

//   {

//     name: "Montenegro",

//     population: 621718,

//     area: 13812

//   },

//   {

//     name: "Montserrat",

//     population: 4922,

//     area: 102

//   },

//   {

//     name: "Morocco",

//     population: 36910558,

//     area: 446550

//   },

//   {

//     name: "Mozambique",

//     population: 31255435,

//     area: 801590

//   },

//   {

//     name: "Myanmar",

//     population: 54409794,

//     area: 676578

//   },

//   {

//     name: "Namibia",

//     population: 2540916,

//     area: 825615

//   },

//   {

//     name: "Nauru",

//     population: 10834,

//     area: 21

//   },

//   {

//     name: "Nepal",

//     population: 29136808,

//     area: 147181

//   },

//   {

//     name: "Netherlands",

//     population: 17441139,

//     area: 41850

//   },

//   {

//     name: "New Caledonia",

//     population: 271960,

//     area: 18575

//   },

//   {

//     name: "New Zealand",

//     population: 5084300,

//     area: 270467

//   },

//   {

//     name: "Nicaragua",

//     population: 6624554,

//     area: 130373

//   },

//   {

//     name: "Niger",

//     population: 24206636,

//     area: 1267000

//   },

//   {

//     name: "Nigeria",

//     population: 206139587,

//     area: 923768

//   },

//   {

//     name: "Niue",

//     population: 1470,

//     area: 260

//   },

//   {

//     name: "Norfolk Island",

//     population: 2302,

//     area: 36

//   },

//   {

//     name: "Korea (Democratic People's Republic of)",

//     population: 25778815,

//     area: 120538

//   },

//   {

//     name: "Northern Mariana Islands",

//     population: 57557,

//     area: 464

//   },

//   {

//     name: "Norway",

//     population: 5379475,

//     area: 323802

//   },

//   {

//     name: "Oman",

//     population: 5106622,

//     area: 309500

//   },

//   {

//     name: "Pakistan",

//     population: 220892331,

//     area: 881912

//   },

//   {

//     name: "Palau",

//     population: 18092,

//     area: 459

//   },

//   {

//     name: "Palestine, State of",

//     population: 4803269

//   },

//   {

//     name: "Panama",

//     population: 4314768,

//     area: 75417

//   },

//   {

//     name: "Papua New Guinea",

//     population: 8947027,

//     area: 462840

//   },

//   {

//     name: "Paraguay",

//     population: 7132530,

//     area: 406752

//   },

//   {

//     name: "Peru",

//     population: 32971846,

//     area: 1285216

//   },

//   {

//     name: "Philippines",

//     population: 109581085,

//     area: 342353

//   },

//   {

//     name: "Pitcairn",

//     population: 56,

//     area: 47

//   },

//   {

//     name: "Poland",

//     population: 37950802,

//     area: 312679

//   },

//   {

//     name: "Portugal",

//     population: 10305564,

//     area: 92090

//   },

//   {

//     name: "Puerto Rico",

//     population: 3194034,

//     area: 8870

//   },

//   {

//     name: "Qatar",

//     population: 2881060,

//     area: 11586

//   },

//   {

//     name: "Republic of Kosovo",

//     population: 1775378,

//     area: 10908

//   },

//   {

//     name: "Réunion",

//     population: 840974

//   },

//   {

//     name: "Romania",

//     population: 19286123,

//     area: 238391

//   },

//   {

//     name: "Russian Federation",

//     population: 144104080,

//     area: 17124442

//   },

//   {

//     name: "Rwanda",

//     population: 12952209,

//     area: 26338

//   },

//   {

//     name: "Saint Barthélemy",

//     population: 9417,

//     area: 21

//   },

//   {

//     name: "Saint Helena, Ascension and Tristan da Cunha",

//     population: 4255

//   },

//   {

//     name: "Saint Kitts and Nevis",

//     population: 53192,

//     area: 261

//   },

//   {

//     name: "Saint Lucia",

//     population: 183629,

//     area: 616

//   },

//   {

//     name: "Saint Martin (French part)",

//     population: 38659,

//     area: 53

//   },

//   {

//     name: "Saint Pierre and Miquelon",

//     population: 6069,

//     area: 242

//   },

//   {

//     name: "Saint Vincent and the Grenadines",

//     population: 110947,

//     area: 389

//   },

//   {

//     name: "Samoa",

//     population: 198410,

//     area: 2842

//   },

//   {

//     name: "San Marino",

//     population: 33938,

//     area: 61

//   },

//   {

//     name: "Sao Tome and Principe",

//     population: 219161,

//     area: 964

//   },

//   {

//     name: "Saudi Arabia",

//     population: 34813867,

//     area: 2149690

//   },

//   {

//     name: "Senegal",

//     population: 16743930,

//     area: 196722

//   },

//   {

//     name: "Serbia",

//     population: 6908224,

//     area: 88361

//   },

//   {

//     name: "Seychelles",

//     population: 98462,

//     area: 452

//   },

//   {

//     name: "Sierra Leone",

//     population: 7976985,

//     area: 71740

//   },

//   {

//     name: "Singapore",

//     population: 5685807,

//     area: 710

//   },

//   {

//     name: "Sint Maarten (Dutch part)",

//     population: 40812,

//     area: 34

//   },

//   {

//     name: "Slovakia",

//     population: 5458827,

//     area: 49037

//   },

//   {

//     name: "Slovenia",

//     population: 2100126,

//     area: 20273

//   },

//   {

//     name: "Solomon Islands",

//     population: 686878,

//     area: 28896

//   },

//   {

//     name: "Somalia",

//     population: 15893219,

//     area: 637657

//   },

//   {

//     name: "South Africa",

//     population: 59308690,

//     area: 1221037

//   },

//   {

//     name: "South Georgia and the South Sandwich Islands",

//     population: 30

//   },

//   {

//     name: "Korea (Republic of)",

//     population: 51780579,

//     area: 100210

//   },

//   {

//     name: "Spain",

//     population: 47351567,

//     area: 505992

//   },

//   {

//     name: "Sri Lanka",

//     population: 21919000,

//     area: 65610

//   },

//   {

//     name: "Sudan",

//     population: 43849269,

//     area: 1886068

//   },

//   {

//     name: "South Sudan",

//     population: 11193729,

//     area: 619745

//   },

//   {

//     name: "Suriname",

//     population: 586634,

//     area: 163820

//   },

//   {

//     name: "Svalbard and Jan Mayen",

//     population: 2562

//   },

//   {

//     name: "Swaziland",

//     population: 1160164,

//     area: 17364

//   },

//   {

//     name: "Sweden",

//     population: 10353442,

//     area: 450295

//   },

//   {

//     name: "Switzerland",

//     population: 8636896,

//     area: 41284

//   },

//   {

//     name: "Syrian Arab Republic",

//     population: 17500657,

//     area: 185180

//   },

//   {

//     name: "Taiwan",

//     population: 23503349,

//     area: 36193

//   },

//   {

//     name: "Tajikistan",

//     population: 9537642,

//     area: 143100

//   },

//   {

//     name: "Tanzania, United Republic of",

//     population: 59734213,

//     area: 945087

//   },

//   {

//     name: "Thailand",

//     population: 69799978,

//     area: 513120

//   },

//   {

//     name: "Timor-Leste",

//     population: 1318442,

//     area: 14874

//   },

//   {

//     name: "Togo",

//     population: 8278737,

//     area: 56785

//   },

//   {

//     name: "Tokelau",

//     population: 1411,

//     area: 12

//   },

//   {

//     name: "Tonga",

//     population: 105697,

//     area: 747

//   },

//   {

//     name: "Trinidad and Tobago",

//     population: 1399491,

//     area: 5130

//   },

//   {

//     name: "Tunisia",

//     population: 11818618,

//     area: 163610

//   },

//   {

//     name: "Turkey",

//     population: 84339067,

//     area: 783562

//   },

//   {

//     name: "Turkmenistan",

//     population: 6031187,

//     area: 488100

//   },

//   {

//     name: "Turks and Caicos Islands",

//     population: 38718,

//     area: 948

//   },

//   {

//     name: "Tuvalu",

//     population: 11792,

//     area: 26

//   },

//   {

//     name: "Uganda",

//     population: 45741000,

//     area: 241550

//   },

//   {

//     name: "Ukraine",

//     population: 44134693,

//     area: 603700

//   },

//   {

//     name: "United Arab Emirates",

//     population: 9890400,

//     area: 83600

//   },

//   {

//     name: "United Kingdom of Great Britain and Northern Ireland",

//     population: 67215293,

//     area: 242900

//   },

//   {

//     name: "United States of America",

//     population: 329484123,

//     area: 9629091

//   },

//   {

//     name: "Uruguay",

//     population: 3473727,

//     area: 181034

//   },

//   {

//     name: "Uzbekistan",

//     population: 34232050,

//     area: 447400

//   },

//   {

//     name: "Vanuatu",

//     population: 307150,

//     area: 12189

//   },

//   {

//     name: "Venezuela (Bolivarian Republic of)",

//     population: 28435943,

//     area: 916445

//   },

//   {

//     name: "Vietnam",

//     population: 97338583,

//     area: 331212

//   },

//   {

//     name: "Wallis and Futuna",

//     population: 11750,

//     area: 142

//   },

//   {

//     name: "Western Sahara",

//     population: 510713,

//     area: 266000

//   },

//   {

//     name: "Yemen",

//     population: 29825968,

//     area: 527968

//   },

//   {

//     name: "Zambia",

//     population: 18383956,

//     area: 752618

//   },

//   {

//     name: "Zimbabwe",

//     population: 14862927,

//     area: 390757

//   }

// ];




// const app = require("http");
// const { countries } = require("./countries");

// const handlerResponse = (res, data) => {
//   res.writeHead(200, { "content-type": "application/json" });
//   res.write(data);
//   return res.end();
// };

// const findCountries = (query) => {
//   const { populationMin, populationMax, areaMin, areaMax, name } = query;

//   return countries.filter((country) => {
//     let match = true;

//     if (populationMin) {
//       match = match && country.population >= Number(populationMin);
//     }
//     if (populationMax) {
//       match = match && country.population <= Number(populationMax);
//     }
//     if (areaMin) {
//       match = match && country.area >= Number(areaMin);
//     }
//     if (areaMax) {
//       match = match && country.area <= Number(areaMax);
//     }
//     if (name) {
//       match =
//         match &&
//         country.name.toLowerCase().startsWith(name.toLowerCase());
//     }

//     return match;
//   });
// };


// const getQueryStringObject = (userUrl) => {
//   const queryString = userUrl.split("?")[1];
//   const parameters = queryString.split("&");
//   const keyValuePairs = parameters.map((x) => x.split("="));
//   const result = {};
//   for (let i = 0; i < keyValuePairs.length; i++) {
//     result[keyValuePairs[i][0]] = keyValuePairs[i][1];
//   }
//   return result;
// };

// function serverHandler(req, res) {
//   if (req.url.startsWith("/countries")) {
//     const query = getQueryStringObject(req.url);
//     const countries = findCountries(query);
//     return handlerResponse(
//       res,
//       JSON.stringify({
//         countries
//       })
//     );
//   }
//   return res.end();
// }

// const server = app.createServer(serverHandler);

// server.listen(3000, () => {
//   console.log("Server up and running");
// });




// const users = [

//   {

//     id: 0,

//     email: "langroth@genmex.com",

//     isActive: false,

//     phone: "+1 (832) 418-2630",

//     address: "673 Herzl Street, Wilsonia, Kansas, 1685",

//     age: 29

//   },

//   {

//     id: 1,

//     email: "langroth@genmex.com",

//     isActive: true,

//     phone: "+1 (820) 461-2577",

//     address: "815 Porter Avenue, Klondike, Georgia, 2039",

//     age: 29

//   },

//   {

//     id: 2,

//     email: "langroth@genmex.com",

//     isActive: true,

//     phone: "+1 (878) 461-3565",

//     address: "204 Mill Avenue, Diaperville, Oklahoma, 8343",

//     age: 33

//   },

//   {

//     id: 3,

//     email: "langroth@genmex.com",

//     isActive: false,

//     phone: "+1 (984) 508-3675",

//     address: "224 Lawton Street, Osage, Washington, 766",

//     age: 29

//   },

//   {

//     id: 4,

//     email: "langroth@genmex.com",

//     isActive: true,

//     phone: "+1 (939) 492-2632",

//     address: "289 Suydam Street, Windsor, Arkansas, 1552",

//     age: 28

//   },

//   {

//     id: 5,

//     email: "langroth@genmex.com",

//     isActive: false,

//     phone: "+1 (946) 471-3994",

//     address: "191 Elliott Place, Faxon, New Hampshire, 6227",

//     age: 32

//   },

//   {

//     id: 6,

//     email: "langroth@genmex.com",

//     isActive: false,

//     phone: "+1 (880) 415-3359",

//     address: "764 Roosevelt Court, Ferney, West Virginia, 6922",

//     age: 39

//   },

//   {

//     id: 7,

//     email: "langroth@genmex.com",

//     isActive: true,

//     phone: "+1 (928) 479-2312",

//     address: "467 Hampton Place, Saddlebrooke, Kentucky, 6603",

//     age: 38

//   },

//   {

//     id: 8,

//     email: "langroth@genmex.com",

//     isActive: false,

//     phone: "+1 (959) 553-2377",

//     address: "440 Etna Street, Darrtown, Marshall Islands, 5137",

//     age: 20

//   },

//   {

//     id: 9,

//     email: "langroth@genmex.com",

//     isActive: true,

//     phone: "+1 (819) 570-3181",

//     address: "598 Clifton Place, Gardiner, Pennsylvania, 5195",

//     age: 27

//   }

// ];





// const app = require("http");
// const { users } = require("./users");

// const handlerResponse = (res, data) => {
//   res.writeHead(200, { "content-type": "application/json" });
//   res.write(data);
//   return res.end();
// };

// const findUser = (id) => users.find((u) => u.id === id);

// const getIdFromUrl = (userUrl) => {
//   const idParam = userUrl.split("/")[2];
//   return Number(idParam);
// };

// function serverHandler(req, res) {
//   if (req.url.startsWith("/users")) {
//     const user = findUser(getIdFromUrl(req.url));
//     return handlerResponse(
//       res,
//       JSON.stringify({
//         user
//       })
//     );
//   }
//   return res.end();
// }

// const server = app.createServer(serverHandler);

// server.listen(3000, () => {
//   console.log("Server up and running");
// });




// const users = [

//  {

//     id: 0,

//     email: "langroth@genmex.com",

//     isActive: false,

//     phone: "+1 (832) 418-2630",

//     address: "673 Herzl Street, Wilsonia, Kansas, 1685",

//     age: 29

//  },

//  {

//     id: 1,

//     email: "langroth@genmex.com",

//     isActive: true,

//     phone: "+1 (820) 461-2577",

//     address: "815 Porter Avenue, Klondike, Georgia, 2039",

//     age: 29

//  },

//  {

//     id: 2,

//     email: "langroth@genmex.com",

//     isActive: true,

//     phone: "+1 (878) 461-3565",

//     address: "204 Mill Avenue, Diaperville, Oklahoma, 8343",

//     age: 33

//  },

//  {

//     id: 3,

//     email: "langroth@genmex.com",

//     isActive: false,

//     phone: "+1 (984) 508-3675",

//     address: "224 Lawton Street, Osage, Washington, 766",

//     age: 29

//  },

//  {

//     id: 4,

//     email: "langroth@genmex.com",

//     isActive: true,

//     phone: "+1 (939) 492-2632",

//     address: "289 Suydam Street, Windsor, Arkansas, 1552",

//     age: 28

//  },

//  {

//     id: 5,

//     email: "langroth@genmex.com",

//     isActive: false,

//     phone: "+1 (946) 471-3994",

//     address: "191 Elliott Place, Faxon, New Hampshire, 6227",

//     age: 32

//  },

//  {

//     id: 6,

//     email: "langroth@genmex.com",

//     isActive: false,

//     phone: "+1 (880) 415-3359",

//     address: "764 Roosevelt Court, Ferney, West Virginia, 6922",

//     age: 39

//  },

//  {

//     id: 7,

//     email: "langroth@genmex.com",

//     isActive: true,

//     phone: "+1 (928) 479-2312",

//     address: "467 Hampton Place, Saddlebrooke, Kentucky, 6603",

//     age: 38

//  },

//  {

//     id: 8,

//     email: "langroth@genmex.com",

//     isActive: false,

//     phone: "+1 (959) 553-2377",

//     address: "440 Etna Street, Darrtown, Marshall Islands, 5137",

//     age: 20

//  },

//  {

//     id: 9,

//     email: "langroth@genmex.com",

//     isActive: true,

//     phone: "+1 (819) 570-3181",

//     address: "598 Clifton Place, Gardiner, Pennsylvania, 5195",

//     age: 27

//  }

// ];


// const app = require("http");
// const { users } = require("./users");

// const handlerResponse = (res, data) => {
//   res.writeHead(200, { "content-type": "text/html" });
//   res.write(data);
//   return res.end();
// };

// const findUser = (id) => users.find((u) => u.id === id);

// const getIdFromUrl = (userUrl) => {
//   const idParam = userUrl.split("/")[2];
//   return Number(idParam);
// };

// const buildHtmlFromUser = (user) => `<div>
//   <h2>Email:${user.email}</h2>
//   <h2>Active:${user.isActive}</h2>
//   <h2>Phone:${user.phone}</h2>
//   <h2>Address:${user.address}</h2>
//   <h2>Age:${user.age}</h2>
// </div>`;

// function serverHandler(req, res) {
//   if (req.url.startsWith("/users")) {
//     const user = findUser(getIdFromUrl(req.url));
//     return handlerResponse(res, buildHtmlFromUser(user));
//   }
//   return res.end();
// }

// const server = app.createServer(serverHandler);

// server.listen(3000, () => {
//   console.log("Server up and running");
// });


const users = [

  {

    id: 0,

    email: "langroth@genmex.com",

    isActive: false,

    phone: "+1 (832) 418-2630",

    address: "673 Herzl Street, Wilsonia, Kansas, 1685",

    age: 29

  },

  {

    id: 1,

    email: "langroth@genmex.com",

    isActive: true,

    phone: "+1 (820) 461-2577",

    address: "815 Porter Avenue, Klondike, Georgia, 2039",

    age: 29

  },

  {

    id: 2,

    email: "langroth@genmex.com",

    isActive: true,

    phone: "+1 (878) 461-3565",

    address: "204 Mill Avenue, Diaperville, Oklahoma, 8343",

    age: 33

  },

  {

    id: 3,

    email: "langroth@genmex.com",

    isActive: false,

    phone: "+1 (984) 508-3675",

    address: "224 Lawton Street, Osage, Washington, 766",

    age: 29

  },

  {

    id: 4,

    email: "langroth@genmex.com",

    isActive: true,

    phone: "+1 (939) 492-2632",

    address: "289 Suydam Street, Windsor, Arkansas, 1552",

    age: 28

  },

  {

    id: 5,

    email: "langroth@genmex.com",

    isActive: false,

    phone: "+1 (946) 471-3994",

    address: "191 Elliott Place, Faxon, New Hampshire, 6227",

    age: 32

  },

  {

    id: 6,

    email: "langroth@genmex.com",

    isActive: false,

    phone: "+1 (880) 415-3359",

    address: "764 Roosevelt Court, Ferney, West Virginia, 6922",

    age: 39

  },

  {

    id: 7,

    email: "langroth@genmex.com",

    isActive: true,

    phone: "+1 (928) 479-2312",

    address: "467 Hampton Place, Saddlebrooke, Kentucky, 6603",

    age: 38

  },

  {

    id: 8,

    email: "langroth@genmex.com",

    isActive: false,

    phone: "+1 (959) 553-2377",

    address: "440 Etna Street, Darrtown, Marshall Islands, 5137",

    age: 20

  },

  {

    id: 9,

    email: "langroth@genmex.com",

    isActive: true,

    phone: "+1 (819) 570-3181",

    address: "598 Clifton Place, Gardiner, Pennsylvania, 5195",

    age: 27

  }

];



const app = require("http");
const { users } = require("./users");

function serverHandler(req, res) {
  if (req.url.startsWith("/users")) {
    // write your code
  }
  return res.end();
}

const server = app.createServer(serverHandler);

server.listen(3000, () => {
  console.log("Server up and running");
});

