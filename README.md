# Autolinker.js #

Autolinker.js packaged for **Meteor**

## Documentation ##

Documentation can be found at https://github.com/gregjacobs/Autolinker.js

## Modifications ##

Added the `outputMarkdown` configuration option so the output of the link is in markdown syntax.

## Helper ##

This package includes an `autolink` block helper for use in your templates.

```
{{#autolink}}http://www.google.com{{/autolink}}

{{#autolink}}{{field}}{{/autolink}}
```
