const fs = require('fs');

try {
  let about = fs.readFileSync('about.html', 'utf8');
  about = about.replace(
    '<span class="hl-gradient" style="opacity:1; animation:none; display:inline-block; -webkit-text-stroke:0;">THE SYSTEM</span>',
    '<span class="hl-outline l2" data-text="THE SYSTEM">THE SYSTEM</span>'
  );
  fs.writeFileSync('about.html', about);
  console.log("about.html updated");

  let off = fs.readFileSync('offerings.html', 'utf8');
  off = off.replace(
    '<span class="hl-gradient" style="opacity:1; animation:none; display:inline-block; -webkit-text-stroke:0;">CAPABILITIES</span>',
    '<span class="hl-outline l2" data-text="CAPABILITIES">CAPABILITIES</span>'
  );
  fs.writeFileSync('offerings.html', off);
  console.log("offerings.html updated");
} catch(e) {
  console.error(e);
}
