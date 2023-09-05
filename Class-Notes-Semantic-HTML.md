## Semantic HTML

HTML (Hypertext Markup Language)

`<!DOCTYPE html>`  Tells the browser to interpret as a HTML documen
`<html lang="en">` Represents the root of an HTML document and tells the browser that the language of the document is English
`<head>`  Start of the head element tag. Contains information about the document for the browser, but not the content mportant to include because it specifies the range of characters (letters, numbers, symbols, etc.) that can be used.
`<meta charset="UTF-8" />` Tells the browser to use the UTF-8 character set. charset' meta element should be the first thing in '`<head>`'. UTF-8 accommodates just about any character, from foreign language symbols to emojis.
`<meta name="viewport" content="width=device-width, initial-scale=1.0" />`  Tells the browser to use the device's width as the width of the page, and to scale the page to fit the device's width
`<title>Run Buddy</title>`  The title of the document, which is displayed in the browser's tab
`</head>`  Ending of the head element tag
`<body>`  Contains and/or displays the content of the document

# `<h1>RUN BUDDY</h1>`  "level 1" heading element

## `<h2>RUN BUDDY</h2>`  "level 2" heading element

### `<h3>RUN BUDDY</h3>`  "level 3" heading element

#### `<h4>RUN BUDDY</h4>`  "level 4" heading element

##### `<h5>RUN BUDDY</h5>`  "level 5" heading element

###### `<h6>RUN BUDDY</h6>`  "level 6" heading element

What We Do What You Do Your Trainers Reach Out  text in the body element
`</body>`  Ending of the body element tag
`</html>`  Ending of the html element tag

![1676106168140](image/Class-Notes/1676106168140.png)

`<div>` elements here, which are like containers, to hold relevant information together. stands for "content division."

`<section>` element tag represents a generic standalone section of a document, which doesn't have a more specific semantic element to represent it. Sections should always have a heading, with very few exceptions.

`<nav>` element tag represents a section of a page whose purpose is to provide navigation links, either within the current document or to other documents. Common examples of navigation sections are menus, tables of contents, and indexes.

`<header>` element tag represents introductory content, typically a group of introductory or navigational aids. It may contain some heading elements but also a logo, a search form, an author name, and other elements.

`<footer>` element tag represents a footer for its nearest sectioning content or sectioning root element. A footer typically contains information about the author of the section, copyright data, contact information, links to related documents, and so on.

`<img>` element tag represents an image in the document. It has two required attributes: src, which specifies the URL of the image, and alt, which provides a text description of the image.

`<a>` element tag creates a hyperlink to web pages, files, email addresses, locations in the same page, or anything else a URL can address. The content of the element is the text that will be displayed for the link. This term was coined in the early 1960s, its definition has expanded to include other types of media as well (such as images and videos).

`<ul>` element tag represents an unordered list of items, typically rendered as a bulleted list. Each item in the list is represented by an `<li>` element.

`<ol>` element tag represents an ordered list of items, typically rendered as a numbered list. Each item in the list is represented by an `<li>` element.

`<li>` element tag represents an item in a list. It must be contained in a parent element: an ordered list (`<ol>`) or an unordered list (`<ul>`).

![1676107626085](image/Class-Notes/1676107626085.png)

`<p>` element tag represents a paragraph. Paragraphs are usually represented in visual media as blocks of text separated from adjacent blocks by blank lines and/or first-line indentation, but HTML paragraphs can be any structural grouping of related content, such as images or form fields.

Accessibility is the practice of adding HTML elements in a way that allows assistive technology, such as screen readers, to explain the page's content in a meaningful way to those who have a disability such as vision or hearing loss.

SEO, or search engine optimization, is the process of maximizing the number of visits a website receives and how frequently it shows up in search results.

`href=` is an HTML **attribute can be used to give an HTML element a unique identity, create relationships with other elements, and provide design changes using CSS. They give functionality, meaning, and context to HTML elements. Attributes aren't necessary for every element, but some do require them. One of those is the `<a>` element. If we were to omit the `href` attribute in the preceding examples, the links wouldn't work. **

Here are some popular attributes:

