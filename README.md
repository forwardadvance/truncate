Truncate
========

Easily and unobtrusively truncate long blocks of text, respecting html.

## Usage

Import jquery and truncate, then simply add a data-truncate attribute to your text, like so:

    <div data-truncate>
      One long and complex piece of rambling text
    </div>

Your text will be truncated at 50 words and a more link will be cleanly appended to the last element.

## Options

You can also specify the number of words to truncate at:

    <div data-truncate="12">
      One long and complex piece of rambling text...
    </div>

## How it works

OnDomReady, each matched element is truncated if necessary, and the original text stored in a closure. When the more link is clicked the original content is re-inserted into the element. Simples!

## Demo

See it in action here: <http://www.streetbank.com/blog_posts/55#comments>

## Compliance

JSLint.