# Connect Money Internship Reflection — V2

This is a standalone static site. No build step, package installation, or external image/font dependency is required.

## Preview locally

Open index.html in a modern browser, or serve the folder locally with:

    cd "ConnectMoney_Internship_Reflection_V2"
    python -m http.server 8080

Then visit http://localhost:8080.

## Deploy with GitHub Pages

1. Create a GitHub repository and push this folder's contents to the default branch.
2. Open Settings, then Pages.
3. Set Source to GitHub Actions.
4. The included workflow publishes the site after each update to main.
5. GitHub displays the public Pages URL after the first successful run.

If this folder lives inside a larger repository, either move it to the repository root or change the workflow path value.

## Deploy with Vercel

1. Import the GitHub repository at https://vercel.com/new.
2. Set Root Directory to ConnectMoney_Internship_Reflection_V2 when this folder is not the repository root.
3. Deploy. No build command is required.

The included vercel.json supplies a clean static-site configuration.
