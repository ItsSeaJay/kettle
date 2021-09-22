var exercise_list = document.getElementById('exercise-list');
const num_exercises = 3;
var exercises = [
  "Superimposed Lines",
  "Ghosted Lines"
];

if (exercises.length > 3) {
  for (var i = 0; i < num_exercises; i++) {
    var exercise_index = Math.floor(Math.random() * exercises.length);
    var text = exercises[exercise_index];

    exercises.splice(exercise_index, 1);

    var node = document.createElement("li");
    var textnode = document.createTextNode(text);

    node.appendChild(textnode);
    exercise_list.appendChild(node);
  }
}
