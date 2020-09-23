const mystates = [
    "Rajastan",
    "Delhi",
    "Tamil Nadu",
    1947,
    "Assam",
    "Maharashtra",
];

for(let i=0; i<=mystates.length; i++){
    if (typeof mystates[i] !== "string") continue;
    console.log(mystates[i]);
}