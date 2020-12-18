const age = prompt('How old are You? So that we can see what Rated Movies you are allowed to watch? By Yourself. ')

if (age >= 17) {
  document.write('You are old, therefore you can see a R rated movie alone. Because you are ')
} else if (age >= 13) {
  document.write('You are very rebbelious, therefore you can see  a PG-13 movie alone. ')
} else if (age >= 5) {
  document.write('You are a child, therefore you can see a G rated movie alone. ')
} else {
  document.write('you are a useless ball of cry, therefore you are too young too actually comprehend what the movieis about. ')
}
document.write('Thanks for Using the Age verifier instead of google. Thanks for not being normal. ')
