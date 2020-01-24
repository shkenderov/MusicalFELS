

# FELS BRASS ORCHESTRA WEBSITE 

## Background
This website is about the Brass Orchestra of the First English Language School in Sofia, Bulgaria, where I play the trumpet since 2012. The Orchestra needs a promotional tool, which will enable it to get more invitations to concerts, festivals and music competitions. The website will be used for reaching out to more people aged 14-20, who may want to learn to play an instrument and join the orchestra, since all of the beginner training and instruments are provided by the school. Under the management of the orchestra's director and conductor recently has been formed a rock band, which will have a dedicated page on the website. Both the orchestra and the rock band will make use of a "Contact us" page on the website - a form, designed to make reaching us for any inquiries quick and efficient.


## Colour Choices
The colour choices for the website are red, dark grey and white. The white is a bit warmer in order to blend in better with the red. These colours are the ones of the orchestra, as seen in our uniforms. For the rock band page, I've used red in the wrapper in order for it to differentiate itself from the rest of the page.

## Accessibility
In order to comply with the W3C Accessibility standards, every img tag has an alternative text.

## GDPR
In order to comply with the GDPR, first of all, a privacy policy is created. When entering the index page, a small window is shown with a message. The user can close it or click on a link, which opens a a modal div, where the Privacy Policy is. It states that the personal information collected is from the contact form and it can be deleted if the user want so. Since big traffic is not expected on the site, an e-mail address is shown, to which the user can send a request about it's personal information. An opt-in is included as a check-box in the form and it's checked with the javaScript validation function that is used for the other fields as well.
Links to the soundcloud and tockify's cookie policies are included since the embedded player and calendar are used. 
## Distance Selling
Nothing is sold via this webpage so the Online and Distance Selling Act doesn't need to be confronted.

## Evaluation
The website has a desktop-first design, since the website of the High School is desktop-first. All of the photos are from [unisplash](https://unsplash.com) or the orchestra's.

On the top of every page is the navigation bar. It contains links to all of the pages plus one for the "About us" section of the index page. When in mobile mode, the links are hidden and a burger appears. When clicked, it shows the links underneath. This is done via JavaScript.

The combined size is of the navigation bar and the main image is 100vh, so they are always full screen.  Scrolling down, there are clickable divs for all of the pages, plus an embedded calendar and player. Everything is arranged in a grid layout and the calendar is bigger so it can be seen when the page is opened.All of the links in this "menu" section have animations on hover- grayscale effect, opacity or contrast increase.
Below them is the "About Us" section. It is also arranged in a grid layout and contains pictures of the orchestra, one of them being clickable and leading to the "Our Team" page. The top three pictures are in a separate nested grid layout. In the middle there is an article, giving a brief summary of the history of the orchestra. 
The mobile view of the page transforms the grid layouts so they have only one column and are spread wide one on top of the other. The font size is also reduced.

The "Our Team" page is dedicated to the Conductor, Teachers and Lead Players of the orchestra. It has photos and around 40 words of text for each person. They are stacked one on top of the other in the desktop version, so no significant changes need to be made for the mobile version of the page.

The third page is dedicated to the newly-formed Rock Band, which is under the management of the orchestra's conductor and the school. The colour scheme is slightly different, with a slightly darker shade red being the predominant colour.
Below the main photo, it has a "About Us" section, which is very similar to the one in the index page, using a nested grid layout.

The contact form is on the fourth page of the website. It has two radio buttons for contacting either the rock band or the orchestra. By default none of them are selected.  Below are the name, topic, email and the message boxes. The form uses the "required" html attribute , as well as JavaScript for verification. The only box, which is not required is the "Message". If any of the other are not filled in, upon clicking the "Send" button below,  a "required" text appears under the corresponding box. When the message is authenticated and sent, an alert pops up to inform the user. One drawback is that the user must press "OK" on the alert so the form gets sent. The contact form is connected to the RealTime Database in Firebase, parsing an object created from the input in the text fields. The Opt-In checkbox is also required, not checking it will pop up an alert.
On the left there is an article for the orchestra and below it- a small one for the band with a button, linked to the rock band page, in case the visitor does not know about it.

On the bottom of all pages is the footer, which contains the same links as in the navigation bar with the addition of the Privacy Policy.

## Conclusion
The problem I set out to solve was tackled to almost full extent. However, there are parts that need improvement. For example for the Contact Form, a service like reCaptcha is going to be needed in order to prevent spam. Furthermore, the text content in places like the the "Our Team" page needs altering, for example a bit more information about the teachers and the addition of 2-3 more lead players. The "Menu" section of the index page needs improving as well. The issues faced were mostly for the mobile layout with the grid layout and the navigation bar, since in the earlier versions it used the translatex() function instead of the display attribute to show/hide it and ran into problems when tested using the chrome device toolbar.

The repository link is [here](https://github.com/uchitelq/cda404/tree/master/assignment).






