const yourName = prompt("Enter your name: ");
const exName = prompt("Enter your ex's name: ");
const verb = prompt("What is something your ex loves to do: ");
const occupation = prompt("Enter an occupation: ");
const mansName = prompt("Which man do you hate the most?: ");
const sport = prompt("Enter a sport: ");

console.log(`${yourName} broke up with his ex (${exName}) after discovering that every night, ${exName} would ${verb} while asleep and narrate her dreams like a ${occupation}. One night she shouted "${mansName}!" and pretended to score a ${sport} goal. ${yourName} realized love should not come with another man's name and sport commentary.`);

console.log(yourName + " broke up with his ex (" + exName + ") after discovering that every night," +  exName + " would " + verb + " while asleep and narrate her dreams like a " + occupation + ". One night she shouted \"" + mansName + "!\" and pretended to score a " + sport + " goal. " + yourName + " realized love should not come with another man's name and sport commentary.");