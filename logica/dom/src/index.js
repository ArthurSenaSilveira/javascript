
const API_BASE_URL = "https://api.github.com/orgs/facebook/repos";
const PAGE_SIZE = 10;
let PAGE = 1;

let canFetch = true;

const reposcontainer = document.getElementById('repos-contaner')

reposcontainer.addEventListener(scroll, handleScroll);

function creaturl() {
    const url = new URL(API_BASE_URL);
    url.searchParams.set("per_page", PAGE_SIZE);
    url.searchParams.set("page", PAGE);

    return url;
}

async function createreposcontainer() {
    const url = creaturl();
    canFetch = false;

    try {
    const response = await fetch(url);
    const repos = await response.json();

    const parent = document.createDocumentFragment();

    for(let repo of repos) {
        const p = document.createElement("p")
        p.textContent = repo.name;
        p.className = "repository"

        parent.appendChild(p);

        canFetch = true
    }

    PAGE += 1;

    reposcontainer.appendChild(parent);
    } catch (e) {
        console.error("Error: ", e);
    }
}

function handleScroll() {
    if(!canFetch) {
        return;
    }
    const bottomSpaceLeftToScroll = this.scrollHeight - this.scrollTop - this.elientHeight;

    if (bottomSpaceLeftToScroll > 0) return;

    createreposcontainer()
}
createreposcontainer()