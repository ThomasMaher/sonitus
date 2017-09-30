export const selectLessonPlan = ({ content }) => {
  let classes = Object.keys(content);
  let result = {};

  classes.forEach(thisClass => {
    let lessons = [];

    if (thisClass === "currentClass") {
      return;
    } else {
      let theseLessons = content[thisClass]
      let eachLesson = Object.keys(theseLessons)
      eachLesson.forEach(lesson => {
        lessons.push(theseLessons[lesson]);
      })
      result[thisClass] = lessons;
    }
  })

  return result;
}
