export const selectLessonPlan = ({ content }) => {
  let classes = Object.keys(content);
  let result = {};

  classes.forEach(thisClass => {
    let lessons = [""];

    if (thisClass === "currentClass") {
      return;
    } else {
      let theseLessons = content[thisClass]
      lessons.push(Object.keys(theseLessons));
      result[thisClass] = lessons;
    }
  })

  return result;
}
