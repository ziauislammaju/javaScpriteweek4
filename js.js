console.clear()





const harryPotter1 = ["harry_ptter_philosopher_stone","harry_potter_chamber_secrets","harry_potter_prisoner_azkaban","harry_potter_goblet_fire","harry_potter_order_phoenix","harry_potter_half-blood_prince","harry_potter_deathly_hallows"]

let $harry = document.getElementById("harryPotter");

forEach:harryPotter1.forEach((item) => {
   let $div = document.createElement("div");
   $div.setAttribute("id", item);
   $harry.appendChild($div);
});



for (let i = 0; i < harryPotter1.length; i++){
  let $div1 = document.getElementById(harryPotter1[i]);
  let $ul = document.createElement("ul")
  let $li1 = document.createElement("h2")
  $li1.setAttribute("id",harryPotter1[i]+1);
  let $li2 = document.createElement("li")
  $li2.setAttribute("id",harryPotter1[i]+2);
  let $li3 = document.createElement("li")
  $li3.setAttribute("id",harryPotter1[i]+3);
  let $li4 = document.createElement("li")
  let $a = document.createElement("img")
  $a.setAttribute("id",harryPotter1[i]+4);
  $li4.appendChild($a);
  $ul.appendChild($li1);
  $ul.appendChild($li2);
  $ul.appendChild($li3);
  $ul.appendChild($li4);
  $div1.appendChild($ul);
  console.log($a)
};






const information = [
  {
    title: "Harry Potter and the Philosopher's Stone",
    language: "English and at least 73 other languages",
    author:"J. K. Rowling" ,
    published:"26 June 1997 (UK)",
    // img_url: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg/220px-Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg",
  },
  {
    title: "Harry Potter and the Chamber of Secrets",
    language: "English and at least 73 other languages",
    author:"J. K. Rowling" ,
    published:"2 July 1998 (UK)",
    // img_url: "https://images-na.ssl-images-amazon.com/images/I/51OZerWcGCL._SY346_.jpg",
  },
  {
    title: "Harry Potter and the Prisoner of Azkaban",
    language: "English and at least 73 other languages",
    author:"J. K. Rowling" ,
    published:"8 July 1999 (UK)",
    // img_url: "https://kbimages1-a.akamaihd.net/30eb5c14-23dc-41ba-95eb-4a3e68c1c30f/353/569/90/False/harry-potter-and-the-prisoner-of-azkaban-6.jpg",
  },
  {
    title: "Harry Potter and the Goblet of Fire",
    language: "English and at least 73 other languages",
    author:"J. K. Rowling" ,
    published:"‎8 July 2000",
    // img_url: "https://images-eu.ssl-images-amazon.com/images/I/51lzm5bPzPL.jpg",
  },
  {
    title: "Harry Potter and the Order of the Phoenix",
    language: "English and at least 73 other languages",
    author:"J. K. Rowling" ,
    published:"June 21, 2003 (UK)",
    // img_url: "https://kbimages1-a.akamaihd.net/db1b24c5-f64c-4fd3-bdef-5717817dc636/353/569/90/False/harry-potter-and-the-order-of-the-phoenix-5.jpg",
  },
  {
    title: "Harry Potter and the Half-Blood Prince",
    language: "English and at least 73 other languages",
    author:"J. K. Rowling" ,
    published:"16 July 2005",
    // img_url: "https://images-na.ssl-images-amazon.com/images/I/51uO1pQc5oL._SX329_BO1,204,203,200_.jpg",
  },
  {
    title: "Harry Potter and the Deathly Hallows",
    language: "English and at least 73 other languages",
    author:"J. K. Rowling" ,
    published:"July 21, 2007",
    // img_url: "https://kbimages1-a.akamaihd.net/9c0a6813-9a0d-4693-b2dc-9e62ecfc4e1d/353/569/90/False/harry-potter-and-the-deathly-hallows-3.jpg",
  }
];




harryPotter1.forEach((item, index) => {
  let $append1 = document.getElementById(harryPotter1[index]+1);
  $append1.innerHTML= information[index].title;
  let $append2 = document.getElementById(harryPotter1[index]+2);
  $append2.innerHTML= information[index].language;
  let $append3 = document.getElementById(harryPotter1[index]+3);
  $append3.innerHTML= information[index].published;
  let $append4 = document.getElementById(harryPotter1[index]+4);
  $append4.setAttribute("alt", information[index].title+" img of book")
})

let img_url = [
    "https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg/220px-Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg","https://images-na.ssl-images-amazon.com/images/I/51OZerWcGCL._SY346_.jpg","https://kbimages1-a.akamaihd.net/30eb5c14-23dc-41ba-95eb-4a3e68c1c30f/353/569/90/False/harry-potter-and-the-prisoner-of-azkaban-6.jpg","https://images-eu.ssl-images-amazon.com/images/I/51lzm5bPzPL.jpg","https://kbimages1-a.akamaihd.net/db1b24c5-f64c-4fd3-bdef-5717817dc636/353/569/90/False/harry-potter-and-the-order-of-the-phoenix-5.jpg","https://images-na.ssl-images-amazon.com/images/I/51uO1pQc5oL._SX329_BO1,204,203,200_.jpg","https://kbimages1-a.akamaihd.net/9c0a6813-9a0d-4693-b2dc-9e62ecfc4e1d/353/569/90/False/harry-potter-and-the-deathly-hallows-3.jpg"
]


harryPotter1.forEach((item, index) => {
    let $append5 = document.getElementById(harryPotter1[index]+4);
    $append5.setAttribute("src", img_url[index])

})