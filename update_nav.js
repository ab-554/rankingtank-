const fs = require('fs');

const files = [
  'abdul-basit (1).html',
  'about.html',
  'contact.html',
  'offerings.html',
  'projects.html'
];

const newHeaderNav = `<ul class="nav-center">
    <li><a href="abdul-basit (1).html">Home</a></li>
    <li><a href="offerings.html">Offerings</a></li>
    <li><a href="projects.html">Projects</a></li>
    <li><a href="about.html">About</a></li>
    <li><a href="contact.html">Contact</a></li>
  </ul>`;

const newFooterNav = `<ul class="f-links">
        <li><a href="abdul-basit (1).html">Home</a></li>
        <li><a href="offerings.html">Offerings</a></li>
        <li><a href="projects.html">Projects</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>`;

files.forEach(file => {
  let html = fs.readFileSync(file, 'utf8');

  // Replace Header Nav
  // The header nav is between <ul class="nav-center"> and </ul>
  const headerStartRegex = /<ul class="nav-center">/;
  const ulCloseRegex = /<\/ul>/;
  
  let headerMatch = html.match(headerStartRegex);
  if (headerMatch) {
     let startIdx = headerMatch.index;
     let endIdx = html.indexOf('</ul>', startIdx) + 5;
     html = html.substring(0, startIdx) + newHeaderNav + html.substring(endIdx);
  }

  // Replace Footer Nav
  // It's the first <ul class="f-links"> under <div class="f-head">Navigation</div>
  const footerStartStr = '<div class="f-head">Navigation</div>\r\n      <ul class="f-links">';
  // Let's use a more flexible regex for footer nav
  const footerRegex = /<div class="f-head">Navigation<\/div>\s*<ul class="f-links">[\s\S]*?<\/ul>/;
  html = html.replace(footerRegex, `<div class="f-head">Navigation</div>
      ${newFooterNav}`);

  fs.writeFileSync(file, html);
  console.log('Updated ' + file);
});
