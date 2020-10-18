var images = [];

chrome.tabs.query({active: true, currentWindow: true}, (tabs) =>{
    chrome.tabs.sendMessage(tabs[0].id, {action: "get_images"}, response => {
        $('.gallery').html('');
        images = response;
        response.map((img) => {
            $('.gallery').append('<img src="' + img.src + '" />');
        })
    })

    $(document).on('click', '#download' , (e) => {
        console.log("Downloading...");
        chrome.runtime.sendMessage({action: "downloads" , data:images}, res => {
            console.log("complete");
        })
    })
})