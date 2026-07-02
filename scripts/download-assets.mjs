// Downloads all image assets for the usmanovafit.gymteam.ru clone into public/images/.
// Run with: node scripts/download-assets.mjs
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outRoot = path.join(__dirname, "..", "public", "images", "usmanovafit");

const manifest = {
  hero: [
    ["https://fs-thb02.getcourse.ru/fileservice/file/thumbnail/h/8d7e3aa384b597937b9504925ead6325.png/s/s1200x/a/934144/sc/68", "hero-woman.png"],
  ],
  "trust-bio": [
    ["https://fs-thb01.getcourse.ru/fileservice/file/thumbnail/h/0ab22056b482979979f9203c2db57c87.png/s/s1200x/a/934144/sc/17", "hero-woman-mobile.png"],
    ["https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/304/h/b9c77eb09cdae6dee48606d88134a74c.png", "checklist-icon.png"],
    ["https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/220/h/c79ef9787c5e268d93a54f1e02e46ec3.png", "gallery-01.png"],
    ["https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/284/h/1383cc163d1d98ed9a0bc68d4a2ffc03.png", "gallery-02.png"],
    ["https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/464/h/fc6a33bedad095fcceb9b228a0e26ba1.png", "gallery-03.png"],
    ["https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/484/h/52d50659565480b991c629cf6453df15.png", "gallery-04.png"],
    ["https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/361/h/4b1c3f214dc7c40c17af48103ddcbdeb.png", "gallery-05.png"],
    ["https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/250/h/fde40eec42d735ce23b758f6b8282d08.png", "gallery-06.png"],
    ["https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/327/h/d4d3841aca9fb0bd2b9666c23d217cfa.png", "gallery-07.png"],
    ["https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/492/h/8a1d46cc0fd29eca5de6eee284ff79ab.png", "gallery-08.png"],
    ["https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/345/h/ad4b02d76a6edaa89ff9eb93052b54e9.png", "gallery-09.png"],
  ],
  "media-mentions": [
    ["https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/388/h/dce4cd87e1adbe9bb964e4f421a812b8.png", "media-01.png"],
    ["https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/243/h/ab7526618678a10df39f0b43b18beedf.png", "media-02.png"],
    ["https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/38/h/1945477762597b2c2c8e4cf8619c9d69.png", "media-03.png"],
    ["https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/193/h/e9ae4aeeb45b346179a1450139c3d8d5.png", "media-04.png"],
  ],
  "home-workouts": [
    ["https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/129/h/9993958238de93cfb42027db3748b8fe.png", "method-usmanovoi.png"],
    ["https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/243/h/b425fe3374dfff385aa5305db7156a5f.png", "stroynost.png"],
    ["https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/265/h/d8acf94578d7aa9c71f7b487c818a4b4.png", "uprugaya-popa-1.png"],
    ["https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/115/h/24010713a536c083b2ec7afd7c1d1a14.png", "uprugaya-popa-2.png"],
    ["https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/284/h/9c599cbd2f0e39fa1bd12c09072e4db2.png", "ploskiy-zhivot.png"],
    ["https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/351/h/4bbdff61ee6ece8379588a12d384bcf1.png", "zhiroszhigayuschiy.png"],
  ],
  "gym-workout": [
    ["https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/111/h/8c1e88fa26a8c0a386b0789c8835133e.png", "dlya-zala.png"],
  ],
  pregnancy: [
    ["https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/64/h/a8705768b8d2efe42279a16d72d82371.png", "dlya-beremennyh.png"],
    ["https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/73/h/72d06e083a42cb05432cadc2264550a8.png", "vosstanovlenie-posle-rodov.png"],
  ],
  nutrition: [
    ["https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/104/h/468c85a2ea7c865ae30349257111fd6f.png", "ii-nutriciolog.png"],
    ["https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/187/h/8471238dd04bfc42ccdcc32a9607164f.png", "pp-pitanie.png"],
  ],
  "self-love": [
    ["https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/348/h/98c6cf5575a3e22e424a7efcdfbbc196.png", "lyubov-k-sebe-1.png"],
    ["https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/108/h/e802978007ed4b23486233cc59ae6c9d.png", "lyubov-k-sebe-2.png"],
  ],
  "stats-gallery": [
    ["https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/295/h/3e5dd3a1d566a7f5fc0745fff3f0158c.png", "arrow-icon.png"],
    ["https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/85/h/690560420ca42fc7a6b317093fb821fb.jpg", "before-after-01.jpg"],
    ["https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/374/h/1b12583b7b7cd12c7ab0b2bdee77c7ef.jpg", "before-after-02.jpg"],
    ["https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/73/h/804bfecb9a8fcf5ec3f16ffaf93cda1e.jpg", "before-after-03.jpg"],
  ],
  "contact-prompt": [
    ["https://fs.getcourse.ru/fileservice/file/download/a/656842/sc/91/h/8fec80b0270502eee473a97d551b0561.svg", "icon-telegram.svg"],
    ["https://fs.getcourse.ru/fileservice/file/download/a/656842/sc/200/h/c25f8ab693de5b24cfd8c069917051b5.svg", "icon-vk.svg"],
    ["https://fs.getcourse.ru/fileservice/file/download/a/656842/sc/314/h/162edcaeb5a552d600eb62fbc50e622c.svg", "icon-mail.svg"],
    ["https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/140/h/2e4566e258654949d8dff68c39757fcb.png", "icon-max.png"],
  ],
  "guarantee-features": [
    ["https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/156/h/2763ac160cede385a9750c5c16949f8b.png", "icon-price.png"],
    ["https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/405/h/0a9c7a9e95e3ef15eb65dff4c5cd558d.png", "icon-unique.png"],
    ["https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/39/h/ed8f51b410433972d8c64a143512c40f.png", "icon-result.png"],
    ["https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/53/h/8280b234a81d52529d7f6d108770bd6e.png", "icon-deadline.png"],
    ["https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/482/h/9f1bf7cb3cb138eee913bb9fb6b2cb6d.png", "icon-legal.png"],
    ["https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/45/h/039d31c6cb12f83456eaa75f51574225.png", "icon-info.png"],
  ],
  testimonials: [
    ["https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/237/h/2aa546db37de028e6ac3fb2786aa9452.jpg", "testimonial-01.jpg"],
    ["https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/38/h/015a42f6b21340f961a0e833b605ff95.jpg", "testimonial-02.jpg"],
    ["https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/495/h/b036e1e277a452313500ee564d32226e.jpg", "testimonial-03.jpg"],
    ["https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/249/h/dd8e197e7f36e1bee9bd7162290a108b.jpg", "testimonial-04.jpg"],
    ["https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/95/h/103262c11e49bf118407189cbc9f6fa7.jpg", "testimonial-05.jpg"],
    ["https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/391/h/c2e4edfc1f5e5b4954e6bc3615cf7d2d.jpg", "testimonial-06.jpg"],
    ["https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/117/h/17387c8056b84e63d149fbf2be7831f7.jpg", "testimonial-07.jpg"],
    ["https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/144/h/ee1a890d85ca6313ede946437c41b602.jpg", "testimonial-08.jpg"],
    ["https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/150/h/d5875e3b213d3591fd51ab2d1688f28c.jpg", "testimonial-09.jpg"],
    ["https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/55/h/559d6d0bef8e3d5970611b31f7125454.jpg", "testimonial-10.jpg"],
    ["https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/496/h/9da6fdbf3d6e9ecfe79438a24aef12be.jpg", "testimonial-11.jpg"],
    ["https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/103/h/119be526e615610de88bb989041dac57.jpg", "testimonial-12.jpg"],
    ["https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/328/h/924c8e30f9c3c1aafb26bdf08bec2182.jpg", "testimonial-13.jpg"],
    ["https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/361/h/2d2c02e946c10e6fb4d4e2d0ccc4da0d.jpg", "testimonial-14.jpg"],
  ],
  footer: [
    ["https://fs.getcourse.ru/fileservice/file/download/a/656842/sc/200/h/c25f8ab693de5b24cfd8c069917051b5.svg", "icon-vk.svg"],
    ["https://fs.getcourse.ru/fileservice/file/download/a/656842/sc/91/h/8fec80b0270502eee473a97d551b0561.svg", "icon-telegram.svg"],
    ["https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/140/h/2e4566e258654949d8dff68c39757fcb.png", "icon-max.png"],
  ],
};

async function downloadOne(url, dest) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, buf);
  return dest;
}

async function runBatched(tasks, batchSize = 4) {
  let i = 0;
  let ok = 0;
  let fail = 0;
  while (i < tasks.length) {
    const batch = tasks.slice(i, i + batchSize);
    const results = await Promise.allSettled(batch.map((t) => t()));
    results.forEach((r) => (r.status === "fulfilled" ? ok++ : (fail++, console.error(r.reason.message))));
    i += batchSize;
  }
  return { ok, fail };
}

const tasks = [];
for (const [section, files] of Object.entries(manifest)) {
  for (const [url, filename] of files) {
    const dest = path.join(outRoot, section, filename);
    tasks.push(() => downloadOne(url, dest).then(() => console.log("OK", section, filename)));
  }
}

const { ok, fail } = await runBatched(tasks, 4);
console.log(`\nDone. ${ok} downloaded, ${fail} failed.`);
