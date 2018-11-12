function takeANumber (lin, name)
{
  lin.push(name);
  return "Welcome, " + name + ". You are number " + lin.length + " in line.";
}
function nowServing(lin)
{
  if(lin.length === 0)
    return "There is nobody waiting to be served!";
  var name = lin[0];
  lin.shift();
  return name;
}
function currentLine(lin)
{
  if(lin.length === 0)
    return "The line is currently empty";
  var line = "The line is currently: ";
  for(var x = 0; x < lin.length; x++)
  {
    
  }
}