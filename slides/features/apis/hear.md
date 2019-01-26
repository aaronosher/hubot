## `robot.hear`

```JavaScript
robot.hear = (/badger/i, (res) => {
  // your code here
});
```

regex <!-- .element: class="fragment" -->

note:

 - Hear is for reacting to a command only.
 - It's not expected for hubot to respond to a hear command.
 - An example would be for a deployment script


 - We used regex to tell hubot what the command is
 - in this example the command is badger