---
title: 'Web Components with angular'
permalink: post/{{ 'Web Components with angular' | slug }}/index.html
tags: ['angular', 'javascript']
---

<div class="banner">
  <div class="m9-container">
      <h1>{{ title }}</h1>
  </div>
</div>

<div class="m9-container">

![Create Stander Web Components using angular elements](https://miro.medium.com/max/700/1*6-mRwWdL2vc3nY0kskFr3g.png)

Create Stander Web Components using angular elements

How to build web components using popular front-end framework angular.

# Before we start

This article assume you have some experience build projects using angular and angular-cli it will not meant to be fully tutorials about angular or angular cli, so be careful.

In this post i will show you how to extract any component built using angular framework to use it outside angular projects using a new package called angular elements.

# What is Web Component ?

> Web Components is a suite of different technologies allowing you to create reusable custom elements — with their functionality encapsulated away from the rest of your code — and utilize them in your web apps. (Source: MDN)

# What make a web component ?

- **Custom Elements**The [Custom Elements specification](https://w3c.github.io/webcomponents/spec/custom/) lays the foundation for designing and using new types of DOM elements.
- **Shadow DOM**The [shadow DOM specification](https://w3c.github.io/webcomponents/spec/shadow/) defines how to use encapsulated style and markup in web components.
- **ES Modules**The [ES Modules specification](https://html.spec.whatwg.org/multipage/webappapis.html#integration-with-the-javascript-module-system) defines the inclusion and reuse of JS documents in a standards based, modular, performant way.
- **HTML Template**The [HTML template element specification](https://html.spec.whatwg.org/multipage/scripting.html#the-template-element/) defines how to declare fragments of markup that go unused at page load, but can be instantiated later on at runtime.

# Why web component ?

> As developers, we all know that reusing code as much as possible is a good idea. This has traditionally not been so easy for custom markup structures — think of the complex HTML (and associated style and script) you’ve sometimes had to write to render custom UI controls, and how using them multiple times can turn your page into a mess if you are not careful. ( MDN )

- **Reusability**
- **Maintainability**
- **Productivity**
- **Composability**
- **Following web standard**

# Angular <Angular-Element>

![Angular Element Logo](https://miro.medium.com/max/500/1*1Dx9Yl54R7EZ0Cr4w6TxlA.png)

Angular Element Logo

## What are Angular Elements?

Imagine that you’ve developed an awesome Angular component. However, in real life, not all the web applications are Angular-based or even [single-page](https://en.wikipedia.org/wiki/Single-page_application) application. You wish to use your amazing component as part of any web application, website or any CMS like wordpress.

Angular Team provide to us a new way to extract this component to use it outside our angular project and that we call it **Angular Elements.**

## Prerequisites

- Angular CLI (version 6 or higher)
- NPM (version 5 or higher)
- Node (version 10.8.0 or higher)

## 1. Setup Your Angular Project.

Start up a new Angular project using the Angular CLI:

Install some polyfills:

```
$ npm i @webcomponents/custom-elements --save
```

Import those packages into `polyfills.ts` file:

## 2. Create New Component

Create normal angular component with `Native` mode in encapsulation properties.

**Notes:**

- *Input will named in kebab-case for example (post-image instead of postImage)*
- *Component outputs are dispatched as HTML [Custom Events](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent), with the name of the custom event matching the output name.*

## 3. Update NgModule

Change `app.module` to use regular angular component as custom element

as you can see from above we remove bootstrap array for module and add our generated component in entryComponents, and finally we define it inside `ngDoBootstrap` function (**Note:** we can change name of element not required to be exact as angular component name) and from this we can use it without root component just move to index.html and add some modification

To show the results run this command

## 4. Package Your Angular Element

Now it is the time to package this thing up!, there is several ways

**Build using angular cli:**This will generate the entire app inside dist folder

**Build & Bundle it in one file:**To use it anywhere else but this way require some additional pages to use (`concat & fs-extra` ) packages.

**Create `build-elements.js` file inside project root folder:**We will use this file to bundle our generated files inside dist folder into one file and save it inside `elements` folder.

**Add new script into packages.json file:**To use it to build our element.

## Use Your Angular Element

In the new `elements` folder create an `Index.html` file and add the following contents.

# Final Word

It is a good practice to use standard web platform offers as we already know that not all the web are a single page app or built with angular, using a framework-agnostic way are good in many cases.

> Note: A minimal, self-contained version of the Angular framework will be injected as a service to support the component’s change-detection and data-binding functionality. ( angular.io )

# Need More

Here is a list of a good resources explain angular elements.

</div>