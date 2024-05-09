const container = document.getElementById('project_container');
const logo = document.getElementById('logo')

function setFavicons(favImg){
    let headTitle = document.querySelector('head');
    let setFavicon = document.createElement('link');
    setFavicon.setAttribute('rel','shortcut icon');
    setFavicon.setAttribute('href',favImg);
    headTitle.appendChild(setFavicon);
}

function createProjectBox(repo_name,repo_desc,repo_stars,main_language,click_url)  {
    const div = document.createElement('div');
    div.classList.add('project_box')

    const title = document.createElement('h2');
    const description = document.createElement('h4')
    const language = document.createElement('h4')
    const stars = document.createElement('h4')

    title.textContent = repo_name
    description.textContent = repo_desc
    language.textContent = "made with " + main_language
    stars.textContent = repo_stars+" ⭐"

    div.appendChild(title)
    div.appendChild(description)
    div.appendChild(language)
    div.appendChild(stars)

    div.addEventListener('click', function() {
        window.open(click_url,'_blank');
    })
    
    container.appendChild(div);
}

(() => {
    fetch('https://api.github.com/users/ValentinLvrr/repos')
    .then(response => response.json())
    .then(data => {
        logo.src = data[0]['owner']['avatar_url']
        setFavicons(data[0]['owner']['avatar_url'])
        for (i in data) {
            if (data[i]['id'] != 582566991 && data[i]['id'] != 603343096){ // excluding readme.md & portfolio
                createProjectBox(
                    repo_name = data[i]['name'],
                    repo_desc = data[i]['description'],
                    repo_stars = data[i]['stargazers_count'],
                    main_language = data[i]['language'],
                    click_url = data[i]['html_url']
                )
            }
        }
    })
})()