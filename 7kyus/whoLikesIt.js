// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items.
// We want to create the text that should be displayed next to such an item.
// Note: For 4 or more names, the number in "and 2 others" simply increases.
function likes(names) {
  //   names = [];
  if (names.length === 0) {
    return "No one likes you";
  } else if (names.length === 1) {
    return `${names[0]} likes you`;
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} likes you`;
  } else if (names.length === 3) {
    return `${names[0]} , ${names[1]} and ${names[2]} likes you`;
  } else if (names.length > 3) {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others likes you`;
  }
}
console.log(likes(["Peter", "wirio", "gtgwh", "hswuaj", "nskwks", "useimdk"]));
