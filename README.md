# prototype-programme
### a Sails application


The purpose of this prototype is to demostrate how the advanced forms can dynamically be built through configurating the
fields of the programme on a administration page and by simply applying a template without the trouble coding the fields
on the html for each programme.

This is written in Node JS using Sails MVC and mustache for templating on the front-end.


### Administration Page

In the backoffice, the administrators can view and add programmes: 
**http://localhost:1337/programme/view**

* * *

![Alt text](http://i.imgur.com/ZYpelfB.jpg)

* * *

and when the programme is clicked. The details will be displayed, showing all the fields that has been setup.
Fields as broken into sections, administrator can add a section and add a field within a section.

* * *

![Alt text](http://i.imgur.com/zocwwNS.jpg)

* * *

The application can spit out a json equivalent of the details of the programme by adding **&isRest=true**
parameter on the url.

* * *

![Alt text](http://i.imgur.com/H2jIgg4.jpg)

* * *

On the front end side, you only need to pass the programme Id and the template and the form will automatically
display the form.

this is how the client script look like:

* * *

![Alt text](http://i.imgur.com/kRzkS6t.jpg)

* * *

**understanding the parameter:**

the engine will take two parameters:

pass the programme id:

*data: {Id: 1013, isRest: true},*

pass which template:

*var template = $("#template-gasp").html();* 

the code above is actually pointing to a template file, for this case gasp.html, each template file can be the advanced form, e.g. gasp.
this is a mustache template, the template will consume the JSON and iterate on the fields and will automatically displays them, leaving
only the specific to the form will be needed to be coded e.g. for gasp decision support, etc.. 

* * *

![Alt text](http://i.imgur.com/Sk6oeFy.jpg)


the rendered form **http://localhost:1337/advanceform/view** :

* * *

![Alt text](http://i.imgur.com/zc9nFLh.jpg)

* * *

### TODO

1. Create a REST that template can consume to save the data from the form.




