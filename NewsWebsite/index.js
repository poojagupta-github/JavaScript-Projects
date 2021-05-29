console.log("hey");
// initialize the news api parameters
// let source = 'bbc-news';
// let apiKey = '36872bfff8994108be70c46b512e7ec2';

//  grab the news container
let newsAccordian = document.getElementById('newsAccordian');

// create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=36872bfff8994108be70c46b512e7ec2', true);

xhr.send();

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(ele,index) {

            let news = `<div class="accordion-item">
                            <h2 class="accordion-header" id="heading${index}">
                                <button class="accordion-button " type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                               <b> Breaking News ${index+1}:</b> ${ele['title']}
                                </button>
                            </h2>

                            <div id="collapse${index}" class="accordion-collapse collapse "                  aria-labelledby="heading${index}"
                                data-bs-parent="newsAccordian">
                                <div class="accordion-body">
                                ${ele['content']}.<a 
                                target = "_blank" href = "${ele['url']}">Read more here</a>
                                </div>
                            </div>
                        </div>`;
            newsHtml += news;

        }); 
        newsAccordian.innerHTML = newsHtml;


    }
    else {
        console.log("error");
    }

}


// let news = `<div class="accordion-item">
//     <h2 class="accordion-header" id="headingOne">
//         <button class="accordion-button" type="button" data-bs-toggle="collapse"
//             data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
//             Accordion Item #1
//     </button>
//     </h2>

//     <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
//         data-bs-parent="#accordionExample">
//         <div class="accordion-body">
//             <strong>This is the first item's accordion body.</strong> It is shown by default, until the
//             collapse plugin adds the appropriate classes that we use to style each element. These classes
//             control the overall appearance, as well as the showing and hiding via CSS transitions. You can
//             modify any of this with custom CSS or overriding our default variables. It's also worth noting
//             that just about any HTML can go within the <code>.accordion-body</code>, though the transition
//             does limit overflow.
//         </div>
//     </div>
// </div>`


