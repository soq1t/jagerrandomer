document.write("<table class=\"summar\"><tr><td valign=\"top\">")
var k = 0;
k = Math.ceil(s/j)
for (var i = 1; i < surnamessort.length+1; i++) {
  if (i % k == 0) {
    document.write(i+") "+surnamessort[i-1]+"</td><td valign=\"top\">");
  } else {
      document.write(i+") "+surnamessort[i-1]+"<br>");
    }
  }
document.write("</td></tr></table>")
