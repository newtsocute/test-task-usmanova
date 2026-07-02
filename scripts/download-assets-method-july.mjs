// Downloads image assets for the usmanovafit.gymteam.ru/method_july clone into public/images/.
// Run with: node scripts/download-assets-method-july.mjs
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outRoot = path.join(__dirname, "..", "public", "images", "usmanovafit", "method-july");

const manifest = {
  hero: [
    ["https://fs26.getcourse.ru/fileservice/file/download/a/934144/sc/208/h/e94b3d7e25ce9f3858202853afe4ab48.png", "hero-photo.png"],
  ],
  benefits: [
    ["https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/228/h/b4d9dd16f127b18ba29c54e414a1a7c2.png", "icon-energy.png"],
    ["https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/227/h/18eace4abec04214e331c663648da7a5.png", "icon-lightness.png"],
    ["https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/287/h/23d5d5a80f2a7cb747acf6ed452b14d9.png", "icon-confidence.png"],
    ["https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/460/h/35acf27cadfae5ea8a21e9ebb3d0b042.png", "photo.png"],
  ],
  testimonials: [
    ["https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/368/h/ec1ac5a8352c73d932c13fd5de0ddca1.jpg", "before-after-01.jpg"],
    ["https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/234/h/d86a5cb556ab1c1743346c0876ac6dca.jpg", "before-after-02.jpg"],
    ["https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/68/h/72d5c6162787a7917e9cc1dea9174076.jpg", "before-after-03.jpg"],
    ["https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/299/h/f962d1bce8070ae34c3752a8fff7a7e6.jpg", "before-after-04.jpg"],
    ["https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/155/h/f284a88b1672da8a59e5ac6a76147a72.jpg", "before-after-05.jpg"],
    ["https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/132/h/714f61b99d0204cf1f3314f822ae61ab.jpg", "before-after-06.jpg"],
    ["https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/293/h/bb5da377a8755847fcaa0a66bd785bc2.jpg", "before-after-07.jpg"],
    ["https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/176/h/6babc133e44215a17ae8cd88763d20b0.jpg", "before-after-08.jpg"],
    ["https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/149/h/6b029b432c1d9fc2176af7da6b574765.jpg", "before-after-09.jpg"],
    ["https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/125/h/476fdb8f97b10f9246fad60499349d45.jpg", "before-after-10.jpg"],
    ["https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/473/h/c80253eea267c76f49619041521d5683.jpg", "before-after-11.jpg"],
    ["https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/87/h/8cdb51a4c8d48dc315116115529660ad.png", "chat-card-01.png"],
    ["https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/394/h/a468158ebfe72c5f6abd9572aede0dc6.png", "chat-card-02.png"],
    ["https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/34/h/94959c636e29347bf3a8c68381f68b52.png", "chat-card-03.png"],
    ["https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/190/h/e1e0461aea776f51571766be7fbbb232.png", "chat-card-04.png"],
  ],
  "bundle-cards": [
    ["https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/187/h/233ff2232df3e772b1f0c56bb67654cb.png", "card-method.png"],
    ["https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/376/h/5401e74a9ba4ec3e0fd4ab7c48eccd34.png", "card-nutrition-lectures.png"],
    ["https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/509/h/f1670964e0121d1db6a3339842f7d523.png", "card-gusakova.png"],
    ["https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/312/h/175f59df8b7c8f6d817fdc9230e8ab0f.png", "card-svobody.png"],
    ["https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/83/h/f02c3ae11f61416e9a398db26330b723.png", "card-fatburn.png"],
    ["https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/311/h/6b6535cc7a4907e6fc586bf2fe9bd4c8.png", "bullet-arrow-icon.png"],
  ],
  "why-works": [
    ["https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/311/h/6b6535cc7a4907e6fc586bf2fe9bd4c8.png", "bullet-arrow-icon.png"],
  ],
  "champion-bio": [
    ["https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/63/h/2f7bd64353e2b708c74397a8c478a219.png", "checklist-icon.png"],
  ],
  guarantee: [
    ["https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/148/h/75c36fa444b27df53f3932e70a356b5c.png", "icon-price.png"],
    ["https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/169/h/ebf58164e864c7a38439e69a0b1f8b78.png", "icon-unique.png"],
    ["https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/334/h/83a9085005220737ec1397d055089797.png", "icon-result.png"],
    ["https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/254/h/bd9aa0f83b2c3f6d6487c86275c4ed91.png", "icon-support.png"],
    ["https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/285/h/596433747aeb4cba96be4fbd54b03b1d.png", "icon-convenience.png"],
  ],
  pricing: [
    ["https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/311/h/6b6535cc7a4907e6fc586bf2fe9bd4c8.png", "bullet-arrow-icon.png"],
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
