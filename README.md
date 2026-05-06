# Dan C. Oliver Portfolio (npm-only)

Personal portfolio site built with Next.js.

---

## 🚨 NPM ONLY POLICY

This repository is strictly **npm-only**. Do NOT use pnpm, yarn, or other package managers.

Installing dependencies with another package manager can break your build and cause peer dependency conflicts.

---

## 📦 Installation

Use npm only:

```bash
npm install
```

Ensure you only have one lockfile (`package-lock.json`) and remove any others:

```bash
rm -rf node_modules pnpm-lock.yaml yarn.lock package-lock.json
npm install
```

---

## 📌 Pinned Dependency Versions

* next: 14.2.35
* next-intl: 3.23.5
* next-mdx-remote: 6.0.0
* @next/mdx: 14.2.16
* react: 18.3.1
* react-dom: 18.3.1

All other dependencies are pinned to exact versions in package.json to prevent automatic upgrades and ensure stable builds.

---

## ▶️ Development

```bash
npm run dev
```

---

## 🏗 Build

```bash
npm run build
```

---

## 🚀 Production Start

```bash
npm run start
```

---

## 🛡 Preinstall Check (npm Enforcement)

Add this to package.json scripts:

```json
"preinstall": "node ./scripts/check-npm.js"
```

Create `./scripts/check-npm.js`:

```js
if (process.env.npm_execpath && !process.env.npm_execpath.includes('npm')) {
  console.error('\n🚨 Only npm is allowed. Remove pnpm/yarn.\n');
  process.exit(1);
}
```

This ensures no one accidentally installs with pnpm or yarn.

---

## 🧼 Lockfile Enforcement

Always commit `package-lock.json` after any dependency changes. This guarantees reproducible builds and prevents peer dependency conflicts.

---

## 📝 Notes

* Do NOT run `npm audit fix --force` — it may upgrade Next to v16, breaking peer dependencies.
* Your current setup is stable and fully reproducible.
* Wait for upstream packages to support Next 16 before upgrading.

# Repo Clone Credit: 

## **Build your portfolio with Once UI's Magic Portfolio**

View the [demo here](https://demo.magic-portfolio.com).

![Magic Portfolio](public/images/cover.png)


# **Getting started**

Magic Portfolio was built with [Once UI](https://once-ui.com) for [Next.js](https://nextjs.org). It requires Node.js v18.17+.

**1. Clone the repository**
```
git clone https://github.com/once-ui-system/magic-portfolio.git
```

**2. Install dependencies**
```
npm install
```

**3. Run dev server**
```
npm run dev
```

**4. Edit config**
```
XX src/app/resources/config 
```

**5. Edit content**
```
XX src/app/resources/content (or content-i18n for localization)
!!Need to read about content-i18n for localization
```

**6. Create case study posts / projects**
```
Add a new .mdx file to src/app/[locale]/casestudies/posts or src/app/[locale]/work/projects
```

# **Features**

## **Once UI**
- All tokens, components & features of [Once UI](https://once-ui.com)

## **SEO**
- Automatic open-graph and X image generation with next/og
- Automatic schema and metadata generation based on the content file

## **Design**
- Responsive layout optimized for all screen sizes
- Timeless design without heavy animations and motion
- Endless customization options through [data attributes](https://once-ui.com/docs/theming)

## **Content**
- Render sections conditionally based on the content file
- Enable or disable pages for casestudies, work, gallery and about / CV
- Generate and display social links automatically
- Set up password protection for URLs

## **Localization (NEW)**
- Magic Portfolio now supports localization with the next-intl library
- See more info in resources/config.js

# **Authors**

Connect with us on Threads or LinkedIn.

Lorant Toth: [Threads](https://www.threads.net/@lorant.one), [LinkedIn](https://www.linkedin.com/in/tothlorant/)  
Zsofia Komaromi: [Threads](https://www.threads.net/@zsofia_kom), [LinkedIn](https://www.linkedin.com/in/zsofiakomaromi/)

Localization added by [François Hernandez](https://github.com/francoishernandez)

# **Get involved**

- Join the [Design Engineers Club on Discord](https://discord.com/invite/5EyAQ4eNdS) and share your portfolio with us!
- Report a [bug](https://github.com/once-ui-system/magic-portfolio/issues/new?labels=bug&template=bug_report.md).

# **License**

Distributed under the CC BY-NC 4.0 License.
- Commercial usage is not allowed.
- Attribution is required.

See `LICENSE.txt` for more information.

# **Deploy with Vercel**
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fonce-ui-system%2Fmagic-portfolio&project-name=portfolio&repository-name=portfolio&redirect-url=https%3A%2F%2Fgithub.com%2Fonce-ui-system%2Fmagic-portfolio&demo-title=Magic%20Portfolio&demo-description=Showcase%20your%20designers%20or%20developer%20portfolio&demo-url=https%3A%2F%2Fdemo.magic-portfolio.com&demo-image=%2F%2Fraw.githubusercontent.com%2Fonce-ui-system%2Fmagic-portfolio%2Fmain%2Fpublic%2Fimages%2Fcover.png)