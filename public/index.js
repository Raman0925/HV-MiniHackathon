
const apiKey = "e59fabc2632e48788ddf603bb5a318e1"

const button = document.getElementById('searchPress');
const textBox = document.getElementById('textBox');






 function  handleClick() {
   
    // Get the current query from the text box
    const query = textBox.value.trim();
    const URL = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}&pageSize=10`;
   
   
    // Call the function to fetch and display news
    
      fetch(URL)
      .then(response => 
       
        response.json()
       
      )
      .then(responseJson => {
        // Get the container element where news items will be appended
        const newsContainer = document.getElementById('news');
    
        // Check if articles exist
        if (responseJson.articles && responseJson.articles.length > 0) {
          // Clear previous content
          newsContainer.innerHTML = '';
         

          // Map through each article and create HTML
          responseJson.articles.forEach(article => {
            addingNews(article.urlToImage, article.url, article.title, article.description);
            
          });
        } else {
          newsContainer.innerText = 'No articles found.';
        }
      })
      .catch(error => {
        console.error('Error fetching news:', error);
        document.getElementById('news').innerText = '';
      });
}











///function for adding News in Web Page
  let itemCount = 0;
  let rowContainer
  
  function addingNews(urlToImage, url, title, description) {
    
    var news = document.getElementById('news');


    if (itemCount % 3 === 0) {
      rowContainer = document.createElement('div');
      rowContainer.classList.add('news-rows');

      news.appendChild(rowContainer);
  }
    // Get the container element where news items will be appended


    // Create the news item container
    var newsItem = document.createElement('div');
    newsItem.classList.add("news-item");

    // Create and configure the image element
    var image = document.createElement('img');
    image.setAttribute("src", urlToImage);
    
    // Create and configure the headline element
    var headline = document.createElement('h2');
    headline.classList.add("headline");
    headline.textContent = title;

    // Create and configure the description element
    var descriptionTag = document.createElement('p');
    descriptionTag.classList.add("description");
    descriptionTag.textContent = description;

    // Create and configure the read more container
    var readMoreContainer = document.createElement('div');
    readMoreContainer.classList.add("read-more");

    // Create and configure the read text element
    var readText = document.createElement('p');
    readText.classList.add("read-text");
    // Optionally add text to readText if needed, otherwise it will be empty

    // Create and configure the read link element
    var readLink = document.createElement('a');
    readLink.classList.add("read-link");
    readLink.setAttribute('href', url);
    readLink.textContent = "→";

    // Append readText and readLink to the readMoreContainer
    readMoreContainer.append(readText, readLink);

    // Append all elements to the newsItem
    newsItem.append(image, headline, descriptionTag, readMoreContainer);

    // Append the newsItem to the news container
    rowContainer.append(newsItem);
    itemCount++
}



