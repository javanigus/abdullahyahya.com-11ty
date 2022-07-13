const responsive = require('./responsive.json');

module.exports = {
    "links" : {
        "Home/Blog": "/",
        "Travels": "/travels/",
        "Landlord Tips": "/lord-of-the-land/landlord-tips/",
        "Books": "/books/",
        "About": "/about/",
        "Contact": "/contact/"

    },
    "ds-links": {
        "Typography": "/design-system/typography/",
        "Color System": "/design-system/color-system/",
        "UI Kit": "/design-system/ui-kit/",
        "Assets": "/design-system/assets/",
        "Markdown": "/design-system/basic-markdown-syntax/"
    },
    breakpoint: responsive.MEDIA.phone
}