* The **`id`** attribute is a unique identifier for an HTML element. The value of this can only be used once per HTML document.
* The **`class`** attribute is another way of identifying an HTML element, but its value is expected to be more general and can be reused across multiple HTML elements on a page.
* The **`title`** attribute—not to be mistaken for the `<title>` element—holds a value that appears as a small pop-up (known as a tool-tip) when the cursor is pointed at an element for a period of time.

(`"/"`) a forward slash—will always represent the path to the topmost directory of an application or project. will be taken to the topmost directory

If you ever need to quickly fill an HTML element with dummy text in VS Code, type the word "lorem" and press Tab. Many other dummy text generators are available online.

## About SVG Files

This is XML, which is like a cousin to HTML. Unlike PNGs or JPGs, which are made up of pixels, SVGs (or Scalable Vector Graphics) are defined as a series of points and lines (the `<path>` elements you see in the XML) that are filled in with color. SVG images can accommodate basically any screen size without losing quality because the graphics will scale. That makes SVGs perfect for things like icons and logos.

`<img>` element is very useful because it can display any image format. We just need to make sure the `src` attribute points to a file that can be found.

Relative paths start from the current directory (for example, `../images/hero-bg.jpg`). Absolute paths are fixed (for example, `/Users/<username>/Desktop/run-buddy/assets/css/style.css`) and should be avoided.

extra attribute we should make sure every image has: the `alt` attribute. The `alt` attribute explains the content and context of images to search engines and assistive technology such as screen readers.

As a developer, you will often have to make a subjective decisions about your project’s HTML and CSS. In these cases, it is important to take time to think about how the image will be used and carefully read the project’s specifications or acceptance criteria for guidance. Many companies also have an in-house style guide that can help inform your choice and make certain your code meets both the client's and users' needs. To learn more about image usage, refer to the [alt attribute guidelines from the W3C **Links to an external site.**](https://www.w3.org/WAI/tutorials/images/).

In Lesson 4, we discussed one way of using `alt` by leaving its value empty. We did this because the image it was associated with isn't important for the overall user experience; it is what's known as a  **decorative image** . In this case, the image does serve as content to the page and is known as a  **simple image** , so we need to give it a more meaningful `alt` value.

Here are some guidelines for `alt` values:

* They must describe the image in less than 140 characters.
* They should convey the content and purpose of the image.
* They should not begin with "image of…" or "graph of…", as screen readers already provide that context.

When a parent HTML element's style is applied to any child element, it is called  **inheritance** .

## The iframe Element

Fortunately, there is a special HTML element called an `<iframe>` that helps us do just this! An  **`<iframe>`** , which means  **inline frame** , nests browsing content and embeds an HTML page into the current page. An `<iframe>` can add rich features to a website, including videos with playback controls, GIFs, and maps. One caveat, however, is that not all websites support this feature.

In this case, the `<iframe>` will contain a map of Run Buddy's address from Google Maps. Let's place the `<iframe>` inside the  **contact container** .

Follow these steps to retrieve an `<iframe>` for the address:

1. Enter your address in the search box on [Google Maps **Links to an external site.**](https://www.google.com/maps).
2. Select the Share icon.
3. Choose the Embed a map tab.
4. Select the COPY HTML link to copy the `<iframe>` element.

`<iframe>`:

* The **`src`** attribute is the most important attribute; without it, nothing will render. The `src` value is a URL path linking to the external website content that will be embedded. This should be familiar because it's the same attribute used in the `<img>` element.
* The **`style`** attribute is an inline style to set no border, for newer browsers.
* The **`allowfullscreen`** attribute offers a link to view the map on a new page in full-screen mode. Some attributes are properties that can be turned on by simply adding the attribute. Notice how `allowfullscreen` doesn't have any value assignment. Another popular attribute that doesn't have a value assignment is `checked` for a `checkbox` input element.

The **`<address>`** element defines the contact information for the author or owner of the document or parent element.

The **`<a href="mailto:info@runbuddy.io">`** element uses the `mailto:` prefix in the anchor tag's `href` attribute to instruct the browser to open the default mail client application upon clicking the link. Then it populates the address field with the email address in the `href` value.

Because the `<title>` element's content appears in the browser's tab, it's good practice to structure the content as `[page title] - [site title]`. Page titles should be descriptive but also concise because Google cuts off search result titles at around 60 character

---
