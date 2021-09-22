var exercise_list = document.getElementById('exercise-list');
const num_exercises = 3;

for (var i = 0; 0 < num_exercises; i++) {
  var node = document.createElement("LI");
  var textnode = document.createTextNode("[1, 2, 3].random().tostring()");

  exercise_list.appendChild(textnode)
}
