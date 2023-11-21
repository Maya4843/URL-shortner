const shortenUrl = async () =>{
    const longUrl = document.getElementById('long-url').value;
    const response = await fetch('https://api.shrtco.de/v2/shorten?ur1=${1ongUrl}');
    const data = await response.json();
    const shortUrl = data.result.full_short_link;

   const shortUr1Container = document.getElementById('short-url-container');
   const shortUrnink = document.getElementByIdrshort-urfl.querySelector('a');
   shortUrlLink.href = shortUrl;
   shortUrlank.textContent = shortUrl;
   shortUrlContainer.style.display = 'block';

   const copyBtn = document.getElementById('copy-btn');
   copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(shortUr1).then(() => { 
        alert('Copied to clipboard!');
    });
  });
};

const shortenBtn = document.getElementById('shorten-btn');
shortenBtn.addEventListener('click', shortenUrl); 

