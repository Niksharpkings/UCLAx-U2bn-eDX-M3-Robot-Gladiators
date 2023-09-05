# CSS

Cascade Style Sheet

## CSS Syntax

CSS's syntax is fairly simple and can be used in many different ways to achieve an intended presentation or design. Developers use it by listing the HTML element they want to style, then listing a predefined style characteristic (known as a  **property** ) and giving it a value.

Let's look at some CSS syntax, as shown in the following image:

![1676108261012](image/Class-Notes/1676108261012.png)

* **Selector** : This is the part that says "let's find this matching HTML element (in this case, the `<body>` element) so we can tell it what it should look like." This is the most basic of selectors, where we select by HTML element name. We can use a CSS selector to be very vague (apply styles to all `<a>` elements) or very specific (apply styles to any `<a>` element that's inside a `<header>` element and ignore any of the others that are not). We'll get into more specific selectors later.
* **Property name** : CSS has an extensive list of possible style properties that it recognizes. All we need to do is list one in between the selector's `{}` brackets and we can now change how that element looks. Examples of popular CSS properties are `color` (to control the text color), `background-image` (to apply a background image to that section), and `font-family` (to change the default font). If we use one that isn't predefined, then the browser will ignore the style.
* **Property value** : This is where we get to provide the desired look to the element. Like properties, CSS has a specific set of possible variations for values that it will understand. In the preceding image, we provide a value of `#39a6b2` to the `color` property (more on this value's meaning soon), which is a value that represents a color and a valid value for any CSS property that deals with colors. Here's another example: if we were to say `font-size: 3meters`, it wouldn't be understood and thus wouldn't be applied. But if we were to say `font-size: 24px`, the font's size would be set to 24 pixels because that's a value CSS can understand.
* **Declaration** : A `property: property-value` pairing like we see with `font-family: Helvetica` is what's known as a declaration.
* **Declaration terminator** : To apply multiple styles to an element (known as a  **declaration block** ), we need some way to tell the language "this declaration is finished; make a new one." CSS knows a declaration is complete when it sees a semicolon (`;`) at the end. Accidental omission of the terminator will result in CSS thinking everything after it is still part of that first declaration, so it is very important to terminate your declarations.
* **CSS rule** : The entire block shown in the preceding image is what's known as a  **CSS rule** . It is the combination of the selector and all of the declarations.

writing CSS with the file extension `.css`

connect it to the HTML file using a specific HTML element `<link>`, which goes in between the opening and closing `<head>` tags and looks something like this (depending on your filename):

`style` attribute with the styles you want to apply directly to the HTML tag element. This is known as **inline styling** because it is directly included in the element it's styling, as in the following code example:

a `<style>` element with all CSS style rules contained within it. The `<style>` element typically goes in the `<head>` of the document.

This reinforces a concept called  **separation of concerns** , which means that it's better to keep code that serves different purposes in separate files so that it's easier to maintain.

provided a value to an `href` that points to another file in the directory. This is known as **relative pathing**

`rel`, is providing information on the nature of the relationship of the linked document—the one specified with the href—to the HTML. In this case and most of the time, we'll use `rel="stylesheet"`

ther option would be to put a fixed path (also known as an  **absolute path** ) from the host computer's directory structure, which would look something like this:

```html
<link rel="stylesheet" href="/Users/<username>/Desktop/run-buddy/assets/css/style.css" />
```

potential problem here? This path is very specific to someone's personal computer—it even has a username in it. If we were to put this code into production or share it with a teammate, the project's code would then live on a different computer entirely. The path in the example most likely does not exist on that computer, meaning any reference to it would break and the page wouldn't load correctly.

The best solution for this is to use  **relative pathing** . With relative pathing, when we push up the entire folder structure for the project all at once, the paths don't lose context as to where they are.

Here are a few ways that padding can be applied:

```css
 /* Applies 20px to every side (top, right, bottom, left) */
 header {
   padding: 20px;
 }

 /* Applies 20px to the top and bottom, then 35px to the left and right */
 header {
   padding: 20px 35px;
 }

 /* Applies 10px to the top, 15px to the right, 20px to the bottom, 25px to the left (in that specific clockwise order) */
 header {
   padding: 10px 15px 20px 25px;
 }

 /* Explicitly list the side it should be applied to*/
 header {
   padding-top: 10px;
   padding-right: 15px;
   padding-bottom: 20px;
   padding-left: 25px;
 }
```

The **CSS Box Model** is a visual display of the properties in the CSS box that includes the content, padding, border, and margins, which are all built around each other like layers in an onion. Some of the styles of each layer—like border thickness, style, and color—can be manipulated using CSS.

![1676108853121](image/Class-Notes/1676108853121.png)

break down the CSS Box Model:

* **Content** is the innermost box inside the CSS box that will contain text as well as any nested elements. The content box size is determined by the height and width.
* **Padding** refers to the inside margin within the CSS box. Each of the four sides of the padding size can be specified.
* **Border** sits on the outside edge of the padding and the inside edge of the margin. This layer's sides, size, and styles can be specified, similarly to the padding and margin. Such as border-bottom or border-style or even border-top-color. This property also needs a weight of the line, style, and color to render.
* **Margin** behaves a lot like `padding`, except whereas `padding` creates space *inside* the box, `margin` creates space *outside* the box and pushes any other HTML elements before and after it away. It also behaves like `padding` in the way its values are provided (top, right, bottom, left).

The **cascade** is a set of rules CSS follows when determining the order of importance when it comes to applying styles. Say, for instance, we want to make multiple `<a>` elements in the `<header>` yellow, but we want to make the `<a>` element in the `<footer>` blue. This can be achieved by being more specific in the selection of elements and saying "let's select all `<a>` that are in `<header>` and do this with them," meaning we will only focus on elements inside another element.

The cascade considers the following three factors:

1. **Importance** : When you add `!important` to the end of a property declaration, it will override any conflicting style declarations for that element. This isn't recommended because overriding the default "cascading" behavior of CSS will make your site harder to maintain.
2. **Specificity** : CSS weighs the importance of different types of selectors by how specific they are. If we were to apply a style by selecting `h1`, it will apply to all `<h1>` elements. But if we were to then apply a style by selecting `header h1`, it will ignore conflicting property declarations in the `h1` definition and apply `header h1` instead because it is a more specific selection.
3. **Source Order** : There's nothing to stop us from accidentally selecting and defining styles to the same element more than once, but CSS is read top-down. This means that if we select `h1` and give it a color of red on line 1, then select it again and give it a color of blue on line 4, the `<h1>` element will be blue because that was defined later.

CSS styles are also applied through something known as  **inheritance** , which means that if a style isn't explicitly defined for a child element, it will use the style being applied to the parent element.

**`text-decoration`** property applies `underline`, `strikethrough`, or `overline` styles to text default, the value is `none`

The **`float`** property takes an element that wants to occupy 100% of its parent's width by default (known in CSS as a  **block element** ) and pushes everything that follows it below it, allowing other elements to come alongside of it or wrap around it (known in CSS as  **inline elements** ).

We can use the `float` property when we have HTML elements that would look better side by side, which allows us to use the horizontal space in a more meaningful way. Other CSS properties allow us to turn block elements into inline elements, but using `float` in this case made more sense because we needed to turn this element into an `<inline>` element and move it to the right. The `float` property let's us do both at once.

**block-level element** . Popular elements that have a default block styling are the `<h1>`–`<h6>` elements, `<div>`, `section`, `<nav>`, `<header>`, `<footer>`, and `<li>`.

**inline element** , which only occupies the space it needs to occupy and does not demand 100% width. These are used to allow elements to appear to the left or right of them. The most popular inline element is the `<a>` element.

**Block elements** occupy 100% of the width of their parent, regardless of content size. **Inline elements** only occupy as much space as their content needs, which means that multiple inline elements can sit next to each other.

CSS allows us to override these elements' default layout definitions through a few different ways, but the most on-the-nose one is to apply a `display` property to that element. For example, `display: block` forces an element to occupy 100% of the width of its parent. On the other hand, `display: inline` makes an element only occupy the space it needs and allows other elements to flow "in line" with it horizontally.

The asterisk `*` we used here is used quite often in programming. It is typically called a wildcard, but in CSS it is known as a  **universal selector** . This is essentially a catch-all selector that says, "I won't match one thing—I'll match everything!"

**`<br />`** : We used the break element (`<br/>`) to create a line break

**`line-height`** property assigns how much vertical space should be between lines of text content. The value (1.5) means we want the spacing to be 1.5 times the size of the font

**`text-align`** property lets us align the text to the left, right, center, or justified. By default, it is left-aligned.

**`&copy;`** : In the preceding code, `&copy;` precedes the Run Buddy copyright notice; it creates the little copyright symbol. This is called an  **HTML entity** , a special code that starts with an ampersand (`&`) and can be used to create symbols.
In case you haven't noticed, every HTML element is surrounded by a less than (`<`) and greater than (`>`) symbol. So what happens if we need to use a greater than sign as content and not as HTML syntax? The solution is to use the HTML entity `&gt;` which creates a `>`.

`box-sizing` property determines how to calculate the `width` and `height` of each element. There are two possible values for the `box-sizing` property: `content-size` and `border-box`.

* The **`content-size`** value is the default, and calculates the height and width of the element by only counting the `content` box of the CSS Box Model. This means that the `border` and `padding` must be calculated separately and added to the width and height to determine the size of the element.
* The **`border-box`** value calculates the height and width of the element by including the `border` and `padding` additions to the `content` box.

![1676110526914](image/Class-Notes/1676110526914.png)

sign-up form is a  **call to action** , or  **CTA** . The main purpose of a CTA is to encourage users via a story, advertisement, or dazzling piece of content to do something. CTAs play a vital role in converting a visitor into a sales lead—that's why we want it at the top of the page!

**Text fields** are where the user will enter their name and contact information.

The `<label>` text not only offers a visual directive of what to enter but also programmatically links to the associated `<input>`. When a user with a visual impairment uses a screen reader, the label will be read out loud when they focus on the input field. Labels also make it easier to fill out forms on mobile devices; clicking on the label will target the focus to the associated input field, which can be hard to do manually on a small screen.

Let's break down the attributes in the `<label>` and `<input>` elements:

* The **`for`** attribute in the `<label>` element programmatically links to the `id` attribute in the `<input>` element.
* The **`type`** attribute relates to the type of input element we're using. Here, we want a text field, which is also the default value.
* The **`placeholder`** attribute offers a hint or label within the text field, but will not be submitted if this field if left blank.
* The **`name`** attribute identifies the element so the response can be referenced after the form is submitted.

**Dot notation** is the "." that precedes the class `hero` to indicate to the browser that we're using a class as the CSS selector.

The **`background-image`** property uses the CSS function `url()` to link a resource such as an image, web font, or GIF. Here we're using a relative URL path to select a background image

**`height`** property fixed at 600px gives an exact size of the section, which is important in this context to allow room for the sign-up form.

The **`background-size`** property can set the size of the background image to its original size or make it stretched, repeated, or constrained to fit the available space. In this case, we'll set it to `cover` to shrink the image so that parts of it won't get clipped. Other options allow repeated images for a tiled look, similar to how background image displays are configured for your computer's background desktop image.

The **`background-color`** property sets the background color to the element selected. VS Code allows typing in the names of colors as well as the hex code.

`position` property is an important CSS property that defines how an element is positioned on the webpage.

Here are some of the property's values and how they affect the relationship of the element to the surrounding elements:

A value of **`static`** is the default value and maintains the order of the natural flow of the elements on the page (i.e., the order created in the HTML). `static` positioning isn't affected by the `top`, `bottom`, `left`, and `right` properties. Currently, the sign-up container is in this position.

A value of **`relative`** positioning uses the `top` and `bottom` properties to vertically offset and the `left` and `right` properties to horizontally offset the element from the `static` position.

A value of **`absolute`** positioning removes the element from the natural flow of the page elements and uses the `top`, `bottom`, `left`, and `right` properties to offset relative to the element's parent, or containing, element's margins.

A value of **`fixed`** positioning removes the element from the natural flow of the page elements and positions it relative to the viewport or browser window so that it isn't affected by scrolling. The `fixed` position value uses the `top`, `bottom`, `left` and `right` properties to offset the element from the viewport's margins.

![1676111781136](image/Class-Notes/1676111781136.png)

This is shorthand for setting a top and bottom margin of zero and a left and right margin of `auto`. But what does `auto` mean? Essentially, it tells the browser to calculate the margins for us. When the browser is asked to do this on both sides of an element, it will do its best to make them even, thus pushing the element into the center.

With Chrome DevTools, we can inspect the element's margins before `auto` is applied and after. In the following image, the orange boxes indicate the margins:

![1676113416358](image/Class-Notes/1676113416358.png)

The `overflow` property told the trainer's `<article>` element that it does in fact have content inside it, and that it needs to look for it and account for those two floated HTML elements' sizes. This is known as providing **block formatting context** to the element

A **type selector** is a CSS selector (in this case, `iframe`) that selects every HTML element of that type. This is a potentially dangerous choice due to possible side effects (unless a global rule is needed). By using the class as the CSS selector, also called a  **class selector** , we can safely target the `<iframe>` that's a descendant or child of the element with this class.

What's the purpose of the `vertical-align` property, and what problem does it solve here? Because the content of this `<div>` naturally rests at the bottom of the container, we need the `vertical-align` property to lift this content up to the top. In conjunction with the `text-align` property, this allows the contact information to begin at the top of the `<div>` and start aligned from the left for an easy-to-read layout.

## How Flexbox Works

When a container is given a `display` value of `flex`, it can create a  **one-dimensional layout** , meaning that it controls the distribution of its content along either a horizontal x-axis (row) or vertical y-axis (column).

By default, a flexbox is set to be a row. In other words, it attempts to fit all of the child elements on one horizontal line until it reaches the right edge of the parent. At that point, it has to decide whether to make all of the child elements narrower—to accommodate a new sibling on that horizontal line (which often results in squished child elements)—or to allow the parent to overflow, or  **wrap** , its content onto the next line.

Wrapping is commonly used in conjunction with flexbox containers to calculate smart layouts for screens of various sizes. The following image demonstrates how wrapping can work:

![Rectangles representing child elements are spread across two rows, with an arrow pointing out how they've wrapped within the parent.](https://courses.bootcampspot.com/courses/927/files/1159889/preview)

Another thing flexbox does well is to horizontally or vertically align child elements. For example, it can vertically center HTML elements in a container—something that used to be nearly impossible with CSS. Flexbox can also calculate the free space available and distribute it evenly among child elements.

To change a flexbox from a row to a column layout, you can use the `flex-direction` property with a value of `column`.

But wait—did you notice that the navigation items seem to be skewed to the left, closer to the `<h1>`? You can adjust that with a property called `justify-content`, as you'll soon learn.

## Justify the Header Elements

The `justify-content` property applies to elements with a `display` property value of `flex`. It allows you to control spacing between child elements by using the following values:

* The default value, `flex-start`, left-justifies all the elements in the container, as shown in the following image:
  ![Numbered boxes within a container appear left-aligned.](https://courses.bootcampspot.com/courses/927/files/1159896/preview)
* The `flex-end` value right-justifies all the elements in the container, as shown in the following image:
  ![Numbered boxes within a container appear right-aligned.](https://courses.bootcampspot.com/courses/927/files/1159904/preview)
* The `center` value positions all elements as close to the center of the container as possible, as shown in the following image:
  ![Numbered boxes within a container appear centered and close together.](https://courses.bootcampspot.com/courses/927/files/1159961/preview)
* The `space-between` value distributes all empty space between child elements to keep them evenly spaced apart, as shown in the following image:
  ![Numbered boxes within a container appear centered and spaced out so that they fill the horizontal space in the container.](https://courses.bootcampspot.com/courses/927/files/1159945/preview)
* The `space-around` value is similar to `space-between`, but it also adds space between the elements and the edges of the container, so that the left-most and right-most elements are not flush against those edges, as shown in the following image:
  ![Numbered boxes within a container appear centered and evenly spaced, with room between the outer boxes and the container edges.](https://courses.bootcampspot.com/courses/927/files/1159982/preview)

## The Main Axis and Cross Axis

The `align-items` property works like `justify-content`, but on the opposite axis. You see, flexbox operates on a  **main axis** —the direction that you can control when laying out the flexbox child elements—and a  **cross axis** . The main axis is determined by a property called `flex-direction`. The default value of `flex-direction` is set to `row`, making the horizontal or x-axis the main axis, and the vertical or y-axis the cross axis.

The `justify-content` property always follows the main axis, and `align-items` always follows the cross axis. So by default, `justify-content` follows the horizontal axis and `align-items` follows the vertical axis. However, if we were to change the value of `flex-direction` to `column`, then the main axis and the cross axis would be flipped. The `justify-content` property would thus follow the vertical axis (because it would become the main axis) and `align-items` would follow the horizontal (or cross) axis.

In this case, we're keeping the value of `flex-direction` as `row`, and we're vertically centering the content in the `<nav>` element. That's why we're using `align-items` here! You can see it at work in the following animation:

![An animation demonstrates how various values for align-items results in boxes of different shapes and positions.](https://courses.bootcampspot.com/courses/927/files/1159996/preview)

The other property we added, `list-style`, sets how a list item is styled (bullet points, dashes, etc.) and positioned (indented or outdented). We gave it a value of `none` to hide the bullet points, because we're changing some of the styles for the `<header>`. These changes might make the bullet points visible, which we don't want.

##### The default `flex-direction` value for a flexbox is `row`, so we don't need to explicitly declare it.

how much margin does each side get, based on the declaration `margin: 0 auto 35px auto`?

This declaration results in 0px for the top margin and 35px for the bottom; the left and right margins will be set automatically based on the container.



* `flex-grow` is a numeric value that helps determine how much of the flexbox's unused space can be distributed among its children. This number is used as a ratio, alongside the other child's `flex-grow` value. The higher the number, the more unused space that child element will be given.
* `flex-shrink` helps determine how to size the flexbox's children when the flexbox container shrinks. Although this property can be handy, it isn't used as often as `flex-grow`.
* `flex-basis` works similarly to setting a `width` value for a child element, but it acts as more of a baseline value that at the very least will let the child be that size no matter what—and grow or shrink accordingly.

Using `flex`—instead of listing `flex-grow`, `flex-shrink`, and `flex-basis` separately—saves space in the style sheet.

The `flex` property can read values in a few different ways based on the type of value entered, as shown in the following code:

```text
flex: <flex-grow value> <flex-shrink value> <flex-basis value>;

flex: <flex-grow value> <flex-basis value>;

flex: <flex-grow value> <flex-shrink value>;
```
