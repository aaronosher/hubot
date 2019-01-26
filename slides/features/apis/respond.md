## `robot.respond`

```JavaScript
robot.respond = (/badger (.*)/i, (res) => {
  const parameter1 = res.match[1]
  // your code here
  res.send(/* response */)
});
```

note:

 - respond is for reacting to a command and then respond.
 - It's expected for hubot to respond to a hear command.
 - An example would be for question/response script


 - We used regex to tell hubot what the command is
 - in this example the command is badger
 - We also used **caputre groups** to get parameters
 - Retrieved with `res.match[i]`