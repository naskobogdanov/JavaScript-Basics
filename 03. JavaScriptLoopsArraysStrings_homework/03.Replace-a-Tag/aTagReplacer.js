//declaring variables
var input = '<ul>\n <li>\n  <a href=http://softuni.bg>SoftUni</a>\n </li>\n</ul>';
var myString = "something format_abc";

//match tag with regex
var regex = input.match(/(<a)(.*?)(>)/);

//matched tad and replaced tag
var tag = regex[0];
var replacedTag;
replacedTag = tag.replace(regex[1], "[URL");
replacedTag = replacedTag.replace(regex[3], "]");
input = input.replace(tag, replacedTag);
input = input.replace("</a>", "[/URL]");

//print in the console
console.log(input);
